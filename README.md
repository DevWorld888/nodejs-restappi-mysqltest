

---

# 🏢 Employee Management API

Welcome to the Employee Management API! This API allows you to manage employee records with functionalities to get, update, and delete employee data. Built with Node.js, Express, and MySQL, it's designed to be efficient and easy to use.

## 🌟 Features

- 📋 Retrieve a list of employees
- 🔍 Get details of a specific employee by ID
- ➕ Add a new employee
- ❌ Delete an employee by ID

## 🚀 Installation

To install and run the Employee Management API on your local machine, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/DevWorld888/nodejs-restappi-mysqltest.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd employee-management-api
   ```
3. **Install the dependencies**:
   ```bash
   npm install
   ```
4. **Start the server**:
   ```bash
   npm start
   ```

> Note: Make sure you have MySQL installed and running on your machine. Update the database configuration in the project before starting the server.

## 📚 Usage

To use the Employee Management API, you can make requests to the following endpoints:

### Endpoints

- **GET /api/employees**: Retrieve a list of all employees.
- **GET /api/employees/:id**: Retrieve details of a specific employee by ID.
- **POST /api/employees**: Add a new employee.
- **DELETE /api/employees/:id**: Delete an employee by ID.

### Example Requests

1. **Get all employees**:
   ```bash
   GET /api/employees
   ```

2. **Get employee by ID**:
   ```bash
   GET /api/employees/1
   ```

3. **Add a new employee**:
   ```bash
   POST /api/employees
   Content-Type: application/json

   {
       "name": "John Doe",
       "position": "Software Engineer",
       "salary": 60000
   }
   ```

4. **Delete an employee by ID**:
   ```bash
   DELETE /api/employees/1
   ```

## 🛠️ Technologies Used

- Node.js
- Express
- MySQL2
- Nodemon

## 🤝 Contributing

We welcome contributions! Please follow these steps to contribute:

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Contact

If you have any questions or suggestions, feel free to contact us at [augustocsuarez1985@gmail.com].

---




#librerias
express
nodemon
mysql2


#avoid imports
"type": "module",