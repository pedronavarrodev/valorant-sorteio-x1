//////// API

function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open('GET', url, false)
    request.send()
    return request.responseText
}


function criaLinha(displayName) {
    
}

function buscaAgente() {
    data = fazGet(`https://valorant-api.com/v1/agents`)
    fullPortrait = JSON.parse(data)
    // console.log(fullPortrait.data[0].fullPortrait)
}
buscaAgente()

function sortear() {
    let agenteAleatorioAzul = Math.floor(Math.random() * 18)
    let agenteAleatorioVermelho = Math.floor(Math.random() * 18)

    let agenteAzul = document.querySelector('#agente-azul')
    let agenteVermelho = document.querySelector('#agente-vermelho')

    let armaAleatoriaSelecionada = Math.floor(Math.random() * 16)
    let armaSelecionada = document.querySelector('#arma-selecionada')

    let nomeArma = document.querySelector('#nome-arma')
    
    //Troca no HTML
    agenteAzul.setAttribute('src', `${fullPortrait.data[agenteAleatorioAzul].fullPortrait}`);
    agenteVermelho.setAttribute('src', `${fullPortrait.data[agenteAleatorioVermelho].fullPortrait}`);
    
    armaSelecionada.setAttribute('src', `${armas[armaAleatoriaSelecionada].imagem}`);
    nomeArma.innerHTML = `${armas[armaAleatoriaSelecionada].nome}`;
    console.log(armas[armaAleatoriaSelecionada].nome)

}


const armas = [
    {
        nome: 'Classic',
        imagem: './assets/img/armas/classic.png'
    },
    {
        nome: 'Ares',
        imagem: './assets/img/armas/ares.png'
    },
    {
        nome: 'Bucky',
        imagem: './assets/img/armas/bucky.png'
    },
    {
        nome: 'Bulldog',
        imagem: './assets/img/armas/bulldog.png'
    },
    {
        nome: 'Frenzy',
        imagem: './assets/img/armas/frenzy.png'
    },
    {
        nome: 'Ghost',
        imagem: './assets/img/armas/ghost.png'
    },
    {
        nome: 'Guardian',
        imagem: './assets/img/armas/guardian.png'
    },
    {
        nome: 'Judge',
        imagem: './assets/img/armas/judge.png'
    },
    {
        nome: 'Marshal',
        imagem: './assets/img/armas/marshal.png'
    },
    {
        nome: 'Odin',
        imagem: './assets/img/armas/odin.png'
    },
    {
        nome: 'Operator',
        imagem: './assets/img/armas/operator.png'
    },
    {
        nome: 'Phanton',
        imagem: './assets/img/armas/phanton.png'
    },
    {
        nome: 'Sheriff',
        imagem: './assets/img/armas/sheriff.png'
    },
    {
        nome: 'Shorty',
        imagem: './assets/img/armas/shorty.png'
    },
    {
        nome: 'Spectre',
        imagem: './assets/img/armas/spectre.png'
    },
    {
        nome: 'Stinger',
        imagem: './assets/img/armas/stinger.png'
    },
    {
        nome: 'Vandal',
        imagem: './assets/img/armas/vandal.png'
    },
    

]