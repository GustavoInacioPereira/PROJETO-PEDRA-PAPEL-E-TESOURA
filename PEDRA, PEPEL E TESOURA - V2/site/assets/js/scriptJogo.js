const tesoura = document.querySelector('.btn-tesoura');
const papel = document.querySelector('.btn-papel');
const pedra = document.querySelector('.btn-pedra');
const maoJogador = document.querySelector('.mao-jogador');
const btnStart = document.querySelector('.btn-start');
const score = document.querySelector('.pontuacao');
const maoDoBot = document.querySelector('.mao-do-bot');
const IMGmaodobot = document.querySelector('.img')

let contadorJogador = 0;

function alteraScore () {
    score.innerHTML = `SCORE: ${contadorJogador}`;
}



    var maoJogadorPega = [];

    pedra.addEventListener('click', () => {
        maoJogadorPega.splice(0, 1);
        maoJogadorPega.push('pedra')
});

    papel.addEventListener('click', () => {
        maoJogadorPega.splice(0, 1);
        maoJogadorPega.push('papel')
});

    tesoura.addEventListener('click', () => {
        maoJogadorPega.splice(0, 1);
        maoJogadorPega.push('tesoura')
});




var arrayMaoBot = [];

function pegarEscolhasBot(){
    const escolha = ['pedra', 'papel', 'tesoura'];
    const randomNumber = Math.floor(Math.random() * 3);
    var randomico = escolha[randomNumber]
    arrayMaoBot.splice(0, 1)
    arrayMaoBot.push(randomico);
    return arrayMaoBot;
}    

function alteraMaoBot () {
    const escolhaBot = arrayMaoBot

    if (escolhaBot.indexOf('pedra') === 0) {
    IMGmaodobot.setAttribute('src', './assets/img/pngpedra.png')
    IMGmaodobot.style.height = '5em'
    IMGmaodobot.style.position = 'absolute'
    IMGmaodobot.style.top = '-1.8em'
    IMGmaodobot.style.left = '-0.5em'
}   
if (escolhaBot.indexOf('tesoura') === 0) {
    IMGmaodobot.setAttribute('src', './assets/img/pngtesoura.png')
    IMGmaodobot.style.height = '5em'
    IMGmaodobot.style.position = 'absolute'
    IMGmaodobot.style.top = '-1.8em'
    IMGmaodobot.style.left = '-0.5em'
}  
if (escolhaBot.indexOf('papel') === 0) {
    IMGmaodobot.setAttribute('src', './assets/img/pngpapel.png')
    IMGmaodobot.style.height = '5em'
    IMGmaodobot.style.position = 'absolute'
    IMGmaodobot.style.top = '-1.8em'
    IMGmaodobot.style.left = '-0.5em'
}  

}



function divTerminaJogo () {
    //cria div, classe e add no ultimo filho do html
    const div = document.createElement('div')
    div.setAttribute('class', 'divTermina')

    //cria h1, classe e add no ultimo filho da div acima
    const h1 = document.createElement('h1')
    div.appendChild(h1);
    h1.innerHTML = 'RESULTADO'
    h1.setAttribute('class', 'H1resultado')

    //cria p, classe e add no ultimo filho da div acima
    const p = document.createElement('p')
    p.setAttribute('class', 'pDefine')
    div.appendChild(p) 

    // cria botão, classe e add no ultimo filho da div acima
    const btn = document.createElement('button')
    btn.setAttribute('class', 'btn-finish')
    btn.innerText = 'CONTINUE'
    div.appendChild(btn)

    // add evento caso o botão seja clicado
    btn.addEventListener ('click', () =>{
        document.querySelector('.divTermina').remove()
    })


    
    function fraseAlert  (mb, mj, acao, vORp) {
        return `O bot jogou ${mb}. Jogador jogou ${mj}, ${mb} ${acao} ${mj}... ${vORp}!!!`
    }

    
    const escolhabot = arrayMaoBot;


    // escolha do bot se for pedra
    if (escolhabot.indexOf('pedra') === 0 && maoJogadorPega.indexOf('pedra') === 0) {
        p.innerHTML = 'O bot jogou pedra, como ambos jogaram pedra, deu empate'
        
    } 
    else if (escolhabot.indexOf('pedra') === 0 && maoJogadorPega.indexOf('papel') === 0) {
        p.innerHTML = fraseAlert('pedra', 'papel', 'cobre', 'Vitória' )
        contadorJogador++
        alteraScore()
    } 
    else if (escolhabot.indexOf('pedra') === 0&& maoJogadorPega.indexOf('tesoura') === 0) {
        p.innerHTML = fraseAlert('pedra', 'tesoura', 'esmaga', 'Perdeu')
        contadorJogador--
        alteraScore()
    }

    // escolha do bot se for papel
    else if (escolhabot.indexOf('papel') === 0 && maoJogadorPega.indexOf('tesoura') === 0) {
        p.innerHTML = fraseAlert('papel', 'tesoura', 'corta', 'Vitória')
        contadorJogador++
        alteraScore()
    }       
    else if (escolhabot.indexOf('papel') === 0 && maoJogadorPega.indexOf('papel') === 0) {
        p.innerHTML ='O bot jogou papel, como ambos jogaram papel, deu empate'
    } 
    else if (escolhabot.indexOf('papel') === 0 && maoJogadorPega.indexOf('pedra') === 0) {
        p.innerHTML = fraseAlert('papel', 'pedra', 'cobre', 'Perdeu')
        contadorJogador--
        alteraScore()
    }

    // escolha do bot se for tesoura
    else if (escolhabot.indexOf('tesoura') === 0 && maoJogadorPega.indexOf('papel') === 0) {
        p.innerHTML = fraseAlert('tesoura', 'papel', 'corta', 'Perdeu')
        contadorJogador--
        alteraScore()
    }
    else if (escolhabot.indexOf('tesoura') === 0 && maoJogadorPega.indexOf('pedra') === 0) {
        p.innerHTML =fraseAlert('tesoura', 'pedra', 'esmaga', 'Vitória')
        contadorJogador++
        alteraScore()
    }
    else if (escolhabot.indexOf('tesoura') === 0 && maoJogadorPega.indexOf('tesoura') === 0) {
        p.innerHTML = 'O bot jogou tesoura, como ambos jogaram tesoura, deu empate'
    }

    

    document.querySelector('.contend').appendChild(div)
}








btnStart.addEventListener('click', () => {
    pegarEscolhasBot()
    alteraMaoBot()
    divTerminaJogo()

    maoJogadorPega.splice(0, 1)
})










