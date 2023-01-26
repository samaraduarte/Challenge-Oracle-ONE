
//Esconde o botão de copiar ao carregar a pagina
document.getElementById("copiar").style.display = "none";

//Esconde o campo para o texto criptografado ao carregar a pagina
document.getElementById("mostraTexto").style.display = "none";

let botaoCrip = document.querySelector(".crip");
let botaoDescrip = document.querySelector(".decrip");

function cliclou() {
    //Esconder o desenho e texto ao clicar em criptografar
    document.getElementById("desenho").style.display = "none";
    document.getElementById("textoImagem").style.display = "none";

    //Mostrar o botão de copiar
    document.getElementById("copiar").style.display = "block";
    document.getElementById("mostraTexto").style.display = "block";
}

botaoCrip.addEventListener("click", function criptografa() {
    // variavel que armazena o que foi digitado
    var texto = document.getElementById("areaTexto").value;

    var codifica = texto.replace(/e/g, 'enter');
    codifica = codifica.replace(/i/g, 'imes');
    codifica = codifica.replace(/a/g, 'ai');
    codifica = codifica.replace(/o/g, 'ober');
    codifica = codifica.replace(/u/g, 'ufat');

    //Inserir no textArea o texto criptografado     
    document.getElementById("mostraTexto").value = codifica;
});

botaoDescrip.addEventListener("click", function descriptografa() {
    // variavel que armazena o que foi digitado
    var textoCod = document.getElementById("areaTexto").value;

    var descodifica = textoCod.replace(/enter/g, 'e');
    descodifica = descodifica.replace(/imes/g, 'i');
    descodifica = descodifica.replace(/ai/g, 'a');
    descodifica = descodifica.replace(/ober/g, 'o');
    descodifica = descodifica.replace(/ufat/g, 'u');

    document.getElementById("mostraTexto").value = descodifica;
});

function copiar() {
    let textoCopiado = document.getElementById("mostraTexto");
    textoCopiado.select();
    textoCopiado.setSelectionRange(0, 99999)
    navigator.clipboard.writeText(textoCopiado.value);
    alert("Mensagem Copiada: " + textoCopiado.value);
    textoCopiado.value = '';
}

