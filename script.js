document.addEventListener('DOMContentLoaded', function () {
  
  const backButton = document.getElementById('backButton');

  if (backButton) {
    backButton.addEventListener('click', function () {
      window.location.href = 'https://tourloua.github.io/alextourloukis/'; // Change link to project main page
    });
  }

});
