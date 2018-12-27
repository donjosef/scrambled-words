const Score = (function() {
    let score = 0;
    const DOM = {};

    function cacheDOM() {
        DOM.score__span = document.querySelector('.game__score');
    }
    
    function increaseScore() {
        score++;
        displayScore();
    }

    function decreaseScore() {
        score--;
        displayScore();
    }

    function displayScore() {
        DOM.score__span.textContent = `Score: ${score}`;
    }

    function init() {
        cacheDOM();
    }
 
    return {
        init: init,
        increaseScore: increaseScore,
        decreaseScore: decreaseScore
    }
    
})();