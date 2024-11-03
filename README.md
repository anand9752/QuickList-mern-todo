# 🚀 QuickList - Todo App

Welcome to the **QuickList** repository! This is a Todo application developed using the **MERN** stack, featuring user authentication, task management, and email notifications. The app allows users to manage their tasks effectively, with sections for active tasks, completed tasks, and all tasks.


# deployment Link :- https://quicklist-mern-todo.vercel.app/

## 📁 Folder Structure:

### 1. 🔐 Authentication & Authorization (JWT + Cookies)

- Implemented **authentication** and **authorization** using **JWT** and cookies.
- Utilized the **bcrypt** library for secure password hashing.
- Developed **login** and **signup** routes for user access.

### 2. ✅ Todo App (Task Management)

- Created a **Todo App** to manage tasks with **CRUD** operations (Create, Read, Update, Delete).
- Users can:
  - Add new tasks ✅
  - Mark tasks as completed ✅
  - Delete tasks ❌
- Tasks are categorized into three sections:
  - **Active Tasks**
  - **Completed Tasks**
  - **All Tasks**

### 3. 📧 Email Notifications

- Integrated **Nodemailer** to send email notifications to users upon adding a new task.
- Users receive a confirmation email with details of their tasks.

## 🚀 Getting Started

### Prerequisites

- Make sure you have [Node.js](https://nodejs.org/) and [MongoDB](https://www.mongodb.com/) installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/anand9752/QuickList-mern-todo.git
   cd QuickList-mern-todo
   ```
2. Install the dependencies on both folder frontend and backedn:
   ```bash
   npm install
   ```
   
      3.Set up your environment variables:

Create a .env file in the root directory and add your MongoDB URI and email configuration.  and in frontend/axios.js change the baseUrl to localhost:    

4.Start the server 
   ```bash
   npm start 
   ```
5. start the frontend
   ```bash
   npm run dev
   ```
## :🔧 Built With

- **MongoDB** - A NoSQL database used for storing user data and tasks efficiently. It allows for flexible data modeling and scalability, making it ideal for applications like Todo lists.
  
- **Express** - A web application framework for Node.js, used to build the backend of the application. It simplifies the server setup and allows for quick routing and middleware integration.

- **React** - A JavaScript library for building user interfaces, used as the frontend of the application. It allows for the creation of dynamic and responsive components, providing a smooth user experience.

- **Node.js** - A JavaScript runtime built on Chrome's V8 engine, used for server-side scripting. It enables the development of scalable network applications and allows the use of JavaScript for both client-side and server-side code.

- **JWT (JSON Web Tokens)** - A compact and self-contained way for securely transmitting information between parties as a JSON object. In this application, it is used for user authentication and authorization, ensuring that only authorized users can access certain resources.

- **bcrypt** - A password hashing function that adds security to user passwords. It is used to hash passwords before storing them in the database, protecting user information from potential breaches.

- **Nodemailer** - A module for Node.js applications to allow easy email sending. In this application, it is used to send email notifications to users whenever they add a new task, keeping them informed and engaged.



