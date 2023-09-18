// import json data
  import camps from "/utils/camps.js";

// Function to render camps and append them to the HTML
function renderCamps() {
   
    // Get the container where you want to render the camps
const campListContainer = document.getElementById('campList');

// Loop through the array and generate HTML elements for each camp
    camps.forEach((camp) => {
    const campElement = document.createElement('div');
    campElement.classList.add('rounded', 'p-3', 'border');

    // Create an image element
    const imageElement = document.createElement('img');
    imageElement.src = camp.image
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
    // viewButton.innerHTML = `<a href="#">View Campground</a>`;
    viewButton.innerHTML = `<a href="details.html?id=${camp.id}">View Campground</a>`;
        // Add a click event listener to each "View Campground" button
    viewButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the default link behavior
        
        // Extract the camp ID from the href attribute
        const href = viewButton.querySelector('a').getAttribute('href');
        console.log( href)


        // const campId = new URLSearchParams(href).get('id');
        // Create a URL object to extract the id parameter
        const url = new URL(href, window.location.href);
        const campId = url.searchParams.get('id');

        // Log the extracted campId
        console.log('campId:', campId);

        // Redirect to the camp details page with the camp ID
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

// Call the renderHouses function to render camps
renderCamps();
