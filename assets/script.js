// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.



$(function () {

  var timeDisplay = document.getElementById("currentDay");
  var saveBtn = $(".saveBtn");
  var hourBlocks = $(".container-lg");
  var hours = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];    //remove 18 through 24




  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  addEventListener("click", function() {

  })

  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  /****
   * div example to be built
   *       <div id="hour-9" class="row time-block past">
        <div class="col-2 col-md-1 hour text-center py-3">9AM</div>
        <textarea class="col-8 col-md-10 description" rows="3"> </textarea>
        <button class="btn saveBtn col-2 col-md-1" aria-label="save">
          <i class="fas fa-save" aria-hidden="true"></i>
        </button>
      </div>
   */
  for (var x = 0; x < hours.length; x++) {
    let mainDiv = $("<div class='row time-block'>");
    mainDiv.attr("id", `hour-${hours[x]}`)
    let hourDiv = $("<div class='col-2 col-md-1 hour text-center py-3'>");

    let americanHours = hours[x]+ " am";
    if(hours[x] >= 12) {
      americanHours = hours[x]+ " pm";
      if(hours[x] >= 13) americanHours = hours[x] - 12  + " pm";
    }
    hourDiv.append(americanHours);

    let textArea = $("<textarea class='col-8 col-md-10 description' rows='3'>");

    
    let saveButton = $("<button class='btn saveBtn col-2 col-md-1' aria-label='save'>");
    
    let saveIcon = $("<i class='fas fa-save' aria-hidden='true'>");
    saveButton.append(saveIcon);
    
    hourBlocks.append(mainDiv.append(hourDiv, textArea, saveButton));

    //determine if the hour is past, present, or future
    if (hours[x] < dayjs().hour()) {
      mainDiv.attr("class", "past");
    }
    else if (hours[x] === dayjs().hour()) {
      mainDiv.attr("class", "present");
    }
    else {
      mainDiv.attr("class", "future");
    }
  }



  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?

  

  // Displays the current date in the header of the page.
  function updateTime() {
    timer = setInterval(function (event) {
        var today = dayjs().format("dddd, MMMM D YYYY, h:mm:ss a");
        timeDisplay.textContent = today;
    }, 1000)
  }
  
  updateTime();
});
