# final-project
Separate repository for Final Project to make it easier to share or experiment with

Final Description:
For our final project, we ended up building a web app for Latinx and Black students in CompSci here at Duke. The website offers resources like information about compsci at Duke in general and cultural sppaces. It also has a dashboard, where users can post anything that they might need, such as a question or a comment or anything. There is also a courses page where users can read about different classes and reviews made by others. There is no functionality to this page however. There is also a Profiles page, where different members of the website are displayed as well as some information about themselves and their contact information. There is also a page for account handling issues, such as changing email or name.


PLAN:
Tools: Vue.js, Firebase

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

Our Firebase database is located at: 
https://cs290-62ce7.firebaseio.com/





App -- Reviews
Reviews -- Did users like our app?
https://youtu.be/76IpKbBwZn8



