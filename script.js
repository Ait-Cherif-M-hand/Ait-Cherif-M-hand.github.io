document.addEventListener('DOMContentLoaded', function () {
let container = document.getElementById("dropdown")
let anchors = container.getElementsByTagName("a")
for (item of anchors){
      item.addEventListener('click', function (e){
            e.preventDefault()
            let cible = e.target.href
            let rep = confirm()
            if (rep){ 
                window.open(cible) 
            }
        })
    }
    
