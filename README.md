# Blood Bank Management System

## Overview
The **Blood Bank Management System** is a database-driven project designed to manage and streamline the operations of a blood bank. This system allows for efficient handling of donors, recipients, blood storage, and other related entities, ensuring smooth operations and record-keeping.

## Features
- **Volunteer Management**: Register and track volunteer donors, including personal and contact details.
- **Doctor Module**: Track doctors examining the volunteers.
- **Blood Storage**: Manage blood units and their details like blood type, quantity, and storage location.
- **Recipient Management**: Handle elective, urgent, and chronic recipient types with detailed requirements.
- **Hospital Integration**: Maintain hospital details for partnerships and blood supply.
- **Admin Dashboard**: Oversee the overall management of the blood bank.

## Entity Relationship Diagram
Refer to the provided ER diagram for the complete data model, including relationships and entity specifications.

## Technologies Used
- **Backend**: PHP (using XAMPP)
- **Database**: MySQL
- **Frontend**: HTML, CSS, JavaScript

## Prerequisites
- XAMPP installed on your local machine
- A web browser for accessing the frontend

## Installation Instructions
1. Clone this repository:
   ```bash
   git clone <repository-url>
   ```
2. Start the XAMPP server and ensure Apache and MySQL are running.
3. Import the database:
   - Open phpMyAdmin.
   - Create a new database (e.g., `blood_bank`).
   - Import the provided SQL file (`blood_bank.sql`) into the database.
4. Place the project files in the `htdocs` folder inside your XAMPP directory.
5. Open the project in your browser:
   ```
   http://localhost/blood_bank
   ```

## Database Schema
- **Doctor**: Stores information about doctors examining volunteers.
- **Volunteer**: Tracks volunteers donating blood.
- **Donated_Blood**: Details of blood units donated.
- **Recipient**: Information about recipients requiring blood.
- **Admin**: Admin details to manage the system.
- **Hospital**: Partner hospitals' data.
- **Blood Bank**: Blood storage and management details.

## Usage
1. Navigate to the homepage of the application.
2. Use the admin dashboard for management and oversight.
3. Track donations, recipients, and storage status.
4. Generate reports and analytics for blood bank operations.

## Future Scope
- Integrating real-time notification systems for donors and recipients.
- Adding mobile app compatibility for ease of access.
- Implementing advanced data analytics for optimizing operations.

## Contributors
- **Abhishek** (_Project Owner_)
- **Shubham**  (_Project Owner_)


For any issues or contributions, please feel free to open a pull request or contact the project owner.
