// <!-- Java script -->
{/* <script> */}
   function selectTab(tabIndex) {
      // Declare all variables
      var i, tabcontent;
     
      // Get all elements with class="tabcontent" and hide them
      tabcontent = document.getElementsByClassName("tabcontent");
      for (i = 0; i < tabcontent.length; i++) {
         tabcontent[i].style.display = "none";
      }
      //Show the Selected Tab
      document.getElementById(tabIndex).style.display = "block";
   }
// </script>

function search_animal() {
   let input = document.getElementById('searchbar').value
   input=input.toLowerCase();
   let x = document.getElementsByClassName('animals');
     
   for (i = 0; i < x.length; i++) { 
       if (!x[i].innerHTML.toLowerCase().includes(input)) {
           x[i].style.display="none";
       }
       else {
           x[i].style.display="list-item";                 
       }
   }
}