
function cifraLetra(letra, chave) {
    
    if (/[a-zA-Z]/.test(letra)) {
        const base = letra === letra.toLowerCase() ? 'a' : 'A'; 
        const codeBase = letra.charCodeAt(0) - base.charCodeAt(0); 
        const novoCodigo = (codeBase + chave + 26) % 26; 
        return String.fromCharCode(base.charCodeAt(0) + novoCodigo); 
    }
    return letra;
}


function criptografia(mensagem, chave, converter) {
    let resultado = '';
    for (let i = 0; i < mensagem.length; i++) {
        const letra = mensagem[i];
        resultado += converter(letra, chave); 
    }
    return resultado;
}


const mensagemOriginal = "Mensagem Secreta!";
const chave = 3; 
const mensagemCriptografada = criptografia(mensagemOriginal, chave, cifraLetra);
console.log("Mensagem Criptografada:", mensagemCriptografada);


const mensagemDescriptografada = criptografia(mensagemCriptografada, -chave, cifraLetra);
console.log("Mensagem Descriptografada:", mensagemDescriptografada);
