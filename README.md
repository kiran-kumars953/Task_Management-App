# Task Management App

A full-stack task management application built with React for the frontend and Node.js with Express for the backend. It allows users to manage their tasks efficiently with authentication and CRUD operations.

## Features
- User authentication (signup/login/logout)
- Create, read, update, and delete tasks
- Task categorization and status updates
- Responsive UI using React and Material-UI
- Backend API built with Express.js and MongoDB

## Technologies Used
- **Frontend:** React, Redux, Material-UI
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** JWT (JSON Web Tokens)
- **Deployment:** IBM Cloud

## Installation

### Prerequisites
- Node.js and npm installed
- MongoDB instance running (local or cloud-based like MongoDB Atlas)
- IBM Cloud account (for deployment)

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/Task_Management-App.git
   cd Task_Management-App
   ```

2. Install dependencies for both frontend and backend:
   ```sh
   cd backend
   npm install
   cd ../frontend
   npm install
   ```

3. Configure environment variables in `backend/config/config.js`:
   ```js
   module.exports = {
       MONGO_URI: 'your-mongodb-connection-string',
       JWT_SECRET: 'your-secret-key',
   };
   ```

4. Start the backend server:
   ```sh
   cd backend
   npm start
   ```

5. Start the frontend server:
   ```sh
   cd ../frontend
   npm start
   ```

## Deployment on IBM Cloud

### Steps
1. Install IBM Cloud CLI:
   ```sh
   curl -fsSL https://clis.cloud.ibm.com/install/linux | sh
   ```
   (For Windows/Mac, download from the [IBM Cloud CLI website](https://cloud.ibm.com/docs/cli))

2. Login to IBM Cloud:
   ```sh
   ibmcloud login
   ```

3. Push the backend to IBM Cloud:
   ```sh
   cd backend
   ibmcloud app push
   ```

4. Push the frontend to IBM Cloud (if hosting separately):
   ```sh
   cd ../frontend
   npm run build
   ibmcloud app push
   ```

5. Access the deployed app via the IBM Cloud URL provided after deployment.

## License
This project is licensed under the MIT License.
