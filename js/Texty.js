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
		name: "Bubbled",
		id: "bubbled",
		description: "Bubbled lettering",
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
		name: "Squared",
		id: "squared",
		description: "Squared lettering",
		Apply: function (Input) {
			var Table = {
				"a": "🄰",
				"b": "🄱",
				"c": "🄲",
				"d": "🄳",
				"e": "🄴",
				"f": "🄵",
				"g": "🄶",
				"h": "🄷",
				"i": "🄸",
				"j": "🄹",
				"k": "🄺",
				"l": "🄻",
				"m": "🄼",
				"n": "🄽",
				"o": "🄾",
				"p": "🄿",
				"q": "🅀",
				"r": "🅁",
				"s": "🅂",
				"t": "🅃",
				"u": "🅄",
				"v": "🅅",
				"w": "🅆",
				"x": "🅇",
				"y": "🅈",
				"z": "🅉",
				"A": "🄰",
				"B": "🄱",
				"C": "🄲",
				"D": "🄳",
				"E": "🄴",
				"F": "🄵",
				"G": "🄶",
				"H": "🄷",
				"I": "🄸",
				"J": "🄹",
				"K": "🄺",
				"L": "🄻",
				"M": "🄼",
				"N": "🄽",
				"O": "🄾",
				"P": "🄿",
				"Q": "🅀",
				"R": "🅁",
				"S": "🅂",
				"T": "🅃",
				"U": "🅄",
				"V": "🅅",
				"W": "🅆",
				"X": "🅇",
				"Y": "🅈",
				"Z": "🅉",
				"\\+": "⊞",
				"-": "⊟",
			};
			return Input.replace(
				new RegExp(Object.keys(Table).join("|"), "gu"),
				function (CurChar) {
					return Table[CurChar]
				}
			);
		}
	},

	{
		name: "Squared (Solid)",
		id: "squared-solid",
		description: "Solid squared lettering",
		Apply: function (Input) {
			var Table = {
				"a": "🅰",
				"b": "🅱",
				"c": "🅲",
				"d": "🅳",
				"e": "🅴",
				"f": "🅵",
				"g": "🅶",
				"h": "🅷",
				"i": "🅸",
				"j": "🅹",
				"k": "🅺",
				"l": "🅻",
				"m": "🅼",
				"n": "🅽",
				"o": "🅾",
				"p": "🅿",
				"q": "🆀",
				"r": "🆁",
				"s": "🆂",
				"t": "🆃",
				"u": "🆄",
				"v": "🆅",
				"w": "🆆",
				"x": "🆇",
				"y": "🆈",
				"z": "🆉",
				"A": "🅰",
				"B": "🅱",
				"C": "🅲",
				"D": "🅳",
				"E": "🅴",
				"F": "🅵",
				"G": "🅶",
				"H": "🅷",
				"I": "🅸",
				"J": "🅹",
				"K": "🅺",
				"L": "🅻",
				"M": "🅼",
				"N": "🅽",
				"O": "🅾",
				"P": "🅿",
				"Q": "🆀",
				"R": "🆁",
				"S": "🆂",
				"T": "🆃",
				"U": "🆄",
				"V": "🆅",
				"W": "🆆",
				"X": "🆇",
				"Y": "🆈",
				"Z": "🆉",
			};
			return Input.replace(
				new RegExp(Object.keys(Table).join("|"), "gu"),
				function (CurChar) {
					return Table[CurChar]
				}
			);
		}
	},
	{
		name: "Math Bold",
		id: "math-bold",
		description: "Math bold lettering",
		Apply: function (Input) {
			return Input
				// A-Z
				.replace(/[A-Z]/gu, function (CurChar) {
					var CharCode = CurChar.codePointAt(0);
					return String.fromCodePoint(CharCode + (0x1D400 - "A".codePointAt(0)));
				})
				// a-z
				.replace(/[a-z]/gu, function (CurChar) {
					var CharCode = CurChar.codePointAt(0);
					return String.fromCodePoint(CharCode + (0x1D41A - "a".codePointAt(0)));
				})
				// 0-9
				.replace(/[0-9]/gu, function (CurChar) {
					var CharCode = CurChar.codePointAt(0);
					return String.fromCodePoint(CharCode + (0x1D7CE - "0".codePointAt(0)));
				});
		}
	},
	{
		name: "Math Bold Fraktur",
		id: "math-bold-fraktur",
		description: "Math bold Fraktur script",
		Apply: function (Input) {
			var Table = {
				"a": "𝖆",
				"b": "𝖇",
				"c": "𝖈",
				"d": "𝖉",
				"e": "𝖊",
				"f": "𝖋",
				"g": "𝖌",
				"h": "𝖍",
				"i": "𝖎",
				"j": "𝖏",
				"k": "𝖐",
				"l": "𝖑",
				"m": "𝖒",
				"n": "𝖓",
				"o": "𝖔",
				"p": "𝖕",
				"q": "𝖖",
				"r": "𝖗",
				"s": "𝖘",
				"t": "𝖙",
				"u": "𝖚",
				"v": "𝖛",
				"w": "𝖜",
				"x": "𝖝",
				"y": "𝖞",
				"z": "𝖟",
				"A": "𝕬",
				"B": "𝕭",
				"C": "𝕮",
				"D": "𝕯",
				"E": "𝕰",
				"F": "𝕱",
				"G": "𝕲",
				"H": "𝕳",
				"I": "𝕴",
				"J": "𝕵",
				"K": "𝕶",
				"L": "𝕷",
				"M": "𝕸",
				"N": "𝕹",
				"O": "𝕺",
				"P": "𝕻",
				"Q": "𝕼",
				"R": "𝕽",
				"S": "𝕾",
				"T": "𝕿",
				"U": "𝖀",
				"V": "𝖁",
				"W": "𝖂",
				"X": "𝖃",
				"Y": "𝖄",
				"Z": "𝖅",
			};
			return Input.replace(
				new RegExp(Object.keys(Table).join("|"), "gu"),
				function (CurChar) {
					return Table[CurChar]
				}
			);
		}
	},
	{
		name: "Math Italic",
		id: "math-italic",
		description: "Math italics",
		Apply: function (Input) {
			var Table = {
				"a": "𝒂",
				"b": "𝒃",
				"c": "𝒄",
				"d": "𝒅",
				"e": "𝒆",
				"f": "𝒇",
				"g": "𝒈",
				"h": "𝒉",
				"i": "𝒊",
				"j": "𝒋",
				"k": "𝒌",
				"l": "𝒍",
				"m": "𝒎",
				"n": "𝒏",
				"o": "𝒐",
				"p": "𝒑",
				"q": "𝒒",
				"r": "𝒓",
				"s": "𝒔",
				"t": "𝒕",
				"u": "𝒖",
				"v": "𝒗",
				"w": "𝒘",
				"x": "𝒙",
				"y": "𝒚",
				"z": "𝒛",
				"A": "𝑨",
				"B": "𝑩",
				"C": "𝑪",
				"D": "𝑫",
				"E": "𝑬",
				"F": "𝑭",
				"G": "𝑮",
				"H": "𝑯",
				"I": "𝑰",
				"J": "𝑱",
				"K": "𝑲",
				"L": "𝑳",
				"M": "𝑴",
				"N": "𝑵",
				"O": "𝑶",
				"P": "𝑷",
				"Q": "𝑸",
				"R": "𝑹",
				"S": "𝑺",
				"T": "𝑻",
				"U": "𝑼",
				"V": "𝑽",
				"W": "𝑾",
				"X": "𝑿",
				"Y": "𝒀",
				"Z": "𝒁",
			};
			return Input.replace(
				new RegExp(Object.keys(Table).join("|"), "gu"),
				function (CurChar) {
					return Table[CurChar]
				}
			);
		}
	},
	{
		name: "Math Script",
		id: "math-script",
		description: "Math script",
		Apply: function (Input) {
			var Table = {
				"a": "𝓪",
				"b": "𝓫",
				"c": "𝓬",
				"d": "𝓭",
				"e": "𝓮",
				"f": "𝓯",
				"g": "𝓰",
				"h": "𝓱",
				"i": "𝓲",
				"j": "𝓳",
				"k": "𝓴",
				"l": "𝓵",
				"m": "𝓶",
				"n": "𝓷",
				"o": "𝓸",
				"p": "𝓹",
				"q": "𝓺",
				"r": "𝓻",
				"s": "𝓼",
				"t": "𝓽",
				"u": "𝓾",
				"v": "𝓿",
				"w": "𝔀",
				"x": "𝔁",
				"y": "𝔂",
				"z": "𝔃",
				"A": "𝓐",
				"B": "𝓑",
				"C": "𝓒",
				"D": "𝓓",
				"E": "𝓔",
				"F": "𝓕",
				"G": "𝓖",
				"H": "𝓗",
				"I": "𝓘",
				"J": "𝓙",
				"K": "𝓚",
				"L": "𝓛",
				"M": "𝓜",
				"N": "𝓝",
				"O": "𝓞",
				"P": "𝓟",
				"Q": "𝓠",
				"R": "𝓡",
				"S": "𝓢",
				"T": "𝓣",
				"U": "𝓤",
				"V": "𝓥",
				"W": "𝓦",
				"X": "𝓧",
				"Y": "𝓨",
				"Z": "𝓩"
			};
			return Input.replace(
				new RegExp(Object.keys(Table).join("|"), "gu"),
				function (CurChar) {
					return Table[CurChar]
				}
			);
		}
	},
	{
		name: "Math Double-Struk",
		id: "math-dlbstruk",
		description: "Math script",
		Apply: function (Input) {
			var Table = {
				"0": "𝟘",
				"1": "𝟙",
				"2": "𝟚",
				"3": "𝟛",
				"4": "𝟜",
				"5": "𝟝",
				"6": "𝟞",
				"7": "𝟟",
				"8": "𝟠",
				"9": "𝟡",
				"a": "𝕒",
				"b": "𝕓",
				"c": "𝕔",
				"d": "𝕕",
				"e": "𝕖",
				"f": "𝕗",
				"g": "𝕘",
				"h": "𝕙",
				"i": "𝕚",
				"j": "𝕛",
				"k": "𝕜",
				"l": "𝕝",
				"m": "𝕞",
				"n": "𝕟",
				"o": "𝕠",
				"p": "𝕡",
				"q": "𝕢",
				"r": "𝕣",
				"s": "𝕤",
				"t": "𝕥",
				"u": "𝕦",
				"v": "𝕧",
				"w": "𝕨",
				"x": "𝕩",
				"y": "𝕪",
				"z": "𝕫",
				"A": "𝔸",
				"B": "𝔹",
				"C": "ℂ",
				"D": "𝔻",
				"E": "𝔼",
				"F": "𝔽",
				"G": "𝔾",
				"H": "ℍ",
				"I": "𝕀",
				"J": "𝕁",
				"K": "𝕂",
				"L": "𝕃",
				"M": "𝕄",
				"N": "ℕ",
				"O": "𝕆",
				"P": "ℙ",
				"Q": "ℚ",
				"R": "ℝ",
				"S": "𝕊",
				"T": "𝕋",
				"U": "𝕌",
				"V": "𝕍",
				"W": "𝕎",
				"X": "𝕏",
				"Y": "𝕐",
				"Z": "ℤ",
			};
			return Input.replace(
				new RegExp(Object.keys(Table).join("|"), "gu"),
				function (CurChar) {
					return Table[CurChar]
				}
			);
		}
	},
	{
		name: "Math San-Serif",
		id: "math-san-serif",
		description: "Math sans serif",
		Apply: function (Input) {
			return Input
				// A-Z
				.replace(/[A-Z]/gu, function (CurChar) {
					var CharCode = CurChar.codePointAt(0);
					return String.fromCodePoint(CharCode + (0x1D5A0 - "A".codePointAt(0)));
				})
				// a-z
				.replace(/[a-z]/gu, function (CurChar) {
					var CharCode = CurChar.codePointAt(0);
					return String.fromCodePoint(CharCode + (0x1D5BA - "a".codePointAt(0)));
				})
				// 0-9
				.replace(/[0-9]/gu, function (CurChar) {
					var CharCode = CurChar.codePointAt(0);
					return String.fromCodePoint(CharCode + (0x1D7E2 - "0".codePointAt(0)));
				});
		}
	},
	{
		name: "Math San-Serif Bold",
		id: "math-san-serif-bold",
		description: "Math sans serif bold",
		Apply: function (Input) {
			return Input
				// A-Z
				.replace(/[A-Z]/gu, function (CurChar) {
					var CharCode = CurChar.codePointAt(0);
					return String.fromCodePoint(CharCode + (0x1D5D4 - "A".codePointAt(0)));
				})
				// a-z
				.replace(/[a-z]/gu, function (CurChar) {
					var CharCode = CurChar.codePointAt(0);
					return String.fromCodePoint(CharCode + (0x1D5EE - "a".codePointAt(0)));
				})
				// 0-9
				.replace(/[0-9]/gu, function (CurChar) {
					var CharCode = CurChar.codePointAt(0);
					return String.fromCodePoint(CharCode + (0x1D7EC - "0".codePointAt(0)));
				});
		}
	},
	{
		name: "Math San-Serif Italic",
		id: "math-san-serif-italic",
		description: "Math sans serif italic",
		Apply: function (Input) {
			return Input
				// A-Z
				.replace(/[A-Z]/gu, function (CurChar) {
					var CharCode = CurChar.codePointAt(0);
					return String.fromCodePoint(CharCode + (0x1D608 - "A".codePointAt(0)));
				})
				// a-z
				.replace(/[a-z]/gu, function (CurChar) {
					var CharCode = CurChar.codePointAt(0);
					return String.fromCodePoint(CharCode + (0x1D622 - "a".codePointAt(0)));
				});
		}
	},
	{
		name: "Math San-Serif Bold Italic",
		id: "math-san-serif-bold-italic",
		description: "Math sans serif bold italic",
		Apply: function (Input) {
			return Input
				// A-Z
				.replace(/[A-Z]/gu, function (CurChar) {
					var CharCode = CurChar.codePointAt(0);
					return String.fromCodePoint(CharCode + (0x1D63C - "A".codePointAt(0)));
				})
				// a-z
				.replace(/[a-z]/gu, function (CurChar) {
					var CharCode = CurChar.codePointAt(0);
					return String.fromCodePoint(CharCode + (0x1D656 - "a".codePointAt(0)));
				});
		}
	},
	{
		name: "Math Monospace",
		id: "math-monospace",
		description: "Math monospace",
		Apply: function (Input) {
			return Input
				// A-Z
				.replace(/[A-Z]/gu, function (CurChar) {
					var CharCode = CurChar.codePointAt(0);
					return String.fromCodePoint(CharCode + (0x1D670 - "A".codePointAt(0)));
				})
				// a-z
				.replace(/[a-z]/gu, function (CurChar) {
					var CharCode = CurChar.codePointAt(0);
					return String.fromCodePoint(CharCode + (0x1D68A - "a".codePointAt(0)));
				})
				// 0-9
				.replace(/[0-9]/gu, function (CurChar) {
					var CharCode = CurChar.codePointAt(0);
					return String.fromCodePoint(CharCode + (0x1D7F6 - "0".codePointAt(0)));
				});
		}
	},
	{
		name: "Super script",
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
	},
	{
		name: "Strike script",
		id: "strikescript",
		description: "Striked script lettering",
		Apply: function (Input) {
			var Table = {
				"2": "ƻ",
				"a": "Ⱥ",
				"b": "ƀ",
				"c": "ȼ",
				"d": "đ",
				"e": "ɇ",
				"g": "ǥ",
				"h": "ħ",
				"i": "ɨ",
				"j": "ɉ",
				"k": "ꝁ",
				"l": "ł",
				"o": "ø",
				"p": "ᵽ",
				"q": "ꝗ",
				"r": "ɍ",
				"t": "ŧ",
				"u": "ᵾ",
				"y": "ɏ",
				"z": "ƶ",
				"A": "Ⱥ",
				"B": "Ƀ",
				"C": "Ȼ",
				"D": "Đ",
				"E": "Ɇ",
				"G": "Ǥ",
				"H": "Ħ",
				"I": "Ɨ",
				"J": "Ɉ",
				"K": "Ꝁ",
				"L": "Ł",
				"O": "Ø",
				"P": "Ᵽ",
				"Q": "Ꝗ",
				"R": "Ɍ",
				"T": "Ŧ",
				"U": "ᵾ",
				"Y": "Ɏ",
				"Z": "Ƶ"
			};
			return Input.replace(
				new RegExp(Object.keys(Table).join("|"), "gu"),
				function (CurChar) {
					return Table[CurChar]
				}
			);
		}
	},
	{
		name: "Diacritic Dots",
		id: "diacritic-dot",
		description: "Diacritic dotted lettering",
		Apply: function (Input) {
			var Table = {
				"3": "ӟ",
				"a": "ä",
				"b": "ḅ",
				"c": "ċ",
				"d": "ḋ",
				"e": "ë",
				"f": "ḟ",
				"g": "ġ",
				"h": "ḧ",
				"i": "ï",
				"k": "ḳ",
				"l": "ḷ",
				"m": "ṁ",
				"n": "ṅ",
				"o": "ö",
				"p": "ṗ",
				"r": "ṛ",
				"s": "ṡ",
				"t": "ẗ",
				"u": "ü",
				"v": "ṿ",
				"w": "ẅ",
				"x": "ẍ",
				"y": "ÿ",
				"z": "ż",
				"A": "Ä",
				"B": "Ḅ",
				"C": "Ċ",
				"D": "Ḋ",
				"E": "Ё",
				"F": "Ḟ",
				"G": "Ġ",
				"H": "Ḧ",
				"I": "Ї",
				"K": "Ḳ",
				"L": "Ḷ",
				"M": "Ṁ",
				"N": "Ṅ",
				"O": "Ö",
				"P": "Ṗ",
				"R": "Ṛ",
				"S": "Ṡ",
				"T": "Ṫ",
				"U": "Ü",
				"V": "Ṿ",
				"W": "Ẅ",
				"X": "Ẍ",
				"Y": "Ÿ",
				"Z": "Ż",
				"-": "⸚",
			};
			return Input.replace(
				new RegExp(Object.keys(Table).join("|"), "gu"),
				function (CurChar) {
					return Table[CurChar]
				}
			);
		}
	},
	{
		name: "Vertical Flip",
		id: "flip-v",
		description: "Vertically flipped lettering",
		Apply: function (Input) {
			var Table = {
				"a": "ɐ",
				"b": "q",
				"c": "ɔ",
				"d": "p",
				"e": "ǝ",
				"f": "ɟ",
				"g": "ƃ",
				"h": "ɥ",
				"i": "ı",
				"j": "ɾ",
				"k": "ʞ",
				"l": "ן",
				"m": "ɯ",
				"n": "u",
				"p": "d",
				"q": "b",
				"r": "ɹ",
				"t": "ʇ",
				"u": "n",
				"v": "ʌ",
				"w": "ʍ",
				"y": "ʎ",
				"A": "ɐ",
				"B": "q",
				"C": "ɔ",
				"D": "p",
				"E": "ǝ",
				"F": "ɟ",
				"G": "ƃ",
				"H": "ɥ",
				"I": "ı",
				"J": "ɾ",
				"K": "ʞ",
				"L": "ן",
				"M": "ɯ",
				"N": "u",
				"O": "o",
				"P": "d",
				"Q": "b",
				"R": "ɹ",
				"S": "s",
				"T": "ʇ",
				"U": "n",
				"V": "𐌡",
				"W": "ʍ",
				"X": "x",
				"Y": "ʎ",
				"Z": "z",
			};
			return Input.replace(
				new RegExp(Object.keys(Table).join("|"), "gu"),
				function (CurChar) {
					return Table[CurChar]
				}
			);
		}
	},
	{
		name: "Reversed",
		id: "reversed",
		description: "Reversed string",
		Apply: function (Input) {
			return Input.split("").reverse().join('');
		}
	},
	{
		name: "Rot13",
		id: "rot-13",
		description: "Rotate by 13 places",
		Apply: function (Input) {
			var Table = {
				"a": "n",
				"b": "o",
				"c": "p",
				"d": "q",
				"e": "r",
				"f": "s",
				"g": "t",
				"h": "u",
				"i": "v",
				"j": "w",
				"k": "x",
				"l": "y",
				"m": "z",
				"n": "a",
				"o": "b",
				"p": "c",
				"q": "d",
				"r": "e",
				"s": "f",
				"t": "g",
				"u": "h",
				"v": "i",
				"w": "j",
				"x": "k",
				"y": "l",
				"z": "m",
				"A": "N",
				"B": "O",
				"C": "P",
				"D": "Q",
				"E": "R",
				"F": "S",
				"G": "T",
				"H": "U",
				"I": "V",
				"J": "W",
				"K": "X",
				"L": "Y",
				"M": "Z",
				"N": "A",
				"O": "B",
				"P": "C",
				"Q": "D",
				"R": "E",
				"S": "F",
				"T": "G",
				"U": "H",
				"V": "I",
				"W": "J",
				"X": "K",
				"Y": "L",
				"Z": "M",
			};
			return Input.replace(
				new RegExp(Object.keys(Table).join("|"), "gu"),
				function (CurChar) {
					return Table[CurChar]
				}
			);
		}
	},
	{
		name: "Not Japanese",
		id: "nihongo",
		description: "English looking japanese",
		Apply: function (Input) {
			var Table = {
				"a": "卂",
				"b": "乃",
				"c": "匚",
				"d": "刀",
				"e": "乇",
				"f": "下",
				"g": "厶",
				"h": "卄",
				"i": "工",
				"j": "丁",
				"k": "长",
				"l": "乚",
				"m": "从",
				"n": "𠘨",
				"o": "口",
				"p": "尸",
				"q": "㔿",
				"r": "尺",
				"s": "丂",
				"t": "ㄒ",
				"u": "凵",
				"v": "リ",
				"w": "山",
				"x": "乂",
				"y": "丫",
				"z": "乙",
				"A": "卂",
				"B": "乃",
				"C": "匚",
				"D": "刀",
				"E": "乇",
				"F": "下",
				"G": "厶",
				"H": "卄",
				"I": "工",
				"J": "丁",
				"K": "长",
				"L": "乚",
				"M": "从",
				"N": "𠘨",
				"O": "口",
				"P": "尸",
				"Q": "㔿",
				"R": "尺",
				"S": "丂",
				"T": "ㄒ",
				"U": "凵",
				"V": "リ",
				"W": "山",
				"X": "乂",
				"Y": "丫",
				"Z": "乙",
			};
			return Input.replace(
				new RegExp(Object.keys(Table).join("|"), "gu"),
				function (CurChar) {
					return Table[CurChar]
				}
			);
		}
	},
];

