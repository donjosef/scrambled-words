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
        displayOutcome();
    }

    function displayOutcome() {
        DOM.outcome_p.textContent = `You wrong! ${chances} chances left...`;
    }

    function init() {
        cacheDOM();
    }
 
    return {
        init: init,
        win: win,
        decreaseChances: decreaseChances
    }
    
})();