// http://jrgraphix.net/r/Unicode/10330-1034F

function Transform(Text)
{
	return Text.replace(/[\x21-\x7E]/gu,function(CurChar){
		var CharCode = CurChar.charCodeAt(0);
		return String.fromCharCode(CharCode + 0xFEE0);
	});
}

function NewInput()
{
	var NewString = this.value;
	console.log(NewString);
	$("#Output").val(Transform(NewString));
}

$(document).ready(
	function()
	{
		console.log("Init!");
		$("#Input").on("input",NewInput)
	}
);