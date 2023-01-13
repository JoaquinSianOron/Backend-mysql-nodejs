CREATE DATABASE dbMultiphy;
USE dbMultiphy;
drop table dbMultiphy;

create table register(
id int not null auto_increment,
name varchar(200),
primary key(id)
);

SELECT * FROM register;
INSERT INTO pfc_users VALUES ( null, 'user', 'user', 'user', 'user', "jkdshfklsejieon", "gmail.com","2021-02-15 07:00:00","2021-02-15 19:30:00");
select * from pfc_users;
-- SELECT * FROM pf_users where usr_NickName = 'user1' and pf_users.usr_Password = 'user1';
SELECT * FROM pfc_users where usr_NickName = 'user1' and usr_Password = 'user1';
select usr_Password from pfc_users order by usr_ID desc limit 1;
UPDATE pfc_users SET usr_Password = 20 WHERE usr_ID = 1;
SELECT usr_Password FROM pfc_users WHERE usr_NickName = "joaquin";

create table Medicos(
	CodigoMedicos int not null auto_increment, 
    licenciaMedica int(30),
    nombre varchar(100),
    apellido varchar(100),
    horaEntrada datetime,
    horaSalida datetime,
    turnoMaximo int,
    sexo varchar(100),
    primary key (CodigoMedicos)
);
create table Telefonos(
	CodigoTelefono int not null auto_increment,
    telefonoPersonal varchar(20),
    telefonoTrabajo varchar(20),
    codigoMedico INT not null,
	primary key (CodigoTelefono),
    constraint FK_Telefonos_Medicos foreign key (codigoMedico) references Medicos(CodigoMedicos)
);