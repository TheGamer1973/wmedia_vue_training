// Vue.js

const vm = new Vue({
    el: 'main',
    data: {
        laborables: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes'],
        tasks: [
            { name: 'Do Shopping', priority: 'low' },
            { name: 'Learn Vue and Firebase', priority: 'high' },
            { name: 'Go to the Gym', priority: 'high' },
        ],
        person: {
            name: 'John',
            profession: 'dev',
            city: 'Valencia',
        }
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
    }
});
