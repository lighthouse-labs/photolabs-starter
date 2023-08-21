# Photolabs

PhotoLabs is a single-page app created using React. 

Users can sort photos by topic, favourite photos, and click on photos to open a modal window with a larger view of the clicked photo and a grid of similar photos.

## Finished Product

#### Photolabs has a clean, single-page design where users can find and like their favourite photos.
!["Photolabs Main Page"](https://github.com/JacquelineMG/photolabs/blob/main/docs/photolabs_main_view_with_likes.jpg)

#### Users can easily sort by topic.
!["Photolabs Animal Topic View"](https://github.com/JacquelineMG/photolabs/blob/main/docs/photolabs_topic_view.jpg)

#### A modal window offers users a closer look at photos and suggests other similar photos.
!["Photolabs Modal View Showing Clicked Photo"](https://github.com/JacquelineMG/photolabs/blob/main/docs/photolabs_modal_view.jpg)

!["Photolabs Modal View Showing Similar Photos"](https://github.com/JacquelineMG/photolabs/blob/main/docs/photolabs_modal_view_similar_photos.jpg)


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

## Dependencies

### Frontend 
- "@testing-library/jest-dom": "^5.16.5",
- "@testing-library/react": "^13.4.0",
- "@testing-library/user-event": "^13.5.0",
- "axios": "^1.4.0",
- "react": "^18.2.0",
- "react-dom": "^18.2.0",
- "react-scripts": "5.0.1",
- "web-vitals": "^2.1.4"

### Backend
- "body-parser": "^1.18.3",
- "cors": "^2.8.5",
- "dotenv": "^7.0.0",
- "express": "^4.16.4",
- "helmet": "^3.18.0",
- "pg": "^8.5.0",
- "socket.io": "^2.2.0",
- "ws": "^7.0.0"


