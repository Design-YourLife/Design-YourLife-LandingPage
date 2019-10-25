// navigation menu drop down team page

document.getElementById('menu-icon-team1').addEventListener('click', function() {
  document.querySelector('.menu-modal').style.display = 'flex';
  document.querySelector('.menu_off').style.display = 'none';
  document.querySelector('.menu_on').style.display = 'flex';
});

document.getElementById('menu-icon-team2').addEventListener('click', function() {
  document.querySelector('.menu-modal').style.display = 'none';
  document.querySelector('.menu_off').style.display = 'flex';
  document.querySelector('.menu_on').style.display = 'none';
});
