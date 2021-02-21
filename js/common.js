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
