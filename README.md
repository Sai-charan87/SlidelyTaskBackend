
# Backend Server

This is the backend server component of our Form App

## Overview

The backend server is responsible for handling API requests, saving form submissions, and retrieving saved submissions. It uses Express.js with TypeScript and a JSON file as a database to store submissions.

## Technologies Used

- Node.js
- Express.js
- TypeScript

## Getting Started

To run the backend server locally, follow these steps:

1. Clone the repository to your local machine.

   ```bash
   git clone https://github.com/Sai-charan87/SlidelyTaskBackend.git
   ```
 2.  Navigate to the backend directory.
    
       ```bash
       cd backend
       ```
        
3. Install dependencies using npm.

    ```bash
    npm install
    ```
4. Install necessary packages:

    ```bash
    npm install express body-parser cors
    npm install typescript ts-node @types/node @types/express @types/body-parser @types/cors --save-dev
    ```
5. Compile TypeScript files.
    ```bash
    tsc
    ```
6. Start the server.
    ```bash
    npm start
    ```


  The backend server will be running at http://localhost:3000 by default.

##  Endpoints
/ping: GET request that always returns true.

/submit: POST request to save form submissions.

/read: GET request to retrieve saved submissions.

## Directory Structure

src/app.ts:TypeScript data file.

src/db.json: JSON file for storing data.

## Additional Notes

Ensure database is properly configured and running.

Use environment variables for sensitive information like database credentials.


