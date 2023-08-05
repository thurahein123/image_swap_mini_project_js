const button = document.getElementById("changeButton");

const image = document.getElementsByClassName("originalImg")[0];

const originalImgSrc = image.src

const imageArray = [
    "https://cdn.pixabay.com/photo/2022/05/21/06/52/standup-paddleboarding-7210815__340.jpg",
    "https://cdn.pixabay.com/photo/2022/07/05/09/19/mother-7302669__340.jpg",
    "https://cdn.pixabay.com/photo/2022/07/01/14/29/wheat-7295718__340.jpg",
    "https://cdn.pixabay.com/photo/2022/06/27/07/22/woman-7286907__340.jpg",
];

let counter = 0
const myFunction = () => {
    if (counter === imageArray.length) {
        image.src = originalImgSrc;
        counter = 0;
        return;
    }
    let imageLink = imageArray[counter];
    image.src = imageLink
    counter += 1;
    console.log(counter)
}

button.addEventListener("click", myFunction);
