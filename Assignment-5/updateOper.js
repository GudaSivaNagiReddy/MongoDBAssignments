db.sports.updateMany({},{$set: {title:"Football", requiresTeam:true}},{upsert:true})



db.sports.updateMany({},{$set: {title:"Running", requiresTeam:false}},{upsert:true})



db.sports.updateMany({title:"Soccer"},{$set: {requiresTeam:true}},{upsert:true})



db.sports.updateMany({requiresTeam: true},{$set: {minPlayers:11}})

db.sports.updateMany({requiresTeam: true},{$inc: {minPlayers:10}})
