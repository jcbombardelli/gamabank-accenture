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

-- Criando agora a conta corrente respectiva de cada um
INSERT INTO checkingaccount 
(clientCod, checkingAccountBalance, checkingAccountStatus, checkingAccountNumber) 
VALUES 
(1, 1000.00, "Active", "1"),
(2, 2000.00, "Active", "2"),
(3, 3000.00, "Active", "3"),
(4, 4000.00, "Active", "4"),
(5, 5000.00, "Active", "5"),
(6, 6000.00, "Active", "6");

-- E por último, criando um cartão pra cada um.
INSERT INTO clientcard 
(clientCardNumber,clientCod,checkingAccountNumber, clientCreditCardLimit)
VALUES
("4929308489971389","1","1", "5000.00"),
("4539130429671495","2","2", "800.00"),
("4532586297267392","3","3", "700.00"),
("4716216602424920","4","4", "150.00"),
("4532965386072915","5","5", "2500.00"),
("4532141185965879","6","6", "1000.00"),