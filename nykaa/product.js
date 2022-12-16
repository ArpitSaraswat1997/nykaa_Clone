let cart = JSON.parse(localStorage.getItem("cart")) || [];
let data2 = async () => {
  let url = "https://nyka-json-server.onrender.com/data";
  let responce = await fetch(url);
  let getdata = await responce.json();
  console.log(getdata);
  displayitems(getdata);
};
data2();
let displayitems = (data) => {
  document.querySelector("#container_right").innerHTML = "";
  data.forEach((element, index) => {
    let div1 = document.createElement("div");
    div1.setAttribute("id", "div1");
    let div2 = document.createElement("div");
    div2.setAttribute("id", "div2");
    div2.addEventListener("click", function () {
      window.location.href = "./product.html";
      localStorage.setItem("prdetails", JSON.stringify(element));
    });
    let img = document.createElement("img");
    img.setAttribute("id", "img");
    img.src = element.img1;
    let title = document.createElement("p");
    title.setAttribute("id", "title");
    title.innerText = element.name;
    let mrp = document.createElement("p");
    mrp.setAttribute("id", "mrp");
    mrp.innerText = "₹ " + element.price;
    let rating = document.createElement("p");
    rating.setAttribute("id", "rating");
    rating.innerText = element.rating;
    let cartdiv = document.createElement("div");
    cartdiv.setAttribute("id", "cartdiv");
    let wishbtn = document.createElement("button");
    wishbtn.setAttribute("id", "wishbtn");
    let icon = document.createElement("img");
    icon.setAttribute("id", "icon");
    icon.src = "../img/heart.png";
    wishbtn.append(icon);
    wishbtn.addEventListener("click", function () {
      wishbtn.style.backgroundColor = "pink";
    });
    let addbtn = document.createElement("button");
    addbtn.setAttribute("id", "addbtn");
    addbtn.innerText = "Add to Cart";
    addbtn.addEventListener("click", function () {
      cart.push(element);
      localStorage.setItem("cart", JSON.stringify(cart));
      document.querySelector("#addbtn").disabled = true;
      addbtn.innerText = "Added";
      addbtn.style.backgroundColor = "pink";
      setTimeout(refresh, 2000);
    });
    cartdiv.append(wishbtn, addbtn);
    div2.append(img, title, mrp, rating);
    div1.append(div2, cartdiv);

    document.querySelector("#container_right").append(div1);
  });
};
function refresh() {
  window.location.href = "./mainPage.html";
}

// document.getElementById("sort-lth").addEventListener("click",sort_lth);
//  high to low
let dataforsort;
let datasort = async () => {
  let url = "https://nyka-json-server.onrender.com/data";
  let responce = await fetch(url);
  let getdata = await responce.json();
  dataforsort = getdata;
  dataforsort.sort(function (a, b) {
    if (+a.price > +b.price) return -1;
    if (+a.price < +b.price) return 1;
    return 0;
  });
  console.log(dataforsort);
  displayitemssort(dataforsort);
};

document.getElementById("sort-htl").addEventListener("click", datasort);

let displayitemssort = (data) => {
  document.querySelector("#container_right").innerHTML = "";
  data.forEach((element, index) => {
    let div1 = document.createElement("div");
    div1.setAttribute("id", "div1");
    let div2 = document.createElement("div");
    div2.setAttribute("id", "div2");
    div2.addEventListener("click", function () {
      window.location.href = "./product.html";
      localStorage.setItem("prdetails", JSON.stringify(element));
    });
    let img = document.createElement("img");
    img.setAttribute("id", "img");
    img.src = element.img1;
    let title = document.createElement("p");
    title.setAttribute("id", "title");
    title.innerText = element.name;
    let mrp = document.createElement("p");
    mrp.setAttribute("id", "mrp");
    mrp.innerText = "₹ " + element.price;
    let rating = document.createElement("p");
    rating.setAttribute("id", "rating");
    rating.innerText = element.rating;
    let cartdiv = document.createElement("div");
    cartdiv.setAttribute("id", "cartdiv");
    let wishbtn = document.createElement("button");
    wishbtn.setAttribute("id", "wishbtn");
    let icon = document.createElement("img");
    icon.setAttribute("id", "icon");
    icon.src = "../img/heart.png";
    wishbtn.append(icon);
    wishbtn.addEventListener("click", function () {
      wishbtn.style.backgroundColor = "pink";
    });
    let addbtn = document.createElement("button");
    addbtn.setAttribute("id", "addbtn");
    addbtn.innerText = "Add to Cart";
    addbtn.addEventListener("click", function () {
      cart.push(element);
      localStorage.setItem("cart", JSON.stringify(cart));
      document.querySelector("#addbtn").disabled = true;
      addbtn.innerText = "Added";
      addbtn.style.backgroundColor = "pink";
      setTimeout(refresh, 2000);
    });
    cartdiv.append(wishbtn, addbtn);
    div2.append(img, title, mrp, rating);
    div1.append(div2, cartdiv);

    document.querySelector("#container_right").append(div1);
  });
};

