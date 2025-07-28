const calculater = document.getElementById('calculater');
const displayarea = document.getElementById('display_area');
calculater.addEventListener('click', e => {
    if (e.target.nodeName === 'BUTTON') {
        switch (e.target.textContent) {
            case "C":
                clear();
                break;
            case "DEL":
                deleteValue();
                break;
            case "=":
                calculater();
                break;
            default:
                add(e.target.textContent);

        }

    }
})



function clear() {
    displayarea.textContent = "";
}
function add(Value) {
    displayarea.textContent = displayarea.textContent + Value;
}