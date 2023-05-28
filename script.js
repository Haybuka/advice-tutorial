let diceImage = document.querySelector(".dice-image");
let randomText = document.querySelector(".random-text");
let randomId = document.querySelector(".random-id");

//call random Device
const getRandomAdvice = () => {
  fetch("https://api.adviceslip.com/advice")
    .then((response) => response.json())
    .then((data) => addAdvice(data.slip))
    .catch(error => {
        //handle and construct error
        let advice = {
            advice : 'Failed to fetch',
            id : 0
        }
        addAdvice(advice)
    })
};

//call random device on page load
getRandomAdvice();

//format data into html
const addAdvice = (advices) => {
  const { advice, id } = advices;
  randomText.innerHTML = advice;
  randomId.innerHTML = id;
};

// calls getRandomDevice on click
diceImage.addEventListener("click", () => {
  getRandomAdvice();
});
