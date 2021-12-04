queryList = ["h1", "h2", "h3", "h4", "p", "li", "span", "code", "a"];
function listWords(text) {
  return text.split(" ");
}

function reverseText(text) {
  return text.split("").reverse().join("");
}

function elementParser() {
  for (type in queryList) {
    pars = document.querySelectorAll(queryList[type]);
    for (par in pars) {
      try {
        pars[par].innerText = reverseText(pars[par].innerText);
      } catch {
        console.log("get fucked" + par + type);
      }
    }
  }
}

elementParser()
