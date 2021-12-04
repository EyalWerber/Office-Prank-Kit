

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendRespons) {
    queryList = ['h1','h2','h3','h4','p','li','span','code','a']
    function listWords(text){
        return text.split(" ")
        
    }

    function spanWords(text){  
        // pars[par].innerHTML ='<span>'+ pars[par].innerText.split("").reverse().join("</span><span>")+"</span>"
        wordList =listWords(text)
        for(word in wordList){
            wordList[word] = '<span>'+word+'</span>'
        }
        wordList = wordList.join("")
        return wordList
    }
    function reverseText(text){
        return text.split("").reverse().join("") 

    }

    function elementParser(){
        for(type in queryList){        
            pars = document.querySelectorAll(queryList[type])
            for(par in pars){
                try{

                    pars[par].innerText = reverseText(pars[par].innerText)
                }
                    
                catch{
                    console.log('get fucked'+par+type)
                }
            }
        }
    }
 
    elementParser()
    
}