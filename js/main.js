const click = document.querySelectorAll(".click"),
    p = document.querySelectorAll(".click > ul > li > p");

for (let i = 0; i < click.length; i++) {
    click[i].addEventListener("click", (event)=> {
        const paragraph = p[i];

        if (event.target == paragraph) {
            return;
        }

        click[i].classList.toggle("list-style");
        paragraph.classList.toggle("display");
    })
}
