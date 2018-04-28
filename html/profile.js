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
    }
})

var modal = document.getElementById('id01');

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}