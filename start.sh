#!/bin/bash

# Start the docker container
docker-compose up -d

# Import the database
sqlcmd -S 127.0.0.1 -U sa -P Strider2023 < ./db/strider_general_store.sql
