// HTML sets up the user interface with a textarea for entering notes, a button to add notes, and an unordered list to display the notes.
// Optional CSS styles the application to make it more visually appealing.
// JavaScript:
// Initializes by loading any saved notes from local storage and displaying them.
// Adds an event listener to the "Add Note" button. When clicked, it adds the new note to an array, saves the array to local storage (after JSON stringification), clears the input area, and updates the display.
// The renderNotes function clears the current list of notes and iterates over the notes array to display each note. It dynamically creates a "Delete" button for each note, which, when clicked, removes the note from both the array and local storage, and updates the display.

const addNoteButton = document.getElementById("add-note");
const noteInput = document.getElementById("note-input");
const notesList = document.getElementById("notes-list");

// Load notes from local storage on page load
const notes = JSON.parse(localStorage.getItem("notes")) || [];
renderNotes();

addNoteButton.addEventListener("click", () => {
  const noteText = noteInput.value.trim();
  if (noteText) {
    notes.push(noteText);
    localStorage.setItem("notes", JSON.stringify(notes));
    renderNotes();
    noteInput.value = ""; // Clear input after adding
  }
});

function renderNotes() {
  notesList.innerHTML = ""; // Clear existing notes
  notes.forEach((note, index) => {
    const li = document.createElement("li");
    li.textContent = note;
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => {
      notes.splice(index, 1); // Remove note from array
      localStorage.setItem("notes", JSON.stringify(notes)); // Update local storage
      renderNotes(); // Re-render notes
    };
    li.appendChild(deleteButton);
    notesList.appendChild(li);
  });
}
