
/*CÓDIGO NATIVO

var ajaxRequest;
if (window.XMLHttpRequest) {
  //Verificar si el navegador es actual
  ajaxRequest = new XMLHttpRequest();
} else {
  ajaxRequest = new ActiveXObject("Microsoft.XMLHTTP");
}

//Validar el estado de la  función XMLHTTPRequest()
ajaxRequest.onreadystatechange = function() {
if (ajaxRequest.readyState == 4 && ajaxRequest.status == 200) {

}

var funcionalidad = Array("1","Fun1","asdgfhjk");

ajaxRequest.open("POST", "../php/usuarios.php", true);
ajaxRequest.send(funcionalidad); //Envia la petición
location.href="../php/usuarios.php";

*/

$(document).ready(function() { //AL CARGAR EL DOCUMENTO
  //Formato para enviar datos

  /* ID de URLs (idUrl)
        101010 = Usuarios
        202020 = Personas
        303030 = Pedidos
        404040 = Carta - Productos
    */
  /* ID de operaciones (idOp)
        1010 = INSERT
        2020 = UPDATE
        3030 = DELETE
        4040 = SELECT
        5050 = VALIDAR
        6060 = LISTAR TODOS
    */

  var JSON_ej = {
    idOp: "1010",
    idUrl: "101010",
    information: {
      usu_us: "1010",
      usu_pw: "1234"
    }
  };

  //sessionStorage.removeItem('User'); 

  $("#frm_login").submit(function(e){
      let dataJSON = {
            idOp: "5050",
            idUrl: "101010",
            information: {
                usu_us: $("#us").val(),
                usu_pw: $("#pw").val()
            }
      };

        $.post("./php/general.php", { dataJSON }, function(response) {
          var respuesta = $.parseJSON(response);
          //console.log(respuesta.information);
          if(respuesta.status == 1){
            if (typeof(Storage) !== 'undefined') {
              sessionStorage.setItem('User', JSON.stringify(respuesta));
            } else {
               console.log("No es compatible el navegador");
            }
            window.location = "./html/Principal.html";
          }else if(respuesta.status == 0){
            alert("Acceso denegado");
          }
        });
        e.preventDefault();  
  });


  $("#frm_Pedido").submit(function(e){
    let dataJSON = {
          idOp: "1010",
          idUrl: "303030",
          information: {
              mes_id: "",
              per_id: "",
              usu_id: "",
              ped_estado: "",
              ped_observaciones: "",
              ped_domicilio: {
                indicador: "0", //0=No 1=Si
                dir_id: "",
                dir_direccion: "",
                dir_obseervacion: ""
              }
          }
      } 

      $.post("./php/general.php", { dataJSON }, function(response) {
        var respuesta = $.parseJSON(response);
        //console.log(respuesta.information);
        if(respuesta.status == 1){
          /*if (typeof(Storage) !== 'undefined') {
            sessionStorage.setItem('User', JSON.stringify(respuesta));
          } else {
             console.log("No es compatible el navegador");
          }*/
          window.location = "./html/Principal.html";
        }else if(respuesta.status == 0){
          alert("Acceso denegado");
        }
      });
      e.preventDefault();  
  });

});
