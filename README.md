# NoSQL-Challenge-Social-Network-API

## Description

This projects serves as the API for a Social Network App that utilizes Express.js, Node.js, and Mongodb. The 'socialnetworkdb' stores all of the users for this mock social media app. CRUD routes (using express HTTP methods GET, POST, PUT, and DELETE) were implemented to allow the insertion, deletion, updating, and viewing of the data on the back end. Further code will be needed to ensure that the client can manipulate the data in a similar way in the UI. 

Walkthrough video - https://drive.google.com/file/d/1OuHteWHECk0dVJ7nPhff8OzJxx-Vc6gK/view?usp=sharing


## Table of Contents

 * [Installation](#installation)

 * [Usage](#usage)

 * [Credits](#credits)

 * [License](#license)

 * [Questions](#questions)

## Installation

To run this project, run the following command:


```
npm init 
```


(add "-y" to answer yes to all questions regarding the creation of the package.json), then run the following code to install any necessary dependencies:


```

npm i 
```

Run the following command to seed the db:

```
npm run seed
```

Next run this command to connect to the server:

```
npm start
```

Open Insomnia or another similar application to test the routing. 

## Usage

Clone this repo and save it locally to your computer. Open terminal, git bash, or whichever command line interface you are using and navigate to the directory holding the server.js file. Run the following command:

```
npm run seed && npm start
```

You can then test the various api routes in Insomnia or a similar application.

## Credits

https://stackoverflow.com/questions/18022365/mongoose-validate-email-syntax (help with validation)

https://mongoosejs.com/docs/validation.html (help with validation)

https://mongoosejs.com/docs/populate.html (help with schemas)

https://github.com/civ187/social-network-API (help with routes, async wasn't working for me for some reason)

https://blog.bounceless.io/mastering-email-validation-in-mongoose-syntax-uniqueness-and-beyond/ (help with validation)

https://stackoverflow.com/questions/41487401/express-route-not-working (help with routes)

## License

![License Badge](https://img.shields.io/badge/license-MIT-blue)

## Questions

If you have any questions about this application, please feel free to contact me at my email : josh.mayfield45@gmail.com and Github profile : https://github.com/jmayfield777