// variables
var getOptions = [];
var getCorrectOption = 0;
var getCorrectOptionText = "";
var compareOption = "";
var writeOptions = [];
var nextRound = 0;
var answer = 0;
var roundNumber = 0;
var optionId = "option";
var optionNumber = "1";
var hasPlayed = false;
var choice = "option1";
var choiceCorrect = "correct";
var choiceWrong = "wrong";
var optionClasses = document.getElementsByClassName("option");
var pointsScore = 0;
var pointsStreak = 0;
var nextButton = document.getElementById("next");
var i = 0, j = 0, k = 0;
var verses = [];
var verseJOHc3v16 = [];
var verse1THc4v16to18 = [];
var verseMATc28v18to20 = [];
var verse2TIc3v16and17 = [];
var verse2PTc1v21 = [];
var verseNUMc12v6 = [];
var versePSLc12v6and7 = [];
var versePSLc119v160 = [];
var verseMATc24v35 = [];
// reassigns the values for a new play session
function assignValues() {
  verseJOHc3v16 = ["option4", "1 John 3:14", "Matthew 7:28", "1 John 6:14", "John 3:16", "For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life."];
  verses[0] = verseJOHc3v16;
  verse1THc4v16to18 = ["option3", "2 Timothy 3:15-17", "Titus 3:10-12", "1 Thessalonians 4:16-18", "Revelation 14:21-23", "For the Lord himself shall descend from heaven with a shout, with the voice of the archangel, and with the trump of God: and the dead in Christ shall rise first: Then we which are alive and remain shall be caught up together with them in the clouds, to meet the Lord in the air: and so shall we ever be with the Lord. Wherefore comfort one another with these words."];
  verses[1] = verse1THc4v16to18;
  verseMATc28v18to20 = ["option4", "Luke 24:51-53", "John 6:4-7", "Acts 1:27-29", "Matthew 28:18-20", "And Jesus came and spake unto them, saying, All power is given unto me in heaven and in earth. Go ye therefore, and teach all nations, baptizing them in the name of the Father, and of the Son, and of the Holy Ghost: Teaching them to observe all things whatsoever I have commanded you: and, lo, I am with you always, even unto the end of the world. Amen."];
  verses[2] = verseMATc28v18to20;
  verse2TIc3v16and17 = ["option1", "2 Timothy 3:16, 17", "Titus 3:14, 15", "Hebrews 3:17, 18", "2 Thessalonians 4:16, 17", "All scripture is given by inspiration of God, and is profitable for doctrine, for reproof, for correction, for instruction in righteousness: That the man of God may be perfect, thoroughly furnished unto all good works."];
  verses[3] = verse2TIc3v16and17;
  verse2PTc1v21 = ["option1", "2 Peter 1:21", "1 Peter 2:11", "2 John 1:11", "1 Peter 6:21", "For the prophecy came not in old time by the will of man: but holy men of God spake as they were moved by the Holy Ghost."];
  verses[4] = verse2PTc1v21;
  verseNUMc12v6 = ["option3", "Deuteronomy 3:7", "Jeremiah 40:5", "Numbers 12:6", "Leviticus 28:6", "And he said, Hear now my words: If there be a prophet among you, I the Lord will make myself known unto him in a vision, and will speak unto him in a dream."];
  verses[5] = verseNUMc12v6;
  verseGLTc1v12 = ["option4", "Ephesians 2:3", "Acts 4:6", "Colossians 5:7", "Galatians 1:12", "For I neither received it of man, neither was I taught it, but by the revelation of Jesus Christ."];
  verses[6] = verseGLTc1v12;
  versePSLc12v6and7 = ["option1", "Psalms 12:6, 7", "Psalms 3:8, 9", "Proverbs 13:5, 6", "Psalms 13:7, 8", "The words of the Lord are pure words: as silver tried in a furnace of earth, purified seven times. Thou shalt keep them, O Lord, thou shalt preserve them from this generation for ever."];
  verses[7] = versePSLc12v6and7;
  versePSLc119v160 = ["option4", "Psalms 119:116", "Ecclesiastes 12:11", "Ecclesiastes 13:16", "Psalms 119:160", "Thy word is true from the beginning: and every one of thy righteous judgments endureth for ever."];
  verses[8] = versePSLc119v160;
  verseMATc24v35 = ["option1", "Matthew 24:35", "Luke 24:25", "Mark 14:15", "John 24:45", "Heaven and earth shall pass away, but my words shall not pass away."];
  verses[9] = verseMATc24v35;
}
// sorts the array "verses" in random order
function scrambleVerses() {
  assignValues();
  for (i = verses.length -1; i > 0; i--) {
    j = Math.floor(Math.random() * i);
    k = verses[i];
    verses[i] = verses[j];
    verses[j] = k;
  }
  scrambleOptions();
  round();
}
// scrambles the options and changes the correct option
function scrambleOptions() {
  i = 1;
  while (i < 5) {
    getOptions[i - 1] = verses[roundNumber][i];
    i++;
  }
  for (i = getOptions.length -1; i > 0; i--) {
    j = Math.floor(Math.random() * i);
    k = getOptions[i];
    getOptions[i] = getOptions[j];
    getOptions[j] = k;
  }
  getCorrectOption = parseInt(verses[roundNumber][0].slice(6,7));
  getCorrectOptionText = verses[roundNumber][getCorrectOption];
  i = 0;
  while (i < 4) {
    compareOption = getOptions[i];
    if (compareOption == getCorrectOptionText) {
      i++;
      writeOptions[0] = "option" + i.toString();
    }
    i++;
  }
}
// pulls the strings from the array onto the div elements
function round() {
  i = 1;
  answer = writeOptions[0];
  writeOptions = verses[nextRound];
  while (i < 5) {
    optionId = "option";
    optionNumber = i.toString();
    optionId = optionId.concat(optionNumber);
    document.getElementById(optionId).innerHTML = getOptions[i - 1];
    i++;
  }
  document.getElementById("verse").innerHTML = writeOptions[5];
  nextRound++;
}
// correct option recoloring
function optionCorrect(choiceCorrect) {
  document.getElementById(choiceCorrect).style.borderColor = "#76ff76";
  document.getElementById(choiceCorrect).style.backgroundColor = "#b1ffb1";
}
// wrong option recoloring
function optionWrong(choiceWrong) {
  document.getElementById(choiceWrong).style.borderColor = "#ff7676";
  document.getElementById(choiceWrong).style.backgroundColor = "#ffb1b1";
}
// reset option colors
function optionsReset() {
  i = 1;
  while (i < 5) {
    optionId = "option";
    optionNumber = i.toString();
    optionId = optionId.concat(optionNumber);
    document.getElementById(optionId).style.borderColor = "#b8b8b8";
    document.getElementById(optionId).style.backgroundColor = "#d6d6d6";
    i++;
  }
  nextButton.style.display = "none";
}
// changes pointers
function cpointer() {
  for (i = 0; i < optionClasses.length; i++) {
    optionClasses[i].style.cursor = "pointer";
  }
}
function cursorNotAllowed() {
  for (i = 0; i < optionClasses.length; i++) {
    optionClasses[i].style.cursor = "not-allowed";
  }
}
// shows correct answer
function playerChooses(choice) {
  if (hasPlayed == false ) {
    choice = choice;
    if (choice == answer) {
      choiceCorrect = choice;
      optionCorrect(choiceCorrect);
      pointsScore++;
      pointsStreak++;
      document.getElementById("score").innerHTML = pointsScore;
      document.getElementById("streak").innerHTML = pointsStreak;
    } else {
      choiceCorrect = answer;
      choiceWrong = choice;
      optionCorrect(choiceCorrect);
      optionWrong(choiceWrong);
      if (pointsStreak >= 1) {
        pointsStreak = 0;
      }
      document.getElementById("streak").innerHTML = pointsStreak;
    }
    roundNumber++;
    cursorNotAllowed();
    if (roundNumber == verses.length) {
      nextButton.style.display = "table-cell";
      nextButton.innerHTML = "PLAY AGAIN!";
    } else {
      nextButton.style.display = "table-cell";
    }
    hasPlayed = true;
  }
}
// resets the buttons for the new round
function goToNextRound() {
  if (roundNumber < verses.length) {
    hasPlayed = false;
    cpointer();
    optionsReset();
    scrambleOptions();
    round();
  } else {
    hasPlayed = false;
    optionsReset();
    cpointer();
    nextButton.style.display = "none";
    nextButton.innerHTML = "NEXT";
    nextRound = 0;
    roundNumber = 0;
    pointsScore = 0;
    pointsStreak = 0;
    document.getElementById("score").innerHTML = pointsScore;
    document.getElementById("streak").innerHTML = pointsStreak;
    scrambleVerses();
  }
}