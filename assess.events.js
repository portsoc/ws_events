"use strict";
QUnit.module("Basics");

QUnit.test("Change the id method in index.js to return your student ID.",
    function(assert) {
        assert.notEqual(
            id(),
            "UP000000",
            "The ID function should return your student ID."
        );
    }
);

QUnit.module("Events");

function lovelyToggle() {
    window.thisisalovelyparagraph.classList.toggle("lovely");
}


QUnit.test(

    "Create a function `lovelyParaAttacher` that attaches an event listener to the `thisisalovelyparagraph` element.  When the paragraph is clicked the `lovelyToggle` function should be invoked.  You can find lovelyToggle in the `assess.events.js` file.",

    function(assert) {

        assert.ok(
            typeof lovelyParaAttacher === "function",
            "Create a lovelyParaAttacher function."
        );

        lovelyParaAttacher();

        assert.equal(
            window.thisisalovelyparagraph.className,
            "",
            "Before the first click event is fired, the element has no class."
        );

        window.thisisalovelyparagraph.dispatchEvent( new MouseEvent("click"));

        assert.equal(
            window.thisisalovelyparagraph.className,
            "lovely",
            "After the first click event is fired, the element class is `lovely`."
        );

        window.thisisalovelyparagraph.dispatchEvent( new MouseEvent("click"));

        assert.equal(
            window.thisisalovelyparagraph.className,
            "",
            "After the second click event is fired, the element has no class`."
        );



        window.thisisalovelyparagraph.parentElement.classList.add("done");

      }
);

QUnit.test(

    "Create a function `lovelyButtonAttacher` that attaches an event listener to the `button1` element.  When `button1` is clicked the `lovelyToggle` function should be invoked.",

    function(assert) {

        assert.ok(
            typeof lovelyButtonAttacher === "function",
            "Create a lovelyButtonAttacher function."
        );

        lovelyButtonAttacher();

        assert.equal(
            window.thisisalovelyparagraph.className,
            "",
            "Before the first click event is fired, the element has no class."
        );

        window.button1.dispatchEvent( new MouseEvent("click"));

        assert.equal(
            window.thisisalovelyparagraph.className,
            "lovely",
            "After the first click event is fired, the element class is `lovely`."
        );

        window.button1.dispatchEvent( new MouseEvent("click"));

        assert.equal(
            window.thisisalovelyparagraph.className,
            "",
            "After the second click event is fired, the element has no class`."
        );



        window.button1.parentElement.classList.add("done");

      }
);
