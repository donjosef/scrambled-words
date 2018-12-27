const Game = (function() {
    
    const DOM = {};

    function cacheDOM() {
        DOM.form = document.getElementById('guess-form');
        DOM.guessInput = document.querySelector('.guess-form__input');
    }

    function bindEvents() {
        DOM.form.addEventListener('submit', checkMatch);
    }

    function init() {
        cacheDOM();
        bindEvents();
    }
    
    return {
        init: init
    }
})();