var app = new Vue({
    el: '#app',
    data: {
        title: "Meet Others",
        profiles: [{ //list of profiles, might add to separate JSON file later
            'name': "Judyth Estrada",
            'major': 'Computer Science',
            'class': '2020',
            'description': 'hello'
        },
        {
            'name': 'Dania Estrada',
            'major': 'Computer Science',
            'class': '2019',
            'description': 'hello'
        },
        {
            'name': 'Alejandra Aguilar',
            'major': 'idk',
            'class': '2019',
            'description': 'hello'
        }]
    },
    methods: {
        open: function(which, e) { //function to open the modal for login
            e.preventDefault();
            $('#login-modal').addClass('active'); //add active class to show that modal is open or not
        }
    }
})

var modal = new Vue ({
    el: '#login-modal',
    methods: {
        close: function(e) {
            e.preventDefault();
            if (e.target === this.$el) {
                $('#login-modal').removeClass('active'); 
            }
            
        }
    }
})