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




QUnit.test(

    "Create a function `concatAttacher` that attaches an event listener to the `in1` and `in2` input elements.  Write an event handler function that fulfills the following requirement: when `in1` and `in2` change, their content should be joined together and placed inside the `out1` element, such that if you entered `Darth` and `Vader` the content of `out1` would be `DarthVader`.",

    function(assert) {

        assert.ok(
            typeof concatAttacher === "function",
            "Create a concatAttacher function."
        );

        concatAttacher();

        assert.equal(
            window.out1.textContent,
            window.in1.value + window.in2.value,
            "Before the first change, out1 has no text."
        );

        window.in1.value = "Darth";
        window.in1.dispatchEvent( new Event("change") );
        window.in2.value = "Vader";
        window.in2.dispatchEvent( new Event("change") );

        assert.equal(
            window.out1.textContent,
            "DarthVader",
            "After the first change, out1 reads `DarthVader`."
        );

        window.in2.value = "Tyrannus";
        window.in2.dispatchEvent( new Event("change") );

        assert.equal(
            window.out1.textContent,
            "DarthTyrannus",
            "After the first change, out1 reads `DarthTyrannus`."
        );


        window.in1.value = "Luke";
        window.in1.dispatchEvent( new Event("change") );
        window.in2.value = "Skywalker";
        window.in2.dispatchEvent( new Event("change") );

        assert.equal(
            window.out1.textContent,
            "LukeSkywalker",
            "After the first change, out1 reads `LukeSkywalker`."
        );

        window.conzone.classList.add("done");

      }
);







QUnit.test(

    "The div `mousewatcher` contains a paragraph `snitch`.  When the mouse is pointing at `mousewatcher`, the `snitch` paragraph should say `IN`, otherwise it should say `OUT`.  Write a function `snitchAttacher`.  `snitchAttacher` should associate the (provided) `snitchUpdater` function with the `mouseover` and `mouseout` events.",

    function(assert) {

        assert.ok(
            typeof snitchAttacher === "function",
            "Create a snitchAttacher function."
        );

        snitchAttacher();

        window.mousewatcher.dispatchEvent( new MouseEvent("mouseover") );

        assert.equal(
            window.snitch.textContent,
            "IN",
            "After a `mousein` event, the `snitch` text should be `IN`."
        );

        window.mousewatcher.dispatchEvent( new MouseEvent("mouseout") );

        assert.equal(
            window.snitch.textContent,
            "OUT",
            "After a `mousein` event, the `snitch` text should be `OUT`."
        );

        window.mousewatcher.parentElement.classList.add("done");

      }
);
