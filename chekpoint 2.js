document.addEventListener('DOMContentLoaded', function() {
    var colorBox = document.getElementById('color-box');
    var changeColorBtn = document.getElementById('change-color-btn');
     changeColorBtn.addEventListener('click', function() {
        colorBox.style.backgroundColor = 'red';
        
      });
      let hexArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
      let colorParts = [];
     
     for (let i = 0; i < 6; i++) {
       colorParts.push(hexArray[Math.floor(Math.random() * hexArray.length)]);
     }
     
     let finalColor = `#${colorParts.join("")}`;
     colorBox.style.backgroundColor = finalColor;
    });
