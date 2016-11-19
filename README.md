## Description

[Trello](http://trello.com) clone being built with NodeJS, Express, MongoDB, React and Redux.

Being a fan of Software Craftmanship, TDD, BDD and CI practices, this project's main goal is to follow 
all the coding standard and best practices. 

A high understanding of Javascript or any frameworks used is necessary to contribute.

## Prerequisite

Before you install the project, make sure [Yarn](https://yarnpkg.com/en/docs/install) (prefered one) or Npm 
and [MongoDB](https://docs.mongodb.com/v3.2/administration/install-community/) are installed.

## Installation instructions

Once your package management is installed these commands will run your application.

1. Database

  `mongod` : handles data requests, manages data access and performs background management operations.
  
  `mongo` : starts the mongo shell and connect to your MongoDB instance running on localhost with default port.
  
1. Server
  
  `cd server`
  
  `yarn install`
  
  `yarn start`

2. Client

  `cd client`
  
  `yarn install` 
  
  `yarn start`

## Where to get help

[ES6](https://github.com/airbnb/javascript) : if you want to quickly be up to date with javascript best practices, 
AirBNB repo is a gold mine. Read it.

React : [AirBnB](https://github.com/airbnb/javascript/tree/master/react) and 
[RisingStack](https://blog.risingstack.com/react-js-best-practices-for-2016/)

NodeJS : again I will redirect you to [RisingStack](https://blog.risingstack.com/node-js-best-practices/).
They are awesome and they care about open source.

Slacks : our slack channel is the best and the fastest way to get help. Not only it will help us keep track of all
the questions, but also answers will benefit all of us.

[CodinGame](https://www.codingame.com/home) : practicing your algorithm solving skills is a great way to write better code. CodingGame will push you 
to another level by making you think about the correct data structure, api and algorith, to use.

## Contribution guidelines

For now, pull requests are not accepted. Send us a requests to be a contributor and we will gladly accept it.
Slacks and Trello are our main communication and management tools and Gitlab handles merge requests.
These are the steps to see your changes in the main branch.

1. No direct commit on master or develop
2. Create a branch from develop with the same name as the trello card name
3. Code should be accompined with unit testing with 100% code coverage (whether it is on the client side or the server side)
4. When you issue a merge request, do not forget to assign it to a member.
5. When a merge request is assigned to you, checkout the branch, run unit tests, 
then test the functionnality that was added, read the code and add comments.
6. End to end testing are not required for now.

## Contributor list

## Credits, Inspiration, Alternatives
