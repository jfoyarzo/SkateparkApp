<a name="readme-top"></a>
<div align="center">
<img src="https://user-images.githubusercontent.com/101157253/232580630-6340b658-7e89-4f68-bbdc-1a6b7603eb45.png" style="height: 600px; width: "auto;"/>
</div>


<!-- TABLE OF CONTENTS -->

# 📗 Table of Contents

- [📗 Table of Contents](#-table-of-contents)
- [📖 Skatepark App ](#-skatepark-app-)
  - [🛠 Built With ](#-built-with-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [🚀 Live Demo ](#-live-demo-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Install](#install)
    - [Usage](#usage)
  - [👥 Authors ](#-authors-)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [📝 License ](#-license-)

<!-- PROJECT DESCRIPTION -->

# 📖 Skatepark App <a name="about-project"></a>

**Skatepark App** is a full-stack app that enables users to sign up for a fictional Skate event. The users and their info is displayed on the homepage of the front end. It has an admin view where you can authorize the registration of users. The backend is an API REST server made with Node.js and the Express framework. Express-Handlebars is used to render the pages dynamically and the data is persisted using a PostgreSQL database. 

## 🛠 Built With <a name="built-with"></a>

### Tech Stack <a name="tech-stack"></a>


<details>
  <summary>Frontend</summary>
  <ul>
    <li><a href="https://github.com/express-handlebars/express-handlebars">Express-Handlebars</a></li>
  </ul>
</details>

<details>
  <summary>Backend</summary>
  <ul>
    <li><a href="https://nodejs.org/">Node.js</a></li>
    <li><a href="https://expressjs.com/">Express.js</a></li>
  </ul>
</details>

<details>
  <summary>Database</summary>
  <ul>
    <li><a href="https://www.postgresql.org/">PostgreSQL</a></li>
  </ul>
</details>

<!-- Features -->

### Key Features <a name="key-features"></a>


- **Signup** using your email, name, password and signature movement!
- **Log in** to your account for more options. Uses JWT for authentication.
- **Admin view** for confirming new users.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LIVE DEMO -->

## 🚀 Live Demo <a name="live-demo"></a>

- [Live Demo Link](https://skatepark-app.onrender.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## 💻 Getting Started <a name="getting-started"></a>


To get a local copy up and running, follow these steps.

### Prerequisites
To run this project you need:

- Node.js
- ExpressJS
- PostgreSQL
- Handlebars

### Setup

Clone this repository to your desired folder:

```
git clone git@github.com:jfoyarzo/SkateparkApp.git
```

For this app to work you need PostgreSQL. To create the database using the psql shell: <br>
```
CREATE DATABASE skatepark;
```

And create a table using this command:<br>
```
CREATE TABLE skaters (id SERIAL, email VARCHAR(50) NOT NULL, nombre VARCHAR(25) NOT NULL, password VARCHAR(25) NOT NULL, anos_experiencia INT NOT NULL, especialidad VARCHAR(50) NOT NULL, foto VARCHAR(255) NOT NULL, estado BOOLEAN NOT NULL);
```

Also, you must provide valid credentials and port on file `consultas.js` or use the provided `.env.example` file.

### Install

Install this project's dependencies with:

```
npm install
```

### Usage

To start the server use the following command: <br>
```
node index.js
```

This will serve the frontend on:<br>
http://localhost:3000 <br>

To access the admin view: <br>
http://localhost:3000/admin

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- AUTHORS -->

## 👥 Authors <a name="authors"></a>

👤 **Felipe Oyarzo**

- GitHub: [@jfoyarzo](https://github.com/jfoyarzo)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/jorge-felipe-oyarzo-contreras/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- FUTURE FEATURES -->

## 🔭 Future Features <a name="future-features"></a>

- [ ] **Upgraded CSS styles**
- [ ] **Better notifications**
- [ ] **Admin feature**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/jfoyarzo/SkateparkApp/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- SUPPORT -->

## ⭐️ Show your support <a name="support"></a>


If you like this project please give it a ⭐!

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- LICENSE -->

## 📝 License <a name="license"></a>

This project is [MIT](./LICENSE) licensed.


<p align="right">(<a href="#readme-top">back to top</a>)</p>
