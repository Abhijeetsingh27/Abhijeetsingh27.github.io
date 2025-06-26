db.employees.insertOne({
    name: "John Doe",
    email:"john@gmail.com",
    department:"IT",
    salary:50000,
    loction:"remote",
    date:Date(),

})
db.employees.insertMany([
    {
        name: "Jane Smith",
        email:"jane@gmail.com",
        department:"HR",
        salary:60000,
        location:"remote",
        date:Date(),
    },
    {
        name: "Bob Johnson",
        email:"bob@gmail.com",
        department:"Finance",
        salary:55000,
        location:"remote",
        date:Date(),
    },
    ])


    db.employees.find().skip(1)
    db.employees.find().limit(2)
     db.employees.find().skip(1).limit(1)
     db.employees.find().sort({name:1})
     db.employees.find().sort({name:-1})
     db.employees.find().sort({name:-1}).limit(1)
     db.employees.find({department:"IT"})
      db.employees.find({},{name:1})
      db.employees.find({},{_id:0,name:1})
 db.employees.find({},{_id:false,name:true})
 db.employees.find({},{_id:0,name:1,department:1})
