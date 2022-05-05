let inputArea = document.querySelector(".inputArea")
let button = document.getElementById("button")
let input = document.getElementById("input")
let maindiv = document.querySelector(".maindiv")
let matchM = document.getElementById("match");

input.addEventListener("keyup",function(e){
    if(e.keyCode == 13){
        start();
    }
})

var say = 0;
button.addEventListener("click",start);
function start(){
    if(input.value != ""){
        say++;
        let paragraph = document.createElement('p');
        let silbuton = document.createElement("div");
        let tamamladim = document.createElement("div");
        tamamladim.innerText = "Hazirdi"
        silbuton.classList.add("silbuton")
        tamamladim.classList.add("tamamladim")
        silbuton.innerText = "Sil"
        paragraph.innerText = say + "." + input.value;
        maindiv.appendChild(paragraph);
        paragraph.appendChild(silbuton);
        paragraph.appendChild(tamamladim)
        

        silbuton.addEventListener("click", function(){
            say--;
         maindiv.removeChild(paragraph)
        })

        tamamladim.addEventListener("click", () => {
            paragraph.classList.toggle("xettcek")
        })
    }
    else{
        alert("Bos yazi daxil edile bilmez!")
    }
}

