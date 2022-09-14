
$(Document).ready(function(){
    
    $("#Entrar").click(function(){
let email = $("#e-Mail").val();
let senha = $("Passw").val();

console.log(validarLogin(email,senha));

if (validarLogin(email,senha)) {
    alert("preenchido corretamente");
}else{
    alert("Preencher corretamente");
}
     
    });

    function validarLogin(e,s){

        if(e !== "" & s != ""){
            return true;
        }else{
            return false;
        }
    }
});/*Fim do jQuery */

