const player1 = {
    name: 'Scorpion',
    hp: 100,
    img: 'https://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['Кунай на цепи', 'Меч с корзинчатой гардой', 'Ниндзято'],
    attack: function () {
        console.log(player1.name +' '+ 'Fight')
    }
}

player1.attack();

const player2 = {
    name: 'Subzero',
    hp: 80,
    img: 'https://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['Ледяной молот', 'Ледяной меч', 'Снежная буря'],
    attack: function () {
        console.log(player2.name +' '+ 'Fight')
    }
}

player2.attack();

function createPlayer (personage, name, hp, img) {
    const $arenas = document.querySelector('.arenas');

    const $player = document.createElement('div');
    const $progressbar = document.createElement('div');
    const $life = document.createElement('div');
    const $name = document.createElement('div');
    const $character = document.createElement('div');
    const $img = document.createElement('img');

    $player.classList.add(personage);
    $progressbar.classList.add('progressbar');
    $life.classList.add('life');
    $life.style.width = hp + '%';
    $name.classList.add('name');
    $name.innerText = name;
    $character.classList.add('character');

    $img.src = img;
    $img.classList.add(img)

    $player.appendChild($progressbar);
    $player.appendChild($character);
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);
    $character.appendChild($img);

    $arenas.appendChild($player);
}

createPlayer('player1', player1.name, player1.hp, player1.img);
createPlayer('player2', player2.name, player2.hp, player2.img);

