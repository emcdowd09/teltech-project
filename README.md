<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Getting Started](#getting-started)
  * [Prerequisites](#prerequisites)
  * [Installation](#installation)
* [Demo](#demo)
* [License](#license)
* [Contact](#contact)



<!-- ABOUT THE PROJECT -->
## About The Project

The project is made in Vue.js. 


### Built With

* [Vue.js](https://vuejs.org/)
* [Docker](https://www.docker.com/)
* [Docker Compose](https://docs.docker.com/compose/)



<!-- GETTING STARTED -->
## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

You should have yarn, docker and docker-compose installed. 

### Installation

1. Clone the repo
```sh
git clone https://github.com/emcdowd09/teltech-project
```
2. Install NPM packages
```sh
yarn install
```

3. Rename .env.template to .env and fill your env data if needed
```sh
cp .env.template .env
```

4. Serve the project for local development
```sh
yarn serve
```

5. Build the dist folder for production
```sh
yarn build
```

6. Or see the project in docker
```sh
docker-compose up (-d for detached)
```

<!-- Demo -->
## Demo
Dockerized (nginx in dockerfile) - [http://157.230.191.121/](http://157.230.191.121/)
Nginx - [http://157.230.223.20/](http://157.230.223.20/)

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Marino Troskot - [marinotroskot1992@gmail.com](marinotroskot1992@gmail.com) - email

Project Link: [https://github.com/emcdowd09/teltech-project](https://github.com/emcdowd09/teltech-project)
