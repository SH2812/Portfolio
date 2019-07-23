//all questions, corresponding answer options, and correct answer (index of choices) ---- all contained within objects
(function() {

  var questions = [{
  question: "1)Which of these IS NOT a human right?",
    choices: ["Right to own property","Right to rest and leisure","Freedom of speech","Freedom of belief and religion"],
    correctAnswer: 2
  }, {
  question: "2)What is the difference between a refugee and an immigrant?",
    choices: ["A refugee is someone who has been in danger and decides to leave his or her country while an immigrant leaves their country for a better life.",
"A refugee is someone who has been forced to flee his or her home because of war, violence or persecution, often without warning while an immigrant is someone who makes a conscious decision to leave his or her home and move to a foreign country with the intention of settling there.",
"A refugee is only in a certain country temporarily while an immigrant comes to the country permanently.",
"There is no difference"],
    correctAnswer: 1
  },
  {
    question: "3)Around how many people are displaced each year?",
    choices: ["65 million people", "70 million people", "50 million people", "40 million people"],
    correctAnswer: 0
  },
  {
    question: "4)What percentage of displaced people are children?",
    choices: ["30%","40%","50%","60%"],
    correctAnswer: 2
  },
  {
    question: "5) Which one of these is considered a vulnerable case during the vetting process?",
    choices: ["Being a single woman of a household","Being in danger of persecution","Life being threatened","Having children with them"],
    correctAnswer: 0
  },
 {
  question: "6) Which one of these IS NOT a vulnerable case during the vetting process?",
  choices: ["Having medical issues", "Tourture victims", "single mother of a household","A child with no guardian"],
  correctAnswer: 3
},
{
 question: "7) What percentage of refugees have a chance at resettling? ",
 choices: ["30%","1%","5%","15%"],
 correctAnswer: 1
},
{
 question: "8) What percentage of refugees are self sufficient within the first year?",
 choices: ["50%","66%","75%","95%"],
 correctAnswer: 3
}
,
{
 question: "9)What are the 3 obligatory aspects that states must uphold?",
 choices: ["Protect, Fulfil, Inform","Govern, Protect, Overlook","Fulfil, Respect, Protect","Respect, Govern, Protect"],
 correctAnswer: 2
}
,
{
  question: "10) Which of these IS NOT adopted international agreement to the UDHR in other countries?",
 choices: ["Rights on civil and political issues","Rights on economic, social, and cultural issues","Rights of people with disabilities","Rights on choice and privacy"],
 correctAnswer: 3
},
{
 question: "11) According to the module, which of the following are ways to promote human rights in your country?",
 choices: ["Write letters and articles to local administrators","Express yourself artistically","Organize demonstrations and walk-outs","All of the above"],
 correctAnswer: 3
},
{
 question: "12)Which of the following is true about the role you should play to implement human rights in your country?",
 choices: ["We have to speak up against injustice, violence or discrimination","We have to point out if an action or inaction by state authorities is violating human rights","We all need to play a part in defending and promoting the rights of our national (and international) community","All of the above"],
 correctAnswer: 3
},
{
 question: "13)When were human rights created?",
 choices: ["1948","1654","1700","25 AD"],
 correctAnswer: 0
},
{
 question: "14)Why are human rights necessary?",
 choices: ["To save lives", "To give us freedom", "To protect everyone", "All of the above",],
 correctAnswer: 3
},
{
 question: "15) Which document explains our human rights?",
 choices: ["Declaration of Independence", "UDHR", "The United States Constitution", "All of the above"],
 correctAnswer: 1
},
{
 question: "16) Who created the Universal Declaration of Human Rights?",
 choices: ["Christopher Columbus", "Barack Obama", "The Pope", "Eleanor Roosevelt"],
 correctAnswer: 3
},
{
 question: "17) Who was the first person who decided everyone should have human rights?",
 choices: ["Cyrus the Great", "George Washington", "Abraham Lincoln", "Harriet Tubman"],
 correctAnswer: 0
},
{
 question: "18) How many articles are in the UDHR?",
 choices: ["12", "30", "45", "60"],
 correctAnswer: 1
},
{
 question: "19) Which document is considered to be the first ever decree on human rights?",
 choices: ["The UN Declaration of Human Rights in 1948", "The Napoleonic Code in 1804", "The Cyrus Cylinder in 539 B.C.", "The Magna Carta 1215"],
 correctAnswer: 2
},
{
  question: "20) The Human Rights Act regulates the relationship between individuals and public authorities. Which of the following would not be a public authority?",
  chocies:["An electric company", "A bank or building society", "A private company running prisons", "A housing association"],
  correctAnswer: 1
}


]
  //sets timeOut to be equal to 1 minutes per question
  var t = 1000*60*questions.length;


  //converts millisecond to stopwatch format e.g. "minutes : seconds"
  var tConverted = parseInt(t / 1000 / 60) + "." + (t / 1000 % 60);

  for (i=100; i < 10 && i > 0; i--){
    $("#timer").html("Start Over");
  }

  //***********TEST: after time runs out, says "Out of time!"**********
  // setTimeout(function(){ alert("Out of Time!"); }, t);

  //define displayScoreTimedOut function (slightly different from displayScore)
  function displayScoreTimedOut() {

    var numCorrect = 0;
    var numWrong = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
      else {
        numWrong++;
      }
    }

    var score = 'You got ' + numCorrect + ' questions out of ' +
                 questions.length + ' right!!! (And got ' + numWrong + ' wrong)';
    alert (score);
  }

  //after time runs out, go ahead and jump to displaying score function
  setTimeout(function(){ displayScoreTimedOut(); }, t);

  //define founction: appends a counter to the page that is updated while the game is running
  function setTime() {
   $("#timer").append(tConverted + " minutes");};

  //call funtion
  //think i need to wrap this in a "setInterval" to have it auto update to the page. Do I need to do this outside of the higher function for it to work?
setTime();
;

  var questionCounter = 0; //Tracks question number
  var selections = []; //Array containing user choices
  var quiz = $('#quiz'); //Quiz div object

  // Display initial question
  displayNext();

  // Click handler for the 'next' button
  $('#next').on('click', function (e) {
    e.preventDefault();

    // Suspend click listener during fade animation
    if(quiz.is(':animated')) {
      return false;
    }
    choose();

    // If no user selection, progress is stopped
    if (isNaN(selections[questionCounter])) {
      alert('Please make a selection!');
    } else {
      questionCounter++;
      displayNext();
    }
  });

  // Click handler for the 'prev' button
  $('#prev').on('click', function (e) {
    e.preventDefault();

    if(quiz.is(':animated')) {
      return false;
    }
    choose();
    questionCounter--;
    displayNext();
  });

  // Click handler for the 'Start Over' button
  $('#start').on('click', function (e) {
    e.preventDefault();

    if(quiz.is(':animated')) {
      return false;
    }
    questionCounter = 0;
    selections = [];
    displayNext();
    $('#start').hide();
  });

  // distinuishes buttons when mouse hovers on top
  $('.button').on('mouseenter', function () {
    $(this).addClass('active');
  });
  $('.button').on('mouseleave', function () {
    $(this).removeClass('active');
  });

  // Creates and returns the div that contains the questions as well as possible answers
  function createQuestionElement(index) {
    var qElement = $('<div>', {
      id: 'question'
    });

    var header = $('<h2>Question ' + (index + 1) + ':</h2>');
    qElement.append(header);

    var question = $('<p>').append(questions[index].question);
    qElement.append(question);

    var radioButtons = createRadios(index);
    qElement.append(radioButtons);

    return qElement;
  }

  // Turns the list of  answer choices into radio buttons
  function createRadios(index) {
    var radioList = $('<ul>');
    var item;
    var input = '';
    for (var i = 0; i < questions[index].choices.length; i++) {
      item = $('<li>');
      input = '<input type="radio" name="answer" value=' + i + ' />';
      input += questions[index].choices[i];
      item.append(input);
      radioList.append(item);
    }
    return radioList;
  }

  // Reads the user selection and pushes the value to an array
  function choose() {
    selections[questionCounter] = +$('input[name="answer"]:checked').val();
  }

  // Displays next requested element
  function displayNext() {
    quiz.fadeOut(function() {
      $('#question').remove();

      if(questionCounter < questions.length){
        var nextQuestion = createQuestionElement(questionCounter);
        quiz.append(nextQuestion).fadeIn();
        if (!(isNaN(selections[questionCounter]))) {
          $('input[value='+selections[questionCounter]+']').prop('checked', true);
        }

        // Controls display of 'prev' button
        if(questionCounter === 1){
          $('#prev').show();
        } else if(questionCounter === 0){

          $('#prev').hide();
          $('#next').show();
        }
      }else {
        var scoreElem = displayScore();
        quiz.append(scoreElem).fadeIn();
        $('#next').hide();
        $('#prev').hide();
        $('#start').show();
      }
    });
  }

  // Calculaters score and pushes paragraph element to display
  function displayScore() {
    var score = $('<p>',{id: 'question'});

    var numCorrect = 0;
    var numWrong = 0;
    for (var i = 0; i < selections.length; i++) {
      if (selections[i] === questions[i].correctAnswer) {
        numCorrect++;
      }
      else {
        numWrong++;
      }
    }

    score.append('You got ' + numCorrect + ' questions out of ' +
                 questions.length + ' right!!! (And got ' + numWrong + ' wrong)');
    return score;
  }
})();
