var app = new Vue({
  el: '#hamburger',
  data: {
    ActiveBtn: false
  }
});

/*  タブメニュー
-------------------------------------------------------*/
new Vue({
  el: '#tab',
  data: {
    isActive: '1'
  }
})

/*  accordion
-------------------------------------------------------*/

const acodTitle = document.querySelectorAll('.btnClick');

function toggle(){
  const content = this.nextElementSibling;
  this.classList.toggle('is-active');
  content.classList.toggle('is-open');
}

for (let i = 0; i < acodTitle.length; i ++){
  acodTitle[i].addEventListener('click', toggle)
}


/*  scroll animation
-------------------------------------------------------*/

ScrollReveal().reveal('.header', {
  origin: 'top',
  distance: '70px',
  duration: 1000,
  delay: 100,
  reset: true,
  viewFactor: 0,
});
ScrollReveal().reveal('.sec-title', {
  origin: 'left',
  distance: '70px',
  duration: 1000,
  delay: 100,
  reset: true,
  viewFactor: 0,
});
ScrollReveal().reveal('.fade-left', {
  origin: 'left',
  distance: '70px',
  duration: 1000,
  delay: 100,
  reset: true,
  viewFactor: 0,
});
ScrollReveal().reveal('.fade-right', {
  origin: 'right',
  distance: '70px',
  duration: 1000,
  delay: 100,
  reset: true,
  viewFactor: 0,
});
ScrollReveal().reveal('.fade-up', {
  origin: 'bottom',
  distance: '70px',
  duration: 1000,
  delay: 100,
  reset: true,
  viewFactor: 0,
});
