var ClearInput = require('../bower_components/dna-form/components/js/clear-input');

// Use the module however you need....
var inputs = document.querySelectorAll('[data-clearinput]');
[].slice.call(inputs).forEach(function (input) {
    if (input.getAttribute('data-clearinput') === 'false') {
        return;
    }
    new ClearInput({
        el: input
    });
});
