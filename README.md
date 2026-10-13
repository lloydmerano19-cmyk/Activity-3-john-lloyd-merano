# rmc_friday

## Setup

Install dependencies with `npm install`, then set `SESSION_SECRET` to a strong,
unique random value before starting the app. The app intentionally fails to start
if this variable is missing.

The database connection is configured in `models/db.js` and expects a local
MySQL database named `rmc_friday`.

Start the app with `npm start`. Run the test suite with `npm test`.
