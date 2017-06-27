Vue.filter('backwards', (value) => value.split('').reverse().join(''));

// Vue.js
new Vue({
    el: 'main',
    data: {
        search: '',
        minimum: 5,
        games: [
            {
                title: 'Battlefield 1',
                genre: 'FPS',
                ranking: 9
            },
            {
                title: 'Civilization VI',
                genre: 'Strategy',
                ranking: 10
            },
            {
                title: 'Resident Evil 7',
                genre: 'Survival Horror',
                ranking: 7
            },
        ]
    },
    filters: {
        capitalize: function (value) {
            if (!value) return '';
            value = value.toString();
            return value.charAt(0).toUpperCase() + value.slice(1);
        },
        uppercase: function (value) {
            if (!value) return '';
            return value.toUpperCase();
        }
    },
    methods: {

    },
    computed: {
        bestGames() {
            return this.games.filter((game) => game.ranking >= this.minimum)
        },
        searchGame() {
            return this.games.filter((game) => game.title.includes(this.search));
        }
    }
});
