
db.company.insertOne({_id:"ibm",name: "IBM",city:"Armonk"})


db.company.insertMany([{_id:"apple",name:"Apple",city:"Cupertino"},{_id:"microsoft",name:"Microsoft",city:"Albuquerque"}])



db.company.insertMany([{_id:"google",name:"Google",city:"Mountain View"},{_id:"apple",name:"Apple",city:"Cupertino"},{_id:"facebook",name:"Facebook",city:"Palo Alto"}],{ordered: false})



db.company.insertOne({_id:"merrill",name: "Merrill Lynch",city:"New York"},{writeConcern:{w:1,j:false}})



db.company.insertOne({_id:"mongan",name: "Mongan",city:"New York"},{writeConcern:{w:1,j:true}})

