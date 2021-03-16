INSERT INTO client 
( clientName, clientEmail, clientPassword, clientSalt, clientCPF, clientStatus) 
-- senhas: M@th3usC
VALUES 
("Bernardo Aragão da Gama", "bagama@gama.com", '$2b$10$ijl3krxwElOGsMqPgetwReNHHV0RcSJvousesf5TnhfJb8KIbmvpS', '$2b$10$ijl3krxwElOGsMqPgetwRe', "05360674067", "Active"), 
("Matheus Cardoso da Gama", "mcgama@gama.com", '$2b$10$ijl3krxwElOGsMqPgetwReNHHV0RcSJvousesf5TnhfJb8KIbmvpS', '$2b$10$ijl3krxwElOGsMqPgetwRe', "83628906067", "Active"), 
("Helena Rangel da Gama", "hgama@gama.com", '$2b$10$ijl3krxwElOGsMqPgetwReNHHV0RcSJvousesf5TnhfJb8KIbmvpS', '$2b$10$ijl3krxwElOGsMqPgetwRe',"20433154047", "Active"), 
("Marcio Esteves da Gama", "megama@gama.com", '$2b$10$ijl3krxwElOGsMqPgetwReNHHV0RcSJvousesf5TnhfJb8KIbmvpS', '$2b$10$ijl3krxwElOGsMqPgetwRe',"33466951070", "Active"), 
("Paulo Caminpas da Gama", "pcama@gama.com", '$2b$10$ijl3krxwElOGsMqPgetwReNHHV0RcSJvousesf5TnhfJb8KIbmvpS', '$2b$10$ijl3krxwElOGsMqPgetwRe',"33358313069", "Active"), 
("Gabriel Accioli da Gama", "gagama@gama.com", '$2b$10$ijl3krxwElOGsMqPgetwReNHHV0RcSJvousesf5TnhfJb8KIbmvpS', '$2b$10$ijl3krxwElOGsMqPgetwRe',"11598851098", "Active"); 


INSERT INTO checkingaccount 
(clientCod, checkingAccountBalance, checkingAccountStatus, checkingAccountNumber) 
VALUES 
(1, 1000.00, "Active", "4929 3084 8997 1389"),
(2, 2000.00, "Active", "4539 1304 2967 1495"),
(3, 3000.00, "Active", "4532 5862 9726 7392"),
(4, 4000.00, "Active", "4716 2166 0242 4920"),
(5, 5000.00, "Active", "4532 9653 8607 2915"),
(6, 6000.00, "Active", "4532 1411 8596 5879");
