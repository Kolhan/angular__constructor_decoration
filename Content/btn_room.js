var focusElementParent;
var focusElementButton;
var focusElementInput; 
var focusElementHint;

$(document).ready(function() {
	var tableElem = document.getElementById('page1_table');
	var buttons = tableElem.getElementsByTagName('button');
	var inputs = tableElem.getElementsByTagName('input');
	var bt_edits = tableElem.getElementsByClassName('bt_edit');
	
	for (var i = 0; i < bt_edits.length; i++) {
		var elem = bt_edits[i];
		//elem.onclick = handleClick;
	}
	
	for (var i = 0; i < buttons.length; i++) {
		var elem = buttons[i];
		elem.onclick = handleClick;
	}
	
	for (var i = 0; i < inputs.length; i++) {
		var elem = inputs[i];
		//elem.onfocus = focusFunction;
	}
});

function fillFocusVariable(parent){
	focusElementParent = parent;
	focusElementButton = parent.getElementsByTagName('button')[0];
	focusElementInput  = parent.getElementsByTagName('input')[0]; 
	focusElementHint   = parent.getElementsByClassName('hint')[0];
}

//обработчик события клик мышки
function handleClick(e)
{
	fillFocusVariable(e.target.parentElement)
	focusElementInput.focus();
}