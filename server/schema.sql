DROP DATABASE if exists chat;
CREATE DATABASE chat;

USE chat;
create table users (
  -- ID int(5) not null auto_increment,
  name char(20),
  primary key (name)
);

-- create table rooms (
--   id int(5) not null auto_increment,
--   name char(20),
--   primary key (id)
-- );

CREATE TABLE messages (
  /* Describe your table here.*/
  id int(5) not null auto_increment,
  username char(20),
  text varchar(255),
  room char(20),
  primary key (id)
  -- foreign key (username) references users(name)
  -- foreign key (room_id) references rooms(id)
);



/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

