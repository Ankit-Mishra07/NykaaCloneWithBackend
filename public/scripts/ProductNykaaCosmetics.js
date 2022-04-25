var bo = document.getElementById("bo");
var to = document.getElementById("to");
var tho = document.getElementById("tho");
var fo = document.getElementById("fo");
var fi = document.getElementById("fi");
var si = document.getElementById("si");
var se = document.getElementById("se");
var ei = document.getElementById("ei");

var page = 1;
function first(){
  bo.style.backgroundColor="#fc2779"
  to.style.backgroundColor="#F3F3F3"
  tho.style.backgroundColor="#F3F3F3"
  fo.style.backgroundColor="#F3F3F3";
  fi.style.backgroundColor="#F3F3F3";
  si.style.backgroundColor="#F3F3F3";
  se.style.backgroundColor="#F3F3F3";
  ei.style.backgroundColor="#F3F3F3";
  page = 1;
  async function GETCosNykaaProducts() {

    let res = await fetch(`http://localhost:2005/pages?page=${page}&size=15`)
    
    let data = await res.json()
    console.log(data.products);
   AppendToProCont(data.products)
  }
  
  
  GETCosNykaaProducts()
  bo.addEventListener("click",()=>{
    window.scrollTo({
    top:600,
       left :0,
       behavior:"smooth"
    })
})

}
function second(){
  bo.style.backgroundColor="#F3F3F3"
  to.style.backgroundColor="#fc2779"
  tho.style.backgroundColor="#F3F3F3"
  fo.style.backgroundColor="#F3F3F3";
  fi.style.backgroundColor="#F3F3F3";
  si.style.backgroundColor="#F3F3F3";
  se.style.backgroundColor="#F3F3F3";
  ei.style.backgroundColor="#F3F3F3";
  page = 2;
  async function GETCosNykaaProducts() {

    let res = await fetch(`http://localhost:2005/pages?page=${page}&size=15`)
    
    let data = await res.json()
    console.log(data.products);
   AppendToProCont(data.products)
  }
  
  
  GETCosNykaaProducts()
  to.addEventListener("click",()=>{
    window.scrollTo({
    top:600,
       left :0,
       behavior:"smooth"
    })
})

}
function third(){
  bo.style.backgroundColor="#F3F3F3"
  to.style.backgroundColor="#F3F3F3"
  tho.style.backgroundColor="#fc2779"
  fo.style.backgroundColor="#F3F3F3";
  fi.style.backgroundColor="#F3F3F3";
  si.style.backgroundColor="#F3F3F3";
  se.style.backgroundColor="#F3F3F3";
  ei.style.backgroundColor="#F3F3F3";
  page=3;
  async function GETCosNykaaProducts() {

    let res = await fetch(`http://localhost:2005/pages?page=${page}&size=15`)
    
    let data = await res.json()
   AppendToProCont(data.products)
  }
  
  
  GETCosNykaaProducts()
  tho.addEventListener("click",()=>{
    window.scrollTo({
    top:600,
       left :0,
       behavior:"smooth"
    })
})

}
function fourth(){
  bo.style.backgroundColor="#F3F3F3"
  to.style.backgroundColor="#F3F3F3"
  tho.style.backgroundColor="#F3F3F3"
  fo.style.backgroundColor="#fc2779";
  fi.style.backgroundColor="#F3F3F3";
  si.style.backgroundColor="#F3F3F3";
  se.style.backgroundColor="#F3F3F3";
  ei.style.backgroundColor="#F3F3F3";
  page=4;
  async function GETCosNykaaProducts() {

    let res = await fetch(`http://localhost:2005/pages?page=${page}&size=15`)
    
    let data = await res.json()
   AppendToProCont(data.products)
  }
  
  
  GETCosNykaaProducts()
  fo.addEventListener("click",()=>{
    window.scrollTo({
    top:600,
       left :0,
       behavior:"smooth"
    })
})
}
function five(){
  bo.style.backgroundColor="#F3F3F3"
  to.style.backgroundColor="#F3F3F3"
  tho.style.backgroundColor="#F3F3F3"
  fo.style.backgroundColor="#F3F3F3";
  fi.style.backgroundColor="#fc2779";
  si.style.backgroundColor="#F3F3F3";
  se.style.backgroundColor="#F3F3F3";
  ei.style.backgroundColor="#F3F3F3";
  page=5
  async function GETCosNykaaProducts() {

    let res = await fetch(`http://localhost:2005/pages?page=${page}&size=15`)
    
    let data = await res.json()
   AppendToProCont(data.products)
  }
  
  
  
  GETCosNykaaProducts()
  fi.addEventListener("click",()=>{
    window.scrollTo({
    top:600,
       left :0,
       behavior:"smooth"
    })
})
}



