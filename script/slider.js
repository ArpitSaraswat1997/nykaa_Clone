var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  },
});

let initData = async () => {
  let response = await fetch(`https://nyka-json-server.onrender.com/posts`);
  let data = await response.json();
  console.log(data);
  displayData(data);
};

let blogBody = document.getElementById("big-brands");
let displayData = (data) => {
  data.forEach((posts) => {
    console.log(posts.url);
    let div = document.createElement("div");
    div.setAttribute("class", "offers");
    let image = document.createElement("img");
    image.src = posts.url;
    let title = document.createElement("h4");
    title.textContent = posts.title;
    let para = document.createElement("p");
    para.textContent = posts.para;
    div.append(image, title, para);
    blogBody.append(div);
  });
};
initData();

//
let initData2 = async () => {
  let response2 = await fetch(`https://nyka-json-server.onrender.com/posts2`);
  let data2 = await response2.json();
  console.log(data2);
  displayData2(data2);
};

let blogBody2 = document.getElementById("big-brands2");
let displayData2 = (data2) => {
  data2.forEach((posts2) => {
    console.log(posts2.url);
    let div = document.createElement("div");
    div.setAttribute("class", "offers");
    let image = document.createElement("img");
    image.src = posts2.url;
    let title = document.createElement("h4");
    title.textContent = posts2.title;
    let para = document.createElement("p");
    para.textContent = posts2.para;
    div.append(image, title, para);
    blogBody2.append(div);
  });
};
initData2();

//products

let initData3 = async () => {
  let response3 = await fetch(`https://nyka-json-server.onrender.com/products`);
  let data3 = await response3.json();
  console.log(data3);
  displayData3(data3);
};

let blogBody3 = document.getElementById("wrapper");
let displayData3 = (data3) => {
  data3.forEach((products) => {
    console.log(products.url);
    let div = document.createElement("div");
    div.setAttribute("class", "products");
    let image = document.createElement("img");
    image.src = products.url;
    let orignal = document.createElement("p");
    orignal.textContent = products.orignal;
    let price = document.createElement("h5");
    price.textContent = products.price;
    let dis = document.createElement("span");
    dis.textContent = products.dis;
    div.append(image, orignal, price, dis);
    blogBody3.append(div);
  });
};
initData3();

// influencers
let initData4 = async () => {
  let response4 = await fetch(
    `https://nyka-json-server.onrender.com/influencer`
  );
  let data4 = await response4.json();
  console.log(data4);
  displayData4(data4);
};

let blogBody4 = document.getElementById("influencer");
let displayData4 = (data4) => {
  data4.forEach((influencer) => {
    console.log(influencer.url);
    let div = document.createElement("div");
    div.setAttribute("class", "influencerDetails");
    let image = document.createElement("img");
    image.src = influencer.url;
    let name = document.createElement("h5");
    name.textContent = influencer.name;
    let surname = document.createElement("p");
    surname.textContent = influencer.surname;
    div.append(image, name, surname);
    blogBody4.append(div);
  });
};
initData4();
