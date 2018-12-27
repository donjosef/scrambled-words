const Outcome = (function() {
    let chances = 3;
    const DOM = {};

    function cacheDOM() {
        DOM.outcome_p = document.querySelector('.game__paragraph');
    }
    
    function win() {
        DOM.outcome_p.textContent = 'Bravo!';
    }

    function decreaseChances() {
        chances--;
        publicAPI.chances = chances; //after decrease chances, export publicly
        displayOutcome();
    }

    function displayOutcome() {
        if(chances < 1) {
            DOM.outcome_p.textContent = `You lose! The word was ${Word.randomWord}`;
        } else {
            DOM.outcome_p.textContent = `You wrong! ${chances} chances left...`;
        }
    }

    function init() {
        cacheDOM();
    }
 
    const publicAPI = {
        init: init,
        win: win,
        decreaseChances: decreaseChances
    }

    return publicAPI;
    
    
})();