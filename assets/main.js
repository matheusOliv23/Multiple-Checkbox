const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
const button = document.querySelector("#all");

let lastChecked;

function handleCheck(e) {
    let between = false;
    if (e.shiftKey && this.checked) {
        checkboxes.forEach((checkbox) => {
            console.log(checkbox);
            if (checkbox === this || checkbox === lastChecked) {
                between = !between;
                console.log("checando os que estão entre");
            }

            if (between) {
                checkbox.checked = true;
            }
        });
    }
    lastChecked = this;
}

function handleSelectAll(e) {
    checkboxes.forEach((checkbox) => {
        console.log(checkbox.checked);
        if (checkbox.checked) checkbox.checked = false;

        checkbox.checked = true;
    });
}

checkboxes.forEach((checkbox) =>
    checkbox.addEventListener("click", handleCheck)
);

button.addEventListener("click", handleSelectAll);