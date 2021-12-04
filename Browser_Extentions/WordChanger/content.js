WORD = 'PooPoo'

queryList = ["span", "h1", "h2", "h3", "h4", "p", "li", "code", "a"];

function spanWords(text, par) {
  // pars[par].innerHTML ='<span>'+ pars[par].innerText.split("").reverse().join("</span><span>")+"</span>"
  wordList = listWords(text);
  for (word in wordList) {
    wordList[word] =
      "<span id=" + par + word + ">" + wordList[word] + "</span>";
  }
  wordList = wordList.join(" ");
  return wordList;
}

function listWords(text) {
  return text.split(" ");
}
function elementParser() {
  for (type in queryList) {
    pars = document.querySelectorAll(queryList[type]);
    for (par in pars) {
      try {
        pars[par].innerHTML = spanWords(pars[par].innerText, par);
      } catch {
        console.log("get fucked");
      }
    }
  }
}
function eventMaker() {
  var allSpans = document.querySelectorAll("span");
  for (i = 0; i < allSpans.length; i++) {
    allSpans[i].addEventListener("mouseenter", function () {
      this.innerText = WORD;
    });
  }
}

elementParser();
eventMaker();
