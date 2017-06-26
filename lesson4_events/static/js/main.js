// Vue.js
const vm = new Vue({
    el: 'main',
    data: {
        newTask: null,
        tasks: [
            'Learn Vue.js',
            'Learn ES6',
            'Publish everyday',
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
        addTask() {
            this.tasks.unshift(this.newTask);
            this.newTask = null;
        }
    }
});

// Vanilla Javascript
function addTask() {
    const input = document.querySelector('input[type=text');
    vm.tasks.unshift(input.value);
    input.value = '';
}
