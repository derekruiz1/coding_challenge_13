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
            event.stopPropagation
        });
        card.appendChild(removeButton);

        employeeContainer.appendChild(card);
    }

    addEmployeeCard("Lebron James", "Player");
    addEmployeeCard("Walter White", "Chemist");
});

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
