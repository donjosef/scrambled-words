const Word=function(){const e={};function t(){fetch("../assets/google10000English.txt").then(e=>e.text()).then(n)}function n(t){const n=t.split("\n").filter(e=>e.length>3),r=Math.floor(Math.random()*n.length);o.randomWord=n[r],e.wordContainer.textContent=n[r].shuffle()}String.prototype.shuffle=function(){let e=this.split("");for(let t=e.length-1;t>0;t--){let n=Math.floor(Math.random()*(t+1)),o=e[t];e[t]=e[n],e[n]=o}return e.join("")};const o={init:function(){e.wordContainer=document.querySelector(".game__word"),t()},getWords:t};return o}(),Score=function(){let e=0;const t={};function n(){t.score__span.textContent=`Score: ${e}`}return{init:function(){t.score__span=document.querySelector(".game__score")},increaseScore:function(){e++,n()},decreaseScore:function(){e--,n()}}}(),Outcome=function(){let e=3;const t={};const n={init:function(){t.outcome_p=document.querySelector(".game__paragraph")},win:function(){t.outcome_p.textContent="Bravo!"},decreaseChances:function(){e--,n.chances=e,t.outcome_p.textContent=e<1?`You lose! The word was ${Word.randomWord}`:`You wrong! ${e} chances left...`},resetChances:function(){e=3,n.chances=3},resetMessage:function(){t.outcome_p.textContent="Guess the word..."}};return n}(),Game=function(){const e={};function t(t){t.preventDefault(),e.guessInput.value===Word.randomWord?(Outcome.win(),Score.increaseScore(),setTimeout(()=>{Word.getWords(),Outcome.resetChances(),Outcome.resetMessage()},2e3)):(Outcome.decreaseChances(),0===Outcome.chances&&(Score.decreaseScore(),setTimeout(()=>{Word.getWords(),Outcome.resetChances(),Outcome.resetMessage()},3e3))),e.guessInput.value=""}return{init:function(){e.form=document.getElementById("guess-form"),e.guessInput=document.querySelector(".guess-form__input"),e.form.addEventListener("submit",t)}}}();document.addEventListener("DOMContentLoaded",()=>{Word.init(),Game.init(),Score.init(),Outcome.init()});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIldvcmQuanMiLCJTY29yZS5qcyIsIk91dGNvbWUuanMiLCJHYW1lLmpzIiwiYXBwLmpzIl0sIm5hbWVzIjpbIldvcmQiLCJET00iLCJnZXRXb3JkcyIsImZldGNoIiwidGhlbiIsInJlcyIsInRleHQiLCJnZXRSYW5kb21Xb3JkIiwiZmlsdGVyZWRXb3JkcyIsInNwbGl0IiwiZmlsdGVyIiwidyIsImxlbmd0aCIsInJhbmRvbSIsIk1hdGgiLCJmbG9vciIsInB1YmxpY0FQSSIsInJhbmRvbVdvcmQiLCJ3b3JkQ29udGFpbmVyIiwidGV4dENvbnRlbnQiLCJzaHVmZmxlIiwiU3RyaW5nIiwicHJvdG90eXBlIiwiYXJyIiwidGhpcyIsImkiLCJ0bXAiLCJqb2luIiwiaW5pdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsIlNjb3JlIiwic2NvcmUiLCJkaXNwbGF5U2NvcmUiLCJzY29yZV9fc3BhbiIsImluY3JlYXNlU2NvcmUiLCJkZWNyZWFzZVNjb3JlIiwiT3V0Y29tZSIsImNoYW5jZXMiLCJvdXRjb21lX3AiLCJ3aW4iLCJkZWNyZWFzZUNoYW5jZXMiLCJyZXNldENoYW5jZXMiLCJyZXNldE1lc3NhZ2UiLCJHYW1lIiwiY2hlY2tNYXRjaCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImd1ZXNzSW5wdXQiLCJ2YWx1ZSIsInNldFRpbWVvdXQiLCJmb3JtIiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiQUFBQSxNQUFBQSxLQUFBLFdBRUEsTUFBQUMsRUFBQSxHQW9CQSxTQUFBQyxJQUNBQyxNQUFBLG9DQUNBQyxLQUFBQyxHQUFBQSxFQUFBQyxRQUNBRixLQUFBRyxHQUdBLFNBQUFBLEVBQUFELEdBQ0EsTUFDQUUsRUFEQUYsRUFBQUcsTUFBQSxNQUNBQyxPQUFBQyxHQUFBQSxFQUFBQyxPQUFBLEdBQ0FDLEVBQUFDLEtBQUFDLE1BQUFELEtBQUFELFNBQUFMLEVBQUFJLFFBQ0FJLEVBQUFDLFdBQUFULEVBQUFLLEdBQ0FaLEVBQUFpQixjQUFBQyxZQUFBWCxFQUFBSyxHQUFBTyxVQTdCQUMsT0FBQUMsVUFBQUYsUUFBQSxXQUNBLElBQUFHLEVBQUFDLEtBQUFmLE1BQUEsSUFHQSxJQUFBLElBQUFnQixFQUZBRixFQUFBWCxPQUVBLEVBQUFhLEVBQUEsRUFBQUEsSUFBQSxDQUNBLElBQUFaLEVBQUFDLEtBQUFDLE1BQUFELEtBQUFELFVBQUFZLEVBQUEsSUFFQUMsRUFBQUgsRUFBQUUsR0FDQUYsRUFBQUUsR0FBQUYsRUFBQVYsR0FDQVUsRUFBQVYsR0FBQWEsRUFFQSxPQUFBSCxFQUFBSSxLQUFBLEtBMEJBLE1BQUFYLEVBQUEsQ0FDQVksS0FOQSxXQWpCQTNCLEVBQUFpQixjQUFBVyxTQUFBQyxjQUFBLGVBbUJBNUIsS0FLQUEsU0FBQUEsR0FHQSxPQUFBYyxFQTlDQSxHQ0FBZSxNQUFBLFdBQ0EsSUFBQUMsRUFBQSxFQUNBLE1BQUEvQixFQUFBLEdBZ0JBLFNBQUFnQyxJQUNBaEMsRUFBQWlDLFlBQUFmLHNCQUFBYSxJQU9BLE1BQUEsQ0FDQUosS0FMQSxXQWpCQTNCLEVBQUFpQyxZQUFBTCxTQUFBQyxjQUFBLGlCQXVCQUssY0FwQkEsV0FDQUgsSUFDQUMsS0FtQkFHLGNBaEJBLFdBQ0FKLElBQ0FDLE1BZkEsR0NBQUksUUFBQSxXQUNBLElBQUFDLEVBQUEsRUFDQSxNQUFBckMsRUFBQSxHQXFDQSxNQUFBZSxFQUFBLENBQ0FZLEtBTEEsV0E5QkEzQixFQUFBc0MsVUFBQVYsU0FBQUMsY0FBQSxxQkFvQ0FVLElBakNBLFdBQ0F2QyxFQUFBc0MsVUFBQXBCLFlBQUEsVUFpQ0FzQixnQkE5QkEsV0FDQUgsSUFDQXRCLEVBQUFzQixRQUFBQSxFQWVBckMsRUFBQXNDLFVBQUFwQixZQURBbUIsRUFBQSw0QkFDQXRDLEtBQUFpQiwyQkFFQXFCLHFCQVlBSSxhQXpCQSxXQUNBSixFQUFBLEVBQ0F0QixFQUFBc0IsUUFBQSxHQXdCQUssYUFyQkEsV0FDQTFDLEVBQUFzQyxVQUFBcEIsWUFBQSxzQkF1QkEsT0FBQUgsRUEvQ0EsR0NBQTRCLEtBQUEsV0FFQSxNQUFBM0MsRUFBQSxHQVdBLFNBQUE0QyxFQUFBQyxHQUNBQSxFQUFBQyxpQkFDQTlDLEVBQUErQyxXQUFBQyxRQUNBakQsS0FBQWlCLFlBQ0FvQixRQUFBRyxNQUNBVCxNQUFBSSxnQkFFQWUsV0FBQSxLQUNBbEQsS0FBQUUsV0FDQW1DLFFBQUFLLGVBQ0FMLFFBQUFNLGdCQUNBLE9BRUFOLFFBQUFJLGtCQUNBLElBQUFKLFFBQUFDLFVBQ0FQLE1BQUFLLGdCQUVBYyxXQUFBLEtBQ0FsRCxLQUFBRSxXQUNBbUMsUUFBQUssZUFDQUwsUUFBQU0sZ0JBQ0EsT0FJQTFDLEVBQUErQyxXQUFBQyxNQUFBLEdBUUEsTUFBQSxDQUNBckIsS0FOQSxXQXBDQTNCLEVBQUFrRCxLQUFBdEIsU0FBQXVCLGVBQUEsY0FDQW5ELEVBQUErQyxXQUFBbkIsU0FBQUMsY0FBQSxzQkFJQTdCLEVBQUFrRCxLQUFBRSxpQkFBQSxTQUFBUixLQVZBLEdDQUFoQixTQUFBd0IsaUJBQUEsbUJBQUEsS0FDQXJELEtBQUE0QixPQUNBZ0IsS0FBQWhCLE9BQ0FHLE1BQUFILE9BQ0FTLFFBQUFUIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IFdvcmQgPSAoZnVuY3Rpb24oKSB7XHJcblxyXG4gICAgY29uc3QgRE9NID0ge307XHJcblxyXG4gICAgU3RyaW5nLnByb3RvdHlwZS5zaHVmZmxlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGxldCBhcnIgPSB0aGlzLnNwbGl0KFwiXCIpOyBcclxuICAgICAgICBsZXQgbGVuZ3RoID0gYXJyLmxlbmd0aDtcclxuICAgIFxyXG4gICAgICAgIGZvcihsZXQgaSA9IGxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHsgXHJcbiAgICAgICAgICAgIGxldCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTsgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgdG1wID0gYXJyW2ldOyBcclxuICAgICAgICAgICAgYXJyW2ldID0gYXJyW3JhbmRvbV07IFxyXG4gICAgICAgICAgICBhcnJbcmFuZG9tXSA9IHRtcDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFyci5qb2luKFwiXCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBjYWNoZURPTSgpIHtcclxuICAgICAgICBET00ud29yZENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lX193b3JkJyk7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZ2V0V29yZHMoKSB7XHJcbiAgICAgICAgIGZldGNoKCcuLi9hc3NldHMvZ29vZ2xlMTAwMDBFbmdsaXNoLnR4dCcpXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy50ZXh0KCkpXHJcbiAgICAgICAgLnRoZW4oZ2V0UmFuZG9tV29yZClcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBnZXRSYW5kb21Xb3JkKHRleHQpIHtcclxuICAgICAgICBjb25zdCBhcnJPZldvcmRzID0gdGV4dC5zcGxpdCgnXFxuJyk7XHJcbiAgICAgICAgY29uc3QgZmlsdGVyZWRXb3JkcyA9IGFyck9mV29yZHMuZmlsdGVyKHcgPT4gdy5sZW5ndGggPiAzKTtcclxuICAgICAgICBjb25zdCByYW5kb20gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBmaWx0ZXJlZFdvcmRzLmxlbmd0aCk7XHJcbiAgICAgICAgcHVibGljQVBJLnJhbmRvbVdvcmQgPSBmaWx0ZXJlZFdvcmRzW3JhbmRvbV07IC8vd2hlbiB0aGUgYXN5bmMgam9iIGlzIGRvbmUsIHNldCB3b3JkIHB1YmxpY2x5XHJcbiAgICAgICAgRE9NLndvcmRDb250YWluZXIudGV4dENvbnRlbnQgPSBmaWx0ZXJlZFdvcmRzW3JhbmRvbV0uc2h1ZmZsZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAgICAgY2FjaGVET00oKVxyXG4gICAgICAgIGdldFdvcmRzKCkgICAgICAgICAgICAgXHJcbiAgICB9XHJcbiAgIFxyXG4gICAgY29uc3QgcHVibGljQVBJID0ge1xyXG4gICAgICAgIGluaXQ6IGluaXQsXHJcbiAgICAgICAgZ2V0V29yZHM6IGdldFdvcmRzXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBwdWJsaWNBUEk7XHJcbiAgICBcclxufSkoKTsiLCJjb25zdCBTY29yZSA9IChmdW5jdGlvbigpIHtcclxuICAgIGxldCBzY29yZSA9IDA7XHJcbiAgICBjb25zdCBET00gPSB7fTtcclxuXHJcbiAgICBmdW5jdGlvbiBjYWNoZURPTSgpIHtcclxuICAgICAgICBET00uc2NvcmVfX3NwYW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZV9fc2NvcmUnKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gaW5jcmVhc2VTY29yZSgpIHtcclxuICAgICAgICBzY29yZSsrO1xyXG4gICAgICAgIGRpc3BsYXlTY29yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGRlY3JlYXNlU2NvcmUoKSB7XHJcbiAgICAgICAgc2NvcmUtLTtcclxuICAgICAgICBkaXNwbGF5U2NvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkaXNwbGF5U2NvcmUoKSB7XHJcbiAgICAgICAgRE9NLnNjb3JlX19zcGFuLnRleHRDb250ZW50ID0gYFNjb3JlOiAke3Njb3JlfWA7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgICAgICBjYWNoZURPTSgpO1xyXG4gICAgfVxyXG4gXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGluaXQ6IGluaXQsXHJcbiAgICAgICAgaW5jcmVhc2VTY29yZTogaW5jcmVhc2VTY29yZSxcclxuICAgICAgICBkZWNyZWFzZVNjb3JlOiBkZWNyZWFzZVNjb3JlXHJcbiAgICB9XHJcbiAgICBcclxufSkoKTsiLCJjb25zdCBPdXRjb21lID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IGNoYW5jZXMgPSAzO1xyXG4gICAgY29uc3QgRE9NID0ge307XHJcblxyXG4gICAgZnVuY3Rpb24gY2FjaGVET00oKSB7XHJcbiAgICAgICAgRE9NLm91dGNvbWVfcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lX19wYXJhZ3JhcGgnKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZnVuY3Rpb24gd2luKCkge1xyXG4gICAgICAgIERPTS5vdXRjb21lX3AudGV4dENvbnRlbnQgPSAnQnJhdm8hJztcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBkZWNyZWFzZUNoYW5jZXMoKSB7XHJcbiAgICAgICAgY2hhbmNlcy0tO1xyXG4gICAgICAgIHB1YmxpY0FQSS5jaGFuY2VzID0gY2hhbmNlczsgLy9hZnRlciBkZWNyZWFzZSBjaGFuY2VzLCBleHBvcnQgcHVibGljbHlcclxuICAgICAgICBkaXNwbGF5T3V0Y29tZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlc2V0Q2hhbmNlcygpIHtcclxuICAgICAgICBjaGFuY2VzID0gMztcclxuICAgICAgICBwdWJsaWNBUEkuY2hhbmNlcyA9IDM7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gcmVzZXRNZXNzYWdlKCkge1xyXG4gICAgICAgIERPTS5vdXRjb21lX3AudGV4dENvbnRlbnQgPSAnR3Vlc3MgdGhlIHdvcmQuLi4nXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gZGlzcGxheU91dGNvbWUoKSB7XHJcbiAgICAgICAgaWYoY2hhbmNlcyA8IDEpIHtcclxuICAgICAgICAgICAgRE9NLm91dGNvbWVfcC50ZXh0Q29udGVudCA9IGBZb3UgbG9zZSEgVGhlIHdvcmQgd2FzICR7V29yZC5yYW5kb21Xb3JkfWA7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgRE9NLm91dGNvbWVfcC50ZXh0Q29udGVudCA9IGBZb3Ugd3JvbmchICR7Y2hhbmNlc30gY2hhbmNlcyBsZWZ0Li4uYDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgICAgICBjYWNoZURPTSgpO1xyXG4gICAgfVxyXG4gXHJcbiAgICBjb25zdCBwdWJsaWNBUEkgPSB7XHJcbiAgICAgICAgaW5pdDogaW5pdCxcclxuICAgICAgICB3aW46IHdpbixcclxuICAgICAgICBkZWNyZWFzZUNoYW5jZXM6IGRlY3JlYXNlQ2hhbmNlcyxcclxuICAgICAgICByZXNldENoYW5jZXM6IHJlc2V0Q2hhbmNlcyxcclxuICAgICAgICByZXNldE1lc3NhZ2U6IHJlc2V0TWVzc2FnZVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBwdWJsaWNBUEk7XHJcbiAgICBcclxufSkoKTsiLCJjb25zdCBHYW1lID0gKGZ1bmN0aW9uKCkge1xyXG4gICAgXHJcbiAgICBjb25zdCBET00gPSB7fTtcclxuXHJcbiAgICBmdW5jdGlvbiBjYWNoZURPTSgpIHtcclxuICAgICAgICBET00uZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdndWVzcy1mb3JtJyk7XHJcbiAgICAgICAgRE9NLmd1ZXNzSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ3Vlc3MtZm9ybV9faW5wdXQnKTtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBiaW5kRXZlbnRzKCkge1xyXG4gICAgICAgIERPTS5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGNoZWNrTWF0Y2gpO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrTWF0Y2goZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCBpbnB1dFRleHQgPSBET00uZ3Vlc3NJbnB1dC52YWx1ZTtcclxuICAgICAgICBpZihpbnB1dFRleHQgPT09IFdvcmQucmFuZG9tV29yZCkge1xyXG4gICAgICAgICAgICBPdXRjb21lLndpbigpO1xyXG4gICAgICAgICAgICBTY29yZS5pbmNyZWFzZVNjb3JlKCk7XHJcblxyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgIFdvcmQuZ2V0V29yZHMoKTtcclxuICAgICAgICAgICAgICAgIE91dGNvbWUucmVzZXRDaGFuY2VzKCk7XHJcbiAgICAgICAgICAgICAgICBPdXRjb21lLnJlc2V0TWVzc2FnZSgpO1xyXG4gICAgICAgICAgICAgfSwgMjAwMCk7IC8vZ2V0IG5ldyB3b3JkIGFuZCByZXNldCBjaGFuY2VzIGFmdGVyIDIgc2Vjb25kc1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIE91dGNvbWUuZGVjcmVhc2VDaGFuY2VzKCk7XHJcbiAgICAgICAgICAgIGlmKE91dGNvbWUuY2hhbmNlcyA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgU2NvcmUuZGVjcmVhc2VTY29yZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIFdvcmQuZ2V0V29yZHMoKTtcclxuICAgICAgICAgICAgICAgICAgICBPdXRjb21lLnJlc2V0Q2hhbmNlcygpO1xyXG4gICAgICAgICAgICAgICAgICAgIE91dGNvbWUucmVzZXRNZXNzYWdlKCk7XHJcbiAgICAgICAgICAgICAgICAgfSwgMzAwMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIERPTS5ndWVzc0lucHV0LnZhbHVlID0gXCJcIjsgLy9jbGVhciBpbnB1dFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICAgICAgY2FjaGVET00oKTtcclxuICAgICAgICBiaW5kRXZlbnRzKCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgaW5pdDogaW5pdFxyXG4gICAgfVxyXG59KSgpOyIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XHJcbiAgICBXb3JkLmluaXQoKTtcclxuICAgIEdhbWUuaW5pdCgpO1xyXG4gICAgU2NvcmUuaW5pdCgpO1xyXG4gICAgT3V0Y29tZS5pbml0KCk7XHJcbn0pO1xyXG5cclxuIl19
