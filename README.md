# react-photolabs
The PhotoLabs project for the Web Development React course programming.

# Photolabs

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

## Goal

Build a client-side application using the React view-layer library.

## Functional Requirements

The client-side consists of the development of a React single page application (SPA) called PhotoLabs
The server and persistence layer given as follows:
The data layer consists of PostgreSQL database
The API server consists of a Node Express.js server application
The server/persistence layer may require modifications for stretch goals
The client will communicate with the API over HTTP using the JSON format

## Behavioural Requirements

A user can view photos from the homepage loaded from the API.
The user can navigate to different photo categories, also called topics.
The user can click on a photo to view a larger version of the photo and relevant / similar photos.
The user can like a photo from anywhere within the application where the photo is displayed.
The user can view a heart icon with a notification in the navigation if there are liked photos.
The navigation will consist of different topics and heart icon.
The client-side application will make API requests to load and persist data (i.e. relevant data is not lost after a session restarts, so after a browser refresh).

## Technical Specifications with API References

React
Create React App
Webpack
Babel
Express

Note that two different servers will be running during development:

Client-side Webpack development server and
API server to provide photo data

## screenshots

!["HomeRoute"](https://github.com/ironmaiden59/photolabs-starter/blob/main/docs/HomeRoute.png)
!["Enlarged_Modal"](https://github.com/ironmaiden59/photolabs-starter/blob/main/docs/Enlarged_modal.png)
