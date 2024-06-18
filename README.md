# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Track Tonic Fitness App

Welcome to Track Tonic, your ultimate fitness tracking platform! Our app is designed to empower individuals to lead healthier, more active lifestyles. Combining cutting-edge technology with a passion for fitness, Track Tonic offers an immersive experience for users to track fitness progress, set goals, and engage with a vibrant community.

You can access the live version of the Track Tonic Fitness App [here](https://tracktonicfitnesstraining.web.app/).

## Admin Credentials

- **Email:** michael.johnson@example.com
- **Password:** Aa@123456

## Table of Contents

- [Introduction](#introduction)
- [Key Features](#key-features)
- [Folder Structure](#folder-structure)
- [Setup Instructions](#setup-instructions)
- [Technology Stack](#technology-stack)
- [Dependencies](#dependencies)
- [Contribution Guidelines](#contribution-guidelines)
- [Contact Information](#contact-information)
- [Contributing](#contributing)
- [License](#license)

## Introduction

Track Tonic is a comprehensive fitness tracker platform that provides users with tools to monitor their fitness journey, engage with a community, and access expert guidance from trainers. With an intuitive interface and robust feature set, Track Tonic aims to revolutionize the way people approach fitness and wellness.

## Key Features

- **User Registration & Login:**

  - Secure email/password registration and login.
  - Social login options available.
  - Role-based authentication (Admin, Trainer, Member).

- **Responsive Design:**

  - Fully responsive interface for mobile, tablet, and desktop.

- **User Dashboard:**

  - Personalized dashboard displaying user-specific information and activities.
  - Conditional rendering based on user roles.

- **Class Management:**

  - View and manage all fitness classes.
  - Display of top booked classes based on booking counts.

- **Trainer Profiles:**

  - Comprehensive trainer profiles with expertise, experience, and available slots.
  - Trainer application and approval system.

- **Booking System:**

  - Users can book sessions with trainers.
  - Multiple membership packages with different benefits.

- **Community Forums:**

  - Interactive forum for community engagement.
  - Voting system for posts (upvote/downvote).

- **Notifications:**

  - Real-time notifications for all CRUD operations and authentication actions.
  - Implementation of toast notifications for better user experience.

- **Data Fetching:**

  - Efficient data fetching using Tanstack Query for all GET requests.

- **Admin Features:**
  - Manage trainers, classes, and subscriptions.
  - View financial activities and generate reports.

## Folder Structure

```plaintext
Track-Tonic-Client/
├── .firebase/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   └── main.jsx
├── .eslintrc.cjs
├── .firebaserc
├── .gitignore
├── README.md
├── firebase.json
├── package-lock.json
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## Setup Instructions

1. Clone the repository.

```
git clone https://github.com/NabilaFerdousPrapty/Track-Tonic-Client.git
cd Track-Tonic-Client
```

2. Install dependencies using
 `npm install`.
3. Set up environment variables for Firebase and MongoDB credentials.
4. Run the development server using 
```
npm run dev
```
5. Open your browser:
Navigate to http://localhost:5173

## Technology Stack

- **Frontend:** React.js, Tailwind CSS, React Helmet, Tanstack Query
- **Backend:** Node.js, Express.js, MongoDB
- **Authentication:** Firebase Authentication
- **Deployment:** Firebase

## Dependencies

- React
- React Router
- Tailwind CSS
- Firebase
- Tanstack Query
- React Helmet
- Node.js
- Express.js
- MongoDB

## Contribution Guidelines

1. Follow the commit message guidelines.
2. Ensure all new features are tested.
3. Keep the codebase clean and well-documented.
4. Submit pull requests for review before merging.

## Contact Information

For any queries or support, feel free to reach out:

- **Email:** nabilaferdousprapty@gmail.com
- **Address:** Rajshahi ,Bangladesh
## Contributing
We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch (git checkout -b feature-branch).
3. Make your changes and commit them (git commit -m 'Add new feature').
4. Push to the branch (git push origin feature-branch).
5. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.

---

Thank you for choosing Track Tonic to assist you on your fitness journey. Together, let's achieve greatness and lead healthier lives!
