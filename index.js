/*
 * This is index.js
 * Start by modifying the id, fn and sn functions to return
 * information about you, then open index.html to check what
 * else you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year shoudl use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

function id() {
    return "UP000000";
}


function lovelyButtonAttacher() {
  window.button1.addEventListener("click", lovelyToggle);
}

function lovelyParaAttacher() {
  window.thisisalovelyparagraph.addEventListener("click", lovelyToggle);
}
