const inputs = document.querySelectorAll(".controls input");

const handleUpdate = () => {
    const suffix = event.target.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${event.target.name}`, event.target.value + suffix)
};

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));