// import emojiList is not not suitable for this project if we use it we need to maek 
// import { emojiList } from "./emojiList.js";

const input = document.querySelector('input');
const results = document.querySelector('#results');

window.addEventListener('load', ()=> displayEmoji(emojiList));

input.addEventListener('keyup', searchEmoji);


function displayEmoji(arr) {
  results.innerHTML = "";
  arr.forEach((obj)=>{
    const emoji = document.createElement('span');
    emoji.innerText = obj.emoji;
    emoji.classList.add('emoji');
    results.append(emoji);
  });

}
function searchEmoji() {
  const inputValue = input.value.toLowerCase();

  const resultsArr = emojiList.filter((obj) =>{
    if(obj.description.includes(inputValue)) return true;
    else if(obj.aliases.toString().includes(inputValue)) return true;
    else if(obj.tags.toString().includes(inputValue)) return true;
  });

  displayEmoji(resultsArr);
}
function searchSame(emoji) {

  const faceArr = emojiList.filter((obj)=>{
    if(obj.description.includes(emoji)) return true;
    else if(obj.aliases.toString().includes(emoji)) return true;
    else if(obj.tags.toString().includes(emoji)) return true;
  });

  displayEmoji(faceArr);
  input.value = "";
  input.focus();
}

