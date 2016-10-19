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


function exampleAttacher() {
  window.exampleid.addEventListener("click", exampleEventHandler);
}

function exampleEventHandler(event) {
    console.log("This is a", event.type, "event.");
}

function snitchUpdater(event) {
  if (event.type == 'mouseover') {
    window.snitch.textContent = "IN";
  }
  if (event.type == 'mouseout') {
    window.snitch.textContent = "OUT";
  }
}
