// Entrada dos numeros e sorteio.
function sortear(){
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de = parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);

    let sorteados = [];
    let numero;

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);
        
        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
            alert('Tentando obter número inédito');
        }
        
        sorteados.push(numero);

    }
    //Gerando resultado na tela.
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados} </label>`;  

    // Ligar botao reiniciar

    ligarBotao();
}
    
// Gerando Numero aleatorios.
function obterNumeroAleatorio(min, max){
     return Math.floor(Math.random() * (max - min + 1)) + min;

      }
      // Defenir oque o reiniciar ira fazer.
function ligarBotao(){
    let botao = document.getElementById('btn-reiniciar');
    if(botao.classList.contains('container__botao-desabilitado')){
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao')
       }   
       else {
        botao.classList.add('container__botao-desabilitado');
        botao.classList.remove('container__botao');
       }
    
}
function reiniciar(){
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML = '<label class="texto__paragrafo">Números sorteados: nenhum até agora</label>';
    ligarBotao();
}