function fakeAPI(searchTerm) {
  return fetch("https://fakestoreapi.com/products")
    .then((response) => response.json())
    .then((data) => {
      // Filter the results based on the search term
      const filteredResults = data.filter((item) =>
        item.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return filteredResults;
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      return [];
    });
}

function getData(searchTerm) {
  fakeAPI(searchTerm).then((data) => {
    console.log("Fetching Data:", data);
    // Update your UI or do any other processing with the fetched data
    const resultsList = document.getElementById("results");
    resultsList.innerHTML = "";

    data.forEach((item) => {
      const li = document.createElement("li");
      li.textContent = item.title;
      resultsList.appendChild(li);
    });
  });
}

function myDebounce(call, d) {
  let timer;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      call.apply(this, args);
    }, d);
  };
}

// function myDebounce(call, d) {
//   let timer;
//   return function (...args) {
//     if (timer) {
//       clearTimeout(timer);
//     }
//     setTimeout(() => {
//       call();
//     }, d);
//   };
// }

const debouncedGetData = myDebounce(getData, 500);

const searchInput = document.getElementById("searchInput");
searchInput.addEventListener("input", (event) => {
  const searchTerm = event.target.value;
  debouncedGetData(searchTerm);
});
