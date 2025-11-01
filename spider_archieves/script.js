// document.addEventListener("DOMContentLoaded", () => {
//     const accordionItems = document.querySelectorAll(".accordion-item");
  
//     accordionItems.forEach((item) => {
//       item.addEventListener("mouseenter", () => {
//         // Close all accordions first
//         accordionItems.forEach((acc) => {
//           if (acc !== item) acc.classList.remove("hovered");
//         });
  
//         // Expand the hovered accordion
//         item.classList.add("hovered");
//       });
  
//       // Collapse when mouse leaves
//       item.addEventListener("mouseleave", () => {
//         item.classList.remove("hovered");
//       });
//     });
//   });
  

// Select all accordion items
const accordionItems = document.querySelectorAll(".accordion-item");

// Add hover events
accordionItems.forEach((item) => {
  item.addEventListener("mouseenter", () => {
    // Close all others
    accordionItems.forEach((acc) => {
      acc.classList.remove("hovered");
      acc.querySelector(".accordion-content").style.maxHeight = "0px";
      acc.querySelector(".accordion-content").style.padding = "0 20px";
    });

    // Open the hovered accordion
    item.classList.add("hovered");
    const content = item.querySelector(".accordion-content");
    content.style.maxHeight = content.scrollHeight + "px";
    content.style.padding = "15px 20px";
  });

  item.addEventListener("mouseleave", () => {
    // Collapse the current accordion when mouse leaves
    const content = item.querySelector(".accordion-content");
    content.style.maxHeight = "0px";
    content.style.padding = "0 20px";
    item.classList.remove("hovered");
  });
});
