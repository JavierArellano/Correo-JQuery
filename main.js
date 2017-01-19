$(document).ready(function(){
    peticion();
    setInterval(peticion, 5000);
});
function peticion(){
    $.getJSON("correos.json", function(jason){
        if (jason.correos.length < $("div #correo").length){
            nueva_peticion();
            bucle($("div #correo").length,jason.correos);
        }else if (jason.correos.length > $("div #correo").length){
            bucle($("div #correo").length,jason.correos);
        }
    });
}
function bucle(cont,jsn){
    let cont2=0
    for (correo of jsn){
        if (cont <= cont2){
            inserta_correos(correo);
        }
        cont2++;
    }
}
function nueva_peticion(){
    $("#contenedor").empty();
}
function inserta_correos(correo){
    $("#contenedor").append($("<div id='correo'><p>"+correo.remit+"</p><p>"+correo.asunto+"</p></div>"));
}