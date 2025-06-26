
db.employees.find({ department: "IT" });

db.employees.find({ department: { $eq: "IT" } });

db.employees.find({ salary: { $gt: 3000 } });

db.employees.find({ salary: { $gte: 3000 } });

db.employees.find({ salary: { $lt: 3000 } });

db.employees.find({ salary: { $lte: 3000 } });

db.employees.find(
  { salary: { $ne: 3000 }, department: { $eq: "IT" } },
  { name: 1 }
);

db.employees
  .find({ salary: { $ne: 3000 }, department: { $eq: "IT" } }, { name: 1 })
  .limit(1);

db.employees.find({
  $and: [{ salary: { $gt: 3000 }, department: { $eq: "IT" } }],
});

db.employees.find({
  $or: [{ salary: { $gt: 3000 }, department: { $eq: "IT" } }],
});


//Display the top two highest paid employees

 db.employees.find({department: "Engineering"});

db.employees.find({department:{$eq : "Engineering"}}); // using $eq operator help to find the documents where department is equal to "Engineering"

db.employees.find({department:{$ne : "Engineering"}}); // using $ne operator help to find the documents where department is not equal to "Engineering"

db.employees.find({department:{$in : ["Engineering", "Data Science"]}}); // using $in operator help to find the documents where department is in the array ["Engineering", "Data Science"]

db.employees.find({ salary: {$gt: 1000}}); // using $gt operator help to find the documents where salary is greater than 1000

db.employees.find({ salary: {$gte: 1200}}); // using $gte operator help to find the documents where salary is greater than or equal to 1000

db.employees.find({ salary: {$lt: 1500}}); // using $lt operator help to find the documents where salary is less than 1000

db.employees.find({ salary: {$lte: 1500}}); // using $lte operator help to find the documents where salary is less than or equal to 1000

db.employees.find({ salary: {$ne: 1200}, department: {$ne: "Engineering"}},
    {name:1}
); // using $ne operator help to find the documents where salary is not equal to 1200 and department is not equal to "Engineering" and only return the name field

db.employees
    .find({ salary: {$ne: 1200}, department: {$ne: "Engineering"}},{name:1,}) //
    .limit(1); // using $ne operator help to find the documents where salary is not equal to 1200 and department is not equal to "Engineering" and only return the name field and limit to 1

// to display the hightest salary in the employees collection
db.employees.find().sort({salary:-1}).limit(2); // sort by salary



db.employees.find({name:"Doe"},{email:1})
db.employees.find({name:"Doe"},{_id:0,email:1,age:1})


db.employees.find(
    {$or: [{salary: {$ne: 1200}}, {department: "Engineering"}]}
)// using $or operator to find documents where salary is not equal to 1200 or department is "Engineering"


db.employees.find(
    {$and: [{salary: {$ne: 1200}}, {department: "Engineering"}]}
)// using $and operator to find documents where salary is not equal to 1200 and department is "Engineering"
