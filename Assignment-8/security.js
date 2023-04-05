db.createUser({name:"siva",pwd :"siva",roles:["userAdmineAnyDatabase"]})
//creating another user
db.createUser({name:"Reddy",pwd :"reddy",roles:["dbAdmineAnyDatabase"]})

db.createUser({name:"Dev",pwd :"dev",roles:[{role : "readWrite",db:"customers"},{role:"readWrite",db:"sales"}]})

//here we can login different users it will shows like unauthorized