![](https://img.shields.io/badge/DesafioLATAM-important)

# SkatePark App

> An app that enables users to sign up in a fictional Skate event. The users and their info is displayed in the homepage of the frontend. It has an admin view where you can authorize the registration of users. The backend is an API REST server made with Node.js and the Express framework. Handlebars is used to render the pages dinamically and the data is persisted using a PostgreSQL database. 


## Built With

- JavaScript
- Bootstrap
- Node.js
- ExpressJS
- PostgreSQL
- Handlebars
- JWT

## Getting Started


To get a local copy up and running follow these simple example steps.

### Prerequisites

- Node.js
- ExpressJS
- PostgreSQL
- Handlebars

### Setup

`git clone git@github.com:jfoyarzo/SkateparkApp.git`

For this app to work you need PostgreSQL. To create the database use the psql shell: <br>
`CREATE DATABASE skatepark;`

And create a table using this command:<br>
`CREATE TABLE skaters (id SERIAL, email VARCHAR(50) NOT NULL, nombre VARCHAR(25) NOT NULL, password VARCHAR(25) NOT NULL, anos_experiencia INT NOT NULL, especialidad VARCHAR(50) NOT NULL, foto VARCHAR(255) NOT NULL, estado BOOLEAN NOT NULL);`

Also, you must provide valid credentials and port on file `consultas.js`
https://github.com/jfoyarzo/SkateparkApp/blob/e8764099f38730d3fdc4956dfc31cfccac3d255e/consultas.js#L3-L9

### Install

To install dependencies use `npm install`

### Usage

To start the server use the following command: <br>
`npm start`<br>

This will serve the frontend on:<br>
http://localhost:3000 <br>

To acces the admin view: <br>
http://localhost:3000/admin

## Authors

👤 **Felipe Oyarzo**

- GitHub: [@jfoyarzo](https://github.com/jfoyarzo)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/jorge-felipe-oyarzo-contreras-647118247/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/jfoyarzo/SkateparkApp/issues).

## Show your support

Give a ⭐️ if you like this project!

## 📝 License

This project is [MIT](./LICENSE) licensed.
