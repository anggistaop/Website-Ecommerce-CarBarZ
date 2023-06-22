CREATE TABLE login ( 
    id INT(11) NOT NULL AUTO_INCREMENT, 
    role VARCHAR (20) DEFAULT NULL, 
    name VARCHAR(50) DEFAULT NULL, 
    email VARCHAR(50) DEFAULT NULL, 
    password text DEFAULT NULL, 
    status VARCHAR(20),
    PRIMARY KEY (id) 
);

CREATE TABLE stok (
    id INT(11) NOT NULL AUTO_INCREMENT,
    tipe_mobil VARCHAR (50) DEFAULT NULL,
    harga VARCHAR (20) DEFAULT NULL,
    picture VARCHAR(200) NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE product ( 
    id INT(11) NOT NULL AUTO_INCREMENT, 
    tipe_mobil VARCHAR (50) DEFAULT NULL, 
    harga VARCHAR (20) DEFAULT NULL, 
    PRIMARY KEY (id) 
);

-- akun login khusus admin
INSERT INTO `login` (`id`, `name`, `email`, `password`, `status`) VALUES (NULL, 'admin', 'admin@gmail.com', '123', 'admin');
