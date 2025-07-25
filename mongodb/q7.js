db.employees.aggregate([
  { $match: { department: "IT" } },
  { $project: { name: 1, salary: 1 } },
  { $sort: { salary: 1 } },
  { $limit: 3 },
]);

db.employees.aggregate([
  { $group: { _id: "$department", total: { $sum: "$salary" } } },
]);

db.employees.aggregate([{ $project: { name: 0 } }]);

db.employees.aggregate([{ $project: { empName: "$name" } }]);

db.employees.aggregate([
  {
    $project: {
      _id: 0,
      name: 1,
      salary: 1,
      bonus: { $multiply: ["$salary", 2] },
    },
  },
]);

db.students.insertOne({
  name: "Alice Johnson",
  age: 23,
  courses: ["Math", "Physics"],
  enrolled: true,
});
db.students.aggregate([{ $group: { _id: null, avgAge: { $avg: "$age" } } }]);

db.students.aggregate([{ $group: { _id: null, avgAge: { $avg: "$age" } } }]);

//display name,email,salary of IT employees

//display annual salary of all employees

//display employees whose salary is greater
//than 3000 and show CTC instead of Salary field

db.students.aggregate([
  { $group: { _id: null, averageAge: { $avg: "$age" } } },
]);

db.address.insertOne({
  studentId: ObjectId("685ce0ec89c4bc1576ab1d88"),
  city: "Jacksonville",
  country: "USA",
});

db.students.aggregate([
  {
    $lookup: {
      from: "address",
      localField: "_id",
      foreignField: "studentId",
      as: "address",
    },
  },
  { $unwind: "$address" },
  { $project: { name: 1, "address.city": 1, "address.country": 1 } },
]);

db.employees.aggregate([
    {$project:{name:1,location:1}},
    {$unwind:"$location"}
])


db.comments.insertOne({_id:"c1",pid:"p1",Comment:"this is comment 1 in post 1"})
db.comments.insertOne({_id:"c2",pid:"p1",Comment:"this is comment 2 in post 1"})
db.comments.insertOne({_id:"c3",pid:"p2",Comment:"this is comment 1 in post 2"})
db.comments.insertOne({_id:"c4",pid:"p2",Comment:"this is comment 2 in post 2"})
db.comments.insertOne({_id:"c5",pid:"p2",Comment:"this is comment 3 in post 2"})



//use lpua

db.posts.insertOne({ _id: "p1", post: "Post 1" });
db.posts.insertOne({ _id: "p2", post: "Post 2" });

db.comments.insertOne({
  _id: "c1",
  pid: "p1",
  comment: "This is comment 1 of post 1",
});

db.comments.insertOne({
  _id: "c2",
  pid: "p1",
  comment: "This is comment 2 of post 1",
});

db.comments.insertOne({
  _id: "c3",
  pid: "p2",
  comment: "This is comment 1 of post 2",
});

db.comments.insertOne({
  _id: "c4",
  pid: "p2",
  comment: "This is comment 2 of post 2",
});

db.comments.insertOne({
  _id: "c5",
  pid: "p2",
  comment: "This is comment 3 of post 2",
});

db.posts.aggregate([
  {
    $lookup: {
      from: "comments",
      localField: "_id",
      foreignField: "pid",
      as: "comments",
    },
  },
]);

db.posts.aggregate([
  {
    $lookup: {
      from: "comments",
      localField: "_id",
      foreignField: "pid",
      as: "comments",
    },
  },
  { $unwind: "$comments" },
]);

db.posts.aggregate([
  {
    $lookup: {
      from: "comments",
      localField: "_id",
      foreignField: "pid",
      as: "comments",
    },
  },
  { $unwind: "$comments" },
  { $project: { _id: 0, post: 1, "comments.comment": 1 } },
]);