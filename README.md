# shop-shop
Welcome to the Shop Shop! This application provides a simple example of using React, Apollo GraphQL, Redux and IndexDB to provide a eCommerce experience.

## Technologies Used
`React` - Used to create the front end application.

`Apollo GraphQL Server` - Used to create a GraphQL server backend to allow the UI to query for data.

`Apollo Client Context Provider` - Used to allow the entire application to access the Apollo server and use the Apollo React Hooks.

`Redux` - Used to create a centralized state storage used throughout the application.

`IndexDB` - Used to store information for offline use in case the user loses internet connection or if they navigate away from the site and come back. This will ensure their cart will stay intact.

`Stripe`- Used to support financial transactions.

## How to Run Locally

### Local Requirements
1) Ensure that MongoDB is installed locally. A local DB is required to run the application.

### Running locally
1) Clone either the master branch (stable release) or the develop branch to your local machine.
2) Navigate to the root of the shop-shop project and run `npm install`. By running the install command at the root level, the package.json will install all dependencies for both the client and the backend server.
3) From the root application, run the command `npm run seed`. This will seed the local mongo database with data. If you receive an error, ensure your local mongo is running.
4) Lastly, run `npm start` from the root of shop-shop. This will start both the client side application (localhost:3000) and the backend Apollo Server (localhost:3001).
