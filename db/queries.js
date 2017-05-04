// import pg promise library to handel database
let pgp = require('pg-promise')();
// load the database from postgress
let connString = process.env.DATABASE_URL
// connect  db promise to my database
let db = pgp(connString);


function getAllcitizens(req, res, next) {
  // return all the records from the database
  db.any('SELECT information.id  , information.ss, information.first , information.last , genders.gender , specieses.species , information.height , colors.color , information.occupation, information.wanted , cities.city , information.image FROM information JOIN genders ON genders.id = information.gender LEFT JOIN specieses ON specieses.id = information.species LEFT JOIN colors ON colors.id = information.hair_color LEFT JOIN cities ON cities.id = information.address;')
    .then(function(data) {
      console.log('DATA:', data);
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'All information Retrieved '
        });
    })
    .catch(function(err) {
      return next(err);
    });
}

function getOnecitizen(req, res, next) {

  let ss = parseInt(req.params.ss);
  db.one('SELECT information.id  , information.ss, information.first , information.last , genders.gender , specieses.species , information.height , colors.color , information.occupation, information.wanted , cities.city , information.image FROM information JOIN genders ON genders.id = information.gender LEFT JOIN specieses ON specieses.id = information.species LEFT JOIN colors ON colors.id = information.hair_color LEFT JOIN cities ON cities.id = information.address where ss = $1', ss)
    .then(function(data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'One meal citizen information Retrieved'
        });
    })
    .catch(function(err) {
      return next(err);
    });
}
// this function add person using postman
/*

  post
    {
  "ss" : 123456,
    "first": "esraa",
    "last": "alaarag",
    "gender": 2,
    "species": 1,
    "height": 3,
    "hair_color": 1,
    "occupation": "Con artist",
    "wanted": false,
    "address": 1,
    "image": "http://img08.deviantart.net/8c0b/i/2016/084/0/f/zootopia___nick_wilde_by_ruby__art-d9weg5a.jpg"
  }

*/
function createcitizen(req, res, next) {
  console.log(req);
  req.body.age = parseInt(req.body.age);
  console.log('req.body ===>', req.body)
  db.none('insert into information (ss, first,last,gender,species,height,hair_color,occupation,wanted,address,image)' +
      'values(${ss}, ${first},${last},${gender},${species},${height},${hair_color},${occupation},${wanted},${address},${image})',
      req.body)
    .then(function() {
      res.status(200)
        .json({
          status: 'success',
          message: 'One citizen Inserted'
        });
    })
    .catch(function(err) {
      console.log(err);
      return next(err);
    });
}

// change the information inside the database
/*
 put
  {
    "first": "Nick",
    "last": "Wilde",
    "gender": 2,
    "species": 2,
    "height": 3,
    "hair_color": 1,
    "occupation": "Con artist",
    "wanted": false,
    "address": 1,
    "image": "http://img08.deviantart.net/8c0b/i/2016/084/0/f/zootopia___nick_wilde_by_ruby__art-d9weg5a.jpg"
  }
*/
function updatecitizen(req, res, next) {
  db.none('update information set first=$1, last=$2, gender=$3, species=$4, height=$5 , hair_color=$6 , occupation=$7 , wanted=$8  , address=$9  , image=$10 where ss=$11', [req.body.first, req.body.last, req.body.gender, req.body.species, req.body.height ,req.body.hair_color, req.body.occupation, req.body.wanted, req.body.address, req.body.image ,req.params.ss
    ])
    .then(function() {
      res.status(200)
        .json({
          status: 'success',
          message: 'citizen Updated'
        });
    })
    .catch(function(err) {
      console.log(err)
      return next(err);
    });
}
// this function delete meals by putting the id after url
function deletecitizen(req, res, next) {
  let ss = parseInt(req.params.ss);
  db.result('delete from information where ss = $1', ss)
    .then(function(result) {
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} citizen`
        });
    })
    .catch(function(err) {
      return next(err);
    });
}

//CRUD
module.exports = {
  createcitizen: createcitizen, //CREATE
  getAllcitizens: getAllcitizens, //READ
  getOnecitizen: getOnecitizen,   //READ
  updatecitizen: updatecitizen,   //UPDATE
  deletecitizen: deletecitizen    //DELETE
};