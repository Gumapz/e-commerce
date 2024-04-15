const header = document.querySelector("header")

window.addEventListener('scroll', ()=>{
    header.classList.toggle("sticky", this.window.scrollY > 0)
})

// category
function toggleButton() {
    var dropdown = document.getElementById("dropdown");
    if (dropdown.classList.contains("category")) {
        dropdown.classList.remove("category");
        // adjust
        var button = document.getElementById("button");
        dropdown.style.top = (button.offsetTop + button.offsetHeight) + "px";
        dropdown.style.left = button.offsetLeft + "px";
    } else {
        dropdown.classList.add("category");
    }
}

const element = document.getElementById("cat");
let clicked = false;

element.addEventListener('click', () => {
    clicked = !clicked; // toggle the clicked state

    if (clicked) {
        element.textContent = "PRODUCT▼";
    } else {
        element.textContent = "PRODUCT▲";
    }
});



// Event listener for section buttons
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.sectionBtn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        // Hide all sections
        document.querySelectorAll('.trending-product').forEach(function(section) {
          section.classList.remove('active');
        });
        // Display the selected section
        dropdown.classList.add("category");
        document.getElementById(this.getAttribute('data-section')).classList.add('active');
      });
    });
  });















  

// ==============================================================================================================
// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var buttons = document.getElementsByClassName("shoes1");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on a button, open the modal and populate form fields
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        var row = this.parentNode.parentNode; // Get the parent row of the clicked button
        modal.style.display = "block";
    }
}
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}

// ==============================================================================================================

// Get the modal
var modal2 = document.getElementById("myModal2");

// Get the button that opens the modal
var buttons = document.getElementsByClassName("shoes2");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on a button, open the modal and populate form fields
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        var row = this.parentNode.parentNode; // Get the parent row of the clicked button
        modal2.style.display = "block";
    }
}

function closeModal2() {
    var modal2 = document.getElementById("myModal2");
    modal2.style.display = "none";
}
// ==============================================================================================================

// Get the modal
var modal3 = document.getElementById("myModal3");

// Get the button that opens the modal
var buttons = document.getElementsByClassName("shoes3");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on a button, open the modal and populate form fields
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        var row = this.parentNode.parentNode; // Get the parent row of the clicked button
        modal3.style.display = "block";
    }
}

function closeModal3() {
    var modal3 = document.getElementById("myModal3");
    modal3.style.display = "none";
}
// ==============================================================================================================

// Get the modal
var modal4 = document.getElementById("myModal4");

// Get the button that opens the modal
var buttons = document.getElementsByClassName("shoes4");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on a button, open the modal and populate form fields
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        var row = this.parentNode.parentNode; // Get the parent row of the clicked button
        modal4.style.display = "block";
    }
}

function closeModal4() {
    var modal4 = document.getElementById("myModal4");
    modal4.style.display = "none";
}
// ==============================================================================================================

// Get the modal
var modal5 = document.getElementById("myModal5");

// Get the button that opens the modal
var buttons = document.getElementsByClassName("shoes5");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on a button, open the modal and populate form fields
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        var row = this.parentNode.parentNode; // Get the parent row of the clicked button
        modal5.style.display = "block";
    }
}

function closeModal5() {
    var modal5 = document.getElementById("myModal5");
    modal5.style.display = "none";
}
// ==============================================================================================================

// Get the modal
var modal6 = document.getElementById("myModal6");

// Get the button that opens the modal
var buttons = document.getElementsByClassName("shoes6");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on a button, open the modal and populate form fields
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        var row = this.parentNode.parentNode; // Get the parent row of the clicked button
        modal6.style.display = "block";
    }
}

function closeModal6() {
    var modal6 = document.getElementById("myModal6");
    modal6.style.display = "none";
}
// ==============================================================================================================

// Get the modal
var modal7 = document.getElementById("myModal7");

// Get the button that opens the modal
var buttons = document.getElementsByClassName("shoes7");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on a button, open the modal and populate form fields
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        var row = this.parentNode.parentNode; // Get the parent row of the clicked button
        modal7.style.display = "block";
    }
}

function closeModal7() {
    var modal7 = document.getElementById("myModal7");
    modal7.style.display = "none";
}
// ==============================================================================================================

