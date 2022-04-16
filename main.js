let $ = document
let container = $.querySelector(".container")
let left = $.querySelector(".left")
let right = $.querySelector(".right")

left.addEventListener("mouseenter", ()=> {
    container.classList.add("move-right")
})
left.addEventListener("mouseleave", ()=> {
    container.classList.remove("move-right")
})
right.addEventListener("mouseenter", ()=> {
    container.classList.add("move-left")
})
right.addEventListener("mouseleave", ()=> {
    container.classList.remove("move-left")
})