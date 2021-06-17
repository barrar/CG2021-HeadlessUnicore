This project uses Docker to run Umbraco 9 and MS SQL on Windows, Mac or Linux.    
The Backend and Website source code is from https://github.com/benjaminc/CG2021-HeadlessUnicore    
The `CG2021-HeadlessUnicore` project is a headless instance of Umbraco 9 paired with GraphQL and a Gridsome static site generator.    

## Running the project
1. Run `docker-compose up` in the root directory.     
    The `umbraco` container will take 2-5 minutes to start, you can view the log for details.    
2. Run `npm install` from the Website directory    
3. Run `npx gridsome develop` from the Website directory    

`http://localhost:8080/` - Access the static site    
`http://localhost:8001/umbraco` - Access the Umbraco Backoffice    
`http://localhost:8001/umbraco/graphql` - Access the GraphQL Playground    
MSSQL can be accessed at `localhost,8002` with username `sa` and password `Password123`    

### Umbraco Backoffice login
`contact@proworks.com`  
`Password123!`

## Systems and services
When `docker-compose up` runs, the compose file starts up two machines and executes a few commands

### Container: umbraco-db
This is a docker container running MSSQL 2019 on Ubuntu 20.04  
Port 8002 on your local machine will be forwarded to port 1433 on the docker container    
The `.env` file sets the password, accepts the EULA and sets the MSSQL version to `Express`    
You can uncomment both of the `volumes` sections in `docker-compose.yml` to preserve the database

### Container: umbraco
This container uses the official .NET SDK 5.0 docker image on Ubuntu 20.04    
The following files/folders are mounted in the container:
```
Backend/
umbraco-mssql-init.sh
CG2021.bacpac
```
#### Startup process
1. The Umbraco 9 beta source is added to nuget    
2. `dotnet build` runs
3. sqlpackage is installed
4. sqlpackage imports the bacpac file and will wait for the database to start
5. `dotnet run` is used to start Umbraco

## Notes
Visual Studio Code with the Docker extension makes development a little easier if you want to make changes.    
The extension allows to to easily manage containers, view logs and attach shells with a GUI.

Azure Data Studio allows you to manage the database on Windows, Mac or Linux.

`sqlpackage` was the only option I found for importing `.bacpac` files on Linux, it is installed in the Umbraco docker container to demonstrate a remote database import
https://docs.microsoft.com/en-us/sql/tools/sqlpackage/sqlpackage-import

The following variables are set in the `.env` file:
```
SA_PASSWORD=Password123
ACCEPT_EULA=Y
MSSQL_PID=Express
```
