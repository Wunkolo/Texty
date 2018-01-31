// http://jrgraphix.net/r/Unicode/10330-1034F

var Transforms = [
	{
		name: "Full Width",
		id: "full-width",
		description: "Full width text",
		Apply: function (Input) {
			return Input.replace(/[\x21-\x7E]/gu, function (CurChar) {
				var CharCode = CurChar.codePointAt(0);
				return String.fromCodePoint(CharCode + 0xFEE0);
			});
		}
	},
	{
		name: "Bubble",
		id: "bubble",
		description: "Bubble lettering",
		Apply: function (Input) {
			return Input
				// A-Z
				.replace(/[A-Z]/gu, function (CurChar) {
					var CharCode = CurChar.codePointAt(0);
					return String.fromCodePoint(CharCode + 0x2475);
				})
				// a-z
				.replace(/[a-z]/gu, function (CurChar) {
					var CharCode = CurChar.codePointAt(0);
					return String.fromCodePoint(CharCode + 0x246F);
				})
				// 1-9
				.replace(/[1-9]/gu, function (CurChar) {
					var CharCode = CurChar.codePointAt(0);
					return String.fromCodePoint(CharCode + 0x242F);
				})
				// 0
				.replace(/0/gu, "\u24EA");
		}
	},
	{
		name: "Math Bold",
		id: "math-bold",
		description: "Math-bold lettering",
		Apply: function (Input) {
			return Input
				// A-Z
				.replace(/[A-Z]/gu, function (CurChar) {
					var CharCode = CurChar.codePointAt(0);
					return String.fromCodePoint(CharCode + 0x1D3BF);
				})
				// a-z
				.replace(/[a-z]/gu, function (CurChar) {
					var CharCode = CurChar.codePointAt(0);
					return String.fromCodePoint(CharCode + 0x1D3B9);
				})
				// 0-9
				.replace(/[0-9]/gu, function (CurChar) {
					var CharCode = CurChar.codePointAt(0);
					return String.fromCodePoint(CharCode + 0x1D79E);
				});
		}
	},
	// Add other math-unicodes here later
	{
		name: "SuperScript",
		id: "superscript",
		description: "Super script lettering",
		Apply: function (Input) {
			var Table = {
				"0": "\u2070",
				"1": "\u00B9",
				"2": "\u00B2",
				"3": "\u00B3",
				"4": "\u2074",
				"5": "\u2075",
				"6": "\u2076",
				"7": "\u2077",
				"8": "\u2078",
				"9": "\u2079",
				"a": "\u1D43",
				"b": "\u1D47",
				"c": "\u1D9C",
				"d": "\u1D48",
				"e": "\u1D49",
				"f": "\u1DA0",
				"g": "\u1D4D",
				"h": "\u02B0",
				"i": "\u1DA6",
				"j": "\u02B2",
				"k": "\u1D4F",
				"l": "\u02E1",
				"m": "\u1D50",
				"n": "\u207F",
				"o": "\u1D52",
				"p": "\u1D56",
				//"q": "q",
				"r": "\u02B3",
				"s": "\u02E2",
				"t": "\u1D57",
				"u": "\u1D58",
				"v": "\u1D5B",
				"w": "\u02B7",
				"x": "\u02E3",
				"y": "\u02B8",
				"z": "\u1DBB",
				"A": "\u1D2C",
				"B": "\u1D2E",
				"C": "\u1D9C",
				"D": "\u1D30",
				"E": "\u1D31",
				"F": "\u1DA0",
				"G": "\u1D33",
				"H": "\u1D34",
				"I": "\u1D35",
				"J": "\u1D36",
				"K": "\u1D37",
				"L": "\u1D38",
				"M": "\u1D39",
				"N": "\u1D3A",
				"O": "\u1D3C",
				"P": "\u1D3E",
				//"Q": "Q",
				"R": "\u1D3F",
				"S": "\u02E2",
				"T": "\u1D40",
				"U": "\u1D41",
				"V": "\u2C7D",
				"W": "\u1D42",
				"X": "\u02E3",
				"Y": "\u02B8",
				"Z": "\u1DBB",
				"\\+": "\u207A",
				"-": "\u207B",
				"=": "\u207C",
				"\\(": "\u207D",
				"\\)": "\u207E"
			};
			return Input.replace(
				new RegExp(Object.keys(Table).join("|"), "gu"),
				function (CurChar) {
					return Table[CurChar]
				}
			);
		}
	}
];

function InputTick() {
	var NewString = this.value;
	$.each(Transforms, function (index, CurTransform) {
		$("#" + CurTransform.id).val(
			CurTransform.Apply(NewString)
		);
	});
}

$(document).ready(
	function () {
		$("#Input").on("input", InputTick)

		var Outputs = $("#Outputs");
		$.each(Transforms, function (index, CurTransform) {
			var CurOutputDiv = $("<div>");
			CurOutputDiv.addClass("form-group")
			CurOutputDiv.attr("id", CurTransform.id + "-div");

			var CurLabel = $("<label>");
			CurLabel.attr("for", CurTransform.id);
			CurLabel.html(CurTransform.name);
			CurLabel.appendTo(CurOutputDiv);

			var CurTextarea = $("<textarea>");
			CurTextarea.addClass("form-control");
			CurTextarea.attr("id", CurTransform.id);
			CurTextarea.attr("rows", 5);
			CurTextarea.prop("readonly", true);
			CurTextarea.appendTo(CurOutputDiv);

			CurOutputDiv.appendTo(Outputs);
		});
	}
);