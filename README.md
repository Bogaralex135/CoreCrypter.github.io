# CoreCrypter
## Challenge Codificador de ONE

![Home de CoreCrypter](static\Diseños\Img\home.png)

### Codificador

~~~~~~
const claves = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };
~~~~~~

### Descripción
Este archivo contiene el código JavaScript para las funciones de encriptación y desencriptación de una cadena de texto utilizando un mapeo predefinido de clave-valor.

### Funciones
### Función `encriptar(frase)`
Esta función toma una cadena de texto como argumento y la encripta utilizando un mapeo predefinido de clave-valor. Retorna la cadena encriptada.

#### Argumentos
frase (string): La cadena de texto a encriptar.
Retorno
(string): La cadena encriptada.
### Función `desencriptar(frase)`
Esta función toma una cadena de texto encriptada como argumento y la desencripta utilizando el mismo mapeo predefinido de clave-valor. Retorna la cadena desencriptada.

#### Argumentos
frase (string): La cadena de texto encriptada.
Retorno
(string): La cadena desencriptada.
Ejemplo de uso

~~~~~~

const frase = 'Hola mundo';
const fraseEncriptada = encriptar(frase);
console.log(fraseEncriptada);
// Output: 'Jklz jkdar'

const fraseDesencriptada = desencriptar(fraseEncriptada);
console.log(fraseDesencriptada);
// Output: 'Hola mundo'

~~~~~~

 ### Función `escribirTextoEncriptado`

  Escribe texto encriptado en el DOM basado en la entrada del usuario.

  ### Retorno

  `void`

 ### Función `escribirTextoDesencriptado`
   Toma la entrada del elemento HTML con ID "inputtext", lo pasa a la función desencriptar y escribe la salida en el elemento HTML con ID "texto".
  
   * @return {void} 
   


 ### Función `copiar`
  Copia el contenido de texto del elemento "texto" al portapapeles.

![Funcion de corecrypter](static\Diseños\Img\funcion.png)


[Figma] del proyecto

[Link] del proyecto





[Figma]:https://www.figma.com/file/6cut0PSp38ExbUUrUvmaD2/Alura-Challenge---Desaf%C3%ADo-1---L%C3%B3gica-(Copy)?type=design&node-id=0%3A1&t=P2gaOidgma0OdP3f-1

[Link]:https://bogaralex135.github.io/CoreCrypter.github.io/