// low to high

let dataforsort1;
let datasort1 = async () => {
  let url = "https://nyka-json-server.onrender.com/data";
  let responce = await fetch(url);
  let getdata = await responce.json();
  dataforsort1 = getdata;
  dataforsort1.sort(function (a, b) {
    if (+a.price > +b.price) return 1;
    if (+a.price < +b.price) return -1;
    return 0;
  });
  console.log(dataforsort1);
  displayitemssort1(dataforsort1);
};

document.getElementById("sort-lth").addEventListener("click", datasort1);

let displayitemssort1 = (data) => {
  document.querySelector("#container_right").innerHTML = "";
  data.forEach((element, index) => {
    let div1 = document.createElement("div");
    div1.setAttribute("id", "div1");
    let div2 = document.createElement("div");
    div2.setAttribute("id", "div2");
    div2.addEventListener("click", function () {
      window.location.href = "./product.html";
      localStorage.setItem("prdetails", JSON.stringify(element));
    });
    let img = document.createElement("img");
    img.setAttribute("id", "img");
    img.src = element.img1;
    let title = document.createElement("p");
    title.setAttribute("id", "title");
    title.innerText = element.name;
    let mrp = document.createElement("p");
    mrp.setAttribute("id", "mrp");
    mrp.innerText = "₹ " + element.price;
    let rating = document.createElement("p");
    rating.setAttribute("id", "rating");
    rating.innerText = element.rating;
    let cartdiv = document.createElement("div");
    cartdiv.setAttribute("id", "cartdiv");
    let wishbtn = document.createElement("button");
    wishbtn.setAttribute("id", "wishbtn");
    let icon = document.createElement("img");
    icon.setAttribute("id", "icon");
    icon.src = "../img/heart.png";
    wishbtn.append(icon);
    wishbtn.addEventListener("click", function () {
      wishbtn.style.backgroundColor = "pink";
    });
    let addbtn = document.createElement("button");
    addbtn.setAttribute("id", "addbtn");
    addbtn.innerText = "Add to Cart";
    addbtn.addEventListener("click", function () {
      cart.push(element);
      localStorage.setItem("cart", JSON.stringify(cart));
      document.querySelector("#addbtn").disabled = true;
      addbtn.innerText = "Added";
      addbtn.style.backgroundColor = "pink";
      setTimeout(refresh, 2000);
    });
    cartdiv.append(wishbtn, addbtn);
    div2.append(img, title, mrp, rating);
    div1.append(div2, cartdiv);

    document.querySelector("#container_right").append(div1);
  });
};

// filter by name
// document.querySelector("#sort-lipstick").addEventListener("click", datasort2);
// let dataforsort2;
// let datasort2 = async () => {
//   let url = "https://nyka-json-server.onrender.com/data";
//   let responce = await fetch(url);
//   let getdata = await responce.json();
//   dataforsort2 = getdata;
//   dataforsort2.sort(function (a, b) {
//     if (+a.price > +b.price) return 1;
//     if (+a.price < +b.price) return -1;
//     return 0;
//   });
//   console.log(dataforsort2);
//   displayitemssort1(dataforsort2);
// };
