var app = new Vue({
    el: '#feed',
    data: {
        title: 'Welcome to my feed',
        posts: [{
            'userId': 1,
            'id': 1,
            'title': 'hahahaha',
            'body': 'jajahahaha'
        },
        {
            'userId': 1,
            'id': 2,
            'title': 'hgjalja',
            'body': 'hhhhhh'
        },
        {
            'userId': 1,
            'id': 3,
            'title': 'jhgabdogaja',
            'body': 'qqqqqqq'
        }]
    },
    methods: {
        deletePost: function (post) {
            console.log(post)
            this.posts.splice(this.posts.indexOf(post), 1)
        },
        AddPost: function() {
            this.posts.push ({
                'userId': 1,
                "id": this.posts.length +1,
                "title": this.newPost.title,
                "body":this.newPost.body
            })
            
            this.newPost = {}
        }
    }
})