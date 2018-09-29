const panels = document.querySelectorAll(".panel")

// Adds/remove class of 'open' when clicked
const toggleOpen = () => {
    event.currentTarget.classList.toggle("open");
};

const toggleActive = (e) => {
    if(e.propertyName.includes("flex"))
    {
        event.currentTarget.classList.toggle("open-active");
    }
}

panels.forEach(panel => panel.addEventListener("click", toggleOpen));
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));