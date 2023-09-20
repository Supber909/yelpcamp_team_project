// import json data
import camps from "../utils/camps.js";
import { searchCamps } from "./search.js";
// Function to render camps and append them to the HTML
const campListContainer = document.getElementById('campList');
function renderCamps(campsToRender = camps) {
  // Get the container where you want to render the camps

  // Clear existing content in the container
  campListContainer.innerHTML = '';

  // Loop through the array and generate HTML elements for each camp
  campsToRender.forEach((camp) => {
    const campElement = document.createElement('div');
    campElement.classList.add('rounded', 'p-3', 'border');

    // Create an image element
    const imageElement = document.createElement('img');
    imageElement.src = camp.image;
    imageElement.alt = camp.name;
    imageElement.classList.add('w-full', 'rounded-md');

    // Create elements for name, description, and a link
    const nameElement = document.createElement('h5');
    nameElement.classList.add('text-textBlack', 'font-bold', 'mt-2');
    nameElement.textContent = camp.name;

    const descriptionElement = document.createElement('p');
    descriptionElement.classList.add('text-textGrey');
    descriptionElement.textContent = camp.description;

    const viewButton = document.createElement('button');
    viewButton.classList.add('text-lg', 'text-textBlack', 'mt-2', 'rounded', 'font-bold', 'py-2', 'w-full', 'border');
    viewButton.innerHTML = `<a href="details.html?id=${camp.id}">View Campground</a>`;

    // Add a click event listener to each "View Campground" button
    viewButton.addEventListener('click', (event) => {
      event.preventDefault(); // Prevent the default link behavior
      const href = event.target.getAttribute('href');
      const url = new URL(href, window.location.href);
      const campId = url.searchParams.get('id');
      window.location.href = `details.html?id=${campId}`;
    });

    // Append image, name, description, and button to the camp element
    campElement.appendChild(imageElement);
    campElement.appendChild(nameElement);
    campElement.appendChild(descriptionElement);
    campElement.appendChild(viewButton);

    // Append the camp element to the container
    campListContainer.appendChild(campElement);
  });
}

// Get the search input element
const searchBox = document.getElementById('searchBox');

// Add an event listener to the search input
searchBox.addEventListener('input', () => {
  performSearch();
});

// Function to perform the search and update the results
function performSearch() {
  const searchText = searchBox.value.toLowerCase();
  const filteredCamps = searchCamps(searchText, camps);
  
  if (filteredCamps.length == 0) {
    // Display "No results" message
    campListContainer.innerHTML = "<h1 class='text-3xl lg:px-6 px-3'>No camp found</h1>";
  } else {
    // Call the renderCamps function with the filtered camps
    renderCamps(filteredCamps);
  }
}

// Get the search form element
const searchForm = document.getElementById('searchForm');

// Add an event listener to the form's submit event
searchForm.addEventListener('submit', (event) => {
  
  event.preventDefault(); // Prevent the form from submitting

  // Get the search input value
  const searchText = searchBox.value.toLowerCase();

  // Use the searchCamps function to filter the camps
  const filteredCamps = searchCamps(searchText, camps);
  // Call the renderCamps function with the filtered camps
// Clear the camp details container
campListContainer.innerHTML = '';

// Check if there are search results
if (filteredCamps.length == 0) {
  // Display "No results" message
  campListContainer.innerHTML = "<h1 class='text-3xl lg:px-6 px-3'>No camp found</h1>";
} else {
  // Call the renderCamps function with the filtered camps
  renderCamps(filteredCamps);
}
});


// Call the renderCamps function to render camps initially
renderCamps();
