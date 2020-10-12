

[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]



<!-- PROJECT LOGO -->

  <h3 align="center">LiReddit</h3>

  <p align="center">
		An online discussion forum developed with multiple popular technologies
    <br />
    ·
    <a href="https://github.com/cyw233/lireddit/issues">Report Bug</a>
    ·
    <a href="https://github.com/cyw233/lireddit/issues">Request Feature</a>
  </p>



<!-- TABLE OF CONTENTS -->

## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contact](#contact)



<!-- ABOUT THE PROJECT -->
## About The Project

![Lireddit screenshot](https://i.ibb.co/rFGWhFS/Screen-Shot-2020-10-12-at-10-13-38-am.png)

To keep updating my current web development skills, I decided to develop this full-stack web application to continue to learn and grow my skills using some cutting-edge technologies. This application allows users to authenticate, create a post, update their posts, upvote or downvote a post etc. Server-side rendering and caching have enabled in this application.


### Built With

* [React](https://reactjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [GraphQL](https://graphql.org/)
* [Apollo Client](https://www.apollographql.com/docs/react/)
* [Node.js](https://nodejs.org/en/)
* [PostgreSQL](https://www.postgresql.org/)
* [TypeORM](https://typeorm.io/#/)
* [Redis](https://redis.io/)
* [Next.js](https://nextjs.org/)
* [TypeGraphQL](https://typegraphql.com/)



<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
```sh
npm install npm@latest -g
```

- TypeScript

```
npm install -g typescript
```

### Installation

1. Clone the repo
```sh
git clone https://github.com/cyw233/lireddit.git
```
2. Create a `.env` file in the `server` folder and add following env variables

```
DATABASE_URL=postgresql://<pg_username>:<pg_password>@localhost:5432/<pg_db_name>
REDIS_URL=127.0.0.1:6379
PORT=4000
SESSION_SECRET=<random_string>
CORS_ORIGIN=http://localhost:3000
```

3. Install NPM packages and compile backend

```sh
cd server
npm install
npm run watch
# Open a new terminal
npm run dev
```

4. Create a `.env.local` file in the `web` folder and add following env variables:

```
NEXT_PUBLIC_API_URL=http://localhost:4000/graphql
```

5. Install NPM packages and compile frontend

```sh
cd web
npm install
npm run dev
```



<!-- USAGE EXAMPLES -->

## Usage

After the installation, open you browser and go to **localhost:3000** to start using the app. You can start by registering a new user.



<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->

## Contact

Chenyang Wang - chenyangw233@gmail.com



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[license-shield]: https://img.shields.io/github/license/cyw233/lireddit.svg?style=flat-square
[license-url]: https://github.com/cyw233/lireddit/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://https://www.linkedin.com/in/cyw233/
