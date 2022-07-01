async function randomDog() {
    let result = await axios.get('https://dog.ceo/api/breeds/image/random')
    let img = document.createElement("img");
    img.src = result.data.message;
    img.className = "col-4"
    let imgBox = document.querySelector("#img-box");
    imgBox.append(img);
}
async function getDogPic(doggy) {
    let dogPic = await axios.get(`https://dog.ceo/api/breed/${doggy}/images/random`);
    let img = document.createElement("img");
    img.src = dogPic.data.message;
    img.className = "col-4"
    let imgBox = document.querySelector("#img-box");
    imgBox.append(img);
}
let searchButton = document.querySelector("#searchButton");
searchButton.addEventListener("click", function (event) {
    event.preventDefault();
    let input = document.getElementById("search");
    let inputVal = input.value;
    if (inputVal.includes(" ")) {
        let editedArr = inputVal.toLowerCase().split(" ");
        let editedVal = editedArr[editedArr.length - 1] + "/" + editedArr[0];
        if (editedVal != "") {
            getDogPic(editedVal);
        } else {
            randomDog();
        }
    } else {
        if (inputVal != "") {
            getDogPic(inputVal);
        } else {
            randomDog();
        }
    }
    input.value = '';
});
