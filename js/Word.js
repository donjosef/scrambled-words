const Word = (function() {

    const DOM = {};

    String.prototype.shuffle = function () {
        let arr = this.split(""); 
        let length = arr.length;
    
        for(let i = length - 1; i > 0; i--) { 
            let random = Math.floor(Math.random() * (i + 1)); 
            
            let tmp = arr[i]; 
            arr[i] = arr[random]; 
            arr[random] = tmp;
        }
        return arr.join("");
    };

    function cacheDOM() {
        DOM.wordContainer = document.querySelector('.game__word');
    }

    function getWords() {
         fetch('../assets/google10000English.txt')
        .then(res => res.text())
        .then(getRandomWord)
    }

    function getRandomWord(text) {
        const arrOfWords = text.split('\n');
        const filteredWords = arrOfWords.filter(w => w.length > 3);
        const random = Math.floor(Math.random() * filteredWords.length);
        publicAPI.randomWord = filteredWords[random]; //when the async job is done, set word publicly
        DOM.wordContainer.textContent = filteredWords[random].shuffle();
    }

    function init() {
        cacheDOM()
        getWords()             
    }
   
    const publicAPI = {
        init: init,
        getWords: getWords
    };

    return publicAPI;
    
})();