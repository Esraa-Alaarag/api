DROP TABLE IF EXISTS information;
DROP TABLE IF EXISTS genders;
DROP TABLE IF EXISTS species;
DROP TABLE IF EXISTS colors;
DROP TABLE IF EXISTS specieses;
DROP TABLE IF EXISTS cities;



CREATE TABLE genders(
    id SERIAL PRIMARY KEY, 
    gender VARCHAR NOT NULL
);

CREATE TABLE cities(
    id SERIAL PRIMARY KEY, 
    city VARCHAR NOT NULL
);

CREATE TABLE specieses(
    id SERIAL PRIMARY KEY, 
    species VARCHAR NOT NULL
);

CREATE TABLE colors(
    id SERIAL PRIMARY KEY, 
    color VARCHAR NOT NULL
);


CREATE TABLE information (
	 id SERIAL NOT NULL,
  	ss int PRIMARY KEY,
  	first VARCHAR NOT NULL,
  	last VARCHAR ,
  	gender smallint  REFERENCES genders(id) NOT NULL,
  	species int  REFERENCES specieses(id) NOT NULL,
  	height  FLOAT NOT NULL,
  	color smallint REFERENCES colors(id) NOT NULL,
  	occupation VARCHAR NOT NULL,
  	wanted BOOLEAN NOT NULL,
  	city smallint REFERENCES cities(id) NOT NULL,
  	image VARCHAR NOT NULL
);


INSERT INTO genders(gender) VALUES
('Male'),
('female');

INSERT INTO cities(city) VALUES
('Zootopia city'),
('Bunny Burrow');

INSERT INTO specieses(species) VALUES
('Red fox'),
('Rabbit'),
('Cape Buffalo'),
('African lion'),
('Cheetah'),
('Sheep'),
('Three-toed Sloth'),
('Fennec fox'),
('Yak'),
('Weasel'),
('Otter'),
('Arctic Shrew'),
('Gazelle'),
('Polar Bear'),
('African Elephant'),
('Rhinoceros'),
('Leopard'),
('Bear');

INSERT INTO colors(color) VALUES
('red'),
('blue'),
('green'),
('gray'),
('black'),
('yellow'),
('white'),
('brown'),
('pink'),
('orange');



