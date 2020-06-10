# Microservice template

This project is an architecture starter to develop microservices.  
The structure is based on coreycleary.me articles.  
![CoreyCleary.me](/docs/coreycleary.png)

## Installing

Clone this repo, then, install the node modules using **npm**

```shell
npm install
```

Rename **.env.example** file to **.env** and put your configuration.

```shell
PORT=1984
```

Then, run app with **nodemon**

```shell
npm start #Big brother listening on port 1984!
```

## Documentation

The project use Postman and ApiDoc

**/docs** contains the postman file.

**/docs/apidoc** contains ApiDoc generated from comments.

```shell
npm install -g apidoc #Needed to generate/update the doc
npm run doc #To generate the new doc
```

Then you just have to open **/docs/apidoc/index.html** in a browser

## Built With

- [postman](https://www.getpostman.com/) - The Collaboration Platform for API Development.
- [apidoc](https://apidocjs.com) - apiDoc creates a documentation from API annotations in your source code.
- [express](https://www.npmjs.com/package/express) - Fast, unopinionated, minimalist web framework for Node.js
- [body-parser](https://www.npmjs.com/package/body-parser) - Node.js body parsing middleware.
- [dotenv](https://www.npmjs.com/package/dotenv) - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.
- [morgan](https://www.npmjs.com/package/morgan) - HTTP request logger middleware for node.js.
- [rotating-file-stream](https://www.npmjs.com/package/rotating-file-stream) - Creates a stream.Writable to a file which is rotated. Rotation behaviour can be deeply customized; optionally, classical UNIX logrotate behaviour can be used.
- [file-system](https://www.npmjs.com/package/file-system) - This module make file operation apis simple, you don't need to care the dir exits and the api is same as node's filesystem. This is no exists time cost for this plugin.

## Author

- [ethicnology](https://github.com/ethicnology)