function sixth(){
  bo.style.backgroundColor="#F3F3F3"
  to.style.backgroundColor="#F3F3F3"
  tho.style.backgroundColor="#F3F3F3"
  fo.style.backgroundColor="#F3F3F3";
  fi.style.backgroundColor="#F3F3F3";
  si.style.backgroundColor="#fc2779";
  se.style.backgroundColor="#F3F3F3";
  ei.style.backgroundColor="#F3F3F3";
  page=6
  async function GETCosNykaaProducts() {

    let res = await fetch(`http://localhost:2005/pages?page=${page}&size=15`)
    
    let data = await res.json()
   AppendToProCont(data.products)
  }
  
  
  
  GETCosNykaaProducts()
  si.addEventListener("click",()=>{
    window.scrollTo({
    top:600,
       left :0,
       behavior:"smooth"
    })
})
}


function seven(){
  bo.style.backgroundColor="#F3F3F3"
  to.style.backgroundColor="#F3F3F3"
  tho.style.backgroundColor="#F3F3F3"
  fo.style.backgroundColor="#F3F3F3";
  fi.style.backgroundColor="#F3F3F3";
  si.style.backgroundColor="#F3F3F3";
  se.style.backgroundColor="#fc2779";
  ei.style.backgroundColor="#F3F3F3";
  page=7
  async function GETCosNykaaProducts() {

    let res = await fetch(`http://localhost:2005/pages?page=${page}&size=15`)
    
    let data = await res.json()
   AppendToProCont(data.products)
  }
  
  
  
  GETCosNykaaProducts()
  se.addEventListener("click",()=>{
    window.scrollTo({
    top:600,
       left :0,
       behavior:"smooth"
    })
})
}
function eight(){
  bo.style.backgroundColor="#F3F3F3"
  to.style.backgroundColor="#F3F3F3"
  tho.style.backgroundColor="#F3F3F3"
  fo.style.backgroundColor="#F3F3F3";
  fi.style.backgroundColor="#F3F3F3";
  si.style.backgroundColor="#F3F3F3";
  se.style.backgroundColor="#F3F3F3";
  ei.style.backgroundColor="#fc2779";
  page=8
  async function GETCosNykaaProducts() {

    let res = await fetch(`http://localhost:2005/pages?page=${page}&size=15`)
    
    let data = await res.json()
   AppendToProCont(data.products)
  }
  
  
  
  GETCosNykaaProducts()
  ei.addEventListener("click",()=>{
    window.scrollTo({
    top:600,
       left :0,
       behavior:"smooth"
    })
})
}




var slideindexval = 1;
SHOWSLIDESOFPRODUCTS(slideindexval);

function PlusSlidePro(n) {
  SHOWSLIDESOFPRODUCTS(slideindexval += n);
}

function CURRENTSLIDE(n) {
  SHOWSLIDESOFPRODUCTS(slideindexval = n);
}

function SHOWSLIDESOFPRODUCTS(n) {
  var i;
  var slides = document.getElementsByClassName("MYSlides");
  var dots = document.getElementsByClassName("indicator");
  if (n > slides.length) {slideindexval = 1}    
  if (n < 1) {slideindexval = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideindexval-1].style.display = "block";  
  dots[slideindexval-1].className += " active";
}


//Sorting functionality

let SortPopularityBox = document.querySelector(".SortPopularityBox")

let DownArrows = document.querySelector(".DownArrows")
let UpArrows = document.querySelector(".UpArrows")
let OptionsForSortBy = document.querySelector(".OptionsForSortBy")

