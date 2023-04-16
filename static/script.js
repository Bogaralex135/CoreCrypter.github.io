const claves = {
    e: "enter",
    i: "imes",
    a: "ai",
    o: "ober",
    u: "ufat",
  };
  
  function encriptar(frase) {
    let nuevaFrase = "";
  
    for (let i = 0; i < frase.length; i++) {
      let letra = frase[i];
  
      if (letra in claves) {
        nuevaFrase += claves[letra];
      } else {
        nuevaFrase += letra;
      }
    }
    return nuevaFrase;
  }
  
  function desencriptar(texto) {
    return texto.replace(/ai|enter|imes|ober|ufat/gi, function (frase) {
      switch (frase) {
        case "ai":
          return "a";
        case "enter":
          return "e";
        case "imes":
          return "i";
        case "ober":
          return "o";
        case "ufat":
          return "u";
        case " ":
          return "";
        default:
          return frase;
      }
    });
  }
  
  let texto = document.getElementById("texto");
  
  function escribirTextoEncriptado() {
    let textoinput = document.getElementById("inputtext");
    texto.innerHTML = encriptar(textoinput.value);
    console.log('se pulso')
  }
  
  function escribirTextoDesencriptado() {
    let textoinput = document.getElementById("inputtext");
    texto.innerHTML = desencriptar(textoinput.value);
  }
  
  function copiar(){
      navigator.clipboard.writeText(texto.textContent);
  }
  
  
  