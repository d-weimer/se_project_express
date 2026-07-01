# WTWR (What to Wear?): Backend

The back-end project is focused on creating a server for the WTWR application. You’ll gain a deeper understanding of how to work with databases, set up security and testing, and deploy web applications on a remote machine. The eventual goal is to create a server with an API and user authorization.

The server deployment phase was focused on configuring a remote production environment for the WTWR application. I gain a deeper understanding of how to provision cloud infrastructure, manage background application layers, and secure web traffic using modern DevOps practices.

https://www.djw-wtwr.jumpingcrab.com

## Technologies and Techniques Used

**Backend development:**

- **Node.js & Express:** Used to set up the server and create routes to separate endpoint paths from the controller logic.
- **Postman:** Used to test all the API endpoints, mock frontend request data, and make sure custom HTTP error status codes are working properly.
- **MongoDB & Mongoose:** A NoSQL database used with Mongoose schemas to validate incoming data before saving anything to the database.
- **Validator:** A library integrated into the Mongoose schemas to validate web image URLs for both the user avatar and clothing item images.
- **ESLint:** Used to catch code errors early and enforce a clean and consistent coding style across the project.
- **Nodemon:** Added as a development dependency to automatically restart the server whenever code changes are saved.

**Server deployment:**

- **Google Cloud Platform (GCP):** Used to provision and configure the remote Virtual Machine (VM) infrastructure for hosting the application.
- **Ubuntu (24.04 LTS Minimal):** A lightweight Linux operating system selected for the VM environment to keep server resource utilization optimized.
- **SSH (Secure Shell):** Used to securely connect to and execute command-line instructions on the remote server's terminal from your local machine.
- **Git & GitHub:** Used to clone the backend source code repository directly onto the cloud server using secure HTTPS access.
- **Nginx:** A high-performance web server configured as a reverse proxy to route public domain requests to internal application ports and securely serve the static frontend files.
- **PM2:** A production-grade process manager used to daemonize the Node.js application so that it runs continuously in the background and frees up the terminal panel.
- **Certbot & Let's Encrypt:** Automated security tools used to generate, configure, and manage SSL/TLS certificates to enforce secure HTTPS traffic for your domains.
- **UFW (Uncomplicated Firewall):** A built-in Linux firewall used to manage network access and control which local ports are exposed to public traffic.
- **cURL:** A command-line utility used locally to manually test network connectivity, verify API route endpoints, and confirm successful deployment configurations.

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

## Frontend GitHub Repository

[WTWR Frontend](https://github.com/d-weimer/se_project_react)

## Project Pitch Videos

Check out these videos, where I describe my project
and some challenges I faced while building it:

- [DanielWeimer-ProjectPitch-Project13](https://drive.google.com/file/d/1S8GxUeEUwupjJ5eGK4K6oPrhHaKEF6yj/view?usp=sharing)
- [DanielWeimer-ProjectPitch-Project15](https://drive.google.com/file/d/1CElSEOwM5gF8lFTriVD0ztek5EXnh0gm/view?usp=sharing)
