document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("navigationForm").addEventListener("submit", function(event) {
      event.preventDefault();
      
      var startPoint = document.getElementById("startPoint").value;
      var endPoint = document.getElementById("endPoint").value;
      
      navigate(startPoint, endPoint);
    });
  });
  
  function navigate(startPoint, endPoint) {
    switch (startPoint + endPoint) {
      case "AX":
        window.location.href = "page1.html";
        break;
      case "BY":
        window.location.href = "https://www.example.com/page2";
        break;
      case "CZ":
        window.location.href = "https://www.example.com/page3";
        break;
      default:
        alert("Invalid start point or end point!");
    }
  }