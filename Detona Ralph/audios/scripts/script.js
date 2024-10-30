



const state = {
    viem: {
        squares: document.querySelectorAll(".square"),
        enemy : document.querySelector('.enemy'),
        time : document.querySelector('#time'),
        score : document.querySelector('#score'), 
    },

    values:{
        timerId : null,
      
        tempoC : 60,
        hitPosition: 0,
        result : 0,
    },
    actions : {
          countDownTimerid : setInterval(countDown,1000),
    }
}

function randomSquare(){
    state.viem.squares.forEach((square)=> {
        square.classList.remove('enemy');
    })
    let randomNumber = Math.floor(Math.random() * 9);
    let randomSquare = state.viem.squares[randomNumber];
    randomSquare.classList.add('enemy')
    state.values.hitPosition = randomSquare.id;
}

function addListenerHitBox() {
    state.viem.squares.forEach((square) => {
    square.addEventListener("mousedown", () => {

    if(square.id === state.values.hitPosition){
        state.values.result++
        state.viem.score.textContent = state.values.result;
        state.values.hitPosition = null;
        playSound();
    }

   });
});
}

function moveEnemy(){
    state.values.timerId = setInterval(randomSquare,1000)
}

function countDown(){
    state.values.tempoC--;
    state.viem.time.textContent = state.values.tempoC;
    if(state.values.tempoC < 0){
        clearInterval(state.actions.countDownTimerid);
        clearInterval(state.values.countDown);
        alert(`Game over sua pontuação foi ${state.values.result}`)
    }
}

function playSound() {
    let audio = new Audio('./hit.m4a');
    audio.play().catch(error => {
        console.log("Erro ao reproduzir o áudio:", error);
    });
}

function init(){
 moveEnemy()
 addListenerHitBox()
}
init();
