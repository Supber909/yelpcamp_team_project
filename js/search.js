import camps from "../utils/camps.js";

function searchCamps(searchText, camps) {
    // Filter camps based on the search input
    const filteredCamps = camps.filter((camp) => {
      const campName = camp.name.toLowerCase();
      const campDescription = camp.description.toLowerCase();
  
      // Check if the search text appears in the camp name or description
      return campName.includes(searchText) || campDescription.includes(searchText);
    });
  
    // Return the filtered camps
    // console.log("seacrh results", filteredCamps)
    return filteredCamps;
  }
  
  export { searchCamps };