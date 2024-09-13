// Funzione per aprire un singolo collegamento
function apriCollegamento(url) {
    window.open(url, '_blank');
}

// Funzione per aprire tutti i collegamenti di una colonna
function apriTuttiCollegamenti(categoria) {
    let links = [];

    if (categoria === 'best') {
        links = [
            'https://wordleplay.com/it/quordle',
            'https://pietroppeter.github.io/wordle-it/',
            'https://guesstheage.org/',
            'https://nerdlegame.com/',
            'https://flagle-game.com/',
            'https://angle.wtf/',
            'https://travle.earth/ita/',
            'https://travle.earth/practice/'
        ];
    } else if (categoria === 'less-important') {
        links = [
            'https://eyespy.world/home',
            'https://www.gamedle.wtf/?lang=it',
            'https://www.merriam-webster.com/games/quordle/#/',
            'https://lessgames.com/songless',
            'https://rankdle.com/',
            'https://www.ed0.it/quiz/totoquiz',
            'https://timeguessr.com/roundonedaily'
        ];
    } else if (categoria === 'other') {
        links = [
            'https://www.ed0.it/quiz/parolachiave/',
            'https://www.ed0.it/quiz/crononews',
            'https://www.ed0.it/quiz/fortniteskins/',
            'https://globle-game.com/game',
            'https://globle-capitals.com/game',
            'https://guessthe.game/',
            'https://numble.wtf/',
            'https://pokedle.net/',
            'https://travle.earth/',
            'https://figure.game/',
            'https://loldle.net/'
        ];
    }

    links.forEach(link => {
        window.open(link, '_blank');
    });
}

// Funzione per gestire il cambio di tema
const toggleSwitch = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

// Imposta il tema salvato
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}

// Cambia tema quando si preme il toggle
toggleSwitch.addEventListener('change', function () {
    if (this.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
});

// Funzione per aprire un singolo collegamento
function apriCollegamento(url) {
    window.open(url, '_blank');
}

