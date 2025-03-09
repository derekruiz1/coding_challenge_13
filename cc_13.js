//Task 2 - Adding Employee Cards Dynamically 
document.addEventListener("DOMContentLoaded", () => {
    const employeeContainer = document.getElementById("employeeContainer");

    function addEmployeeCard(name, position) {
        const card = document.createElement("div");
        card.setAttribute("class", "employee-card");

        const nameHeading = document.createElement("h2");
        nameHeading.textContent = name;
        card.appendChild(nameHeading);

        const positionParagraph = document.createElement("p");
        positionParagraph.textContent = position;
        card.appendChild(positionParagraph);

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", (event) => {
            card.remove();
            event.stopPropagation();
        });
        card.appendChild(removeButton);

 //Task 5 - Incline Editing of Employee Details

 const editButton = document.createElement("button"); //Making button to edit card
 editButton.textContent = "Edit";
 editButton.addEventListener("click", () => {
     enableEditing(card, nameHeading, positionParagraph, editButton, removeButton);
 });

 card.appendChild(nameHeading);
 card.appendChild(positionParagraph);
 card.appendChild(editButton);
 card.appendChild(removeButton);
 employeeContainer.appendChild(card);
}

function enableEditing(card, nameHeading, positionParagraph, editButton, removeButton) { //Editing the card
 const nameInput = document.createElement("input");
 nameInput.value = nameHeading.textContent;

 const positionInput = document.createElement("input");
 positionInput.value = positionParagraph.textContent;

 const saveButton = document.createElement("button"); //Making button to save changes
 saveButton.textContent = "Save";

 saveButton.addEventListener("click", () => { 
     nameHeading.textContent = nameInput.value;
     positionParagraph.textContent = positionInput.value;

     card.innerHTML = "";
     card.appendChild(nameHeading);
     card.appendChild(positionParagraph);
     card.appendChild(editButton);
     card.appendChild(removeButton);
 });

 card.innerHTML = "";
 card.appendChild(nameInput);
 card.appendChild(positionInput);
 card.appendChild(saveButton);
}

addEmployeeCard("Lebron James" , "Player")
addEmployeeCard("Walter White" , "Chemist")
})

//Task 3 - Converting NodeLists to Arrays for Bulk Updates
document.addEventListener("DOMContentLoaded", function () {
    const nodeList = document.querySelectorAll(".employee-card")
    const cardArray = Array.from(nodeList)

    cardArray.forEach(card => { //Updating Cards
            card.style.backgroundColor = "#e94af7"
            card.style.border = "5px solid #0accc2"
    })
})

//Task 4 - Impending Removal of Employee Cards with Event Bubbling
employeeContainer.addEventListener("click", () => { //Notifies when Employee Card is clicked 
    console.log("Employee Card Clicked")
})
//Added stopPropagation in Code in Task 2 
