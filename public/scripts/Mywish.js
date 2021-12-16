let MYWISH_BOX = document.querySelector(".MYWISH-BOX")

if(localStorage.getItem("NykaaWish") === null) {
    localStorage.setItem("NykaaWish", JSON.stringify([]))
}


if(localStorage.getItem("NykaaCart") === null) {
    localStorage.setItem("NykaaCart", JSON.stringify([]))
}

let prod_count = document.querySelector(".prod-count")

// let getWishStore = JSON.parse(localStorage.getItem("NykaaWish"))

async function WishFromDataBase() {
    let res = await fetch("http://localhost:2005/addwish" , {
        method: "GET"
    })
  
    let data = await res.json()
    
    prod_count.textContent = "(" + data.length + ")"
    AppendtoMYWISH_BOX(data)
}
WishFromDataBase()


function AppendtoMYWISH_BOX(getWishStore) {
    MYWISH_BOX.innerHTML = null
    getWishStore.forEach((prod) => {

        
        let div = document.createElement("div")
        div.setAttribute("class" , "wish_div")

        cutbtn = document.createElement("button")
        cutbtn.setAttribute("class" , "cutbtn")
        cutbtn.innerText = "x"

        cutbtn.onclick = function() {
            DLTFROMwish(prod)
        }

        let img = document.createElement("img")
        img.src = prod.img1

        let pname = document.createElement("p")
        pname.textContent = prod.name.substring(0, 40)

        let rate = document.createElement("h3")
        rate.textContent = prod.rating

        let mrp_text = document.createElement("p")
        mrp_text.textContent = "MRP : ₹"

        let MRP = document.createElement("p")
        MRP.textContent = mrp_text.textContent + prod.price

        let movebtn = document.createElement("button") 
        movebtn.setAttribute("class" , "movetobag")
        movebtn.innerText = "MOVE TO BAG"

        movebtn.onclick = function() {
            MOVETOBAGfn(prod)
        }

        div.append(cutbtn,img, pname, rate, MRP, movebtn)

        MYWISH_BOX.append(div)
    })
}


function DLTFROMwish(prod) {

    let GETTODLT = fetch(`http://localhost:2005/dltwish/${prod._id}`, {
        method : "DELETE"
    })


    // let index = getWishStore.indexOf(prod)

    // getWishStore.splice(index, 1)


    // localStorage.setItem("NykaaWish" , JSON.stringify(getWishStore))

    window.location.href = "/Mywish"
}

function MOVETOBAGfn(prod) {

    
  fetch("http://localhost:2005/addcart", {
    method: "POST",
    body : JSON.stringify(prod),
    headers : {
      "Content-Type" : "application/json"
    }
  })
  .then(res => console.log(res))
  .catch(e => console.log("error"))

  let GETTODLT = fetch(`http://localhost:2005/dltwish/${prod._id}`, {
    method : "DELETE"
    })



    let grandTotaL = document.querySelector(".Toatlrupee")
    grandTotaL.textContent = Number(grandTotaL.textContent) + Number(prod.price)
    window.location.href = "/Mywish"

    // let getCartstore = JSON.parse(localStorage.getItem("NykaaCart"))
    // getCartstore.push(prod)
    // localStorage.setItem("NykaaCart" , JSON.stringify(getCartstore))

    // let index = getWishStore.indexOf(prod)



    // getWishStore.splice(index, 1)


    // localStorage.setItem("NykaaWish" , JSON.stringify(getWishStore))

}