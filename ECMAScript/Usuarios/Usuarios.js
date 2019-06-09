class Usuarios {
    baseDatosUsuarios = {
            "Usuarios": [
                {
                    "nombre": "Paco",
                    "apellidos": "Gonzalez Quesada",
                    "correo": "paco@correo.com",
                    "nacimiento":"1996-01-03",
                    "dinero": 50.00,
                    "contraseña": "cafe",
                    "clase": "user"
                },
                {
                    "nombre": "Jara",
                    "apellidos": "Fernandez",
                    "correo": "jara@correo.com",
                    "nacimiento": "1991-06-02",
                    "dinero": 20.00,
                    "contraseña": "cafe",
                    "clase": "user"
                },
                {
                    "nombre": "Robustiano",
                    "apellidos": "Bonka",
                    "correo": "robustiano@correo.com",
                    "nacimiento": "1928-02-13",
                    "dinero": 500.00,
                    "contraseña": "cafe",
                    "clase": "user"
                },
                {
                    "nombre": "Javier",
                    "apellidos": "Fernandez",
                    "correo": "javier@correo.com",
                    "nacimiento": "1999-11-02",
                    "dinero": 50.00,
                    "contraseña": "cafe",
                    "clase": "user"
                },
                {
                    "nombre": "Miguel",
                    "apellidos": "Guimarey",
                    "correo": "miguel@correo.com",
                    "nacimiento": "1996-03-01",
                    "dinero": 5000.00,
                    "contraseña": "cafe",
                    "clase": "admin"
                }
            ]
        }

    constructor() {
    };

    registerUser(){
        var nombre = document.getElementById("nombre").value;
        var apellido = document.getElementById("apellido").value;
        var correo = document.getElementById("correo").value;
        var contraseña = document.getElementById("contraseña").value;
        var recontraseña = document.getElementById("recontraseña").value;
        var fechaNacimiento = document.getElementById("fechanacimiento").value;
        if(!this.checkUserExists()){
            if(contraseña==recontraseña){
                this.baseDatosUsuarios.Usuarios.push({ "nombre": nombre,
                    "apellidos": apellido,
                    "correo": correo,
                    "nacimiento": fechaNacimiento,
                    "dinero": 50.00,
                    "contraseña":contraseña,
                    "clase": "user"});
            console.log("Registro exitoso");
            }else
                console.log("Contraseñas no coinciden");
        }else
            console.log("Usuario ya existente");
    }
    logUser(){
        if(this.checkUserExists()) {
            if (this.checkContraseñaValida())
                console.log("Loggeo exitoso");
            else
                console.log("Contraseña Invalida");
        }
    }
    checkUserExists(){
        var correo = document.getElementById("correo").value;
        for(var i = 0; i<this.baseDatosUsuarios.Usuarios.length;i++) {
            if (this.baseDatosUsuarios.Usuarios[i].correo==correo) {
                console.log("Usuario existe");
                return true;
            }
        }
        console.log("Usuario no existe");
        return false;
    }
    checkContraseñaValida(){
        var correo = document.getElementById("correo").value;
        var contraseña = document.getElementById("contraseña").value;
        for(var i = 0; i<this.baseDatosUsuarios.Usuarios.length;i++){
            if(this.baseDatosUsuarios.Usuarios[i].correo==correo) {
                if(this.baseDatosUsuarios.Usuarios[i].contraseña==contraseña) {
                    return true;
                }else {
                    return false;
                }
            }
            return false;
        }
    }


}
let usuarios = new Usuarios();
