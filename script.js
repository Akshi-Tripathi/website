document.addEventListener("mouseleave", function(event) {
      if (event.clientY <= 0) {
        showExitPopup();
      }
    });

    function showExitPopup() {
      var popup = document.getElementById("exitPopup");
      popup.style.display = "block";
    }

    function closeExitPopup() {
      var popup = document.getElementById("exitPopup");
      popup.style.display = "none";
    }
 
        
   

  