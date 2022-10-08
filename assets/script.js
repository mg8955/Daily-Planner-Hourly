var plannerSection = $('#planner-section').addClass('container-fluid px-5 pb-5');

var savedPlan = [];

var date = moment().format("dddd, MMMM Do");
$("#currentDate").text(date);

function applyColor(textField, i) {
    var currentTime = parseInt(moment().format("kkmm"));
        var rowTime = parseInt("0" + (8+i) + "0" + "0");
        var timeDif = (rowTime - currentTime);
        if (timeDif > 0)  {
            textField.addClass('bg-future');
        } else if ((timeDif > -99) && (timeDif < 0)) {
            textField.addClass('bg-current');
        } else {
            textField.addClass('bg-past');
        }
}

function generateRows(num) {
    for (i = 0; i < num; i++) {
        if ((8+i) < 10) {
            var timeText = ("0" + (8+i) + "0" + "0"); 
        } else {
            var timeText = ((8+i) + "0" + "0");
        }
        var rowEl = $('<div>').addClass('row justify-content-center fixed-h flex-nowrap');
        var timeColEl = $('<div>').addClass('col-1 border border-left-0 border-right-0 ml-3 text-right pt-2').text(timeText);
        var textColEl = $('<div>').addClass('col-10 border border-right-0 px-2 bg-secondary').attr('id', 'text-col');        
        var textField = $('<textarea>').addClass('w-100 h-100 border-0 rounded-0 m-0 pl-2').attr('id', 'text-loc').text('');
        applyColor(textField, i);
        var saveButton = $('<input>').addClass('btn btn-primary action').attr({type:'submit', value:'💾', id:'c-button'});
        var saveColEl = $('<div>').addClass('col-1 px-0');

        plannerSection.append(rowEl);
        rowEl.append(
            timeColEl,
            textColEl,
            saveColEl
        );
        textColEl.append(textField);    
        saveColEl.append(saveButton);      
    }    
}

function updateSavedPlan(saveText, textLoc) {
    
}

generateRows(10);

$('.btn').click(function() {
    var grabText = $($(this).parent().parent().children([1]).children([0]));
    var saveText = grabText.val().trim();
    var textLoc = grabText.attr('id');
    
    updateSavedPlan(saveText, textLoc);
});