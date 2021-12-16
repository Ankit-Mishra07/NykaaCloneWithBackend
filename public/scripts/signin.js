if(localStorage.getItem("userData") === null) {
    localStorage.setItem("userData" , JSON.stringify([]))
}

function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    let name = profile.getName()
    let email = profile.getEmail()
    let image = profile.getImageUrl();

    let obj = {
        name,
        email,
        img:image
    }

    // fetch("http://localhost:2005/user", {
    //     method: "POST",
    //     body : JSON.stringify(obj),
    //     headers : {
    //         "Content-Type" : "application/json"
    //     }
    // })
    // .then(res => alert(res))
    // .catch(e => console.log("Error"))
  

    let getlocal = JSON.parse(localStorage.getItem("userData"))
    getlocal.push(obj)
    
    localStorage.setItem("userData" , JSON.stringify(getlocal))
    
    // setTimeout(() => {
    //     window.location.href = "/"
    // },1000)
    
        if(getlocal.length >= 1) {
            window.location.href = "/"
        }
}
