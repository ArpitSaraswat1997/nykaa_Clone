let data = JSON.parse(localStorage.getItem("prdetails"));
let cart = JSON.parse(localStorage.getItem("cart")) || [];
console.log(data);
let getdetails = () => {
  let img1 = document.createElement("img");
  img1.src = data.img1;
  let img2 = document.createElement("img");
  img2.src = data.img2;
  document.getElementById("image2id").append(img2);
  let img3 = document.createElement("img");
  img3.src = data.img3;
  document.getElementById("image3id").append(img3);
  let img4 = document.createElement("img");
  img4.src = data.img4;
  document.getElementById("image1id").append(img4);
  console.log("hello");
  document.querySelector(".img-showcase").append(img1);

  let title = document.getElementById("product-title");
  title.innerText = data.name;
  let rating = document.getElementById("product-rating");
  rating.innerText = data.rating;
  let price = document.getElementById("new-price");
  price.innerText = "Price : ₹" + data.price;
  let desc = document.getElementById("desc");
  desc.innerText = data.description;
};
getdetails();

const imgs = document.querySelectorAll(".img-select a");
const imgBtns = [...imgs];
let imgId = 1;

function slideImage() {
  const displayWidth = document.querySelector(
    ".img-showcase img:first-child"
  ).clientWidth;

  document.querySelector(".img-showcase").style.transform = `translateX(${
    -(imgId - 1) * displayWidth
  }px)`;
}

window.addEventListener("resize", slideImage);

document.getElementById("image3id").addEventListener("mouseover", myfunction);

function myfunction() {
  let div1 = document.createElement("div");
  div1.setAttribute("id", "zoomImage");
  let image = document.createElement("img");
  image.src = data.img3;
  document.querySelector(".img-showcase").innerHTML = "";
  document.querySelector(".img-showcase").append(image);
}

document.getElementById("image3id").addEventListener("mouseleave", myleave);
function myleave() {
  let div1 = document.createElement("div");
  div1.setAttribute("id", "zoomImage");
  let image = document.createElement("img");
  image.src = data.img1;
  document.querySelector(".img-showcase").innerHTML = "";
  document.querySelector(".img-showcase").append(image);
}

// 2

document.getElementById("image2id").addEventListener("mouseover", myfunction1);

function myfunction1() {
  let div1 = document.createElement("div");
  div1.setAttribute("id", "zoomImage1");
  let image = document.createElement("img");
  image.src = data.img2;
  document.querySelector(".img-showcase").innerHTML = "";
  document.querySelector(".img-showcase").append(image);
}

document.getElementById("image3id").addEventListener("mouseleave", myleave1);
function myleave1() {
  let div1 = document.createElement("div");
  div1.setAttribute("id", "zoomImage1");
  let image = document.createElement("img");
  image.src = data.img1;
  document.querySelector(".img-showcase").innerHTML = "";
  document.querySelector(".img-showcase").append(image);
}

//3

document.getElementById("image1id").addEventListener("mouseover", myfunction3);

function myfunction3() {
  let div1 = document.createElement("div");
  div1.setAttribute("id", "zoomImage3");
  let image = document.createElement("img");
  image.src = data.img4;
  document.querySelector(".img-showcase").innerHTML = "";
  document.querySelector(".img-showcase").append(image);
}

document.getElementById("image1id").addEventListener("mouseleave", myleave3);
function myleave3() {
  let div1 = document.createElement("div");
  div1.setAttribute("id", "zoomImage3");
  let image = document.createElement("img");
  image.src = data.img1;
  document.querySelector(".img-showcase").innerHTML = "";
  document.querySelector(".img-showcase").append(image);
}
document.querySelector("#addbtn").addEventListener("click", addtocart);
function addtocart() {
  let qty = document.getElementById("qty").value;
  data.qty = qty;
  console.log(data.qty);
  cart.push(data);
  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.href = "./product.html";
}
