# React App Coding Assignment

## Running the app
1. Run `npm install` to install code dependencies.
2. Start the api by running `npm run api`.
3. Start the app in a separate terminal by running `npm start`. It should open a browser window at http://localhost:3000.

## Provision SQL Server
1. Run `./start.sh` to provision the docker container and import the data from /db/strider_general_store.sql into the database. You may get an error aobut the Client being unable to establish a connection due to a prelogin failure, but if you run `./start.sh` again, it should fix the issue.
2. Using a database tool or from the command line run the query scripts in /db/reports.sql against the provisioned database running at localhost (127.0.0.1). If running from the command line, connect using `sqlcmd -S 127.0.0.1 -U sa -P Strider2023`, and running `use strider_general_store` to select the database.
