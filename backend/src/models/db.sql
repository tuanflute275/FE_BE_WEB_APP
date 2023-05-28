CREATE database product
go
CREATE TABLE card 
(
	id int PRIMARY KEY AUTO_INCREMENT, 
    image varchar(255) not null,
    title varchar(200) not null,
    price float,
    salePrice float
)
go
INSERT INTO `card`(`title`,`image`, `price`, `salePrice`) VALUES ('MÈO TAI CỤP SCOTLAND','https://cdn3.dhht.vn/wp-content/uploads/2023/01/30-giong-meo-noi-tieng-dep-nhat-cute-de-nuoi-va-gia-ban-3.jpg' ,2000, 1500)