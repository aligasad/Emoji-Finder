// import emojiList is not not suitable for this project if we use it we need to maek 
// import { emojiList } from "./emojiList.js";

const input = document.querySelector('input');
const results = document.querySelector('#results');

window.addEventListener('load', ()=> displayEmoji(emojiList));

input.addEventListener('keyup', searchEmoji);


function displayEmoji(arr) {
  results.innerHTML = "";
  const fragment = document.createDocumentFragment();
  arr.forEach((obj)=>{
    const emoji = document.createElement('span');
    emoji.innerText = obj.emoji;
    emoji.classList.add('emoji');
    fragment.append(emoji);
    emoji.addEventListener('click', ()=>clickToCopy(obj.emoji));
  });
  results.append(fragment);
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

function clickToCopy(text) {
  window.navigator.clipboard.writeText(text)
  .then((response)=>{
    alert("Emoji Copied Sucessfully");
  })
  .catch((error)=>{
    alert("Something went wrong")
  })
}

