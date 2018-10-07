const checkboxes = document.querySelectorAll('input[type="checkbox"]');
console.log(checkboxes)

let lastChecked;

// Check if shift key is held down and check if checkbox is being checked
const handleCheck = (e) => {
  let inBetween = false;
  if (e.shiftKey && e.target.checked)
  {
    checkboxes.forEach(checkbox =>  {
      if (checkbox === e.target || checkbox === lastChecked)
      {
        inBetween = !inBetween;
      }

      if (inBetween)
      {
        checkbox.checked = true;
      }
    })
  }

  lastChecked = e.target;
};

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener('click', handleCheck)
});