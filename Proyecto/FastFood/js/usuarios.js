function cargarUsuario(){
    if (sessionStorage['User']) {
      var guardado = sessionStorage.getItem('User');
      var objeto = JSON.parse(guardado);
      var user = document.getElementById("name");
      user.innerHTML = '<span>' + objeto.information.usu_usuario + '</span>';
    }else{
      window.location = "../index.html";
      alert("Acceso no autorizado");
    }
  
  }