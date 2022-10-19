


let resumen = document.querySelector("#resumen");




const input= document.getElementById("canti")
console.log(input.textContent)
console.log(input.value)


const category = document.getElementById("select")
console.log(select.value)







const post= document.querySelector(".desc")


resumen.addEventListener("click", () => {

    if(select.value === "estudiante"){
        console.log(200 * 80 /100)
        post.innerHTML= `<p class="totaljs" >${input.value * (200- (200 * 80/100))}  </p>`;
   
        
       }
       else if(select.value === "trainee") {
          console.log (200 * 50 /100)
          post.innerHTML= `<p class="totaljs" >${input.value * (200-(200 * 50/100))}  </p>`;
   
        }
    else if(select.value === "junior") {
            console.log (200 * 15 /100)
            post.innerHTML= `<p class="pagar"> ${input.value * (200-(200 * 15/100))}</p>`;
   
;
};


  
    
});

