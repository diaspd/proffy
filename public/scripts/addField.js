// procurar o botão
//quando clicar no botão
document.querySelector("#add-time")
.addEventListener("click", cloneField)

//executar uma ação
function cloneField() {
    
    //duplicar os campos que campos?
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true)//boolean:true ou false

    //pegar os campos.que campos?
    const fields = newFieldContainer.querySelectorAll("input")

    //para cada campo limpar
    fields.forEach(function(field){
        //pegar o field do momento e limpa ele
        field.value = ""
    })

    //colocar na pagina:onde?
    document.querySelector("#schedule-items").appendChild(newFieldContainer)
}
