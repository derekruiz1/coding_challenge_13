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
        removeButton.addEventListener("click", () => {
            card.remove();
        });
        card.appendChild(removeButton);

        employeeContainer.appendChild(card);
    }

    addEmployeeCard("Lebron James", "Player");
    addEmployeeCard("Walter White", "Chemist");
});