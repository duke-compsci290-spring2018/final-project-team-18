# final-project
Separate repository for Final Project to make it easier to share or experiment with


For our final project, we have decided to build a website for students of color at Duke. The website is intended to be a direct resource for students to explore the various resources available to them here and where to find them. The website will feature a login along with a database of members where they will be able to put their profile picture major, year and involvement and/or interests. Users will be able to filter through the database based on mutual features among them. The website will also feature a blog, where questions can be asked and will be answered by anyone who can. We will also have a calendar where we can display upcoming events and notify people of them. 



PLAN:
Tools: Vue.js, Google's Blogger API, Firebase

We are not very familiar with Vue and Firebase but still want to get more experience with them so we have decided to use them for our project.

To begin with we will have to set-up the project in Firebase. We then would have to set up JSON files in order to store all the information we would need; user login info, profile info, and blog posts. Each of those would have an "id" number, which would help link together users in all 3 areas. One example of the JSON file for login info would be:

[
    {
    id:123,
    username:"",
    email:"",
    password:""
    },
    {
    id:123,
    username:"",
    email:"",
    password:""
    }
]

We do not know if we are going to user Vue components yet, as some had complained about it being difficult to integrate Firebase. However, since our web app will be somewhat large and hold a lot of information, then components would be useful. 

After figuring out the backend part of the website, we would move on to the front-end and focusing on how to make the website interactive as well as design and all those logistics. 
