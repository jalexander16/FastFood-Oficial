CREATE TABLE USUARIO (
    usu_id INT AUTO_INCREMENT,
    usu_usuario VARCHAR(50) NOT NULL,
    usu_pw VARCHAR(200),
    per_id INT NOT NULL,
    PRIMARY KEY (USU_ID)
);

INSERT INTO
    PERSONA (
        per_documento,
        per_nombre1,
        per_nombre2,
        per_apellido1,
        per_apellido2
    )
VALUES
    (
        "10101010",
        "Jhon",
        "Alexander",
        "Grisales",
        "Aillon"
    ),
    (
        "20202020",
        "Jhon2",
        "Alexander2",
        "Grisales2",
        "Aillon2"
    ),
    (
        "30303030",
        "Jhon3",
        "Alexander3",
        "Grisales3",
        "Aillon3"
    ),
    (
        "40404040",
        "Jhon4",
        "Alexander4",
        "Grisales4",
        "Aillon4"
    );

INSERT INTO
    USUARIO (usu_usuario, usu_pw, per_id)
VALUES
    ("Alexander", "1234", 1);

INSERT INTO
    TIPO_MENU (tip_nombre, tip_descripcion)
VALUES
    ("Comidas", "Comidas..."),
    ("Bebidas calientes", "Bebidas calientes..."),
    ("Bebidas frias ", "Bebidas frias..."),
    ("Postres", "Postres...");

INSERT INTO
    CARTA (car_nombre, car_valor, car_descripcion, tip_id)
VALUES
    ("Producto 1", 10000, "Ninguna...", 1),
    ("Producto 2", 20000, "Ninguna...", 1),
    ("Producto 3", 30000, "Ninguna...", 1),
    ("Producto 4", 40000, "Ninguna...", 1),
    ("Producto 5", 50000, "Ninguna...", 1),
    ("Producto 6", 60000, "Ninguna...", 1),
    ("Producto 7", 70000, "Ninguna...", 1),
    ("Producto 8", 80000, "Ninguna...", 1),
    ("Producto 9", 90000, "Ninguna...", 1),
    ("Producto 10", 100000, "Ninguna...", 1),
    ("Producto 11", 110000, "Ninguna...", 1),
    ("Producto 12", 120000, "Ninguna...", 1);



INSERT INTO
    TELEFONO (tel_telefono, tel_observaciones, per_id)
VALUES
    ("1234567890", "Ninguna...", 1),
    ("1234567890", "Ninguna...", 1),
    ("1234567890", "Ninguna...", 1),
    ("1234567890", "Ninguna...", 1),
    ("1234567890", "Ninguna...", 1);

INSERT INTO
    DIRECCION (dir_direccion, dir_observaciones, per_id)
VALUES
    (
        "Calle villa siempre, avenida ...",
        "Ninguna...",
        1
    ),
    (
        "Calle villa siempre, avenida ...",
        "Ninguna...",
        1
    ),
    (
        "Calle villa siempre, avenida ...",
        "Ninguna...",
        1
    ),
    (
        "Calle villa siempre, avenida ...",
        "Ninguna...",
        1
    ),
    (
        "Calle villa siempre, avenida ...",
        "Ninguna...",
        1
    );

INSERT INTO
    PEDIDO (ped_consecutivo, mes_id, per_id, usu_id)
VALUES
    (12345, 1, 1, 1),
    (12345, 2, 1, 1),
    (12345, 3, 1, 1),
    (12345, 4, 1, 1),
    (12345, 5, 1, 1),
    (12345, 6, 1, 1),
    (12345, 7, 1, 1);

INSERT INTO
    MESA (mes_nombre)
VALUES
    ("Mesa 1"),
    ("Mesa 2"),
    ("Mesa 3"),
    ("Mesa 4"),
    ("Mesa 5"),
    ("Mesa 6"),
    ("Mesa 7"),
    ("Mesa 8"),
    ("Mesa 9"),
    ("Mesa 10");

SELECT
    pd.ped_id,
    pd.mes_id,
    me.mes_nombre,
    pd.per_id,
    CONCAT(pe.per_nombre1, ' ', pe.per_apellido1) AS nombre,
    pd.usu_id,
    us.usu_usuario,
    pd.ped_estado,
    pd.ped_fecha,
    pd.ped_observaciones,
    pd.ped_domicilio
FROM
    pedido pd,
    persona pe,
    mesa me,
    usuario us
WHERE
    pd.mes_id = me.mes_id
    AND pd.per_id = pe.per_id
    AND pd.usu_id = us.usu_id