function InputTick() {
	Convert(this.value);
}

function Convert(NewString) {
	Transforms.forEach(function(index, CurTransform){
		document.getElementById(Transforms[CurTransform].id).value = Transforms[CurTransform].Apply(NewString);
	});
}

document.addEventListener("DOMContentLoaded", function() {
	document.getElementById('Input').onblur = function(e) {
		window.history.pushState('', 'Texty', '?input=' + this.value);
	}

	document.getElementById("Input").addEventListener("input", InputTick);
	const Outputs = document.getElementById("Outputs");
	Transforms.forEach(function(index, CurTransform){
		const CurOutputDiv = document.createElement("div");
		CurOutputDiv.classList.add("form-group");
		CurOutputDiv.classList.add("card");
		CurOutputDiv.classList.add("card-body");
		CurOutputDiv.id = Transforms[CurTransform].id + "-div";

		const CurTitle = document.createElement("h5");
		CurOutputDiv.classList.add("card-title");
		CurTitle.innerHTML = Transforms[CurTransform].name;

		const CurSubTitle = document.createElement("p");
		CurSubTitle.classList.add("card-subtitle");
		CurSubTitle.classList.add("mb-2");
		CurSubTitle.classList.add("text-muted");
		CurSubTitle.innerHTML = Transforms[CurTransform].description;

		const CurTextarea = document.createElement("textarea");
		CurTextarea.classList.add("form-control");
		CurTextarea.id = Transforms[CurTransform].id;
		CurTextarea.rows = 5;
		CurTextarea.readOnly = true;

		CurOutputDiv.appendChild(CurTitle);
		CurOutputDiv.appendChild(CurSubTitle);
		CurOutputDiv.appendChild(CurTextarea);
		Outputs.appendChild(CurOutputDiv);
	});
	var url = new URL(window.location)
	if (url.searchParams.get('input') != null)
	document.getElementById("Input").value = url.searchParams.get('input');
	Convert(document.getElementById("Input").value);
});
