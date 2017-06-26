// Vue.js
const vm = new Vue({
    el: 'main',
    data: {

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

    }
});