// Get the modal
var modal8 = document.getElementById("myModal8");

// Get the button that opens the modal
var buttons = document.getElementsByClassName("shoes8");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on a button, open the modal and populate form fields
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        var row = this.parentNode.parentNode; // Get the parent row of the clicked button
        modal8.style.display = "block";
    }
}

function closeModal8() {
    var modal8 = document.getElementById("myModal8");
    modal8.style.display = "none";
}
// ==============================================================================================================

// Get the modal
var modal9 = document.getElementById("myModal9");

// Get the button that opens the modal
var buttons = document.getElementsByClassName("shoes9");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on a button, open the modal and populate form fields
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        var row = this.parentNode.parentNode; // Get the parent row of the clicked button
        modal9.style.display = "block";
    }
}

function closeModal9() {
    var modal9 = document.getElementById("myModal9");
    modal9.style.display = "none";
}
// ==============================================================================================================

// Get the modal
var modal10 = document.getElementById("myModal10");

// Get the button that opens the modal
var buttons = document.getElementsByClassName("shoes10");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on a button, open the modal and populate form fields
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        var row = this.parentNode.parentNode; // Get the parent row of the clicked button
        modal10.style.display = "block";
    }
}

function closeModal10() {
    var modal10 = document.getElementById("myModal10");
    modal10.style.display = "none";
}
// ==============================================================================================================

// Get the modal
var modal11 = document.getElementById("myModal11");

// Get the button that opens the modal
var buttons = document.getElementsByClassName("shoes11");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on a button, open the modal and populate form fields
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        var row = this.parentNode.parentNode; // Get the parent row of the clicked button
        modal11.style.display = "block";
    }
}

function closeModal11() {
    var modal11 = document.getElementById("myModal11");
    modal11.style.display = "none";
}
// ==============================================================================================================

// Get the modal
var modal12 = document.getElementById("myModal12");

// Get the button that opens the modal
var buttons = document.getElementsByClassName("shoes12");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on a button, open the modal and populate form fields
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        var row = this.parentNode.parentNode; // Get the parent row of the clicked button
        modal12.style.display = "block";
    }
}

function closeModal12() {
    var modal12 = document.getElementById("myModal12");
    modal12.style.display = "none";
}
// ==============================================================================================================

// Get the modal
var modal13 = document.getElementById("myModal13");

// Get the button that opens the modal
var buttons = document.getElementsByClassName("shoes13");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on a button, open the modal and populate form fields
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        var row = this.parentNode.parentNode; // Get the parent row of the clicked button
        modal13.style.display = "block";
    }
}

function closeModal13() {
    var modal13 = document.getElementById("myModal13");
    modal13.style.display = "none";
}
// ==============================================================================================================

// Get the modal
var modal14 = document.getElementById("myModal14");

// Get the button that opens the modal
var buttons = document.getElementsByClassName("shoes14");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on a button, open the modal and populate form fields
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        var row = this.parentNode.parentNode; // Get the parent row of the clicked button
        modal14.style.display = "block";
    }
}

function closeModal14() {
    var modal14 = document.getElementById("myModal14");
    modal14.style.display = "none";
}
// ==============================================================================================================

// Get the modal
var modal15 = document.getElementById("myModal15");

// Get the button that opens the modal
var buttons = document.getElementsByClassName("shoes15");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on a button, open the modal and populate form fields
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        var row = this.parentNode.parentNode; // Get the parent row of the clicked button
        modal15.style.display = "block";
    }
}

function closeModal15() {
    var modal15 = document.getElementById("myModal15");
    modal15.style.display = "none";
}
// ==============================================================================================================

// Get the modal
var modal16 = document.getElementById("myModal16");

// Get the button that opens the modal
var buttons = document.getElementsByClassName("shoes16");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on a button, open the modal and populate form fields
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        var row = this.parentNode.parentNode; // Get the parent row of the clicked button
        modal16.style.display = "block";
    }
}

function closeModal16() {
    var modal16 = document.getElementById("myModal16");
    modal16.style.display = "none";
}
// ==============================================================================================================

// Get the modal
var modal17 = document.getElementById("myModal17");

