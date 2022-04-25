

let parent = document.getElementById("parent_box");


// let data = JSON.parse(localStorage.getItem("MyNykaaOrder"));

async function getOrderData() {
    let res = await fetch("http://localhost:2005/order")
    let data = await res.json()

data.forEach((item)=>{

    let card = document.createElement("div");

    card.setAttribute("class", "order_card");




    let img_div = document.createElement("div");

    img_div.setAttribute("class", "img_div");

    let image = document.createElement("img");

    image.src = item.img1;

    img_div.append(image);




    let text_div = document.createElement("div");

    text_div.setAttribute("class", "text_div");


    let title = document.createElement("p");

    title.innerText = item.name.substring(0,40);


    let price_div = document.createElement("div");

    price_div.setAttribute("class", "price_div");

    let quantity = document.createElement("p");

    quantity.setAttribute("class", "quantity_text");

    quantity.innerText = "1";

    let price = document.createElement("p");

    price.setAttribute("class", "price_text");

    price.innerText = item.price;

    price_div.append(quantity, price);


    text_div.append(title, price_div);

    card.append(img_div, text_div);


    parent.append(card);


})
}

getOrderData()
// localStorage.setItem("MyNykaaOrder" , JSON.stringify([]))


async function getDLTData() {
    
    let res = await fetch("http://localhost:2005/order")
    let data = await res.json()
    DLT(data)
}

function DLT(data) {


    data.forEach((daa) => {

        let dltorder = fetch(`http://localhost:2005/order/${daa._id}` , {
            method: "DELETE"
        })


    })
}




setTimeout(() => {

    
 getDLTData() 
 parent.innerHTML = null
},99099)