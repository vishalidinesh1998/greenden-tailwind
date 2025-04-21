var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")
var close = document.getElementById("close")

menuicon.addEventListener("click", function () {
    sidenav.style.right = "0"
})

close.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})


//product search
var productcontainer = document.getElementById("productcontainer")
var search = document.getElementById("search")
var productlist = productcontainer.querySelectorAll("div")

search.addEventListener("keyup", function () {
    var entervalue = event.target.value.toUpperCase()
    for (count = 0; count < productlist.length; count = count + 1) {
        var productname = productlist[count].querySelector("h1").textContent

        if (productname.toUpperCase().indexOf(entervalue) < 0) {
            productlist[count].style.display = "none"
        }
        else {
            productlist[count].style.display = "block"
        }
    }
})