# React Photolabs

PhotoLabs is a React-based single-page application (SPA) that allows users to view photos in different contexts.

## Screenshots

!["Photo list"](https://github.com/suefrontend/photolabs/blob/main/docs/photolab-01.png)

!["Modal window"](https://github.com/suefrontend/photolabs/blob/main/docs/photolab-02.png)

## Setup

Install dependencies with `npm install` in each respective `/frontend` and `/backend`.

## [Frontend] Running Webpack Development Server

```sh
cd frontend
npm start
```

## [Backend] Running Backend Servier

```sh
cd backend
npm start
```

## Database setup for backend

1. Create a database with the command `CREATE DATABASE photolabs_development;`.

2. Copy the `.env.example` file to `.env.development` and fill in the necessary PostgreSQL configuration.

3. Run a the development server with `npm start`

4. Use the browser to navigate to `http://localhost:8001/api/debug/reset`

5. Run The Server

```
npm start
```

The `development` data is random. Each time we seed we expect to see different appointments.

## Dependencies

Built with the following dependencies:

- React
- Express
- Sass
- axios
