
     function toggleMenu() {
        [].forEach.call(document.querySelectorAll('.extended-menu'), function (el) {
            if(el.style.display==="block"){
                el.style.display = "none";
            } else {
                el.style.display = "block";
            }
          });
      }
   