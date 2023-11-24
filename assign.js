// CHAPTER 49-52

// Answer 1 (data collection)

function submitForm() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  const userDataDiv = document.getElementById("userData");
  userDataDiv.innerHTML = `<p>Name: ${name}</p><p>Email: ${email}</p>`;
}

// Answer 2 (read more option)
function showDetails() {
  const fullDetails = document.getElementById("fullDetails");
  fullDetails.classList.toggle("hidden");
}

// Answer 3 (Student detail)
function addStudent() {
  const name = document.getElementById("studentName").value;
  const grade = document.getElementById("studentGrade").value;

  const tableBody = document.querySelector("#studentTable tbody");
  const newRow = tableBody.insertRow();

  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);
  const cell3 = newRow.insertCell(2);

  cell1.textContent = name;
  cell2.textContent = grade;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.onclick = function () {
    tableBody.removeChild(newRow);
  };

  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.onclick = function () {
    // Show a hidden form for editing
    document.getElementById("editForm").classList.remove("hidden");

    // Populate the form with current values
    document.getElementById("editName").value = name;
    document.getElementById("editGrade").value = grade;

    // Set up an event listener for the edit form
    document.getElementById("editForm").onsubmit = function (event) {
      event.preventDefault();
      // Update the table cell values
      cell1.textContent = document.getElementById("editName").value;
      cell2.textContent = document.getElementById("editGrade").value;
      // Hide the edit form
      document.getElementById("editForm").classList.add("hidden");
    };
  };

  cell3.appendChild(deleteButton);
  cell3.appendChild(editButton);
}

//Update Student
function updateStudent() {
  // Update the table cell values (similar to the edit functionality)
  const tableBody = document.querySelector("#studentTable tbody");
  const editName = document.getElementById("editName").value;
  const editGrade = document.getElementById("editGrade").value;

  const editedRow = document.querySelector("#studentTable tbody tr.editing");
  editedRow.cells[0].textContent = editName;
  editedRow.cells[1].textContent = editGrade;

  // Hide the edit form
  document.getElementById("editForm").classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", function () {
  const tableBody = document.querySelector("#studentTable tbody");
  tableBody.addEventListener("click", function (event) {
    const target = event.target;
    if (
      target.tagName.toLowerCase() === "button" &&
      target.textContent.toLowerCase() === "edit"
    ) {
      const selectedRow = target.parentNode.parentNode;

      // Add 'editing' class to the selected row
      selectedRow.classList.add("editing");
    }
  });
});


    ee.parentNode.firstChild.nodeValue = editvalue
}
