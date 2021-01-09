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
var verseGLTc1v12 = [];
var versePSLc12v6and7 = [];
var versePSLc119v160 = [];
var verseMATc24v35 = [];
// reassigns the values for a new play session
function assignValues() {
  verseJOHc3v16 = ["option4", "Jāņa 1. vēstule 3:14", "Mateja evaņģēlijs 7:28", "Jāņa 1. vēstule 6:14", "Jāņa evaņģēlijs 3:16", "Jo tik ļoti Dievs pasauli mīlējis, ka Viņš Savu vienpiedzimušo Dēlu devis, ka visiem tiem, kas tic uz Viņu, nebūs pazust, bet dabūt mūžīgu dzīvošanu."];
  verses[0] = verseJOHc3v16;
  verse1THc4v16to18 = ["option3", "2. Timotejam 3:15-17", "Titam 3:10-12", "1. Tesaloniķiešiem 4:16-18", "Atklāsmes grāmata 14:21-23", "Jo pats Tas Kungs nāks zemē no debesīm ar kliegšanu, ar liela eņģeļa balsi un ar Dieva bazūni, un tie iekš Kristus mirušie uzcelsies papriekš, pēc tam mēs, kas dzīvojam un esam atlikuši, tapsim aizrauti līdz ar tiem iekš padebešiem Tam Kungam pretī gaisā; un tā mēs būsim arvien pie Tā Kunga. Tad nu iepriecinājaties savā starpā ar šiem vārdiem."];
  verses[1] = verse1THc4v16to18;
  verseMATc28v18to20 = ["option4", "Lūkas evaņģēlijs 24:51-53", "Jāņa evaņģēlijs 6:4-7", "Apustuļu darbi 1:27-29", "Mateja evaņģēlijs 28:18-20", "Un Jēzus piegājis, runāja ar tiem un sacīja: &ldquo;Man ir dota visa vara debesīs un virs zemes. Tāpēc ejiet un dariet par mācekļiem visus ļaudis, tos kristīdami Tā Tēva un Tā Dēla un Tā Svētā Gara vārdā, tos mācīdami turēt visu, ko Es jums esmu pavēlējis; un, redzi, Es esmu pie jums ikdienas līdz pasaules galam. Āmen.&rdquo;"];
  verses[2] = verseMATc28v18to20;
  verse2TIc3v16and17 = ["option1", "2. Timotejam 3:16, 17", "Titam 3:14, 15", "Ebrejiem 3:17, 18", "2. Tesaloniķiešiem 4:16, 17", "Viss raksts no Dieva iedots ir arī derīgs pie mācīšanas, pie pārliecināšanas, pie norāšanas, pie pamācīšanas iekš taisnības, lai tas Dieva cilvēks ir pilnīgs, uz ikvienu labu darbu pilnīgi sataisīts."];
  verses[3] = verse2TIc3v16and17;
  verse2PTc1v21 = ["option1", "Pētera 2. vēstule 1:21", "Pētera 1. vēstule 2:11", "Jāņa 2. vēstule 1:11", "Pētera 1. vēstule 6:21", "Jo praviešu mācība nekad nav notikusi caur cilvēka gribēšanu, bet tie svētie Dieva cilvēki ir runājuši, dzīti no Svētā Gara."];
  verses[4] = verse2PTc1v21;
  verseNUMc12v6 = ["option3", "5. Mozus grāmata 3:7", "Jeremijas grāmata 40:5", "4. Mozus grāmata 12:6", "3. Mozus grāmata 28:6", "Un Viņš sacīja: klausiet jel Manu vārdu! Ja jūsu starpā viens pravietis, tad Es, Tas Kungs, viņam parādos parādīšanā, caur sapni Es ar viņu runāju."];
  verses[5] = verseNUMc12v6;
  verseGLTc1v12 = ["option4", "Ephesians 2:3", "Acts 4:6", "Colossians 5:7", "Galatians 1:12", "Jo es to arī neesmu dabūjis nedz mācījies no cilvēka, bet caur Jēzus Kristus parādīšanu."];
  verses[6] = verseGLTc1v12;
  versePSLc12v6and7 = ["option1", "Psalmi 12:6, 7", "Psalmi 3:8, 9", "Salamana Pamācības 13:5, 6", "Psalmi 13:7, 8", "Tā Kunga vārdi ir šķīsti vārdi, kā sudrabs mālu traukā kausēts un septiņkārt šķīstīts. Kaut Tu, ak Kungs, tos gribētu pasargāt, kaut Tu mūs gribētu paglabāt no šīs cilts mūžīgi."];
  verses[7] = versePSLc12v6and7;
  versePSLc119v160 = ["option4", "Psalmi 119:116", "Salamans Mācītājs 12:11", "Salamans Mācītājs 13:16", "Psalmi 119:160", "Thy word is true from the beginning: and every one of thy righteous judgments endureth for ever."];
  verses[8] = versePSLc119v160;
  verseMATc24v35 = ["option1", "Mateja evaņģēlijs 24:35", "Lūkas evaņģēlijs 24:25", "Marka evaņģēlijs 14:15", "Jāņa evaņģēlijs 24:45", "Debess un zeme zudīs, bet Mani vārdi nezudīs."];
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
      nextButton.innerHTML = "SPĒLĒT VĒLREIZ!";
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
    nextButton.innerHTML = "NĀKAMAIS";
    nextRound = 0;
    roundNumber = 0;
    pointsScore = 0;
    pointsStreak = 0;
    document.getElementById("score").innerHTML = pointsScore;
    document.getElementById("streak").innerHTML = pointsStreak;
    scrambleVerses();
  }
}