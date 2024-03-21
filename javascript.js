/*
-----------------------------------------------------------------------------------------
Hoy JavaScript, es el único lenguaje capaz de ejecutarse en las 3 capas de una aplicación:

Frontend (con JavaScript).
Backend (con Node.js).
Persistencia de Datos (con MongoDB, Couch DB, Firebase, etc).
Con JavaScript puedes:

Diseño y Desarrollo Web.
Hacer Videojuegos.
Experiencias 3D, Realidad Aumentada, Realidad Virtual.
Controlar Hardware (drones, robots, electrodomésticos, wearables, etc).
Aplicaciones Híbridas y Móviles.
Aprendizaje Automático.
etc.

-----------------------------------------------------------------------------------------

Lenguaje de alto nivel
Interpretado
Dinamico
Debilmente tipado
Multiparadigma
Sensible a Mayusculas y minusculas
No necesitas los puntos y coma al final de cada linea

-----------------------------------------------------------------------------------------

***Usar UPPER_CASE en:***
---> constantes

const UNA_CONSTANTE

------------------------------------------

***Usar UpperCamelCase en:***
---> Clases

class SerHumano {
this.nombre = nombre
this.genero = genero
}

miNombreEs (){
    return `Mi nombre es ${this.nombre}`
}
}

------------------------------------------

***Usar lowerCamelCase en:***

---> Objetos:

const unObjeto = {
    nombre = 'Diego',
    email = 'asd@asd.com'
}

---> Primitivos:

let unaCadena = 'Hola Mundo',
let unNumero = '20',
let unBoolean = true

---> Funciones:

function holaMundo (nombre){
    alert (`Hola Mundo ${nombre}`)
}
holaMundo('Diego')

---> Instancias:

const ajax = new XMLHttpRequest(),
diego = new SerHumano('Diego','nombre')

------------------------------------------

***PALABRAS RESERVADAS***

A: abstract
B: boolean, break, byte
C: case, catch, char, class, const, continue
D: debugger, default, delete, do, double
E: else, enum, export, extends
F: false, final, finally, float, for, function
G: goto
I: if, implements, import, in, instanceof, int, interface
L: let, long
N: native, new, null
P: package, private, protected, public
R: return
S: short, static, super, switch, synchronized
T: this, throw, throws, transient, true, try, typeof
V: var, volatile, void
W: while, with

------------------------------------------

***Ordenamiento de codigo***

IMPORTACIÓN DE MÓDULOS.
DECLARACIÓN DE VARIABLES.
DECLARACIÓN DE FUNCIONES.
EJECUCIÓN DE CÓDIGO.


***Tipos de datos en JavaScript***

Primitivos: Se accede directamente al valor.

string
number
boolean
null
undefined
NaN

Compuestos: Se accede a la referencia del valor.

object = {}
array = []
function () { }
Class {}
etc.

------------------------------------------




*/