SortPopularityBox.addEventListener("click", ShowOptionsForSortBy)
//UpArrows.addEventListener("click" , HideOptionsForSortBy )
let flag = true
function ShowOptionsForSortBy() {
    if(flag == true) {
    OptionsForSortBy.style.display = "grid"
    DownArrows.style.display = "none"
    UpArrows.style.display = "block"
    flag = false
    }else {
        OptionsForSortBy.style.display = "none"
        DownArrows.style.display = "block"
        UpArrows.style.display = "none"
        flag = true
    }
}

// function HideOptionsForSortBy() {
//     OptionsForSortBy.style.display = "none"
//     DownArrows.style.display = "block"
//     UpArrows.style.display = "none"
// }   

let Categery = document.querySelector(".Categery")

Categery.addEventListener("click" , ShowCategoryBoxes)

let CATCUT = document.querySelector(".CATCUT")


let CATDOWN =  document.querySelector(".CATDOWN")


let Multiple = document.querySelector(".multiple")

let CATMAKEUP = document.querySelector(".CATMAKEUP")
CATMAKEUP.addEventListener("click" , ShowMakeupResul)

let Makeup_resul = document.querySelector(".Makeup-resul")

let catflag = true

function ShowCategoryBoxes() {
  if(catflag == true) {
  
  Multiple.style.display = "block"
  CATCUT.style.display = "block"
  CATDOWN.style.display = "none" 
  catflag = false
  } else {
    Multiple.style.display = "none"
    CATCUT.style.display = "none"
    CATDOWN.style.display = "block"
    catflag = true
  }
}



let Makeup_resulflag = true


function ShowMakeupResul() {
  if(Makeup_resulflag) {
  Makeup_resul.style.display = "grid"
  Makeup_resulflag = false
  }else {
    Makeup_resul.style.display = "none"
    Makeup_resulflag = true
  }
}


let FPRICE = document.querySelector(".FPRICE")
let PRICEMULTI = document.querySelector(".PRICEMULTI")
let PriDOWN = document.querySelector(".PriDOWN")
let PriCUT = document.querySelector(".PriCUT")

FPRICE.addEventListener("click" , SHOWPriceFil)

let FPRICEflag = true

function SHOWPriceFil() {
  if(FPRICEflag) {
    PRICEMULTI.style.display = "grid"
    PriDOWN.style.display = "none"
    PriCUT.style.display = "block"
    FPRICEflag = false
  }else {

    PRICEMULTI.style.display = "none"
    PriDOWN.style.display = "block"
    PriCUT.style.display = "none"
    FPRICEflag = true

  }

}

//Product container

//r458qp8RwSH1eEC2RDy6recYeigRirD99FljxwcI3Edj1w5D0f9MbtV2MLEjlvVh






let Products_Container = document.querySelector(".NykaaCosProducts-Container")

async function GETCosNykaaProducts() {

  let res = await fetch(`http://localhost:2005/pages?page=${page}&size=15`)
  let data = await res.json()
  
 AppendToProCont(data.products)
}


GETCosNykaaProducts()

function AppendToProCont(data) {

  Products_Container.innerHTML = null

data.forEach((prod) => {

  let maindiv = document.createElement("div")
  maindiv.setAttribute("class" , "main__div")

  let div = document.createElement("div")
  div.setAttribute("class" , "prod_box")



  let image = document.createElement("img")
  image.src = prod.img1

  div.onclick = function() {
    GoToProductDetail(prod)
  }

  let pname = document.createElement("p")
  pname.setAttribute("class", "pname")
  pname.textContent = prod.name.substring(0,50)

  let mrp = document.createElement("p")
  mrp.setAttribute("class" , "mrp-text")
  mrp.textContent = "MRP : ₹"

  mrp_price = document.createElement("p")
  mrp_price.textContent = mrp.textContent + prod.price

  let rati = document.createElement("p")
  rati.setAttribute("class" , "starating")
  rati.textContent = prod.rating

  let btndiv = document.createElement("div")
  btndiv.setAttribute("class" , "btn_div")

  let wish_btn = document.createElement("button")
  wish_btn.setAttribute("class" , "wish_btn")
  wish_btn.innerText = "♡"

  wish_btn.onclick = function() {
    AddToWishStore(prod)
  }

  let cart_btn = document.createElement("button")
  cart_btn.setAttribute("class" , "cart_btn")
  cart_btn.innerText = "ADD TO BAG"

  cart_btn.onclick = function() {
    AddToCartStore(prod)
  }

  if(prod.brand == "nykaa cosmetics") {

  btndiv.append(wish_btn, cart_btn)

  div.append(image,pname, mrp_price, rati)
  maindiv.append(div, btndiv)
  Products_Container.append(maindiv)
  }

})

}

