const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("show", entry.isIntersecting);
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

//.

// Function to check if an element is in the viewport
function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

// Function to add or remove classes from a target element based on the observed element's visibility
function modifyClassesOnScroll(
  observedElement,
  targetElement,
  addClassName,
  removeClassName
) {
  var target = document.querySelector(targetElement);

  if (!target) {
    console.error("Target element not found.");
    return;
  }

  var observed = document.querySelector(observedElement);

  if (!observed) {
    console.error("Observed element not found.");
    return;
  }

  function checkAndModifyClasses() {
    if (isInViewport(observed)) {
      // Add the specified class
      if (addClassName) {
        target.classList.add(addClassName);
        console.log(`Added class ${addClassName} to ${targetElement}`);
      }

      // Remove the specified class
      if (removeClassName) {
        target.classList.remove(removeClassName);
        console.log(`Removed class ${removeClassName} to ${targetElement}`);
      }

      // Remove the event listener after the classes are modified (optional)

      document.removeEventListener("scroll", checkAndModifyClasses);
    }
  }

  // Attach the function to the scroll event
  document.addEventListener("scroll", checkAndModifyClasses);

  // Initial check in case the element is already in the viewport when the page loads
  checkAndModifyClasses();
}

// Example usage
modifyClassesOnScroll("#h3-person", "#dot-1", "", "greyed");
/*modifyClassesOnScroll("#h3-person", ".cv-article", "", "to-back");
modifyClassesOnScroll("#h3-person", ".cv-article", "to-front", "");*/
modifyClassesOnScroll("#h3-person", "#line-1", "", "greyed");
modifyClassesOnScroll("#h3-career", "#dot-2", "", "greyed");
//modifyClassesOnScroll("#another-element", "#another-element", "added-class", "removed-class");

/*In this modification, the modifyClassesOnScroll function takes two additional parameters: addClassName and removeClassName. If you want to add a class to the targetElement, provide the class name in the addClassName parameter. If you want to remove a class, provide the class name in the removeClassName parameter. If you don't want to add or remove a specific class, you can pass null or an empty string for the corresponding parameter.*/
