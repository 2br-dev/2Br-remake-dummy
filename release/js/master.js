(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

$(function () {
  if (document.querySelector('main#index')) {
    particlesJS.load('particles-js', '/js/particles.json');
    var year = new Date().getFullYear().toString();
    var oldYear = document.querySelector('.old-year').innerHTML;

    if (oldYear != year) {
      document.querySelector('.now-year').innerHTML = " – " + year;
    }
  }

  animate();
  $('.lazy, video').lazy({
    afterLoad: function afterLoad(el) {
      el.addClass('complete');
    }
  });
});

function animate() {
  var scrollPos = $('html,body').scrollTop();
  $('.scrolling-bg').each(function (index, el) {
    var offset = $(el).data('offset') ? parseInt($(el).data('offset')) : 0;
    $(el).css({
      backgroundPosition: scrollPos + offset + 'px center'
    });
  });
  $('.scrolling-bg-reverse').each(function (index, el) {
    var offset = $(el).data('offset') ? parseInt($(el).data('offset')) : 0;
    $(el).css({
      backgroundPosition: 0 - scrollPos - offset + 'px center'
    });
  });
  $('.scrollingv').each(function (index, el) {
    var offset = $(el).data('offset') ? parseInt($(el).data('offset')) : 0;
    var speed = $(el).data('speed') ? parseFloat($(el).data('speed')) : 0;
    var scrollTop = $('html,body').scrollTop();
    var pos = scrollTop / speed;
    $(el).css({
      backgroundPosition: 'center ' + pos + 'px'
    });
  });
  requestAnimationFrame(animate);
}

},{}]},{},[1]);
