questionRA = [
    "What is the nickname of Steve Wilkos? a: Bamdino, b: Bam-Bam, c: Dino",
    "In what branch of the US Armed Forces did Steve Wilkos serve? a: USMC, b: US Army, c: US Air Force, d: US Navy",
    "In what police force was Steve Wilkos? a: Chicago PD, b: NYPD, c: LAPD, d: MPDC (Washington, DC Police)",
];
    const titleInput = document.getElementById('titleInput');
    const yearInput = document.getElementById('yearInput');
    const triviaContnt = document.getElementById('triviaContnt');
    const triviaInpt = document.getElementById('triviaInpt');
    const answrBtn = document.getElementById('answrBtn');
    const nxtQuestn = document.getElementById('nxtQuestn');
    const rstGame = document.getElementById('rstGame');
    const ansRslt = document.getElementById('answrRslt');
    //directly above is set of variables that I think are mainly related to the quiz function...
    const steveVideo = document.getElementById('steveVideo');
    const steveReal = document.getElementById('steveReal');
    //directly above is the set of variables that I think are mainly related to the toggle function...
    const movieTbl = document.getElementById('movieTbl');
    const msgContainer = document.getElementById('msgContainer');
    //directly above is the set of variables that I think are mainly related to the table entry function...


triviaFunc = () => {
    triviaContnt.classList.toggle('classHider');
    triviaInpt.classList.toggle('classHider');
    answrBtn.classList.toggle('classHider');
    nxtQuestn.classList.toggle('classHider');
    rstGame.classList.toggle('classHider');
    triviaContnt.innerHTML = questionArray[0];
};

enterAnswer = () => {
    ansRslt.classList.toggle('classHider');
    switch (questionRA.indexOf(triviaContnt.innerHTML)) {
        case 0:
        question1Handler();
        break;
        case 1:
        question2Handler();
        break;
        case 2:
        question3Handler();
        break;
    }
};

question1Handler = () => {
    if (triviaInput.value === 'a') {
      ansRslt.innerHTML = 'Correct!';
    } else {
      nxtQuestn.classList.toggle('classHider');
      answRslt.innerHTML = 'Incorrect, please reset game';
    }
    resetInputValues();
  };
  
  question2Handler = () => {
    if (triviaInput.value === 'a') {
      ansRslt.innerHTML = 'Correct!';
    } else {
      nxtQuestn.classList.toggle('classHider');
      ansRslt.innerHTML = 'Incorrect, please reset game';
    }
    resetInputValues();
  };
  
  question3Handler = () => {
    if (triviaInput.value === 'a') {
      ansRslt.innerHTML = 'Correct! You win the game';
    } else {
      nxtQuestn.classList.toggle('classHider');
      ansRslt.innerHTML = 'Incorrect, please reset game';
    }
    resetInputValues();
    nxtQuestn.classList.toggle('classHider');
  };

  nextQuestionFunc = () => {
    if (questionRA.indexOf(triviaCntnt.innerHTML) === 0) {
      triviaContnt.innerHTML = questionArray[1];
      ansRslt.classList.toggle('classHider');
    } else if (questionRA.indexOf(triviaContnt.innerHTML) === 1) {
      triviaContnt.innerHTML = questionRA[2];
      ansRslt.classList.toggle('classHider');
    } else {
      triviaContnt.innerHTML = 'GAME OVER!!';
    }
  };

  resetGameFunc = () => {
    triviaContnt.classList.toggle('classHider');
    triviaInpt.classList.toggle('classHider');
    answrBtn.classList.toggle('classHider');
    ansRslt.classList.toggle('classHider');
    rstGame.classList.toggle('classHider');
    triviaContnt.innerHTML = '';
    ansRslt.innerHTML = '';
    resetInputValues();
  };

  //directly above is the set of functions for what I believe influence the quiz...

  toggleHidden = () => {
    steveVideo.classList.toggle('classHider');
    steveReal.classList.toggle('classHider');
  };
  
  //directly above is the function that I believe pertains mainly to the toggle...

  addRow = () => {
    const rowCount = movieTbl.rows.length;
    const row = movieTbl.insertRow(rowCount);
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
  
    cell1.innerHTML = titleInput.value;
    cell2.innerHTML = yearInput.value;
  
    this.resetInputValues();
  };
  //directly above is function that adds rows...

  resetInputValues = () => {
      titleInput.value = '';
      yearInput.value = '';
      triviaInput.value = '';
    
  };

  //directly above is the reset for the row adding...

  postMessage = () => {
    const comment = document.getElementById('message').value;
    const newMessage = document.createElement("P");
    newMessage.id = "messageCard"
    newMessage.innerHTML = new Date() + ": " + comment
    newMessage.onclick = deleteMessage = () => {
      newMessage.parentNode.removeChild(newMessage);
    }
    messageContainer.append(newMessage);
  }
  //directly above is the post function?