# crud-books-nodejs-mongodb
Example of a CRUD app developed in Node.js

In my application I have performed CRUD in MongoDB database. I have used Node and some other module to make my project. To connect my application to the cloud I have use Mongoose.

CRUD Operations means CREATE – Insert data, READ – Select data, UPDATE – Update data, DELETE – Delete data

# How to Setup application in local
1. Clone the repository from the provided github url and switch to **Development** branch.
2. go to the cloned folder and run `npm install` for downloading all packages.
3. Next step is to login to mongodb atlas with specified credentials for DB support.
4. Last step is to run `npm start` to start the server in your local machine.

# How to Test the Application
1. Open any testing software such as postman or swagger etc and enter the url as `Http://localhost:5000/books`.
2. Request type can be tried based on the explanation provided here - [Link](https://www.loom.com/share/0fd7bef646bb46eba1a7b6752db187e1?sid=2705f320-2d79-4ede-b6ca-ea8ee5bf3695)
3. Dockerfile is also provided for further deployment purposes based on requirement.


To create a database in MongoDB Atlas:

1. Login with your account.
2. Create New project
3. Create new databasse. You can select the free version for this project.
4. Then according to the area you live in select your region then create the cluster.
5. Enter a credential which will help u to connect to your application.
6. Then click on add your current IP.
7. Then your Cluster/Database will be create there you will see Connect Button. From there you can connect to your application by copying the path

