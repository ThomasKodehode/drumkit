//Definerer parameter, henviser til mappe
const soundFolder = "sounds/";

//Definerer et array som inneholder objekter med egenskapene key og fileName
const soundList = [
  {key: "i", fileName: "clap.wav"},
  {key: "u", fileName: "tink.wav"},
  {key: "y", fileName: "snare.wav"},
  {key: "t", fileName: "openhat.wav"},
  {key: "r", fileName: "hihat.wav"},
  {key: "e", fileName: "ride.wav"},
  {key: "w", fileName: "tom.wav"},
  {key: "q", fileName: "kick.wav"},
];

//Oppretter et array med elementer(trommelydene)
const drumkitElements = soundList.map((soundInfo) => {
    return drum(soundFolder, soundInfo);
  });

//Finner containeren for trommesettet og legger til elementene(trommelydene)
  const drumkitContainer = document.getElementById("drumkit-container");
  drumkitElements.forEach((drumElement) => {
  drumkitContainer.appendChild(drumElement);
  });

//Definerer en funksjon som tar i mot et parameter. Funksjonen setter currentTime-egenskapen til audioElement til 0 og spiller av lyden
function playSound(audioElement) {
  audioElement.currentTime = 0;
  audioElement.play();


}

 
//Definerer funksjon som tar i mot to parameter
function drum(folder, fileInfo) {

//lager en div
  const div = document.createElement("div");
  
//legger til klasse på div
  div.classList.add("drum");
  
//slår sammen 
  div.dataset.file = folder + fileInfo.fileName;

//Lager et objekt og slår sammen to verdier
  const sound = new Audio(folder + fileInfo.fileName);

//om det klikkes med musen, spill lyd
  div.addEventListener("click", () => {
    playSound(sound);
  });

//takk for låne
  return div;
}



//Legger til en lytter på tastetrykk
window.addEventListener("keydown", (event) => {

//Søker igjennom arrayet med lyder og sjekker om tasten som er trykket samsvarer med en av tastene i arrayet
  const soundFile = soundList.find((soundInfo) => soundInfo.key === event.key)

//Om ikke, return tidlig
  if (!soundFile) return

//Om ja, lag et objekt (AUDIO) med tilsvarende filnavn
  const sound = new Audio(soundFolder + soundFile.fileName)

//Spill av funksjon med objektet (AUDIO) som parameter
  playSound(sound)
})


