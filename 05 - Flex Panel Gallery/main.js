const panels = document.querySelectorAll(".panel")

const toggleOpen = () => {
    console.log(event.target);
    event.target.classList.toggle("open");
};

const toggleActive = (e) => {
    if(e.propertyName.includes("flex"))
    {
        event.target.classList.toggle("open-active");
    }
}

panels.forEach(panel => panel.addEventListener("click", toggleOpen));
panels.forEach(panel => panel.addEventListener("transitionend", toggleActive));