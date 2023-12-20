/*const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    entry.target.classList.toggle("show", entry.isIntersecting);
  });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));*/

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

  function handleIntersection(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add the specified class
        if (addClassName) {
          target.classList.add(addClassName);
          console.log(`Added class ${addClassName} to ${targetElement}`);
        }

        // Remove the specified class
        if (removeClassName) {
          target.classList.remove(removeClassName);
          console.log(`Removed class ${removeClassName} from ${targetElement}`);
        }

        // Disconnect the observer after the classes are modified (optional)
        observer.disconnect();
      }
    });
  }

  var observer = new IntersectionObserver(handleIntersection);

  // Start observing the observed element
  observer.observe(observed);
}

modifyClassesOnScroll("#h3-person", "#dot-1", "", "greyed");
modifyClassesOnScroll("#h3-person", "#icon-person", "", "inactive");
modifyClassesOnScroll("#h3-edu", "#line-1", "", "greyed");
modifyClassesOnScroll("#h3-edu", "#dot-2", "", "greyed");
modifyClassesOnScroll("#h3-edu", "#icon-edu", "", "inactive");
modifyClassesOnScroll("#h3-career", "#line-2", "", "greyed");
modifyClassesOnScroll("#h3-career", "#dot-3", "", "greyed");
modifyClassesOnScroll("#h3-career", "#icon-career", "", "inactive");
modifyClassesOnScroll("#h3-other", "#line-3", "", "greyed");
modifyClassesOnScroll("#h3-other", "#dot-4", "", "greyed");
modifyClassesOnScroll("#h3-other", "#icon-other", "", "inactive");
