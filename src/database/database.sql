CREATE DATABASE api;

CREATE TABLE usuarios(
    id SERIAL PRIMARY KEY,
    name VARCHAR(60),
    email TEXT
);

INSERT INTO usuarios(name,email) VALUES
('jose','jose@mail.com'),
('david','david@mail.com');