// User Interface Logic
let form = document.querySelector("form");

function handleForm(event) {
  event.preventDefault();
  const userSelections = document.querySelectorAll("input[name=transportation-option]:checked");
  const userSelectionsArray = Array.from(userSelections);

  userSelectionsArray.forEach(function(element) {
      const sortedArray = userSelectionsArray.sort((a, b) => 
    a.value.localeCompare(b.value));
    const li = document.createElement("li");
    li.append(element.value);
    document.querySelector("ul").append(li);
  });

  
}

window.addEventListener("load", function() {
  document.querySelector("form#transportation_survey").addEventListener("submit", handleForm);
});