# 🚆 RailGo — Train Booking Platform

RailGo is a modern, responsive **train booking frontend application** built using **React.js and Vite**.

The application provides a realistic train-booking experience where users can search for trains, compare fares and seat availability, select passengers and classes, complete a simulated payment process, receive a booking confirmation with a PNR, and manage their bookings.

## 🌐 Project Overview

RailGo is designed as a capstone project to demonstrate practical frontend development skills through a production-style train booking platform.

The project focuses on:

* Modern and responsive UI design
* React component-based architecture
* Train search and filtering
* Booking workflow
* Passenger management
* Simulated payment processing
* Booking confirmation
* Local storage data persistence
* Dark/light theme support
* Mobile-responsive design

## ✨ Features

### 🔎 Train Search

* Search trains by source and destination
* Select journey date
* Select number of travelers
* Choose travel class
* Swap source and destination
* Indian city/location suggestions

### 🚆 Train Results

* Display available trains
* Departure and arrival times
* Journey duration
* Train name and number
* Seat availability
* Fare comparison across classes
* Sort trains by departure time or lowest fare
* Responsive train cards

### 🎫 Booking

* Select travel class
* Enter passenger information
* Review journey details
* Calculate total fare
* Continue through the booking process

### 💳 Payment

The application includes a simulated payment interface supporting:

* UPI
* Credit/Debit Card
* Net Banking

> Payment processing is simulated for demonstration purposes. No real payment gateway or banking information is connected.

### ✅ Booking Confirmation

After completing the demo payment:

* A booking confirmation is displayed
* A unique PNR is generated
* Journey information is shown
* Passenger and class details are displayed
* Total fare is calculated

### 📋 My Bookings

* View previously created bookings
* Booking information is stored using browser `localStorage`
* View PNR, train, journey, passenger and fare details

### 🔐 Login Demo

* Frontend login/authentication demonstration
* Designed for UI/UX demonstration rather than production authentication

### 🌙 Dark / Light Mode

* Supports dark and light themes
* Theme preference is stored using `localStorage`

### 📊 Analytics Dashboard

* Dashboard-style interface
* Reusable metric and chart components
* Displays booking-related statistics

### 📱 Responsive Design

The application is designed to work across:

* Desktop
* Laptop
* Tablet
* Mobile devices

## 🛠️ Technologies Used

| Technology   | Purpose                       |
| ------------ | ----------------------------- |
| React.js     | Frontend UI development       |
| Vite         | Development and build tool    |
| JavaScript   | Application logic             |
| HTML5        | Page structure                |
| CSS3         | Styling and responsive design |
| Lucide React | UI icons                      |
| LocalStorage | Client-side data persistence  |

## 📁 Project Structure

```text
railgo-train-booking/
│
├── .gitignore
├── README.md
├── package.json
├── package-lock.json
├── index.html
│
└── src/
    │
    ├── components/
    │   └── Reusable React UI components
    │
    ├── context/
    │   └── Application state and local storage utilities
    │
    ├── data/
    │   ├── locations.js
    │   └── trains.js
    │
    ├── pages/
    │   └── Application page components
    │
    ├── services/
    │   └── trainApi.js
    │
    ├── main.jsx
    └── styles.css
```

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Open the project directory

```bash
cd railgo-train-booking
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Vite will provide a local development URL, normally:

```text
http://localhost:5173
```

### 5. Create a production build

```bash
npm run build
```

### 6. Preview the production build

```bash
npm run preview
```

## 📊 Application Flow

```text
Home
  ↓
Search Trains
  ↓
View Train Results
  ↓
Select Train & Class
  ↓
Passenger Details
  ↓
Payment
  ↓
Booking Confirmation
  ↓
My Bookings
```

## 🧪 Data and API

The current project uses **mock train data** stored inside the application.

The train service layer is separated into:

```text
src/services/trainApi.js
```

This structure makes the application ready for integration with a real train-booking API in the future.

## 🔒 Important Note

This project is a **frontend capstone/demo application**.

It does not connect to:

* Real railway booking systems
* Real payment gateways
* Real banking services
* Production authentication systems

Payment and booking functionality are simulated for educational and demonstration purposes.

## 🚀 Future Improvements

Possible future enhancements include:

* Real train API integration
* Backend development with Node.js/Express
* Database integration
* Real user authentication
* Real payment gateway integration
* Email/SMS booking notifications
* Seat selection
* Cancellation and refund functionality
* Advanced booking filters
* Admin dashboard
* Cloud deployment

## 🎯 Learning Outcomes

This project demonstrates practical experience in:

* React.js development
* Component-based architecture
* State management
* Responsive web design
* Form handling
* Client-side data persistence
* API-ready application architecture
* UI/UX implementation
* Frontend project organization
* Modern JavaScript development

## 📌 Project Information

**Project:** RailGo — Train Booking Platform
**Project Type:** Web Development Internship Capstone Project
**Frontend:** React.js
**Build Tool:** Vite
**Status:** Frontend Demo / Capstone Project

## 📄 License

This project was created for educational and portfolio purposes.

## 👨‍💻 Author

**M. Venkata Naga Sai**
**IV Year — Computer Science and Engineering**
**Project Type:** frontend Development Internship Capstone Project

