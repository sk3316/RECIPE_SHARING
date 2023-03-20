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