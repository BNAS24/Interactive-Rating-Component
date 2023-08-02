// Removing all content from rating box
function changeText() {
  document.getElementById("flex-item1").innerHTML = "";
}

function addImage() {
  // Creating new image content for the thank you page
  const newImg = document.createElement("img");
  newImg.setAttribute("src", "https://i.postimg.cc/tJxpfm28/Image-2-1.png");
  newImg.setAttribute("alt", "Thank You Page Picture");
  newImg.classList.add("thank-you-image");

  // Displaying the content in "flex-item"
  const newImageDisplay = document.getElementById("flex-item1");
  newImageDisplay.appendChild(newImg);
}

function createInputDiv(selectedRating) {
  // Creating Div element that displays vote input
  const inputValueDiv = document.createElement("div");
  inputValueDiv.classList.add("input-div");
  // Adjusting inner text content in Div
  inputValueDiv.innerText = `You selected ${selectedRating} out of 5`;
  // Displaying the content in "flex-item"
  const displayingInputDiv = document.getElementById("flex-item1");
  displayingInputDiv.appendChild(inputValueDiv);
}

function createThankYouText() {
  // Creating element
  const thankYouText = document.createElement("div");
  thankYouText.classList.add("thank-you-text");
  // Changing inner text
  thankYouText.innerText = "Thank You!";
  // Displaying content
  const displayingTYText = document.getElementById("flex-item1");
  displayingTYText.appendChild(thankYouText);
}

function smallPara() {
  // Creating Paragraph Div
  const newPara = document.createElement("div");
  newPara.classList.add("paraText");
  // Adding inner text
  newPara.innerText =
    "We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!";

  // Displaying Div
  const displayPara = document.getElementById("flex-item1");

  displayPara.appendChild(newPara);
}

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("button1");
  button.disabled = true; // Disable the submit button by default

  button.addEventListener("click", () => {
    const selectedRating = document
      .querySelector(".selected")
      ?.getAttribute("data-rating");
    changeText();
    addImage();
    createInputDiv(selectedRating);
    createThankYouText();
    smallPara();
  });

  // Get all rating choices
  const ratingChoices = document.querySelectorAll(".crc");

  // Adding an event listener to each rating choice
  ratingChoices.forEach((choice) => {
    choice.addEventListener("click", () => {
      // Remove 'selected' class from all rating choices
      ratingChoices.forEach((choice) => {
        choice.classList.remove("selected");
      });

      // Add 'selected' class to clicked rating choice
      choice.classList.add("selected");

      // Enable the submit button
      button.disabled = false;
    });
  });
});
