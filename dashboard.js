
     function toggleMenu() {
        [].forEach.call(document.querySelectorAll('.extended-menu'), function (el) {
            if(el.style.display==="block"){
                el.style.display = "none";
            } else {
                el.style.display = "block";
            }
          });
      }

      function openPopup(MyPath){
          console.log("popup")
          window.open(MyPath,"","toolbar=no,status=no,menubar=no,location=center,scrollbars=no,resizable=no,height=500,width=657")
      }

      function AddMedication(){
          alert("Medication Updated ")
      }

      function keepGoing(){
        alert("Keep Going 👍")
      }
   