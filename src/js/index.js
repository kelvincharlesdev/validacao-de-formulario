const form = document.getElementById("form")
const input = document.querySelectorAll(".campo")



form.addEventListener("submit", (event) =>{
    event.preventDefault()

    input.forEach( (item) =>{
        let mensagem = document.querySelectorAll(".obrigatorio")
        let itemValue = item.value
        
        mensagem.forEach((itemObrigatorio) =>{
            let formItem = item.parentElement;
            if(itemValue === ""){
                formItem.classList.add("error")
                formItem.classList.remove("correct")
                itemObrigatorio.innerText = "campo obrigatório"
            
            } else {
                formItem.classList.remove("error");
                formItem.classList.add("correct");
            }

        })

       
    })


})
