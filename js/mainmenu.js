var backgroundno = Math.random() * 4
const background = document.querySelector("[backgroundname]")
if (~~backgroundno == 0){
    background.classList.add("background1")
}
else if (~~backgroundno == 1){
    background.classList.add("background2")
}
else if (~~backgroundno == 2){
    background.classList.add("background3")
}
else if (~~backgroundno == 3){
    background.classList.add("background4")
}
