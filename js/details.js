// import camps
import camps from "../utils/camps.js";

// Get the camp ID from the URL query parameter
const urlParams = new URLSearchParams(window.location.search);
const campId = urlParams.get('id');

// Find the camp with the specified ID
const camp = camps.find(camp => camp.id === parseInt(campId));
console.log(camp)
// Function to display camp details
function displayCampDetails() {
    if (camp) {
    const campDetailsElement = document.getElementById('camp-details');
    const campDetailsHTML = `
    <img src="${camp.image}" alt="${camp.name}" class="w-full rounded-md">
    <div class="text">
      <div class="my-3 header_text flex flex-row justify-between p-0">
        <p class="header text-textBlack font-bold">${camp.name}</p>
        <p class="price text-lg text-textBlack">${camp.price}/night</p>
      </div>
      <p class="desc text-textGrey text-sm">${camp.description}</p>
      <p class="mt-2 italic text-sm text-textGrey">Submitted by ${camp.submittedby}</p>
    </div>
  `;
    // Set the camp details HTML
    campDetailsElement.innerHTML = campDetailsHTML;
    // Get the review wrapper element
  const reviewWrapperElement = document.getElementById('review_wrapper');

  // Generate HTML for camp reviews
  const campReviewsHTML = camp.reviews.map((review) => `
    <div class="single_review py-4 border-b">
      <div class="header_text flex flex-row justify-between">
        <p class="header text-textBlack font-bold">${review.name}</p>
        <p class="price text-sm">${review.time}</p>
      </div>
      <p class="text-textGrey text-sm">${review.review}</p>
    </div>
  `).join('');
    
   // Set the camp reviews HTML
   reviewWrapperElement.innerHTML = campReviewsHTML;

   const leaveReviewButtonHTML = `
   <div class="flex md:justify-end mt-5">
       <div class="flex gap-x-2 text-1xl create  px-6 py-4 bg-textBlack text-white rounded-md cursor-pointer">
           <img src="./assets/images/ChatBubble.svg" alt="">
           Leave a Review
       </div>
   </div>
`;
reviewWrapperElement.innerHTML += leaveReviewButtonHTML;
}  else {
    // Handle the case where the camp with the specified ID is not found
    console.error('Camp not found');
  }

}

displayCampDetails();
console.log("id", campId)