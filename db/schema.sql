DROP  DATABASE goodNight;
CREATE DATABASE goodNight;

Use goodNight;

CREATE TABLE roles (
    role_id INT AUTO_INCREMENT NOT NULL,
    role VARCHAR(255) NOT NULL,
    PRIMARY KEY (role_id)
);


CREATE TABLE users(
    id INT AUTO_INCREMENT NOT NULL,
    userName VARCHAR(255) NOT NULL,
    phone VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role_id INT,
    FOREIGN KEY (role_id) REFERENCES roles(role_id),
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
);
CREATE TABLE city(
 id INT AUTO_INCREMENT NOT NULL,
 name VARCHAR(255) NOT NULL,
 image VARCHAR(255) NOT NULL,
 description VARCHAR(255) NOT NULL,
 is_deleted TINYINT DEFAULT 0,
PRIMARY KEY (id)
);


CREATE TABLE hotels(
id INT AUTO_INCREMENT NOT NULL,
hotelName VARCHAR(255) NOT NULL,
image VARCHAR(255) NOT NULL,
image2 VARCHAR(255) NOT NULL,
image3 VARCHAR(255) NOT NULL,
image4 VARCHAR(255) NOT NULL,
image5 VARCHAR(255) NOT NULL,
guests INT(7) NOT NULL,
bedrooms INT(7) NOT NULL,
beds INT(7) NOT NULL,
bathrooms INT(7) NOT NULL,
description  VARCHAR(255) NOT NULL,
price INT(7) NOT NULL,
city_id INT,
FOREIGN KEY(city_id) REFERENCES city(id),
is_deleted TINYINT DEFAULT 0,
PRIMARY KEY (id)
);

CREATE TABLE wishList(
id INT AUTO_INCREMENT NOT NULL,
user_id INT,
FOREIGN KEY (user_id) REFERENCES users(id),
hotels_id INT,
FOREIGN KEY (hotels_id) REFERENCES hotels(id),
is_deleted TINYINT DEFAULT 0,
PRIMARY KEY (id)
);

CREATE TABLE comments(
    id INT AUTO_INCREMENT NOT NULL,
    comment VARCHAR(255),
    commenter VARCHAR(255),
    hotels_id INT,
FOREIGN KEY (hotels_id) REFERENCES hotels(id),
    commenter_id INT,
    FOREIGN KEY (commenter_id) REFERENCES users(id),
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
);

CREATE TABLE ratings(
    id INT AUTO_INCREMENT NOT NULL,
    rating DECIMAL(2,1),
    hotels_id INT,
FOREIGN KEY (hotels_id) REFERENCES hotels(id),
    user_id INT,
    FOREIGN KEY (user_id) REFERENCES users(id),
    is_deleted TINYINT DEFAULT 0,
    PRIMARY KEY (id)
);

insert into roles(role) values('admin'),('user');

INSERT INTO city (name,image,description) VALUES ('Amman','https://touristjourney.com/wp-content/uploads/2020/07/Where-to-Stay-in-Amman0-scaled.jpg','The capital of Jordan, is a modern city with numerous ancient ruins');
INSERT INTO city (name,image,description) VALUES ('Aqaba','https://assets.hyatt.com/content/dam/hyatt/hyattdam/images/2018/11/29/1013/Hyatt-Regency-Aqaba-P043-Exterior-Aerial-Hero.jpg/Hyatt-Regency-Aqaba-P043-Exterior-Aerial-Hero.16x9.jpg?imwidth=1920',"Aqaba is a Jordanian port city on the Red Sea's Gulf of Aqaba");

