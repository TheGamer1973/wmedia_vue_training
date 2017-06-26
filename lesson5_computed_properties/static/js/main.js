// Vue.js
const vm = new Vue({
    el: 'main',
    data: {
        message: 'Hello World :D !',
        newTask: null,
        tasks: [
            {
                title: 'Learn Vue.js',
                priority: true,
                age: 23
            },
            {
                title: 'Learn ES6',
                priority: false,
                age: 135
            },
            {
                title: 'Publish something new everyday',
                priority: true,
                age: 378
            }
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
            // this, makes reference to the Vue instance
            this.tasks.unshift({
                title: this.newTask,
                priority: true,
                age: 0,
            });
            this.newTask = null;
        }
    },
    computed: {
        reversedMessage() {
            return this.message.split('').reverse().join('')
        },
        prioritizedTasks() {
            return this.tasks.filter((task) => task.priority)
        },
        tasksByAge() {
            return this.tasks.sort((a, b) => b.age - a.age)
        }
    }
});
