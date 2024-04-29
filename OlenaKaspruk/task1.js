//Вывести три произвольных реакции

db.reactions.aggregate([
    { $sample: { size: 3 } }    
    
])
