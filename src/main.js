// query selector variables go here 👇

// Main poster elements
var mainImage = document.querySelector(".poster-img");
var mainTitle = document.querySelector(".poster-title");
var mainQuote = document.querySelector(".poster-quote");

// Buttons
var randomButton = document.querySelector(".show-random");
var savedButton = document.querySelector(".show-saved");
var formButton = document.querySelector(".show-form");
var saveButton = document.querySelector(".save-poster");
var mainFromMakeButton = document.querySelector(".show-main");
var mainFromSavedButton = document.querySelector(".back-to-main");
var makePoster = document.querySelector(".make-poster");

// Sections
var savedSection = document.querySelector(".saved-posters");
var formSection = document.querySelector(".poster-form");
var mainSection = document.querySelector(".main-poster");
var posterGrid = document.querySelector(".saved-posters-grid");

//Inputs
var imageInput = document.querySelector("#poster-image-url");
var titleInput = document.querySelector("#poster-title");
var quoteInput = document.querySelector("#poster-quote");

// we've provided you with some data to work with 👇
var images = [
  "./assets/bees.jpg",
  "./assets/bridge.jpg",
  "./assets/butterfly.jpg",
  "./assets/cliff.jpg",
  "./assets/elephant.jpg",
  "./assets/flock.jpg",
  "./assets/fox.jpg",
  "./assets/frog.jpg",
  "./assets/horse.jpg",
  "./assets/lion.jpg",
  "./assets/mountain.jpg",
  "./assets/pier.jpg",
  "./assets/puffins.jpg",
  "./assets/pug.jpg",
  "./assets/runner.jpg",
  "./assets/squirrel.jpg",
  "./assets/tiger.jpg",
  "./assets/turtle.jpg"
];
var titles = [
  "determination",
  "success",
  "inspiration",
  "perspiration",
  "grit",
  "empathy",
  "feelings",
  "hope",
  "believe",
  "try",
  "conviction",
  "accomplishment",
  "achievement",
  "ambition",
  "clarity",
  "challenge",
  "commitment",
  "confidence",
  "action",
  "courage",
  "focus",
  "breathe",
  "gratitude",
  "imagination",
  "kindness",
  "mindfulness",
  "knowledge",
  "opportunity",
  "passion",
  "patience",
  "practice",
  "smile",
  "trust",
  "understanding",
  "wisdom"
];
var quotes = [
  "Don’t downgrade your dream just to fit your reality, upgrade your conviction to match your destiny.",
  "You are braver than you believe, stronger than you seem and smarter than you think.",
  "You are confined only by the walls you build yourself.",
  "The one who has confidence gains the confidence of others.",
  "Act as if what you do makes a difference. It does.",
  "Success is not final, failure is not fatal: it is the courage to continue that counts.",
  "Never bend your head. Always hold it high. Look the world straight in the eye.",
  "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "Believe you can and you're halfway there.",
  "When you have a dream, you've got to grab it and never let go.",
  "I can't change the direction of the wind, but I can adjust my sails to always reach my destination.",
  "No matter what you're going through, there's a light at the end of the tunnel.",
  "It is our attitude at the beginning of a difficult task which, more than anything else, will affect its successful outcome.",
  "Life is like riding a bicycle. To keep your balance, you must keep moving.",
  "Just don't give up trying to do what you really want to do. Where there is love and inspiration, I don't think you can go wrong.",
  'Limit your "always" and your "nevers."',
  "You are never too old to set another goal or to dream a new dream.",
  "Try to be a rainbow in someone else's cloud.",
  "You do not find the happy life. You make it.",
  "Inspiration comes from within yourself. One has to be positive. When you're positive, good things happen.",
  "Sometimes you will never know the value of a moment, until it becomes a memory.",
  "The most wasted of days is one without laughter.",
  "You must do the things you think you cannot do.",
  "It isn't where you came from. It's where you're going that counts.",
  "It is never too late to be what you might have been.",
  "Happiness often sneaks in through a door you didn't know you left open.",
  "We must be willing to let go of the life we planned so as to have the life that is waiting for us.",
  "Never limit yourself because of others’ limited imagination; never limit others because of your own limited imagination.",
  "Be the change that you wish to see in the world.",
  "Let us make our future now, and let us make our dreams tomorrow's reality.",
  "You don't always need a plan. Sometimes you just need to breathe, trust, let go, and see what happens.",
  "If I cannot do great things, I can do small things in a great way.",
  "Don't wait. The time will never be just right.",
  "With the right kind of coaching and determination you can accomplish anything.",
  "If you have good thoughts they will shine out of your face like sunbeams and you will always look lovely.",
  "No matter what people tell you, words and ideas can change the world.",
  "Each person must live their life as a model for others.",
  "A champion is defined not by their wins but by how they can recover when they fall."
];
var savedPosters = [];
var currentPoster;

