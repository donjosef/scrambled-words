const Game = (function() {
    
    const DOM = {};

    function cacheDOM() {
        DOM.form = document.getElementById('guess-form');
        DOM.guessInput = document.querySelector('.guess-form__input');
    }

    function bindEvents() {
        DOM.form.addEventListener('submit', checkMatch);
    }


    function checkMatch(e) {
        e.preventDefault();
        const inputText = DOM.guessInput.value;
        if(inputText === Word.randomWord) {
            Score.increaseScore();
        }
        
    }

    function init() {
        cacheDOM();
        bindEvents();
    }
    
    return {
        init: init
    }
})();