if(localStorage.getItem("NykaaWish") === null) {
  localStorage.setItem("NykaaWish" , JSON.stringify([]))
}

if(localStorage.getItem("NykaaCart") === null) {
  localStorage.setItem("NykaaCart" , JSON.stringify([]))
}

function AddToCartStore(prodct) {


  fetch("http://localhost:2005/addcart", {
    method: "POST",
    body : JSON.stringify(prodct),
    headers : {
      "Content-Type" : "application/json"
    }
  })
  .then(res => console.log(res))
  .catch(e => console.log("error"))

  // let getCartStore = JSON.parse(localStorage.getItem("NykaaCart"))

  // getCartStore.push(prodct)

  // localStorage.setItem("NykaaCart" , JSON.stringify(getCartStore))
  window.location.href = "/ProductNykaaCosmetics"
}

function AddToWishStore(prodWish) {

  

  fetch("http://localhost:2005/addwish", {
    method: "POST",
    body : JSON.stringify(prodWish),
    headers : {
      "Content-Type" : "application/json"
    }
  })
  .then(res => console.log(res))
  .catch(e => console.log("error"))

  // let getWishStore = JSON.parse(localStorage.getItem("NykaaWish"))

  // getWishStore.push(prodWish)

  // localStorage.setItem("NykaaWish" , JSON.stringify(getWishStore))

}

if(localStorage.getItem("ProductDetail") === null) {
  localStorage.setItem("ProductDetail" , JSON.stringify([]))
}

function GoToProductDetail(proDet) {

  let getProdDet = JSON.parse(localStorage.getItem("ProductDetail"))
  getProdDet.push(proDet)
  
  localStorage.setItem("ProductDetail" , JSON.stringify(getProdDet))

  setTimeout(() => {
    window.location.href = "/ProductDetail"
  },1200)

}

let SORTPOPULARITY = document.querySelector(".SORTPOPULARITY")
SORTPOPULARITY.addEventListener("click" , fnSORTPOPULARITY)


let pop_texts = document.querySelector(".pop-texts")


let SORTHIGHTOLOW = document.querySelector(".SORTHIGHTOLOW")
SORTHIGHTOLOW.addEventListener("click" , fnSORTHIGHTOLOW)

 async function fnSORTHIGHTOLOW() {


  let res = await fetch(`http://localhost:2005/all/hitolo`)

  let data = await res.json()
    
    let arr = data.sort(function (a,b){
    
      return b.price - a.price
    })
   AppendToProCont(arr)
   SORTPOPULARITY.style.backgroundColor = "#fff"
   SORTHIGHTOLOW.style.backgroundColor = "#fc3a84"
   SORTLOWTOHIGH.style.backgroundColor = "#fff"
   pop_texts.textContent = "Price: High To Low"
    // first()
}

let SORTLOWTOHIGH = document.querySelector(".SORTLOWTOHIGH")
SORTLOWTOHIGH.addEventListener("click" , fnSORTLOWTOHIGH)

async function fnSORTLOWTOHIGH() {


  let res = await fetch(`http://localhost:2005/all/lotohigh`)

  let data = await res.json()
    
    let arr = data.sort(function (a,b){
    
      return a.price - b.price
    })
   AppendToProCont(arr)
   SORTPOPULARITY.style.backgroundColor = "#fff"
  SORTHIGHTOLOW.style.backgroundColor = "#fff"
  SORTLOWTOHIGH.style.backgroundColor = "#fc3a84"
   pop_texts.textContent = "Price: Low To High"


  //  first()
}


function fnSORTPOPULARITY() {
  pop_texts.textContent = "Popularity"
  SORTPOPULARITY.style.backgroundColor = "#fc3a84"
  SORTHIGHTOLOW.style.backgroundColor = "#fff"
  SORTLOWTOHIGH.style.backgroundColor = "#fff"
  GETCosNykaaProducts()
  // first()
}