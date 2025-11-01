// STEP 1: Select the draggable elements
const items = document.querySelectorAll(".item");

// STEP 2: Select the container that holds all missions
const container = document.getElementById("list-container");

// STEP 3: Add drag events to each mission card
items.forEach(item => {
  item.addEventListener("dragstart", () => {
    item.classList.add("dragging");
  });

  item.addEventListener("dragend", () => {
    item.classList.remove("dragging");
  });
});

// STEP 4: Listen for “dragover” on the container
container.addEventListener("dragover", e => {
  e.preventDefault();
  const draggingItem = document.querySelector(".dragging");
  const afterElement = getDragAfterElement(container, e.clientY);

  if (!afterElement) {
    container.appendChild(draggingItem);
  } else {
    container.insertBefore(draggingItem, afterElement);
  }
});

// STEP 5: Helper function to find the correct drop position
function getDragAfterElement(container, y) {
  const draggableElements = [...container.querySelectorAll(".item:not(.dragging)")];

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}



/*
STEP 1: Select the draggable elements
    • Use document.querySelectorAll(".item")
    • This will give you all the mission cards that can be dragged
*/

/*
STEP 2: Select the container that holds all missions
    • Use document.getElementById("list-container")
    • This is the section where drag and drop will happen
*/

/*
STEP 3: Add drag events to each mission card
    • Loop through all items using forEach
    • Add two listeners:
        – dragstart → add a “dragging” class (to highlight the card)
        – dragend → remove the “dragging” class
*/

/*
STEP 4: Listen for “dragover” on the container
    • Use container.addEventListener("dragover", …)
    • Inside it:
        – Call event.preventDefault() → this allows dropping
        – Find the element currently being dragged (use .dragging)
        – Find which element should come *after* the dragged one (using the helper function)
        – If none → append to end
        – Else → insert before that element
*/

/*
STEP 5: Create a helper function to find the drop position
    • Purpose → figure out the exact spot to drop the dragged item
    • Steps inside the function:
        1. Get all elements except the one being dragged
        2. For each element:
            – Measure its position (using getBoundingClientRect)
            – Calculate how far the mouse is from the middle
        3. If mouse is above the middle and closest so far → store it
        4. Return whichever element is just above the mouse
*/


