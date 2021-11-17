<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FastFood</title>
    <link rel="stylesheet" href="../css/sidemenu.css">
    <link rel="stylesheet" href="../css/style.css">
</head>
<body class="body-expanded" onload="cargarUsuario();">
    <div id="sidemenu" class="menu-expanded">
        <!--HEADER-->
        <div id="header">
            <div id="title"><span>Menú</span></div>
            <div id="menu-btn">
                <div class="btn-hamburger"></div>
                <div class="btn-hamburger"></div>
                <div class="btn-hamburger"></div>
            </div>
        </div>
        <!--PROFILE-->
        <div id="profile">
            <div id="photo"><img src="../icons/profilex200.png" alt=""></div>
            <div id="name"><span>Jhon Alexander</span></div>
        </div>
        <!--ITEMS-->
        <div id="menu-items">
            <div class="item">
                <a href="#" onclick="listarCarta();">
                    <div class="icon"><img src="../icons/carta-restaurante-2.png" alt=""></div>
                    <div class="title">Carta</div>
                </a>
            </div>
            <div class="item">
                <a href="#">
                    <div class="icon"><img src="../icons/clientes.png" alt=""></div>
                    <div class="title">Clientes</div>
                </a>
            </div>
            <div class="item">
                <a href="#">
                    <div class="icon"><img src="../icons/pedido.png" alt=""></div>
                    <div class="title">Pedidos</div>
                </a>
            </div>
            <div class="item-separator">
                <!--SEPARADOR-->
            </div>
            <div class="item">
                <a href="#">
                    <div class="icon"><img src="../icons/icono-login.png" alt=""></div>
                    <div class="title">Usuarios</div>
                </a>
            </div>
        </div>
    </div>

    <div id="main-container">
        <div id="titulo">
            FastFood
        </div>
        <div id="contenido"> <!--CONTENIDO-->
            <?php
                include
            ?>
        </div><!--FIN CONTENIDO-->
    </div>

    <script>
        const btn = document.querySelector('#menu-btn');
        const menu = document.querySelector('#sidemenu');
        btn.addEventListener('click', e =>{
             menu.classList.toggle("menu-expanded");
             menu.classList.toggle("menu-collapsed");
            
             document.querySelector('body').classList.toggle('body-expanded');
             document.querySelector('body').classList.toggle('body-collapsed');
        });
    </script>
    <script src="../resources/jquery-3.4.1.min.js"></script>
    <script type="text/javascript" src="../AJAX/controllerAJX.js"></script>
    <script type="text/javascript" src="../js/usuarios.js"></script>
    <script type="text/javascript" src="../js/general.js"></script>
</body>
</html>