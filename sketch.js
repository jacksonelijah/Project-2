let wordArray = [
  "Apple",
  "Blaze",
  "Crisp",
  "Dream",
  "Event",
  "Flair",
  "Glaze",
  "Haste",
  "Ideal",
  "Jolly",
  "Kneel",
  "Piano",
  "Clear",
  "Latch",
  "Magic",
  "Novel",
  "The",
  "My",
  "Every",
  "It",
  "The",
  "The",
  "That",
  "Yes",
  "Java",
  "Oasis",
  "Today",
  "Mother",
  "Try",
  "We",
  "Because",
  "Me",
 "Generate",
   "Get",
  "When",
  "Pause",
  "Quest",
  "Rival",
  "Style",
  "Trust",
  "Unity",
  "Valor",
  "Witty",
  "Yield",
  "Zephyr",
  "Angst",
  "Brick",
  "Craft",
  "Dwell",
  "Eager",
  "Folly",
  "Gloat",
  "Humor",
  "Ivory",
  "Knack",
  "Lurid",
  "Mirth",
  "Niche",
  "Orbit",
  "Pique",
  "Quiet",
  "Roast",
  "Savor",
  "Tweak",
  "Usher",
  "Vault",
  "Whirl",
  "Yearn",
  "Zesty",
  "Chime",
  "Grasp",
  "Fable",
  "Quirk",
  "Slink",
  "Thrive",
  "Ample",
  "Brisk",
  "Clasp",
  "Deity",
  "Forge",
  "Hover",
  "Inlet",
  "Joint",
  "Knead",
  "Lodge",
  "Maple",
  "Nudge",
  "Opium",
  "Prawn",
  "Rinse",
  "Smirk",
  "Tonic",
  "Usurp",
  "Woven",
  "Yanky",
  "Zonal",
  "Blush",
  "Crave",
  "Drift",
  "Exile",
  "Frost",
  "Grief",
  "Jelly",
  "Knoll",
  "Lemon",
  "Nifty",
  "Ozone",
  "Plume",
  "Quota",
  "Rusty",
  "Sworn",
  "Tinge",
  "Unzip",
  "Vivid",
  "Whisk",
  "Xylol",
  "Qualm",
   "Is",
   "It",
   "Creates",
   "Hand",
  "Take",
  "Be",
  "Know",
  "Take",
  "Hurt",
  "Thank",
  "Make",
  "Destroy",
  "Love",
  "Buy",
  "Come",
  "Treat",
  "Go",
  "Work",
  "Sleep",
  ""
  "Synth",
  "Glove",
];

let noteImageArray = [
  "noteImages/A.png",
  "noteImages/B.png",
  "noteImages/C.png",
  "noteImages/D.png",
  "noteImages/E.png",
  "noteImages/F.png",
  "noteImages/G.png",
  "noteImages/LOW_E.png",
  "noteImages/LOW_F.png",
];

let pianoSounds = [];

let synthSounds = [];

let displayedNotes = [];

let maxNotes = 5;

let currentInstrument = "piano"; // Default instrument

function preload() {
  // Preload note images
  for (let i = 0; i < noteImageArray.length; i++) {
    noteImageArray[i] = loadImage(noteImageArray[i]);
  }

  pianoSounds = [
    loadSound("pianoNotes/a.mp3"),
    loadSound("pianoNotes/b.mp3"),
    loadSound("pianoNotes/c.mp3"),
    loadSound("pianoNotes/d.mp3"),
    loadSound("pianoNotes/e.mp3"),
    loadSound("pianoNotes/f.mp3"),
    loadSound("pianoNotes/g.mp3"),
    loadSound("pianoNotes/lowE.mp3"),
    loadSound("pianoNotes/lowF.mp3"),
  ];

  synthSounds = [
    loadSound("synthNotes/as.mp3"),
    loadSound("synthNotes/bs.mp3"),
    loadSound("synthNotes/cs.mp3"),
    loadSound("synthNotes/ds.mp3"),
    loadSound("synthNotes/es.mp3"),
    loadSound("synthNotes/fs.mp3"),
    loadSound("synthNotes/gs.mp3"),
    loadSound("synthNotes/lowes.mp3"),
    loadSound("synthNotes/lowfs.mp3"),
  ];
}

function setup() {
  createCanvas(600, 400).parent("sketch-holder");

  select("#generateButton").mousePressed(generateRandomNoteAndWord);
  select("#pianoButton").mousePressed(() => (currentInstrument = "piano"));
  select("#synthButton").mousePressed(() => (currentInstrument = "synth"));
  select("#clearButton").mousePressed(clearNotes);
}

function draw() {
  background(255);

  let notesPerRow = 5;
  let noteSize = 100;
  let padding = 0;
  let startX = 50;
  let startY = 50;
  let maxRows = 2;
  let rowOffset = 50;

  for (let i = 0; i < displayedNotes.length; i++) {
    if (i >= notesPerRow * maxRows) {
      break;
    }

    let row = floor(i / notesPerRow); // Determine the row index
    let col = i % notesPerRow; // Determine the column index

    let x = startX + col * (noteSize + padding);
    let y = startY + row * (noteSize + padding + rowOffset);

    let note = displayedNotes[i];
    image(note.image, x, y, noteSize, noteSize);
    textSize(18);
    textAlign(CENTER, CENTER);
    fill(0);
    text(note.word, x + noteSize / 2, y + noteSize + 20);
  }
}

function generateRandomNoteAndWord() {
  let notesPerRow = 5;
  let maxRows = 2;

  if (displayedNotes.length < notesPerRow * maxRows) {
    // Choose a random image and word
    let randomIndex = int(random(noteImageArray.length));
    let randomImage = noteImageArray[randomIndex];
    let randomWord = random(wordArray);

    displayedNotes.push({ image: randomImage, word: randomWord });

    playSound(randomIndex);
  } else {
    console.log("Maximum notes reached!");
  }
}

function playSound(index) {
  if (currentInstrument === "piano") {
    pianoSounds[index].play();
  } else if (currentInstrument === "synth") {
    synthSounds[index].play();
  }
}

function clearNotes() {
  displayedNotes = [];
}
