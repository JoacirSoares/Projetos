function carregar() {
    const msg = window.document.getElementById('msg');
    const agora = new Date();
    const horario = agora.getHours();
    if (horario < 6){
        msg.innerHTML = `Boa madrugada!`;
    } else if (horario < 12){
        msg.innerHTML = `Bom dia!`;
    } else if (horario < 18){
        msg.innerHTML = `Boa tarde!`;
    } else if (horario < 24){
        msg.innerHTML = `Boa noite!`;
    };
};

carregar();


function toggle() {
    var eventos = arguments;
    var contador = -1;
    return function() {
        contador = (contador + 1) % eventos.length;
        eventos[contador].apply(this, arguments);
    };
}

function ocultarExibirVarios(nomePai, nomeFilho){
    document.querySelector(`.${nomePai}`).onclick = toggle(
        function() { 
            document.querySelectorAll(`.${nomeFilho}`).forEach(e => e.style.display = "block")
        },function() { 
            document.querySelectorAll(`.${nomeFilho}`).forEach(e => e.style.display = "none")
        }
    );
}

function ocultarExibir(nomePai, nomeFilho){
    document.querySelector(`.${nomePai}`).onclick = toggle(
        function() { 
            document.querySelector(`.${nomeFilho}`).style.display = "block"
        },function() { 
            document.querySelector(`.${nomeFilho}`).style.display = "none"
        }
    );
}

ocultarExibirVarios('container-outros', 'e1');
ocultarExibir('menu', 'navigation-header-2');
ocultarExibir('container-outros-2', 'container-sites-2');

// let visible = false;

// function ocultarExibir(nome) {
//     if(visible){
//         document.querySelectorAll(`.${nome}`).style.display = "none";
//         visible = false;
//     } else{
//         document.querySelectorAll(`.${nome}`).style.display = "block";
//         visible = false;
//     }
//     return visible;
// }

// document.querySelector('.container-outros').onclick = () => {
//     ocultarExibir('e1');
// }
