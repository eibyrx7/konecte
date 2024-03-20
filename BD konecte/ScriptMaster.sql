use BDkonecte;

SELECT * FROM BDkonecte.Master;

INSERT INTO `BDkonecte`.`Master` (`idMaster`, `NombreMaster`, `DomicilioMaster`, `TelMaster`, `CorreoMaster`, 
`FotoMaster`, `ContraseñaUsuario`, `Descripcion`, `Oficios_Id oficio`) 
VALUES (NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);


-- Valor de prueba
INSERT INTO Master (`NombreMaster`, `DomicilioMaster`, `TelMaster`, `CorreoMaster`, 
`FotoMaster`, `ContraseñaUsuario`, `Descripcion`, `Oficios_Id oficio`) 

VALUES (`Pedro Sanchez`, `Calle 345`, `5536859023`, `pedro@hotmail.com`, 
`Base 64`, `Contrasena1$`, `Soy un ejemplo de persona`, `1`);