# react-photolabs
The PhotoLabs project for the Web Development React course programming.

# Photolabs
You can do the following in the PhotoLabs project:
- View photos from the API server that consists of a Node Express.js server application. 
- Click on any of the topics in the navigation bar to view photos related to those topics. 
- Click on the PhotoLabs logo to return to viewing all photos. 
- Click on any photo to view a larger version of it and see other relevant photo thumbnails listed below. 
- Like any photo by clicking the heart icon from anywhere in the application. 
- A notification will appear on the heart icon in the navigation bar if any photos are liked.

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
## Screenshots
!["View of the homepage that loads photos from the API."](https://github.com/xangelaz/photolabs-starter/blob/main/docs/photolabs_homepage.png?raw=true)
!["View of all animal related photos after selecting the Animals topic in the navigation bar. Notification appears on the heart icon in the nav bar once a photo is liked from anywhere in the application."](https://github.com/xangelaz/photolabs-starter/blob/main/docs/photolabs_like.png?raw=true)
!["Modal view of an image once the user clicks on its thumbnail."](https://github.com/xangelaz/photolabs-starter/blob/main/docs/photolabs_modal_view.png?raw=true)