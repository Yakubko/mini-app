CREATE TABLE system_user(
   id serial PRIMARY KEY,
   username VARCHAR (50) UNIQUE NOT NULL,

   full_name VARCHAR (50) NOT NULL,
   password text NOT NULL
);
