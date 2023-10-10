# Photolabs API

## Setup

Install dependencies with `npm install`.

## Creating The DB

Use the `psql` command to login to the PostgreSQL server with your `username` and `password`.

Create a database with the command `CREATE DATABASE photolabs_development;`.

Copy the `.env.example` file to a new file, `.env.development` in the `backend/` directory and fill in the necessary PostgreSQL configuration. The `node-postgres` library will use these environment variables by default.

```
PGHOST=localhost
PGUSER=username
PGDATABASE=photolabs_development
PGPASSWORD=password
PGPORT=5432
```

Add `"proxy": "http://localhost:8001"` into the backend/ directories package.json if it not already there.

## Run The Server
```sh
npm start
```
