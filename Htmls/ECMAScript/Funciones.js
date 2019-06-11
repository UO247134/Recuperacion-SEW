class Tabs {
    constructor(base) {
        this.baseDatosUsuarios = base;
    };
    init(){
        $("#BotonAdmin").hide();
        $("#BotonDeslog").hide();
        tabs.hideAll();
        $("#tabs-1").show();
    }
    loadPage(tab) {
        this.hideAll();
        $(tab).show(tab);
    }

    hideAll() {
        $("#tabs-1").hide();
        $("#tabs-2").hide();
        $("#tabs-3").hide();
        $("#tabs-4").hide();
        $("#tabs-5").hide();
        $("#tabs-6").hide();
        $("#tabs-7").hide();
        $("#tabs-8").hide();
        $("#tabs-9").hide();
    }
    login(){
        this.hideAll();
        $("#BotonRegistro").hide();
        $("#BotonLoggeo").hide();
        $("#BotonDeslog").show();
        this.hideAll();
        $("#tabs-1").show();
    }
    loginAdmin(){
        this.hideAll();
        $("#BotonRegistro").hide();
        $("#BotonLoggeo").hide();
        $("#BotonAdmin").show();
        $("#BotonDeslog").show();
        this.fillUserTable();
        $("#tabs-8").show();
    }
    deslogUserFromTabs(){
        $("#BotonRegistro").show();
        $("#BotonLoggeo").show();
        $("#BotonDeslog").hide();
        $("#BotonAdmin").hide();
        this.init();
    }
    registerUserFromTabs(){
        var nombre = document.getElementById("nombreRegistro").value;
        var apellido = document.getElementById("apellidoRegistro").value;
        var correo = document.getElementById("correoRegistro").value;
        var contraseña = document.getElementById("contraseñaRegistro").value;
        var recontraseña = document.getElementById("recontraseñaRegistro").value;
        var fechaNacimiento = document.getElementById("fechanacimientoRegistro").value;
        if (!this.checkUserExists(correo)) {
            if (contraseña == recontraseña) {
                this.baseDatosUsuarios.Usuarios.push({
                    "nombre": nombre,
                    "apellidos": apellido,
                    "correo": correo,
                    "nacimiento": fechaNacimiento,
                    "dinero": 50.00,
                    "contraseña": contraseña,
                    "clase": "user"
                });
                this.loadPage("#tabs-7");
                this.limpiarCampos();
                console.log("Registro exitoso");
            } else
                console.log("Contraseñas no coinciden");
        } else
            console.log("Usuario ya existente");
    }
    logUserFromTabs() {
        var correo = document.getElementById("correoLoggeo").value;
        var contraseña = document.getElementById("contraseñaLoggeo").value;
        if (this.checkUserExists(correo)) {
            if (this.checkContraseñaValida(correo,contraseña)) {
                console.log("Loggeo exitoso");
                if (this.checkUserIsAdmin(correo)) {
                    this.loginAdmin();
                }else {
                    this.login();
                }
                this.limpiarCampos();
            } else
                console.log("Contraseña Invalida");
        }
    }

    checkUserExists(correoparametro) {
        var correo = correoparametro;
        for (var i = 0; i < this.baseDatosUsuarios.Usuarios.length; i++) {
            if (this.baseDatosUsuarios.Usuarios[i].correo == correo) {
                console.log("Usuario existe");
                return true;
            }
        }
        console.log("Usuario no existe");
        return false;
    }
    checkContraseñaValida(correoparametro,contraseñaparametro) {
        var correo = correoparametro;
        var contraseña = contraseñaparametro;
        for (var i = 0; i < this.baseDatosUsuarios.Usuarios.length; i++) {
            if (this.baseDatosUsuarios.Usuarios[i].correo == correo) {
                if (this.baseDatosUsuarios.Usuarios[i].contraseña == contraseña) {
                    return true;
                } else {
                    return false;
                }
            }
        }
        return false;
    }
    checkUserIsAdmin(correoparametro) {
        var correo = correoparametro;
        for (var i = 0; i < this.baseDatosUsuarios.Usuarios.length; i++) {
            for (var i = 0; i < this.baseDatosUsuarios.Usuarios.length; i++) {
                if (this.baseDatosUsuarios.Usuarios[i].correo == correo) {
                    if (this.baseDatosUsuarios.Usuarios[i].clase == "admin") {
                        return true;
                    } else {
                        return false;
                    }
                }
                return false;
            }
        }


    }
    fillUserTable(){
        let tabla = document.getElementById("table");
        for (var i = 0; i < this.baseDatosUsuarios.Usuarios.length; i++) {
            var newrow = document.getElementById("table").insertRow();
            newrow.insertCell(0).appendChild( document.createTextNode(this.baseDatosUsuarios.Usuarios[i].nombre));
            newrow.insertCell(1).appendChild(document.createTextNode( this.baseDatosUsuarios.Usuarios[i].apellidos));
            newrow.insertCell(2).appendChild( document.createTextNode(this.baseDatosUsuarios.Usuarios[i].correo));
            newrow.insertCell(3).appendChild( document.createTextNode(this.baseDatosUsuarios.Usuarios[i].nacimiento));
            newrow.insertCell(4).appendChild( document.createTextNode(this.baseDatosUsuarios.Usuarios[i].dinero));
            newrow.insertCell(5).appendChild( document.createTextNode(this.baseDatosUsuarios.Usuarios[i].clase));
        }
    }
    limpiarCampos(){
        $("#nombreRegistro").val("");
        $("#apellidoRegistro").val("");
        $("#correoRegistro").val("");
        $("#fechanacimientoRegistro").val("");
        $("#contraseñaRegistro").val("");
        $("#recontraseñaRegistro").val("");
        $("#correoLoggeo").val("");
        $("#contraseñaLoggeo").val("");
    }

}
base = {"Usuarios": [
        {
            "nombre": "Miguel",
            "apellidos": "Guimarey",
            "correo": "miguel@correo.com",
            "nacimiento": "1996-03-01",
            "dinero": 5000.00,
            "contraseña": "cafe",
            "clase": "admin"
        },
        {
            "nombre": "Paco",
            "apellidos": "Gonzalez Quesada",
            "correo": "paco@correo.com",
            "nacimiento": "1996-01-03",
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
        }
    ]
}
let tabs = new Tabs(base);
tabs.init();
