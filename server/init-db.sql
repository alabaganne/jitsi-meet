drop database if exists jitsi_meet;

create table user (
	id int primary key auto_increment,
	name varchar(255) not null,
	email varchar(255) not null,
	password varchar(255) not null
);

create table meet (
	id int primary key auto_increment,
	name varchar(255) not null,
	organizerId int not null,
	createdAt datetime default current_timestamp,
	foreign key (organizerId) references users(id)
);

create table invitee (
	inviteeEmail int not null,
	meetId int not null,
	primary key (inviteeEmail, meetId),
	foreign key (inviteeEmail) references users(email),
	foreign key (meetId) references meet(id)
);
