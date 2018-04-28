firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});

firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});



var app = new Vue({
    el: '#app',
    data: {
        title: "Meet Others",
        profiles: [{ //list of profiles, might add to separate JSON file later
            'name': "Judyth Estrada",
            'major': 'Computer Science',
            'class': '2020',
            'description': 'hello',
            'email': 'something@duke.edu',
            'img': ''
        },
        {
            'name': 'Dania Estrada',
            'major': 'Computer Science',
            'class': '2019',
            'description': 'hello',
            'email': 'something@duke.edu',
            'img': ''
        },
        {
            'name': 'Alejandra Aguilar',
            'major': 'idk',
            'class': '2019',
            'description': 'hello',
            'email': 'something@duke.edu',
            'img': ''
        }]
    }
})

