const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("show", entry.isIntersecting);
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

//.
var jumpToTop = document.getElementById("jump-to-top");
var articleContainer = document.querySelector(".article-container");
const startElement = document.getElementById("start");

jumpToTop.addEventListener("click", function () {
  articleContainer.scrollTop = 0;
});

// Create an intersection observer with a callback function
const observer2 = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      // If the start element is in view
      if (entry.isIntersecting) {
        // Reset the scroll position of the article container
        articleContainer.scrollTop = 0;
        document.querySelector("#h3-person").classList.add("")
      }
    });
  },
  { threshold: 0.5 }
); // Adjust the threshold as needed

// Start observing the start element
observer2.observe(startElement);
