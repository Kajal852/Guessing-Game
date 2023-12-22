const words=['grapes','pineapple','cabbage','blueberry','watermelon','capsicum']

targetText= words[Math.floor(Math.random()*words.length)]
console.log(targetText)


function displayRandomText(targetText){
    targetText=targetText.split("");
    textLen=targetText.length-1
    for(let i=0; i < textLen; i++){
        tmp = targetText[i];
        randomNo=Math.floor(Math.random()*textLen);
        targetText[i]=targetText[randomNo];
        targetText[randomNo]=tmp;
                
    }
    targetText=targetText.join('');
    //console.log(targetText) 
    document.getElementById('displayedText').innerHTML=targetText;
}

function checkGuess(){
    const guess=guessInput.value.toLowerCase();
    if(guess==targetText){
        message.innerHTML="Congratulation! You Guessed The Word";
        message.style.color=' #AAFF00';
        message.style.fontSize='35px';
    }
    else{
        message.innerHTML="Sorry! You Guessed The Wrong Word Please Try Again!!!";
        message.style.color='red';
    }
}

displayRandomText(targetText);