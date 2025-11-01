// Event listener for the scroll event
window.addEventListener("scroll", () => {
  // Find the current scroll position
  const scrollTop = window.scrollY || document.documentElement.scrollTop;

  // Calculate the total scrollable height
  const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

  // Calculate scroll percentage
  const scrollPercent = (scrollTop / docHeight) * 100;

  // Update the width of the progress bar
  const progressBar = document.getElementById("progress-bar");
  progressBar.style.width = scrollPercent + "%";
});
