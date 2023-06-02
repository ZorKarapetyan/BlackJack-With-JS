
const playercards = Array.from(document.getElementsByClassName('playercards'));
const playerpoint = document.getElementById('playerpoint');
const playerstop = document.getElementById('playerstop')
const fpc = document.getElementById('fpc');
const spc = document.getElementById('spc');
const tpc = document.getElementById('tpc')
const fopc = document.getElementById('fopc');
const fipc = document.getElementById('fipc')
const sipc = document.getElementById('sipc')
const playagain = document.getElementById('playagain');
const playerres = document.getElementById('playerres')

const dealercards = Array.from(document.getElementsByClassName('dealercards'));
const fdc = document.getElementById('fdc');
const sdc = document.getElementById('sdc');
const tdc = document.getElementById('tdc')
const fodc = document.getElementById('fodc');
const fidc = document.getElementById('fidc')
const sidc = document.getElementById('sidc')
const dealerstop = document.getElementById('dealerstop')
const dealerpoint = document.getElementById('dealerpoint')
const dealerres = document.getElementById('dealerres')



let playerturn = fpc;
let playermoves = 0;
let dealerturn = fdc;
let dealermoves = 0;
let count = 0;
let dealerstopans = false;
let playerstopans = false;


if(!count && localStorage.getItem('playerturn') && localStorage.getItem('playermoves')){
    let  b = localStorage.getItem('playerturn')
    b = JSON.parse(b);
    let c = localStorage.getItem('playermoves')
    c = JSON.parse(c);
    let d = localStorage.getItem('dealerturn')
    d = JSON.parse(d);
    let e = localStorage.getItem('dealermoves')
    e = JSON.parse(e);
    playerturn = b
    playermoves = c;
}
let arr = [
    {
        link: "url('./images/tuz.png')"
    },
    {
        link: "url('./images/erku.png')",
        point: 2
    },
    {
        link: "url('./images/ereq.png')",
        point: 3,
    },
    {
        link: "url('./images/chors.png')",
        point: 4,
    },
    {
        link: "url('./images/hing.png')",
        point: 5,
    },
    {
        link: "url('./images/vec.png')",
        point: 6,
    },
    {
        link: "url('./images/yot.png')",
        point: 7,
    },
    {
        link: "url('./images/ut.png')",
        point: 8,
    },
    {
        link: "url('./images/iny.png')",
        point: 9,
    },
    {
        link: "url('./images/tas.png')",
        point: 10,
    },
    {
        link: "url('./images/valet.png')",
        point: 10,
    },
    {
        link: "url('./images/dama.png')",
        point: 10,
    },
    {
        link: "url('./images/karol.png')",
        point: 10,
    },
];

playercards.map(el => {
    el.addEventListener('click', () => {
        if(playerturn === 1 && dealerstopans === true){
            let k = playermoves + 1;
            switch (k){
                case 1: playerturn = fpc; break;
                case 2: playerturn = spc; break;
                case 3: playerturn = tpc; break;
                case 4: playerturn = fopc; break;
                case 5: playerturn = fipc; break;
                case 6: playerturn = sipc; break;
            } 
        }
        
        if(playerturn === el){
        let ind = Math.round(Math.random() * 16) ;
        if(arr[ind].link === "url('./images/tuz.png')"){
            el.style.backgroundImage = arr[ind].link;
            playerpoint.innerText = Number(playerpoint.innerText) + +prompt('11 or 1')
        } 
        else{
        el.style.backgroundImage = arr[ind].link
        playerpoint.innerText = Number(playerpoint.innerText) + arr[ind].point; 
    }
    playermoves++;
    if(dealerstopans){
        switch (playermoves){
            case 1: playerturn = spc; break;
            case 2: playerturn = tpc; break;
            case 3: playerturn = fopc; break;
            case 4: playerturn = fipc; break;
            case 5: playerturn = sipc; break;
        } 
    } else{
    switch (playermoves){
        case 1: dealerturn = fdc; break;
        case 2: dealerturn = sdc; break;
        case 3: dealerturn = tdc; break;
        case 4: dealerturn = fodc; break;
        case 5: dealerturn = fidc; break;
        case 6: dealerturn = sidc; break;
    } 
    
}
    
    let moveres = JSON.stringify(playermoves)
    localStorage.setItem('playermoves', moveres)
    let res = JSON.stringify(playerturn);
    localStorage.setItem('playerturn', res)
    playerturn = 1;
    }
    if(dealerpoint.innerText == 21){
        playerres.innerText = 'Player Win'
        localStorage.clear();
        playerturn = fpc;
        playermoves = 0;
        dealerstopans = false;
        playerstopans = false;
        dealerturn = fdc;
        dealermoves = 0;
        count = 0;
    playerpoint.innerText = 0;
    dealerpoint.innerText = 0;
    } else if(Number(playerpoint.innerText) > 21){
        playerres.innerText = 'Player Lose'
        localStorage.clear();
        playerturn = fpc;
        playermoves = 0;
        dealerstopans = false;
        playerstopans = false;
        dealerturn = fdc;
        dealermoves = 0;
        count = 0;
    
    playerpoint.innerText = 0;
    dealerpoint.innerText = 0;
    }
    })
    
})




    
playerstop.addEventListener('click', () => {
    playermoves = -1;
    playerturn = 1;
    playerstopans = true;
})

