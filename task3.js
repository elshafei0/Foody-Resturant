//for salad
const rightBtn_salad = document.getElementById("right_salad");
const leftBtn_salad = document.getElementById("left_salad");
const slides_salad = document.querySelector(".imgs_salad");
let currentIndex_salad = 0;
let trans = 7;
rightBtn_salad.addEventListener("click", () => {
  currentIndex_salad =
    currentIndex_salad == 0
      ? slides_salad.children.length - 1
      : (currentIndex_salad - 1) % slides_salad.children.length;
  slides_salad.style.transform = `translateX(-${currentIndex_salad * 20.3}%)`;
});
leftBtn_salad.addEventListener("click", () => {
  currentIndex_salad =
    currentIndex_salad == 5
      ? slides_salad.children.length - 1
      : (currentIndex_salad + 1) % slides_salad.children.length;
  slides_salad.style.transform = `translateX(-${currentIndex_salad * 20.3}%)`;
  document.querySelector(".price").innerHTML('Price:"7"');
});
// for Chicken
const rightBtn_chicken = document.getElementById("right_chicken");
const leftBtn_chicken = document.getElementById("left_chicken");
const slides_chicken = document.querySelector(".imgs_chicken");
let currentIndex_chicken = 0;

rightBtn_chicken.addEventListener("click", () => {
  currentIndex_chicken =
    currentIndex_chicken == 0
      ? slides_chicken.children.length - 1
      : (currentIndex_chicken - 1) % slides_chicken.children.length;
  slides_chicken.style.transform = `translateX(-${
    currentIndex_chicken * 20.3
  }%)`;
});
leftBtn_chicken.addEventListener("click", () => {
  currentIndex_chicken =
    currentIndex_chicken == 5
      ? slides_chicken.children.length - 1
      : (currentIndex_chicken + 1) % slides_chicken.children.length;
  slides_chicken.style.transform = `translateX(-${
    currentIndex_chicken * 20.3
  }%)`;
});
//  for Rice
const rightBtn_rice = document.getElementById("right_rice");
const leftBtn_rice = document.getElementById("left_rice");
const slides_rice = document.querySelector(".imgs_rice");
let currentIndex_rice = 0;

rightBtn_rice.addEventListener("click", () => {
  currentIndex_rice =
    currentIndex_rice == 0
      ? slides_rice.children.length - 1
      : (currentIndex_rice - 1) % slides_rice.children.length;
  slides_rice.style.transform = `translateX(-${currentIndex_rice * 20.3}%)`;
});
leftBtn_rice.addEventListener("click", () => {
  currentIndex_rice =
    currentIndex_rice == 5
      ? slides_rice.children.length - 1
      : (currentIndex_rice + 1) % slides_rice.children.length;
  slides_rice.style.transform = `translateX(-${currentIndex_rice * 20.3}%)`;
});
//  for Meat
const rightBtn_meat = document.getElementById("right_meat");
const leftBtn_meat = document.getElementById("left_meat");
const slides_meat = document.querySelector(".imgs_meat");
let currentIndex_meat = 0;

rightBtn_meat.addEventListener("click", () => {
  currentIndex_meat =
    currentIndex_meat == 0
      ? slides_meat.children.length - 1
      : (currentIndex_meat - 1) % slides_meat.children.length;
  slides_meat.style.transform = `translateX(-${currentIndex_meat * 20.3}%)`;
});
leftBtn_meat.addEventListener("click", () => {
  currentIndex_meat =
    currentIndex_meat == 2
      ? slides_meat.children.length - 1
      : (currentIndex_meat + 1) % slides_meat.children.length;
  slides_meat.style.transform = `translateX(-${currentIndex_meat * 20.3}%)`;
});
//for catigories
const topBtn_cati1 = document.getElementById("top_cati");
const buttomBtn_cati1 = document.getElementById("buttom_cati");
const slides_cati1 = document.querySelector(".container-2");
let currentIndex_cati1 = 0;

topBtn_cati1.addEventListener("click", () => {
  currentIndex_cati1 =
    currentIndex_cati1 == 6
      ? slides_cati1.children.length - 1
      : (currentIndex_cati1 - 1) % slides_cati1.children.length;
  slides_cati1.style.transform = `translateY(-${currentIndex_cati1 * 16.7}%)`;
});
buttomBtn_cati1.addEventListener("click", () => {
  currentIndex_cati1 =
    currentIndex_cati1 == 6
      ? slides_cati1.children.length - 1
      : (currentIndex_cati1 + 1) % slides_cati1.children.length;
  slides_cati1.style.transform = `translateY(-${currentIndex_cati1 * 16.7}%)`;
});
// for Header

const img = document.getElementById("header_img");
const foody_class = document.querySelector(".foody");
const foody_id = document.getElementById("foody");

img.addEventListener("click", function () {
  foody_class.style.width = "172px";
  foody_id.style.top = "0%";
});

// for header-image

img.addEventListener("mouseenter", function () {
  document.querySelector(".btn").style.overflow = "disable";
  document.querySelector(".btn").style.width = "68px";
  document.querySelector(".btn").style.right = "16%";
});
img.addEventListener("mouseleave", function () {
  document.querySelector(".btn").style.right = "-110%";
  document.querySelector(".img-btn").style.overflow = "hidden";
});

// for contact
const sign_up = document.getElementById("sign-Up");
const sign_in = document.getElementById("sign-In");
const slides_contact = document.querySelector(".slide-contact");
let currentIndex_contact = 0;

sign_up.addEventListener("click", () => {
  currentIndex_contact =
    currentIndex_contact == 2
      ? slides_contact.children.length - 1
      : (currentIndex_contact - 1) % slides_contact.children.length;
  slides_contact.style.transform = `translateX(-${
    currentIndex_contact * 103
  }%)`;
});
sign_in.addEventListener("click", () => {
  currentIndex_contact =
    currentIndex_contact == 2
      ? slides_contact.children.length - 1
      : (currentIndex_contact + 1) % slides_contact.children.length;
  slides_contact.style.transform = `translateX(-${
    currentIndex_contact * 103
  }%)`;
});

const confirm_password = document.getElementById("confirm-password").value;
const password = document.getElementById("password").value;
const btn = document.getElementById("btn");
btn,
  addEventListener("click", function () {
    if (confirm_password !== password) {
      window.Error("Two Password Aren't Same");
    }
  });

// for add_to_cart

const add_to_cart = document.getElementById("add_to_cart");
add_to_cart.addEventListener("click", function () {
  window.alert("Added To Cart");
});
