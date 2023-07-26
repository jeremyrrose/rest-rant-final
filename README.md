# Project REST-Rant

REST-Rant is an app where users can review restaurants.

## Setup

You'll need all those node modules, right?

```bash
npm install
```

Create a `.env` file and add:

```bash
MONGO_URI=mongodb://127.0.0.1:27017/places
PORT=3000
```

If you'd like to seed the database, run:

```bash
node seed
```

To start the server:

```bash
nodemon
```