dealercards.map(el => {
    el.addEventListener('click', () => {
        if(dealerturn === 0 && playerstopans === true){
            let k = dealermoves + 1;
            switch (k){
                case 1: dealerturn = fdc; break;
                case 2: dealerturn = sdc; break;
                case 3: dealerturn = tdc; break;
                case 4: dealerturn = fodc; break;
                case 5: dealerturn = fidc; break;
                case 6: dealerturn = sidc; break;
            } 
        }
        if(dealerturn === el){
        let ind = Math.round(Math.random() * 16) ;
        if(arr[ind].link === "url('./images/tuz.png')"){
            el.style.backgroundImage = arr[ind].link;
            dealerpoint.innerText = Number(dealerpoint.innerText) + +prompt('11 or 1')
        } 
        else{
        el.style.backgroundImage = arr[ind].link
        dealerpoint.innerText = Number(dealerpoint.innerText) + arr[ind].point; 
    }
    dealermoves++;
    switch (dealermoves){
        case 1: playerturn = spc; break;
        case 2: playerturn = tpc; break;
        case 3: playerturn = fopc; break;
        case 4: playerturn = fipc; break;
        case 5: playerturn = sipc; break;
    } 

    dealerturn = 0;
    let moveres = JSON.stringify(dealermoves)
    localStorage.setItem('dealermoves', moveres)
    let res = JSON.stringify(dealerturn);
    localStorage.setItem('dealerturn', res)
    }
    if(dealerpoint.innerText == 21){
        dealerres.innerText = 'Dealer Win'
        localStorage.clear();
        playerturn = fpc;
        playermoves = 0;
        dealerstopans = false;
        playerstopans = false;
        dealerturn = fdc;
        dealermoves = 0;
        count = 0;
    
    playerpoint.innerText = 0;
    dealerpoint.innerText = 0;
    } else if(Number(dealerpoint.innerText) > 21){
        dealerres.innerText = 'Dealer Lose'
        localStorage.clear();
        playerturn = fpc;
        playermoves = 0;
        dealerstopans = false;
        playerstopans = false;
        dealerturn = fdc;
        dealermoves = 0;
        count = 0;
    
    playerpoint.innerText = 0;
    dealerpoint.innerText = 0;
    }
    })
    console.log(dealerpoint.innerText);
    
})

dealerstop.addEventListener('click', () => {
    dealermoves = -1;
    dealerturn = 1;
    dealerstopans = true;
})


playagain.addEventListener('click', () => {
    localStorage.clear();
    playerturn = fpc;
    playermoves = 0;
    dealerstopans = false;
    playerstopans = false;
    dealerturn = 1;
    dealermoves = 0;
    count = 0;
    playercards.map(el => {
        el.style.backgroundImage = "url('./images/hetew.png')"
    })
    dealercards.map(el => {
        el.style.backgroundImage = "url('./images/hetew.png')"
    })
    playerpoint.innerText = 0;
    dealerpoint.innerText = 0;
})

