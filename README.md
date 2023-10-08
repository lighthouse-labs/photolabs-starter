# PhotoLabs



PhotoLabs is a React-based single-page client-side application that allows users to explore and interact with a collection of photos in different categories. Users can view, like, and discover related photos, making it an engaging platform for photography enthusiasts.

## Table of Contents

- [Features](#features)
- [Technical Specifications](#technical-specifications)
- [Setup](#setup)
  - [Frontend](#frontend)
  - [Backend](#backend)
- [Project Structure](#project-structure)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

## Features

- Browse a variety of photos from the homepage, loaded from a PostgreSQL database.
- Navigate to different photo topics, such as Nature, Travel, Food, and more.
- Click on a photo to view a larger version along with relevant and similar photos.
- Like a photo from anywhere within the application, and see a heart icon with a notification in the navigation bar.
- Persist liked photos across sessions, ensuring data is not lost after a browser refresh.

## Technical Specifications

PhotoLabs is built using the following technologies:

- Frontend:
  - React.js
  - Create React App (CRA)

- Backend:
  - Node.js
  - Express.js
  - PostgreSQL (as the database)

## Setup

To run PhotoLabs locally, follow these setup instructions:

### Frontend

1. Navigate to the `frontend` directory:

```sh
   cd frontend
```
2. Install dependencies:
```sh
npm install
```
3. Start the Webpack Development Server:
npm start

### Backend
1. Navigate to the backend directory:
```sh
cd backend
```
2- Install required packages (if not already installed):

npm install morgan
npm install uniqid

3- npm start

npm start

##  Project Structure

The project's directory structure is as follows:

backend/: Contains the server and API-related code.
frontend/: Contains the client-side React application.
For more details about the project's structure and how it works, refer to the README.md files within the backend and frontend directories.

## Screenshots

PhotoLabs Home Page
PhotoLabs Modal View

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests to help improve PhotoLabs. For major changes, please discuss them in the issues section before submitting a pull request.