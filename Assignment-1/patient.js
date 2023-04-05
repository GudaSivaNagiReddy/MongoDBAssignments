db.patient.insertMany([{
    'name': 'suresh ck',
    'age': 59,
    'phoneNo': '8867395596',
    'history': [
        {
            'disease': 'cold',
            'treatmentCode': 'HP78945'
        },
        {
            'disease': 'fever',
            'treatmentCode': 'HP55945'
        },
        {
            'disease': 'BP',
            'treatmentCode': 'HP75458'
        }
    ]
},
{
    'name': 'devika ck',
    'age': 49,
    'phoneNo': '8660016868',
    'history': [
        {
            'disease': 'cold',
            'treatmentCode': 'HP235'
        },
        {
            'disease': 'fever',
            'treatmentCode': 'HP54445'
        },
        {
            'disease': 'BP',
            'treatmentCode': 'HP72258'
        }
    ]
},
{
    'name': 'Basavaraj SK',
    'age': 27,
    'phoneNo': '9008310901',
    'history': [
        {
            'disease': 'cold',
            'treatmentCode': 'HP2325'
        },
        {
            'disease': 'fever',
            'treatmentCode': 'HP53435'
        },
        {
            'disease': 'BP',
            'treatmentCode': 'HP75533'
        }
    ]
}
])

db.patient.updateMany(
    {phoneNo: '8660016868'}, 
    {$set: 
        {
            name : 'devika ks',
            age: 50,
            history : { treatmentCode : 'HP235' , disease : 'cold with high fever'}

         }
    });

db.patient.find({age: { $gt : 30 }});

db.patients.deleteMany({history: { disease: "cold" }});