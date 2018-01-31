// http://jrgraphix.net/r/Unicode/10330-1034F

var FullWidth = {
	name: "Full Width",
	description: "Full width text",
	Apply: function(Input){
		return Input.replace(/[\x21-\x7E]/gu,function(CurChar){
			var CharCode = CurChar.charCodeAt(0);
			return String.fromCharCode(CharCode + 0xFEE0);
		});
	}
};

function InputTick()
{
	var NewString = this.value;
	console.log(NewString);
	$("#Output").val(FullWidth.Apply(NewString));
}

$(document).ready(
	function()
	{
		$("#Input").on("input",InputTick)
	}
);