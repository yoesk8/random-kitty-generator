/*!
* Start Bootstrap - Shop Item v5.0.5 (https://startbootstrap.com/template/shop-item)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-item/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

let button = document.getElementById("btn")
button.addEventListener("click", getCatImage)

function getCatImage(){
let image = document.getElementById("cat-img")
fetch("https://api.thecatapi.com/v1/images/search")
.then(resp=>resp.json())
.then(json=> image.src = json[0].url)

}