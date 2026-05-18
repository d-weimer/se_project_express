# WTWR (What to Wear?): Back End

The back-end project is focused on creating a server for the WTWR application. You’ll gain a deeper understanding of how to work with databases, set up security and testing, and deploy web applications on a remote machine. The eventual goal is to create a server with an API and user authorization.

## Technologies and Techniques Used

- **Node.js & Express:** Used to set up the server and create routes to separate endpoint paths from the controller logic.
- **Postman:** Used to test all the API endpoints, mock frontend request data, and make sure custom HTTP error status codes are working properly.
- **MongoDB & Mongoose:** A NoSQL database used with Mongoose schemas to validate incoming data before saving anything to the database.
- **Validator:** A library integrated into the Mongoose schemas to validate web image URLs for both the user avatar and clothing item images.
- **ESLint:** Used to catch code errors early and enforce a clean and consistent coding style across the project.
- **Nodemon:** Added as a development dependency to automatically restart the server whenever code changes are saved.

## API Functionality Overview

This backend is a RESTful API that handles JSON data for the WTWR application, allowing the client to store and fetch user and clothing data.

### Core Features

1. **User Profiles (`/users`):** Handles creating new user profiles, getting a list of all users, and fetching a specific user by their unique ID.
2. **Clothing Items (`/items`):** Handles creating and storing clothing cards with required details like the item's name, an image URL, and the recommended weather type.
3. **Like / Unlike Items (`/items/:itemId/likes`):** Uses MongoDB array operators to let users like or unlike clothing cards.
4. **Error Handling:** Implements a centralized system to catch errors and return the correct HTTP status codes along with JSON error messages.

## Running the Project

`npm run start` — to launch the server

`npm run dev` — to launch the server with the hot reload feature

### Testing

Before committing your code, make sure you edit the file `sprint.txt` in the root folder. The file `sprint.txt` should contain the number of the sprint you're currently working on. For ex. 12

### API Testing with Postman

Postman was used to test and verify that all server functionality works as expected. To test the API endpoints locally:

1. Start your local server by running `npm run dev` in your terminal.
2. Open Postman and target your requests at `http://localhost:3001`.
3. Use the following endpoints to test the API behavior:
   - **Users:** `POST /users` (Create User), `GET /users` (Get All Users), `GET /users/:userId` (Get Specific User)
   - **Items:** `POST /items` (Create Item), `GET /items` (Get All Items), `DELETE /items/:itemId` (Delete Item)
   - **Likes:** `PUT /items/:itemId/likes` (Like Item), `DELETE /items/:itemId/likes` (Unlike Item)
