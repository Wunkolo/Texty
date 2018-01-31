// http://jrgraphix.net/r/Unicode/10330-1034F

var Transforms = [
	{
		name: "Full Width",
		id: "full-width",
		description: "Full width text",
		Apply: function (Input) {
			return Input.replace(/[\x21-\x7E]/gu, function (CurChar) {
				var CharCode = CurChar.charCodeAt(0);
				return String.fromCharCode(CharCode + 0xFEE0);
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
				var CharCode = CurChar.charCodeAt(0);
				return String.fromCharCode(CharCode + 0x2475);
			})
			// a-z
			.replace(/[a-z]/gu, function (CurChar) {
				var CharCode = CurChar.charCodeAt(0);
				return String.fromCharCode(CharCode + 0x246F);
			})
			// 1-9
			.replace(/[1-9]/gu, function (CurChar) {
				var CharCode = CurChar.charCodeAt(0);
				return String.fromCharCode(CharCode + 0x242F);
			})
			// 0
			.replace(/0/gu, "\u24EA");
		}
	}
];

function InputTick() {
	var NewString = this.value;
	$.each(Transforms,function(index,CurTransform){
		$("#" + CurTransform.id).val(
			CurTransform.Apply(NewString)
		);
	});
}

$(document).ready(
	function () {
		$("#Input").on("input", InputTick)

		var Outputs = $("#Outputs");
		$.each(Transforms,function(index,CurTransform){
			var CurOutputDiv = $("<div>");
			CurOutputDiv.addClass("form-group")
			CurOutputDiv.attr("id",CurTransform.id+"-div");

			var CurLabel = $("<label>");
			CurLabel.attr("for",CurTransform.id);
			CurLabel.html(CurTransform.name);
			CurLabel.appendTo(CurOutputDiv);

			var CurTextarea = $("<textarea>");
			CurTextarea.addClass("form-control");
			CurTextarea.attr("id",CurTransform.id);
			CurTextarea.attr("rows",5);
			CurTextarea.prop("readonly",true);
			CurTextarea.appendTo(CurOutputDiv);

			CurOutputDiv.appendTo(Outputs);
		});
	}
);