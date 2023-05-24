# TODO-API Ajargh Kreation
 
## Functionality 

1. User 
    1. sign in and sign up using jwt
    2. create task
    3. delete task
    4. update task
    6. view specific task by providing id
    7. view task status wise 


## Tools
1. Node Js v-16.18.0
2. Express Js
3. Mongodb 
4. Mongoose
5. jsonwebtoken (genrate jwt)
6. passport-jwt (authentication)

## This site is host on render
        https://todo-ajargh-kreation.onrender.com

##Setup in Local System

1. git clone "https://github.com/tush8788/todo-ajargh-kreation.git"
2. open command prompt and Type 'npm install' for download all dependencies
3. then just "npm start"/ if npm start is not work just run this command 'node index.js'
4. then go localhost:8000


## How to send authentication req
1. open postman or any other tool, and click any http req (like get,post,put,delete)
2. first login and copy jsonwebtoken token
3. go inside header 
4. filds :- Authorization and inside value paste token after Bearer keyword 
5. (like :- Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDQyMWFj.0QVbonXvY) 


## API urls for users 
1. create new user
    1. post req :- http://127.0.0.1:8000/v1/user/create
    2. filds :- email, password, confirmpassword

2. login user
    1. post req :- http://127.0.0.1:8000/v1/user/create-session
    2. filds :- email, password

3. create new task [authentication needed]
    1. post req :- http://127.0.0.1:8000/v1/task/create
    2. filds :- title, description, status (optional) either ["completed","incomplete"]

4. update task [authentication needed]
    1. put req :- http://127.0.0.1:8000/v1/task/646e26102edc52cdd6de73e5  <--task id
    2. filds :- title, description, status (all three are optional you can send only one or two filds also)

5. delete task [authentication needed]
    1. delete req :- http://127.0.0.1:8000/v1/task/646e26102edc52cdd6de73e5  <--task id