// event listeners go here 👇

randomButton.addEventListener('click', createRandomPoster);

savedButton.addEventListener('click', function(){
  showSaved();
  switchSections(mainSection);
  switchSections(savedSection);
})

formButton.addEventListener('click', function() {
  switchSections(mainSection);
  switchSections(formSection);
})

mainFromMakeButton.addEventListener('click', function() {
  switchSections(mainSection);
  switchSections(formSection);
})

mainFromSavedButton.addEventListener('click', function() {
  switchSections(mainSection);
  switchSections(savedSection);
})

makePoster.addEventListener('click', makeNewPoster);

saveButton.addEventListener('click', addSavedPoster);

// functions and event handlers go here 👇

function addSavedPoster(){
  if (!savedPosters.includes(currentPoster)){
    savedPosters.push(currentPoster);
  }
}

function switchSections(section){
  section.classList.toggle("hidden");
};

function makeNewPoster(event) {
  event.preventDefault();
  currentPoster = new Poster(imageInput.value, titleInput.value, quoteInput.value);
  images.push(currentPoster.imageURL);
  titles.push(currentPoster.title);
  quotes.push(currentPoster.quote);
  switchSections(mainSection);
  switchSections(formSection);
  displayPoster();
}

// (we've provided one for you to get you started)!
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createRandomPoster(){
  currentPoster = new Poster(images[getRandomIndex(images)], titles[getRandomIndex(titles)], quotes[getRandomIndex(quotes)]);
  displayPoster();
};

function displayPoster(){
  mainTitle.innerText = currentPoster.title;
  mainImage.src = currentPoster.imageURL;
  mainQuote.innerText = currentPoster.quote;
};

function showSaved() {
  var allSavedPosters = "";
  for (var i = 0; i < savedPosters.length; i++) {
    var savedPosterHTML = `
    <article id="${savedPosters[i].id}" class="mini-poster">
          <img class="poster-img" src="${savedPosters[i].imageURL}" alt="nothin' to see here">
          <h2 class="poster-title">${savedPosters[i].title}</h1>
          <h4 class="poster-quote">${savedPosters[i].quote}</h3>
    </article>`;
    allSavedPosters += savedPosterHTML;
  }
  posterGrid.innerHTML= allSavedPosters;
  addPosterListeners();
}

function addPosterListeners() {
  var miniPosters = document.querySelectorAll(".mini-poster");
  for (var i = 0; i < miniPosters.length; i++ ) {
    miniPosters[i].addEventListener("dblclick", getElementID);
  }
}

function getElementID(event) {
  if (event.target.id) {
    deletePoster(event.target.id);
  } else {
    deletePoster(event.target.parentElement.id);
  }
}

function deletePoster(id) {
  for (var i = 0; i < savedPosters.length; i++) {
    if (savedPosters[i].id == id) {
      savedPosters.splice(i, 1);
    }
  }
  showSaved();
}

createRandomPoster();
