// import pg promise library to handel database
let pgp = require('pg-promise')();
// load the database from postgress
let connString = process.env.DATABASE_URL
// connect  db promise to my database
let db = pgp(connString);

// The axios get comes here
function getAllcitizens(req, res, next) {
  // return all the records from the database
  db.any('SELECT information.id  , information.ss, information.first , information.last , genders.gender , specieses.species , information.height , colors.color , information.occupation, information.wanted , cities.city , information.image FROM information JOIN genders ON genders.id = information.gender LEFT JOIN specieses ON specieses.id = information.species LEFT JOIN colors ON colors.id = information.color LEFT JOIN cities ON cities.id = information.city;')
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
// The axios get : ss comes here
function getOnecitizen(req, res, next) {

  let ss = parseInt(req.params.ss);
  db.one('SELECT information.id  , information.ss, information.first , information.last , genders.gender , specieses.species , information.height , colors.color , information.occupation, information.wanted , cities.city , information.image FROM information JOIN genders ON genders.id = information.gender LEFT JOIN specieses ON specieses.id = information.species LEFT JOIN colors ON colors.id = information.color LEFT JOIN cities ON cities.id = information.city where ss = $1', ss)
    .then(function(data) {
      res.status(200)
        .json({
          status: 'success',
          data: data,
          message: 'One citizen information Retrieved'
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
    "color": 1,
    "occupation": "Con artist",
    "wanted": false,
    "city": 1,
    "image": "http://img08.deviantart.net/8c0b/i/2016/084/0/f/zootopia___nick_wilde_by_ruby__art-d9weg5a.jpg"
  }

*/
function createcitizen(req, res, next) {
  console.log(req);
  req.body.age = parseInt(req.body.age);
  console.log('req.body ===>', req.body)
  db.none('insert into information (ss, first,last,gender,species,height,color,occupation,wanted,city,image)' +
      'values(${ss}, ${first},${last},${gender},${species},${height},${color},${occupation},${wanted},${city},${image})',
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
    "color": 1,
    "occupation": "Con artist",
    "wanted": false,
    "city": 1,
    "image": "http://img08.deviantart.net/8c0b/i/2016/084/0/f/zootopia___nick_wilde_by_ruby__art-d9weg5a.jpg"
  }
*/
function updatecitizen(req, res, next) {
  db.none('update information set first=$1, last=$2, gender=$3, species=$4, height=$5 , color=$6 , occupation=$7 , wanted=$8  , city=$9  , image=$10 where ss=$11', [req.body.first, req.body.last, req.body.gender, req.body.species, req.body.height ,req.body.color, req.body.occupation, req.body.wanted, req.body.city, req.body.image ,req.params.ss
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
// this function delete person whos ss is after url
function deletecitizen(req, res, next) {
  let ss = parseInt(req.params.ss);
  db.result('delete from information where ss = $1', ss)
    .then(function(result) {
      if(result.rowCount){
      console.log(result);
      res.status(200)
        .json({
          status: 'success',
          message: `Removed ${result.rowCount} citizen`
        }

        );}
        else
        {
           res.status(404)
        .json({
          status: 'failed',
          message: `Citizen not found`
        })
        }
    })
    .catch(function(err) {
      console.log(err)
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