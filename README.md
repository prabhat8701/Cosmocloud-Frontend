### Employee Management System

This is a simple Employee Management System built using ReactJS with Vite as the build tool. The application provides basic CRUD (Create, Read, Update, Delete) functionalities to manage employee information. The backend APIs are provided by Cosmocloud.

### Features

- View a list of employees with serial numbers.
- View detailed information about an employee.
- Add a new employee.
- Update existing employee details.
- Delete an employee with a confirmation modal.

### Prerequisites

- Node.js (>= 12.x)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone - Git url
```

2. Navigate to the project directory:

```bash
cd employee-management-system
```

3. Install the dependencies:

```bash
npm install
# or
yarn install
```

### Running the Application

To start the development server, run:

```bash
npm run dev
# or
yarn dev
```

This will start the Vite development server. Open your browser and navigate to `http://localhost:3000` or `http://localhost:5173`.

### Project Structure

The project structure is as follows:

```
employee-management-system/
├── public/
├── src/
│   ├── components/
│   │   ├── EmployeeForm.jsx
│   │   ├── EmployeeList.jsx
│   │   ├── EmployeeDetails.jsx
│   │   ├── UpdateEmployeeModal.jsx
│   │   ├── ConfirmationModal.jsx
│   │   └── ...
│   ├── App.jsx
│   ├── main.jsx
│   └── ...
├── .env
├── index.html
├── package.json
├── vite.config.js
└── ...
```

### Components

#### EmployeeForm.jsx

- Form component to add a new employee.

#### EmployeeList.jsx

- Displays a list of employees with actions to update or delete.
- Uses `UpdateEmployeeModal` and `ConfirmationModal` components for update and delete actions.

#### EmployeeDetails.jsx

- Displays detailed information about an employee.

#### UpdateEmployeeModal.jsx

- Modal component for updating employee information.

#### ConfirmationModal.jsx

- Modal component to confirm the deletion of an employee.

### Styling

CSS files for styling components:

- `EmployeeList.css`
- `EmployeeDetails.css`
- `EmployeeForm.css`
- `UpdateEmployeeModal.css`
- `ConfirmationModal.css`

### API Integration

The application interacts with Cosmocloud APIs to perform CRUD operations. The API endpoints are configured to use the project and environment IDs from the `.env` file.

### Example API Requests

#### Get Employee List

```bash
GET https://free-ap-south-1.cosmocloud.io/development/api/employee?limit=10&offset=0
Headers:
  - projectId: your_project_id
  - environmentId: your_environment_id
```

#### Add Employee

```bash
POST https://free-ap-south-1.cosmocloud.io/development/api/employee
Headers:
  - projectId: your_project_id
  - environmentId: your_environment_id
Body:
  {
    "name": "John Doe",
    "address": "123 Main St",
    "city": "Anytown",
    "country": "USA",
    "zipcode": "12345",
    "email": "john.doe@example.com",
    "phone": "555-555-5555"
  }
```

#### Update Employee

```bash
PATCH https://free-ap-south-1.cosmocloud.io/development/api/employee/{id}
Headers:
  - projectId: your_project_id
  - environmentId: your_environment_id
Body:
  {
    "name": "John Doe Updated",
    "address": "456 Main St",
    "city": "Anytown",
    "country": "USA",
    "zipcode": "12345",
    "email": "john.doe@example.com",
    "phone": "555-555-5555"
  }
```

#### Delete Employee

```bash
DELETE https://free-ap-south-1.cosmocloud.io/development/api/employee/{id}
Headers:
  - projectId: your_project_id
  - environmentId: your_environment_id
```

---