INSERT INTO information (ss, first, last, gender, species, height, color,occupation, wanted, city,image) VALUES
(2592302, 'Nick' , 'Wilde', 1, 1, 3, 1, 'Con artist', FALSE, 1, 'http://img08.deviantart.net/8c0b/i/2016/084/0/f/zootopia___nick_wilde_by_ruby__art-d9weg5a.jpg'),
(7182468, 'Judy' , 'Hopps', 2, 2, 2.5, 4, 'parking attendant', FALSE, 1, 'http://vignette3.wikia.nocookie.net/disney/images/1/17/Character_zootopia_judy_e67f6fcc.jpeg/revision/latest?cb=20151205065823'),
(8012477, 'Bogo','' , 1, 3, 8, 5, 'Head of Police Department', FALSE, 1, 'https://i.ytimg.com/vi/JQ_ETZyUhcc/maxresdefault.jpg'),
(9387436, 'Leodore', 'Lionheart', 1, 4, 7, 8, 'Mayor', FALSE, 1, 'https://vignette2.wikia.nocookie.net/zootopia/images/4/49/Mayor_Lionheart.png/revision/latest/scale-to-width-down/350?cb=20160214012420'),
(7626169, 'Benjamin', 'Clawhauser', 1, 5, 5, 6, 'police Officer', FALSE, 1, 'http://vignette3.wikia.nocookie.net/disney/images/2/25/Clawhauser_Promo.png/revision/latest?cb=20160317131046'),
(6610772, 'Dawn', 'Bellwether', 2, 6, 4, 7, 'Mayar  assistant', TRUE, 1, 'http://vignette4.wikia.nocookie.net/villains/images/7/7d/Dawn_Bellwether.png/revision/latest?cb=20160407022545'),
(8450863, 'Flash', 'Slothmore', 1, 7, 6, 8, 'DMV agent' , FALSE, 1, 'https://s-media-cache-ak0.pinimg.com/736x/6b/1a/79/6b1a79fc866aab8da6bdb773094b5987.jpg'),
(8488532, 'Bonnie' , 'Hopps', 2, 1, 2.5, 4, 'Housewife', FALSE, 2, 'http://vignette1.wikia.nocookie.net/zwierzogrod/images/1/1a/Bonnie_Hops_Infobox.png/revision/latest?cb=20160227213904&path-prefix=pl'),
(7401434, 'Stu', 'Hopps', 1, 1, 2.5, 8, 'farmer', FALSE, 1, 'https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRaB_1YdRNryqtp7QT4XfYWLfbc9Te5Vs1p4yH56beQnWiGb3O4'),
(1037956, 'Finnick', '' , 1, 8, 1.5, 6, 'Con artist', TRUE, 1, 'https://pbs.twimg.com/media/CVbysqPUwAA2dFf.jpg'),
(2863656, 'Yax', '' , 1, 9, 5.5, 7, 'Owner of Mystic Spring Oasis', FALSE, 1, 'https://vignette3.wikia.nocookie.net/zootopia/images/e/ed/Yax_Render.png/revision/latest?cb=20160428215912'),
(9419373, 'Duke', 'Weasleton', 1, 10, 3, 8, 'unemployed', TRUE, 1, 'https://guidelive.imgix.net/1456380088-weaselton.jpg?w=600&h=600&crop=faces&fit=crop&q=65&fm=jpg'),
(9859075, 'Jane', 'Otterton', 2, 11, 3, 5, 'Housewife', FALSE, 1, 'https://vignette4.wikia.nocookie.net/zootopia/images/6/60/Otterton_Infobox.png/revision/latest/scale-to-width-down/350?cb=20160922130636'),
(2765586, 'Emmitt', 'Otterton', 1, 11, 3, 5, 'Florist', FALSE, 1, 'http://vignette1.wikia.nocookie.net/disney/images/3/32/Otterton_Zootopia_.jpg/revision/latest?cb=20160512174128'),
(2712011, 'Big', 'Fru Fru', 1, 12, 0.5, 5, 'business owner', TRUE, 1, 'https://vignette2.wikia.nocookie.net/disney/images/8/84/Mr._Big_Render.png/revision/latest?cb=20160306154403'),
(7754836, 'Gazella', '' , 2, 13, 5, 10, 'Pop star', FALSE, 1, 'http://cdn.movieweb.com/img.news.tops/NED3UhGhY20BGJ_4_b.jpg'),
(1056967, 'Doug' , 'Ramses', 1, 6, 4.5, 7, 'chemist', TRUE, 1, 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRF8Nc-_F6RoKUoo5ucJ-cBKPwTiz8LNPJWY_PeJMmmRF6w3Hp0'),
(8365329, 'Gideon',  'Grey', 1, 1, 3, 1, 'Baker', FALSE, 2, 'http://vignette3.wikia.nocookie.net/disney/images/a/ac/Gideon_Grey_Zootopia_poster.jpg/revision/latest?cb=20160325145120'),
(5820074, 'Koslov', '' , 1, 14, 9, 7, 'Bodyguard', TRUE, 1, 'http://vignette2.wikia.nocookie.net/zootopia/images/7/72/Koslov_Transparent.png/revision/latest?cb=20160722224736'),
(7053704, 'Jessica', 'Pennington', 2, 15, 13, 9, 'police Officer', FALSE, 1, 'http://iv1.lisimg.com/image/12756939/617full-officer-francine-pennington.jpg'),
(1508092, 'steeve', 'McHorn', 1, 16, 9, 4, 'police Officer', FALSE, 1, 'https://vignette4.wikia.nocookie.net/zootopia/images/d/d1/Infobox-McHorn.PNG/revision/latest?cb=20160822212324'),
(7303597, 'Stephanie',  'Stalkinew', 2, 17, 7.5, 6, 'Teacher', FALSE, 1, 'https://vignette1.wikia.nocookie.net/zootopia/images/2/27/Stephanie_-_Infobox.jpeg/revision/latest/scale-to-width-down/350?cb=20160829234205'),
(4029088, 'bob', 'Grizzoli', 1, 18, 6.5, 7, 'police Officer', FALSE, 1, 'https://vignette1.wikia.nocookie.net/disney/images/8/80/OfficerGrizzoli.jpeg/revision/latest/scale-to-width-down/350?cb=20170216052507');


