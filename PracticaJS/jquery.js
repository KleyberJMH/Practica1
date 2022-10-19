$(()=>{
    console.log("Ya se cargo la pagina")
    $("#boton-input").on("click",()=>{
        let textarea = $("#textarea").val();
        let input = $("#input").val();
        if(textarea || input !="")
        {
            console.log("Ejecute el boton")
            $("#container").append("<p>" + input + " " + textarea + "</p>");
            $("#input").val("");
            $("#textarea").val("");
        }
        
    })
})

