# Tech Blog Project
This is a tech blog project that allows users to create, edit, and view blog posts, as well as comment on them. The project is built using the following languages and tools:

## Technologies Used

JavaScript: JavaScript is a programming language used to create interactive web pages and applications. It is used in this project to create the back-end functionality of the blog.

Node.js: Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript code outside of a web browser, making it ideal for server-side programming. It is used in this project to create the back-end server that handles the requests and responses for the blog.

Express.js: Express.js is a web application framework for Node.js. It provides a set of tools and features for building web applications, such as routing, middleware, and templates. It is used in this project to create the server routes for the blog.

MySQL: MySQL is a relational database management system that uses SQL (Structured Query Language) to interact with the data. It is used in this project to store and retrieve the blog data.

Sequelize: Sequelize is a promise-based ORM (Object-Relational Mapping) for Node.js. It allows developers to interact with databases using JavaScript objects instead of SQL queries. It is used in this project to simplify the database interactions for the blog.

Handlebars.js: Handlebars.js is a templating engine that allows developers to create reusable HTML templates. It is used in this project to render the HTML pages for the blog.

bcrypt: bcrypt is a password hashing function that allows developers to securely store passwords in the database. It is used in this project to encrypt the user passwords.

dotenv: dotenv is a zero-dependency module that allows developers to load environment variables from a .env file. It is used in this project to securely store sensitive information such as database credentials and API keys.

## Installation


To install and run the project locally, follow these steps:


Clone the repository to your local machine.

Install Node.js and MySQL if they are not already installed.

Create a new MySQL database for the blog.

Create a .env file in the root directory of the project and add the following variables:


Copy code


DB_NAME='your_database_name'

DB_USER='your_database_user'

DB_PASSWORD='your_database_password'

Open a terminal window in the project directory and run npm install to install the dependencies.

Run npm run seed to seed the database with some initial data.

Run npm start to start the server.

Open a web browser and navigate to http://localhost:3001 to view the blog.

## Contributing

If you would like to contribute to the project, please follow these steps:


Fork the repository and create a new branch for your changes.

Make your changes and test them locally.

Commit your changes and push them to your fork.

Open a pull request and describe your changes.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
