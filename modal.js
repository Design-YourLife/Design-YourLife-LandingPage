document.getElementById('btn_started').addEventListener('click', function() {
  document.querySelector('.bg-modal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function() {
  document.querySelector('.bg-modal').style.display = 'none';
});

/////////////////////////////////////////

document.getElementById('menu-icon').addEventListener('click', function() {
  document.querySelector('.menu-modal').style.display = 'flex';
  document.querySelector('.menu_off').style.display = 'none';
  document.querySelector('.menu_on').style.display = 'flex';
});

document.getElementById('menu-icon2').addEventListener('click', function() {
  document.querySelector('.menu-modal').style.display = 'none';
  document.querySelector('.menu_off').style.display = 'flex';
  document.querySelector('.menu_on').style.display = 'none';
});
