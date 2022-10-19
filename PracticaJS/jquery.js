$(document).ready(()=>{
    console.log("Ya se cargo la pagina")
    $("#boton").click(()=>{
        let input = $("#input").val();
        $("#container").append("<p>" + input + "</p>");
    })
})