INSERT INTO city (name,image,description) VALUES ('Wadi Musa','https://stepintojordan.com/wp-content/uploads/2019/09/Wadi-Musa-Restaurants-Petra-Jordan.jpg'," A town located in the Ma'an Governorate in southern Jordan.");
INSERT INTO city (name,image,description) VALUES ('Madaba','https://media.tacdn.com/media/attractions-splice-spp-674x446/09/76/3e/69.jpg
',' An ancient town in Jordan, southwest of the capital Amman');


/*Amman*/
INSERT INTO hotels (hotelName,image,image2,image3,image4,image5,guests,bedrooms,beds,bathrooms,description,price,city_id) VALUES("Private Room","https://hyra.cron24.com/images/rooms/10001/room_01605165005.jpg","https://hyra.cron24.com/images/rooms/10006/room_01606547084.jpg","https://hyra.cron24.com/images/rooms/10006/room_11606547085.jpg","https://hyra.cron24.com/images/rooms/10006/room_01606547079.jpg","https://hyra.cron24.com/images/rooms/10006/room_01606547084.jpg","5","4","8","3","Located in the heart of Sydney with fantastic city views, the room is excellent for single/couple who want to take the flight (Available for long term rent)","25","1");

INSERT INTO hotels (hotelName,image,image2,image3,image4,image5,guests,bedrooms,beds,bathrooms,description,price,city_id) VALUES("By Cory","https://hyra.cron24.com/images/rooms/10012/room_01606552084.jpg","https://hyra.cron24.com/images/rooms/10012/room_11606552084.jpg","https://hyra.cron24.com/images/rooms/10012/room_21606552084.jpg","https://hyra.cron24.com/images/rooms/10012/room_31606552084.jpg","https://hyra.cron24.com/images/rooms/10006/room_01606547084.jpg","10","1","4","3","This is a Master Bedroom (w/ ensuite bath) in a 1700sqft 4-bed, 4-bath, light-filled flat, featuring a huge shared deck. Remodeled in 2014.","20","1");

INSERT INTO hotels (hotelName,image,image2,image3,image4,image5,guests,bedrooms,beds,bathrooms,description,price,city_id) VALUES("Tiny Living","https://hyra.cron24.com/images/rooms/10002/room_41605168284.jpg","https://hyra.cron24.com/images/rooms/10002/room_31605168284.jpg","https://hyra.cron24.com/images/rooms/10002/room_11605168284.jpg","hhttps://hyra.cron24.com/images/rooms/10002/room_21605168284.jpg","https://hyra.cron24.com/images/rooms/10002/room_01605168284.jpg","5","1","2","2","Great tiny private space for someone who wants to 'live simple' in Venice Beach! A single 'studio' room.","15","1");

INSERT INTO hotels (hotelName,image,image2,image3,image4,image5,guests,bedrooms,beds,bathrooms,description,price,city_id) VALUES("Cozy Place","https://hyra.cron24.com/images/rooms/10014/room_21606553668.jpg","https://hyra.cron24.com/images/rooms/10014/room_01606553668.jpg","https://hyra.cron24.com/images/rooms/10014/room_11606553668.jpg","hhttps://hyra.cron24.com/images/rooms/10002/room_21605168284.jpg","https://hyra.cron24.com/images/rooms/10014/room_31606553668.jpg","7","2","3","2","Cozy crashpad near public transportation such as bus 29, 28, and the light rail N-Judah, making commute super easy","25","1");

/*Aqaba*/

INSERT INTO hotels (hotelName,image,image2,image3,image4,image5,guests,bedrooms,beds,bathrooms,description,price,city_id) VALUES("Luxurious","https://hyra.cron24.com/images/rooms/10005/room_41605172107.jpg","https://hyra.cron24.com/images/rooms/10005/room_21605172107.jpg","https://hyra.cron24.com/images/rooms/10005/room_11605172107.jpg","https://hyra.cron24.com/images/rooms/10005/room_01605172107.jpg","https://hyra.cron24.com/images/rooms/10005/room_31605172107.jpg","16","2","4","3","Enjoy this modern home in the heart of Los Angeles only a fifteen minute drive from famous Beverly Hills .","50","2");

INSERT INTO hotels (hotelName,image,image2,image3,image4,image5,guests,bedrooms,beds,bathrooms,description,price,city_id) VALUES("Light Moon","https://hyra.cron24.com/images/rooms/10013/room_21606552238.jpg","https://hyra.cron24.com/images/rooms/10013/room_31606552238.jpg","https://hyra.cron24.com/images/rooms/10013/room_01606552238.jpg","https://hyra.cron24.com/images/rooms/10005/room_01605172107.jpg","https://hyra.cron24.com/images/rooms/10013/room_11606552238.jpg","16","3","10","3","You'll love this listing! This is a cozy private room w/ queen memory foam bed, full futon couch/bed, desk, personal massage chair.","45","2");

INSERT INTO hotels (hotelName,image,image2,image3,image4,image5,guests,bedrooms,beds,bathrooms,description,price,city_id) VALUES("Master","https://hyra.cron24.com/images/rooms/10012/room_01606552084.jpg","https://hyra.cron24.com/images/rooms/10012/room_11606552084.jpg","https://hyra.cron24.com/images/rooms/10012/room_21606552084.jpg","https://hyra.cron24.com/images/rooms/10012/room_31606552084.jpg","https://hyra.cron24.com/images/rooms/10013/room_11606552238.jpg","10","3","6","2","You'll love this listing! This is a cozy private room w/ queen memory foam bed, full futon couch/bed, desk, personal massage chair.","35","2");

INSERT INTO hotels (hotelName,image,image2,image3,image4,image5,guests,bedrooms,beds,bathrooms,description,price,city_id) VALUES("Red rose","https://hyra.cron24.com/images/rooms/10006/room_01606547079.jpg","https://hyra.cron24.com/images/rooms/10006/room_01606547084.jpg","https://hyra.cron24.com/images/rooms/10006/room_11606547085.jpg","https://hyra.cron24.com/images/rooms/10006/room_21606547085.jpg","https://hyra.cron24.com/images/rooms/10013/room_11606552238.jpg","16","3","8","2","You'll love this listing! This is a cozy private room w/ queen memory foam bed, full futon couch/bed, desk, personal massage chair.","50","2");

/*Wadi Musa*/

INSERT INTO hotels (hotelName,image,image2,image3,image4,image5,guests,bedrooms,beds,bathrooms,description,price,city_id) VALUES("Spacious","https://hyra.cron24.com/images/rooms/10015/room_21606553881.jpg","https://hyra.cron24.com/images/rooms/10015/room_31606553881.jpg","https://hyra.cron24.com/images/rooms/10006/room_11606547085.jpg","https://hyra.cron24.com/images/rooms/10015/room_01606553881.jpg","https://hyra.cron24.com/images/rooms/10013/room_11606552238.jpg","16","4","8","2","A lovely room in a classic art-filled 4-bed Victorian flat in the heart of San Francisco's Bohemian neighborhood, North Beach, just a short walk to Fisherman's Wharf.","55","3");

INSERT INTO hotels (hotelName,image,image2,image3,image4,image5,guests,bedrooms,beds,bathrooms,description,price,city_id) VALUES("Beverly Hills","https://hyra.cron24.com/images/rooms/10004/room_21605171237.jpg","https://hyra.cron24.com/images/rooms/10004/room_61605171237.jpg","https://hyra.cron24.com/images/rooms/10004/room_11605171237.jpg","https://hyra.cron24.com/images/rooms/10004/room_41605171237.jpg","https://hyra.cron24.com/images/rooms/10004/room_51605171237.jpg","10","1","2","2","Luxury spacious house in a beautiful, green part of Beverly Hills filled with designer furniture & artworks.","20","3");

INSERT INTO hotels (hotelName,image,image2,image3,image4,image5,guests,bedrooms,beds,bathrooms,description,price,city_id) VALUES("Black rose","https://hyra.cron24.com/images/rooms/10011/room_31606551762.jpg","https://hyra.cron24.com/images/rooms/10011/room_01606551762.jpg","https://hyra.cron24.com/images/rooms/10011/room_11606551762.jpg","https://hyra.cron24.com/images/rooms/10011/room_21606551762.jpg","https://hyra.cron24.com/images/rooms/10013/room_11606552238.jpg","8","2","6","2","This wonderful, barn-like cottage is renovated to a modern country style and is truly your cosy 'home from home.","25","3");

INSERT INTO hotels (hotelName,image,image2,image3,image4,image5,guests,bedrooms,beds,bathrooms,description,price,city_id) VALUES("Relaxing ","https://hyra.cron24.com/images/rooms/10009/room_21606550275.jpg","https://hyra.cron24.com/images/rooms/10009/room_01606550275.jpg","https://hyra.cron24.com/images/rooms/10011/room_11606551762.jpg","https://hyra.cron24.com/images/rooms/10011/room_21606551762.jpg","https://hyra.cron24.com/images/rooms/10009/room_11606550275.jpg","7","2","4","1","This wonderful, barn-like cottage is renovated to a modern country style and is truly your cosy 'home from home.","15","3");

/*Madaba*/
INSERT INTO hotels (hotelName,image,image2,image3,image4,image5,guests,bedrooms,beds,bathrooms,description,price,city_id) VALUES("Hotel Bliss","https://hyra.cron24.com/images/rooms/10002/room_41605168284.jpg","https://hyra.cron24.com/images/rooms/10002/room_31605168284.jpg","https://hyra.cron24.com/images/rooms/10002/room_11605168284.jpg","https://hyra.cron24.com/images/rooms/10002/room_21605168284.jpg","https://hyra.cron24.com/images/rooms/10002/room_01605168284.jpg","5","1","2","2","Great tiny private space for someone who wants to 'live simple' in Venice Beach! A single 'studio' room.","15","4");


INSERT INTO hotels (hotelName,image,image2,image3,image4,image5,guests,bedrooms,beds,bathrooms,description,price,city_id) VALUES("Crowne Plaza","https://hyra.cron24.com/images/rooms/10009/room_21606550275.jpg","https://hyra.cron24.com/images/rooms/10009/room_01606550275.jpg","https://hyra.cron24.com/images/rooms/10011/room_11606551762.jpg","https://hyra.cron24.com/images/rooms/10011/room_21606551762.jpg","https://hyra.cron24.com/images/rooms/10009/room_11606550275.jpg","7","2","4","1","This wonderful, barn-like cottage is renovated to a modern country style and is truly your cosy 'home from home.","15","4");

INSERT INTO hotels (hotelName,image,image2,image3,image4,image5,guests,bedrooms,beds,bathrooms,description,price,city_id) VALUES("Hotel Elite","https://hyra.cron24.com/images/rooms/10012/room_01606552084.jpg","https://hyra.cron24.com/images/rooms/10012/room_11606552084.jpg","https://hyra.cron24.com/images/rooms/10012/room_21606552084.jpg","https://hyra.cron24.com/images/rooms/10012/room_31606552084.jpg","https://hyra.cron24.com/images/rooms/10013/room_11606552238.jpg","10","3","6","2","You'll love this listing! This is a cozy private room w/ queen memory foam bed, full futon couch/bed, desk, personal massage chair.","35","4");

INSERT INTO hotels (hotelName,image,image2,image3,image4,image5,guests,bedrooms,beds,bathrooms,description,price,city_id) VALUES("Black rose","https://hyra.cron24.com/images/rooms/10011/room_31606551762.jpg","https://hyra.cron24.com/images/rooms/10011/room_01606551762.jpg","https://hyra.cron24.com/images/rooms/10011/room_11606551762.jpg","https://hyra.cron24.com/images/rooms/10011/room_21606551762.jpg","https://hyra.cron24.com/images/rooms/10013/room_11606552238.jpg","8","2","6","2","This wonderful, barn-like cottage is renovated to a modern country style and is truly your cosy 'home from home.","25","4");