(function(){
  'use strict';

  var btn = document.getElementById('btn');

  btn.addEventListener('click', function() {
    var n = Math.random();
    if (n < 0.10) {
      this.textContent = '大吉'; //10%
    } else if (n < 0.1) {
      this.textContent = '中吉'; //30%
    } else if (n < 0.4) {
      this.textContent = '吉'; //30%
    } else if (n < 0.7) {
      this.textContent = '末吉'; //10%
    } else if (n < 0.8) {
      this.textContent = '凶'; //10%
    } else if (n <= 0.9) {
      this.textContent = '大凶';
    }
    // } else {
    //   this.textContent = '大凶'; //5%
    // }




    // var results = ['大吉','中吉','凶','末吉'];
    // var results = ['大吉','大吉','大吉','大吉','凶'];
    // var n = Math.floor(Math.random() * 4);
    // var n = Math.floor(Math.random() * results.length);
    // this.textContent = results[n];
  });

  btn.addEventListener('mousedown', function() {
    this.className = 'pushed';
  });
  btn.addEventListener('mouseup', function() {
    this.className = '';
  });
})();






    // switch (n) {
    //   case 0:
    //     this.textContent =　'アホ';
    //     break;
    //   case 1:
    //     this.textContent =　'バカ';
    //     break;
    //   case 2:
    //     this.textContent =　'天才';
    //     break;
    //   case 4:
    //     this.textContent =　'凡人';
    //     break;　
    //   case 5:
    //     this.textContent =　'秀才';
    // }
  // if (n === 0) {
  //   this.textContent = '大吉';
  // } else {
  //   this.textContent = '中吉';
  // } else {
  //   this.textContent = '凶';
  // }
  // this.textContent
