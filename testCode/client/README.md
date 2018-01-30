## Instructions on running `client`

Take the `client` folder and stick it into the `testCode` directory of the `sigfig-rest-test` application. 

`cd` into the the `client` directory and run the following commands:

```
npm install
npm start
``` 

This will install the dependencies and start the `node` server on port `3000`. 

The application is configured to forward the `API` requests to `http://localhost:3001/`. This is defined in `package.json` with the key, value pair `"proxy": "http://localhost:3001/"`.  

Please contact me at `rohindaswani@gmail.com` if you have any trouble setting up the application.