// Get the button that opens the modal
var buttons = document.getElementsByClassName("shoes17");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on a button, open the modal and populate form fields
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        var row = this.parentNode.parentNode; // Get the parent row of the clicked button
        modal17.style.display = "block";
    }
}

function closeModal17() {
    var modal17 = document.getElementById("myModal17");
    modal17.style.display = "none";
}
// ==============================================================================================================

// Get the modal
var modal18 = document.getElementById("myModal18");

// Get the button that opens the modal
var buttons = document.getElementsByClassName("shoes18");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on a button, open the modal and populate form fields
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        var row = this.parentNode.parentNode; // Get the parent row of the clicked button
        modal18.style.display = "block";
    }
}

function closeModal18() {
    var modal18 = document.getElementById("myModal18");
    modal18.style.display = "none";
}
// ==============================================================================================================

// Get the modal
var modal19 = document.getElementById("myModal19");

// Get the button that opens the modal
var buttons = document.getElementsByClassName("shoes19");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on a button, open the modal and populate form fields
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        var row = this.parentNode.parentNode; // Get the parent row of the clicked button
        modal19.style.display = "block";
    }
}

function closeModal19() {
    var modal19 = document.getElementById("myModal19");
    modal19.style.display = "none";
}
// ==============================================================================================================

// Get the modal
var modal20 = document.getElementById("myModal20");

// Get the button that opens the modal
var buttons = document.getElementsByClassName("shoes20");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on a button, open the modal and populate form fields
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        var row = this.parentNode.parentNode; // Get the parent row of the clicked button
        modal20.style.display = "block";
    }
}

function closeModal20() {
    var modal20 = document.getElementById("myModal20");
    modal20.style.display = "none";
}
// ==============================================================================================================

// Get the modal
var modal21 = document.getElementById("myModal21");

// Get the button that opens the modal
var buttons = document.getElementsByClassName("shoes21");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on a button, open the modal and populate form fields
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        var row = this.parentNode.parentNode; // Get the parent row of the clicked button
        modal21.style.display = "block";
    }
}

function closeModal21() {
    var modal21 = document.getElementById("myModal21");
    modal21.style.display = "none";
}
// ==============================================================================================================

// Get the modal
var modal22 = document.getElementById("myModal22");

// Get the button that opens the modal
var buttons = document.getElementsByClassName("shoes22");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on a button, open the modal and populate form fields
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        var row = this.parentNode.parentNode; // Get the parent row of the clicked button
        modal22.style.display = "block";
    }
}

function closeModal22() {
    var modal22 = document.getElementById("myModal22");
    modal22.style.display = "none";
}
// ==============================================================================================================

// Get the modal
var modal23 = document.getElementById("myModal23");

// Get the button that opens the modal
var buttons = document.getElementsByClassName("shoes23");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on a button, open the modal and populate form fields
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        var row = this.parentNode.parentNode; // Get the parent row of the clicked button
        modal23.style.display = "block";
    }
}

function closeModal23() {
    var modal23 = document.getElementById("myModal23");
    modal23.style.display = "none";
}
// ==============================================================================================================

// Get the modal
var modal24 = document.getElementById("myModal24");

// Get the button that opens the modal
var buttons = document.getElementsByClassName("shoes24");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on a button, open the modal and populate form fields
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        var row = this.parentNode.parentNode; // Get the parent row of the clicked button
        modal24.style.display = "block";
    }
}

function closeModal24() {
    var modal24 = document.getElementById("myModal24");
    modal24.style.display = "none";
}
// ==============================================================================================================

// Get the modal
var modal25 = document.getElementById("myModal25");

// Get the button that opens the modal
var buttons = document.getElementsByClassName("shoes25");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on a button, open the modal and populate form fields
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        var row = this.parentNode.parentNode; // Get the parent row of the clicked button
        modal25.style.display = "block";
    }
}

function closeModal25() {
    var modal25 = document.getElementById("myModal25");
    modal25.style.display = "none";
}



// ==============================================================================================================
















// ==============================================================================================================

// Get the modal
var modal26 = document.getElementById("myModal26");

// Get the button that opens the modal
var buttons = document.getElementsByClassName("shoes26");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on a button, open the modal and populate form fields
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        var row = this.parentNode.parentNode; // Get the parent row of the clicked button
        modal26.style.display = "block";
    }
}

