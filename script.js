document.addEventListener("DOMContentLoaded", function() {
  var loadingBar = document.getElementById("loadingBar");
  var container = document.getElementById("container");

  var progress = 0;
  var duration = 4000; // 4 seconds
  var interval = 20; // Update interval in milliseconds (adjust for smoother animation)
  var increment = interval / duration * 100;

  var id = setInterval(frame, interval);
  function frame() {
    if (progress >= 100) {
      clearInterval(id);
      // Redirect to the new page after loading
      window.location.href = "index.html";
    } else {
      progress += increment;
      loadingBar.style.width = progress + "%";
    }
  }
});
