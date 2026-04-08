// Clase Principal del Sitio (Equivalente a EmprendiShop)
class EmprendiShop {
    static main() {
        console.log("Backend de EmprendiShop iniciado...");
    }
}

// Clase para manejar Redes y Contacto
class Contacto {
    constructor(redesSocialesUrl, whatsapp, email) {
        this.redesSocialesUrl = redesSocialesUrl;
        this.whatsapp = whatsapp;
        this.email = email;
    }
}

// Clase base para Productos y Servicios (Equivalente a ItemCatalogo)
class ItemCatalogo {
    constructor(nombre, tipo, infoOpcional, contactoReferencia) {
        if (this.constructor === ItemCatalogo) {
            throw new Error("No se puede instanciar una clase abstracta directamente.");
        }
        this.nombre = nombre;
        this.tipo = tipo;
        this.infoOpcional = infoOpcional;
        this.contactoReferencia = contactoReferencia;
    }
}

// Clase Producto que extiende de ItemCatalogo
class Producto extends ItemCatalogo {
    constructor(nombre, tipo, infoOpcional, contactoReferencia, codigo_barras) {
        super(nombre, tipo, infoOpcional, contactoReferencia);
        this.codigo_barras = codigo_barras;
    }
}

// Clase Servicio que extiende de ItemCatalogo
class Servicio extends ItemCatalogo {
    constructor(nombre, tipo, infoOpcional, contactoReferencia, descripcion) {
        super(nombre, tipo, infoOpcional, contactoReferencia);
        this.descripcion = descripcion;
    }
}

// Clase Emprendedor (Página/Entidad)
class Emprendedor {
    constructor(nombreEmprendimiento, nombreDuenio, contacto) {
        this.nombreEmprendimiento = nombreEmprendimiento;
        this.nombreDuenio = nombreDuenio;
        this.contacto = contacto;
        this.catalogo = []; // Reemplaza al ArrayList de Java
    }

    registrarItem(item) {
        // Validación: el ítem no puede ser nulo o indefinido
        if (!item) {
            throw new Error("Error: Debe inscribir al menos un producto o servicio.");
        }
        this.catalogo.push(item);
    }
}