function closeModal26() {
    var modal26 = document.getElementById("myModal26");
    modal26.style.display = "none";
}

// ==============================================================================================================

// Get the modal
var modal27 = document.getElementById("myModal27");

// Get the button that opens the modal
var buttons = document.getElementsByClassName("shoes27");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on a button, open the modal and populate form fields
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        var row = this.parentNode.parentNode; // Get the parent row of the clicked button
        modal27.style.display = "block";
    }
}

function closeModal27() {
    var modal27 = document.getElementById("myModal27");
    modal27.style.display = "none";
}

// ==============================================================================================================

// Get the modal
var modal28 = document.getElementById("myModal28");

// Get the button that opens the modal
var buttons = document.getElementsByClassName("shoes28");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on a button, open the modal and populate form fields
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        var row = this.parentNode.parentNode; // Get the parent row of the clicked button
        modal28.style.display = "block";
    }
}

function closeModal28() {
    var modal28 = document.getElementById("myModal28");
    modal28.style.display = "none";
}

// ==============================================================================================================

// Get the modal
var modal29 = document.getElementById("myModal29");

// Get the button that opens the modal
var buttons = document.getElementsByClassName("shoes29");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on a button, open the modal and populate form fields
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        var row = this.parentNode.parentNode; // Get the parent row of the clicked button
        modal29.style.display = "block";
    }
}

function closeModal29() {
    var modal29= document.getElementById("myModal29");
    modal29.style.display = "none";
}

// ==============================================================================================================

// Get the modal
var modal30 = document.getElementById("myModal30");

// Get the button that opens the modal
var buttons = document.getElementsByClassName("shoes30");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on a button, open the modal and populate form fields
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        var row = this.parentNode.parentNode; // Get the parent row of the clicked button
        modal30.style.display = "block";
    }
}

function closeModal30() {
    var modal30 = document.getElementById("myModal30");
    modal30.style.display = "none";
}

// ==============================================================================================================

// Get the modal
var modal31 = document.getElementById("myModal31");

// Get the button that opens the modal
var buttons = document.getElementsByClassName("shoes31");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on a button, open the modal and populate form fields
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        var row = this.parentNode.parentNode; // Get the parent row of the clicked button
        modal31.style.display = "block";
    }
}

function closeModal31() {
    var modal31 = document.getElementById("myModal31");
    modal31.style.display = "none";
}

// ==============================================================================================================

// Get the modal
var modal32 = document.getElementById("myModal32");

// Get the button that opens the modal
var buttons = document.getElementsByClassName("shoes32");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on a button, open the modal and populate form fields
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        var row = this.parentNode.parentNode; // Get the parent row of the clicked button
        modal32.style.display = "block";
    }
}

function closeModal32() {
    var modal32 = document.getElementById("myModal32");
    modal32.style.display = "none";
}

// ==============================================================================================================

// Get the modal
var modal33 = document.getElementById("myModal33");

// Get the button that opens the modal
var buttons = document.getElementsByClassName("shoes33");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on a button, open the modal and populate form fields
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        var row = this.parentNode.parentNode; // Get the parent row of the clicked button
        modal33.style.display = "block";
    }
}

function closeModal33() {
    var modal33 = document.getElementById("myModal33");
    modal33.style.display = "none";
}

// ==============================================================================================================

// Get the modal
var modal34 = document.getElementById("myModal34");

// Get the button that opens the modal
var buttons = document.getElementsByClassName("shoes34");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on a button, open the modal and populate form fields
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        var row = this.parentNode.parentNode; // Get the parent row of the clicked button
        modal34.style.display = "block";
    }
}

function closeModal34() {
    var modal34 = document.getElementById("myModal34");
    modal34.style.display = "none";
}

// ==============================================================================================================

// Get the modal
var modal35 = document.getElementById("myModal35");

// Get the button that opens the modal
var buttons = document.getElementsByClassName("shoes35");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on a button, open the modal and populate form fields
for (var i = 0; i < buttons.length; i++) {
    buttons[i].onclick = function () {
        var row = this.parentNode.parentNode; // Get the parent row of the clicked button
        modal35.style.display = "block";
    }
}

function closeModal35() {
    var modal35 = document.getElementById("myModal35");
    modal35.style.display = "none";
}




