// displays the current date/time
let currentDayEl = moment().format("ddd D MMM YYYY , h: m ss");
$("#currentDay").text(currentDayEl);
let currentTimeEl = moment().format("h m ss");

let startHour = 9;
let endHour = 5;
let timeBlockEls = $(".time-block");
let containerEl = $(".container");

let saveBtns = $(".saveBtn");
let textInput = $("textarea");

// add click event to save textArea value into local storage
saveBtns.click(function (e) {
  // used "this" to grab reference to specific button that was clicked
  let clickedBtn = $(this);
  // grabbed reference to sibling textArea
  let closestTextArea = clickedBtn.siblings("textarea");
  //   grabbed reference to parent time-block element
  let timeBlockEl = clickedBtn.closest(".time-block");
  // grabbed the id of the parent time-block element
  let timeBlockId = timeBlockEl.attr("id");
  // set the value of the sibling textArea in local storage using the time-block element as a key
  localStorage.setItem(timeBlockId, closestTextArea.val());
});




timeBlockEls.each(function(){
    // used "this" to grab the specific div in the time-block
    let timeColorSlot = parseInt($(this).attr("id"));
    // checking the 
    if (timeColorSlot > currentTimeEl) {
        $(this).addClass("future");
        
     }else if (timeColorSlot < currentTimeEl) {
        $(this).addClass("past")
            
     } else {
        $(this).addClass("present")
     }
})