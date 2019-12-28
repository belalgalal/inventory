# Inventory Project

## Technologies

### Inventory frontend
Angular 8 + Bootstrap 4 + Docker

### Inventory backend
NodeJS + Express + Docker
### Further tools
Postman + Git + VSCode

## Running Locally
1. Install Git and clone the repository
```sh
$ git clone https://github.com/belalgalal/inventory.git
```
2. Install MySQL DB server and run the script `script.sql`
3. Install NodeJS (10 or later) and Angular 8
4. Make sure that the build configuration is not pointing to production in `inventory-frontend/package.json`
```
"scripts": {
    "ng": "ng",
    "start": "ng serve",
    "build": "ng build --prod",
    "test": "ng test",
    "lint": "ng lint",
    "e2e": "ng e2e"
  }
```
5. Run `inventory-backend`
```sh
$ cd inventory-backend
$ node server.js
```
6. Run `inventory-frontend`
```sh
$ cd inventory-frontend
$ ng serve
```
7. Open http://localhost:4200 and login with belal/belal

## AWS Deployment
The following topology diagram illustrates the deployment for the application on AWS.
![AWS Deployment Topology](https://lh5.googleusercontent.com/aU3Ys90xKjTp9gIQGB0IGjNE9_o-wFdEYuiqAWySaXMAAyHOPF2_leha_fZNmuSpijuOVWQKHItO9FL-7sQH=w2880-h1458-rw)
- The frontend URL: http://35.177.113.186/
- The backend URL: http://18.130.128.101
