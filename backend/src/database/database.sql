-- TYPES --

CREATE TYPE role_type AS ENUM ('Admin', 'User');

CREATE TYPE color_type AS ENUM ('Qora','Oq','Ko‘k','Havorang','To‘q Ko‘k','Och Ko‘k','Yashil','To‘q Yashil','Och Yashil','Qizil','To‘q Qizil','Bordo','Och Qizil','Pushti','Och Pushti','Sariq','Och Sariq','To‘q Sariq','Olovrang','Kulrang','Och Kulrang','To‘q Kulrang','Jigarrang','Och Jigarrang','Qahvarang','Bej','Ko‘kimtir','Yashilimtir','Zangori','Oltinrang','Kumushrang','Qoramtir','Moviy','Namatak Rang','Shokoladrang','Terak Bargi Rang','G‘isht Rang','Qum Rang','Ko‘mir Rang','Oyster Rang','Vino Rang','Lavlagi Rang','Yashil Olma Rang','Limon Rang','Neon Yashil','Neon Pushti','Tilla Rang','Kofe Rang');

CREATE TYPE size_type AS ENUM ('S', '46', 'M', '48', 'L', '50', 'XL', '52', '2XL', '54', '3XL', '56', '4XL', '58', 'Standart', 'Freesize');


-- TABLES --

CREATE TABLE categories (
    id SERIAL NOT NULL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    active BOOLEAN DEFAULT false,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE products (
    id SERIAL NOT NULL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description VARCHAR(255),
    price INT DEFAULT NULL,
    categoryId INT NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
    discount INT DEFAULT 0,
    active BOOLEAN DEFAULT false,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE product_items (
    id SERIAL NOT NULL PRIMARY KEY,
    productId INT NOT NULL REFERENCES products(id) ON DELETE CASCADE,
    color color_type NOT NULL,
    size size_type NOT NULL,
    amount INT DEFAULT 0,
    active BOOLEAN DEFAULT false,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE images (
    id SERIAL NOT NULL PRIMARY KEY,
    fileName VARCHAR(255) NOT NULL,
    publicUrl VARCHAR(255) NOT NULL,
    productItemId INT NOT NULL REFERENCES product_items(id) ON DELETE CASCADE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE users (
    id SERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    username VARCHAR(255) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    role role_type NOT NULL,
    phone VARCHAR(255) DEFAULT NULL,
    email VARCHAR(255) DEFAULT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);