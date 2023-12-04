# Photolabs

PhotoLabs is a React-based single-page application (SPA) that allows users to view photos in different contexts.

## Final Product

!["Screenshot of Topics_page"](https://github.com/EkaterinaEg/pholabs-starter/blob/main/docs/Photolabs_likes.png)
!["Screenshot of Modal"](https://github.com/EkaterinaEg/pholabs-starter/blob/main/docs/Photolabs_modal.png)
!["Screenshot of Likes"](https://github.com/EkaterinaEg/pholabs-starter/blob/main/docs/Photolabs_likes.png)

## Functional Requirements

- The client-side consists of the development of a React single page application (SPA) called PhotoLabs
- The server and persistence layer given as follows:
  - The data layer consists of PostgreSQL database
  - The API server consists of a Node Express.js server application
  - The server/persistence layer may require modifications for stretch goals
- The client will communicate with the API over HTTP using the JSON format

## Functional Requirements

- A user can view photos from the homepage loaded from the API.
- The user can navigate to different photo categories, also called topics.
- The user can click on a photo to view a larger version of the photo and relevant / similar photos.
- The user can like a photo from anywhere within the application where the photo is displayed.
- The user can view a heart icon with a notification in the navigation if there are liked photos.
- The navigation will consist of different topics and heart icon.
- The client-side application will make API requests to load and persist data (i.e. relevant data is not lost after a session restarts, so after a browser refresh).

## Setup

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

## [Backend] Running Backend Servier

Read `backend/readme` for further setup details.

```sh
cd backend
npm start
```
