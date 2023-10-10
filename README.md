# PhotoLabs: A React-based Photo Viewing Application
Welcome to PhotoLabs! This application is constructed using React and is a great demonstration of a single-page application (SPA) in action.

## Overview
PhotoLabs allows users to:

* View photos fetched from an API.
* Navigate through photos from various topics.
* Get a closer look at any photo and explore similar ones.
* Like their favorite photos.
* Get notified of the photos they've liked.

## Demo
### Navigate Different Topics
![Navigate Different Topics](https://github.com/B-Rob97/photolabs-starter/blob/main/frontend/assets/gifs/PhotoLabs-TopicNavigation.gif?raw=true)
### Modal
![Modal](https://github.com/B-Rob97/photolabs-starter/blob/main/frontend/assets/gifs/PhotoLabs-Modal.gif?raw=true)
### Like Photos
![Like Photos](https://github.com/B-Rob97/photolabs-starter/blob/main/frontend/assets/gifs/PhotoLabs-Likes.gif?raw=true)


## Getting Started
1. Clone this repository onto your local device.
2. Install dependencies with `npm install` in each respective `/frontend` and `/backend` directory.
3. Follow directions in `/backend` directory README before continuing.
4. Run the following commands to start the frontend server 
```sh
cd frontend
npm start
```

## Dependencies

### Frontend
* @testing-library/jest-dom: Provides custom jest matchers to test the state of the DOM.
Version: ^5.16.5
* @testing-library/react: Lightweight solution for testing React components.
Version: ^13.4.0
* @testing-library/user-event: Simulate user events for testing purposes.
Version: ^13.5.0
* react: JavaScript library for building user interfaces.
Version: ^18.2.0
* react-dom: Serves as the entry point to the DOM and server renderers for React.
Version: ^18.2.0
* react-router-dom: DOM bindings for React Router, aiding in navigation.
Version: ^6.16.0
* react-scripts: Scripts and configuration used by Create React App.
Version: 5.0.1
* web-vitals: Helps to measure and report on web vitals for performance enhancement.
Version: ^2.1.4

### Backend
* body-parser: Middleware to parse incoming request bodies in a middleware before the handlers.
Version: ^1.18.3
* cors: Middleware that can be used to enable CORS with various options.
Version: ^2.8.5
* dotenv: Zero-dependency module that loads environment variables from a .env file into process.env.
Version: ^7.0.0
* express: Fast, unopinionated, minimalist web framework for Node.js.
Version: ^4.16.4
* helmet: Helps secure Express apps with various HTTP headers.
Version: ^3.18.0
* pg: Non-blocking PostgreSQL client for Node.js.
Version: ^8.5.0
* socket.io: Enables real-time bidirectional event-based communication.
Version: ^2.2.0
* ws: Simple WebSocket library for Node.js.
Version: ^7.0.0