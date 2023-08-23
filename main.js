function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);
    
    if (elemento != null && elemento.localName === 'audio'){
        elemento.play();
    }
    else {
        console.log('Elemento não encontrado o seletor inválido');
        
    }
}

document.querySelectorAll('.tecla');

const listaDeTeclas = document.querySelectorAll('.tecla');

listaDeTeclas[0].onclick = tocaSom;

for (let contador = 0; contador < listaDeTeclas.length; contador ++) {

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    
    const idAudio = `#som_${instrumento}`; //template string

    tecla.onclick = function () {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (evento){

        console.log(evento);

        if (evento.code === 'Space' || 'Enter'){
            tecla.classList.add('ativa');
        }
        
    }

    tecla.onkeyup = function (){
        tecla.classList.remove('ativa');
    }

    tecla.onfocus
}