db.places.insertOne({name:"Brainvire - eCommerce & Mobile App Development Company", location: {type : "point", coordinations: [72.5646652,23.0245559]}})
db.places.insertOne({name:"Hotel Signature", location: {type : "point", coordinations: [72.5646677,23.0245536]}})
db.places.insertOne({name:"Nagar School of Optometry", location: {type : "point", coordinations: [72.5654079,23.0244408]}})

const myPlace=[72.5646690,23.0245542];
db.places.createIndex({location: "2dsphere"})
db.places.find({location: {$near:{$geometry : {type:"point",coordinations : myPlace},$minDistance:100,$maxDistance:2000}}})

const p1 = [11.6091,44.14382]
const p2 = [11.5098,44.45567]
const p3 = [11.5098,44.45567]
const polygonArea = [[p1,p2,p3,p1]]
const polygonObject=  {type:"point",coordination: polygonArea}
db.places.find({location: {$geoWithin:{$geometry : polygonObject}}})

db.area.insertOne({name :"Free time" ,a:polygonObject})
db.area.find({a:{$geoIntersects :{$geometry : {type:"point",coordinations : [11.4238,44.12767]}}}})
