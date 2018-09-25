const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand")


const setDate = () => {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegree = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegree}deg)`;
    
    const minutes = now.getMinutes();
    const minutesDegree = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minutesDegree}deg)`;

    const hours = now.getHours();
    const hoursDegree = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegree}deg)`;
}

setInterval(setDate, 1000);