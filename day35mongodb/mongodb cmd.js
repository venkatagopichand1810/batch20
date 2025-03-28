lease enter a MongoDB connection string (Default: mongodb://localhost/):

Current Mongosh Log ID: 67e6a3c4db922283cb90defd
Connecting to:          mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.2.9
Using MongoDB:          7.0.11
Using Mongosh:          2.2.9
mongosh 2.3.9 is available for download: https://www.mongodb.com/try/download/shell

For mongosh info see: https://docs.mongodb.com/mongodb-shell/

------
   The server generated these startup warnings when booting
   2025-03-28T17:51:09.661+05:30: Access control is not enabled for the database. Read and write access to data and configuration is unrestricted
------

test> show dbs
11111                        20.00 KiB
19thdec                     144.00 KiB
21DEC2024                   144.00 KiB
22DECEBER2024                40.00 KiB
23RDDEC2024                  72.00 KiB
24dec2024login              108.00 KiB
26THDEC2024                  72.00 KiB
28thdec2024                 108.00 KiB
29THDEC2024                 108.00 KiB
6THFEB2025                   72.00 KiB
7THFEB2025                   72.00 KiB
8thfeb2025                   84.00 KiB
8thfeb2025stanns            108.00 KiB
EventManagementDB            56.00 KiB
LMS                          72.00 KiB
Venkat100                    16.00 KiB
Venkat76                     12.00 KiB
admin                        40.00 KiB
assessment-platform         732.00 KiB
assibgment                    8.00 KiB
authLogin                    72.00 KiB
bookstore                    40.00 KiB
chirlapropetysolutions      784.00 KiB
config                       72.00 KiB
databaseShopping            296.00 KiB
dbGuvi                       40.00 KiB
deskapplication             148.00 KiB
ecommerce                    80.00 KiB
finalhostel                  68.00 KiB
fjsdlfhj                     20.00 KiB
flightapp                    24.00 KiB
fridayDB                    172.00 KiB
fridayRecipeDatabase         72.00 KiB
frontDeskApp                 20.00 KiB
ganesh                       40.00 KiB
guvi13thdec                  72.00 KiB
guviproject                 268.00 KiB
hostel                      328.00 KiB
local                       120.00 KiB
lokesh                       72.00 KiB
mernGuvi                     40.00 KiB
mongodbbbbb                  44.00 KiB
mydatabase                   88.00 KiB
prabhudatabase               40.00 KiB
productData                 400.00 KiB
products                    112.00 KiB
projectTwo                  108.00 KiB
projectone                   72.00 KiB
recipeDB                     72.00 KiB
recipeDatabase                8.00 KiB
restaurant                  252.00 KiB
rizamadam                     8.00 KiB
saibabaaaaaaaaaaa           464.00 KiB
sanjeev                      72.00 KiB
saturday                    156.00 KiB
schoolDB                     72.00 KiB
studentPreetidata            72.00 KiB
test                         40.00 KiB
venkat                       40.00 KiB
venkat1234                   60.00 KiB
venkataaaaa                  40.00 KiB
venkataaaaaaaaaaaaaaaaaaaa   44.00 KiB
test> use batch20_2025
switched to db batch20_2025
batch20_2025> db.createCollection("users")
{ ok: 1 }
batch20_2025> db.users.insertOne({name: "leena", email: "leena@gmail.com"})
{
  acknowledged: true,
  insertedId: ObjectId('67e6ac19db922283cb90defe')
}
batch20_2025> db.users.find()
[
  {
    _id: ObjectId('67e6ac19db922283cb90defe'),
    name: 'leena',
    email: 'leena@gmail.com'
  }
]
batch20_2025> db.users.insertOne({name: "achal", email: "achal@gmail.com"})
{
  acknowledged: true,
  insertedId: ObjectId('67e6ac5bdb922283cb90deff')
}
batch20_2025> db.users.find()
[
  {
    _id: ObjectId('67e6ac19db922283cb90defe'),
    name: 'leena',
    email: 'leena@gmail.com'
  },
  {
    _id: ObjectId('67e6ac5bdb922283cb90deff'),
    name: 'achal',
    email: 'achal@gmail.com'
  }
]
batch20_2025> db.users.insertOne({name: "venkatesh", email: "achal@gmail.com"})
{
  acknowledged: true,
  insertedId: ObjectId('67e6ac85db922283cb90df00')
}
batch20_2025> db.users.insertOne({name: "arun", email: "achal@gmail.com"})
{
  acknowledged: true,
  insertedId: ObjectId('67e6ac8bdb922283cb90df01')
}
batch20_2025> db.users.insertOne({name: "anushkaran", email: "anushkaran@gmail.com"}
...
... "
Uncaught:
SyntaxError: Unterminated string constant. (3:0)

  1 | db.users.insertOne({name: "anushkaran", email: "anushkaran@gmail.com"}
  2 |
> 3 | "
    | ^
  4 |

batch20_2025> db.users.insertOne({name: "anushkaran", email: "anushkaran@gmail.com"})
{
  acknowledged: true,
  insertedId: ObjectId('67e6ac9cdb922283cb90df02')
}
batch20_2025> db.users.insertOne({name: "yashwanth", email: "yashwanth@gmail.com"})
{
  acknowledged: true,
  insertedId: ObjectId('67e6acacdb922283cb90df03')
}
batch20_2025> db.users.find()
[
  {
    _id: ObjectId('67e6ac19db922283cb90defe'),
    name: 'leena',
    email: 'leena@gmail.com'
  },
  {
    _id: ObjectId('67e6ac5bdb922283cb90deff'),
    name: 'achal',
    email: 'achal@gmail.com'
  },
  {
    _id: ObjectId('67e6ac85db922283cb90df00'),
    name: 'venkatesh',
    email: 'achal@gmail.com'
  },
  {
    _id: ObjectId('67e6ac8bdb922283cb90df01'),
    name: 'arun',
    email: 'achal@gmail.com'
  },
  {
    _id: ObjectId('67e6ac9cdb922283cb90df02'),
    name: 'anushkaran',
    email: 'anushkaran@gmail.com'
  },
  {
    _id: ObjectId('67e6acacdb922283cb90df03'),
    name: 'yashwanth',
    email: 'yashwanth@gmail.com'
  }
]
batch20_2025> show collections
users
batch20_2025> db.createCollection("students
Uncaught:
SyntaxError: Unterminated string constant. (1:20)

> 1 | db.createCollection("students
    |                     ^
  2 |

batch20_2025> db.createCollection("students")
{ ok: 1 }
batch20_2025>  db.students.insertMany([
...     {name: "rama", age: 30, email: "rama@gmail.com", hobbies: ["music", "sports"]},
...     {name: "john", age: 25, email: "john@gmail.com", hobbies: ["books", "travel"]},
...     {name: "jack", age: 35, email: "jack@gmail.com", hobbies: ["sports", "travel"]}
...
...  ]);
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('67e6b564db922283cb90df04'),
    '1': ObjectId('67e6b564db922283cb90df05'),
    '2': ObjectId('67e6b564db922283cb90df06')
  }
}
batch20_2025>

batch20_2025>  db.students.find()
[
  {
    _id: ObjectId('67e6b564db922283cb90df04'),
    name: 'rama',
    age: 30,
    email: 'rama@gmail.com',
    hobbies: [ 'music', 'sports' ]
  },
  {
    _id: ObjectId('67e6b564db922283cb90df05'),
    name: 'john',
    age: 25,
    email: 'john@gmail.com',
    hobbies: [ 'books', 'travel' ]
  },
  {
    _id: ObjectId('67e6b564db922283cb90df06'),
    name: 'jack',
    age: 35,
    email: 'jack@gmail.com',
    hobbies: [ 'sports', 'travel' ]
  }
]
batch20_2025>  db.users.find({age : {$gt: 25}});

batch20_2025>  db.users.find({age : {$gte: 25}})

batch20_2025>  db.students.find({age : {$gte: 25}})
[
  {
    _id: ObjectId('67e6b564db922283cb90df04'),
    name: 'rama',
    age: 30,
    email: 'rama@gmail.com',
    hobbies: [ 'music', 'sports' ]
  },
  {
    _id: ObjectId('67e6b564db922283cb90df05'),
    name: 'john',
    age: 25,
    email: 'john@gmail.com',
    hobbies: [ 'books', 'travel' ]
  },
  {
    _id: ObjectId('67e6b564db922283cb90df06'),
    name: 'jack',
    age: 35,
    email: 'jack@gmail.com',
    hobbies: [ 'sports', 'travel' ]
  }
]
batch20_2025>  db.students.find({age : {$gte: 30}})
[
  {
    _id: ObjectId('67e6b564db922283cb90df04'),
    name: 'rama',
    age: 30,
    email: 'rama@gmail.com',
    hobbies: [ 'music', 'sports' ]
  },
  {
    _id: ObjectId('67e6b564db922283cb90df06'),
    name: 'jack',
    age: 35,
    email: 'jack@gmail.com',
    hobbies: [ 'sports', 'travel' ]
  }
]
batch20_2025>  db.students.find((hobbies: "sports"));
Uncaught:
SyntaxError: Unexpected token, expected "," (1:26)

> 1 |  db.students.find((hobbies: "sports"));
    |                           ^
  2 |

batch20_2025>  db.students.find({hobbies: "sports"})
[
  {
    _id: ObjectId('67e6b564db922283cb90df04'),
    name: 'rama',
    age: 30,
    email: 'rama@gmail.com',
    hobbies: [ 'music', 'sports' ]
  },
  {
    _id: ObjectId('67e6b564db922283cb90df06'),
    name: 'jack',
    age: 35,
    email: 'jack@gmail.com',
    hobbies: [ 'sports', 'travel' ]
  }
]
batch20_2025>  db.students.find({hobbies: {$all: ["music", "sports"]}})
[
  {
    _id: ObjectId('67e6b564db922283cb90df04'),
    name: 'rama',
    age: 30,
    email: 'rama@gmail.com',
    hobbies: [ 'music', 'sports' ]
  }
]
batch20_2025>  db.students.insertMany([
...     {_id: ObjectId("venkat_1"), name: "rama", age: 30, email: "rama@gmail.com", hobbies: ["music", "sports"]},
...     {_id: ObjectId("venkat_2"), name: "john", age: 25, email: "john@gmail.com", hobbies: ["books", "travel"]},
...     {_id: ObjectId("venkat_3"), name: "jack", age: 35, email: "jack@gmail.com", hobbies: ["sports", "travel"]}
...
...  ])
BSONError: input must be a 24 character hex string, 12 byte Uint8Array, or an integer
batch20_2025>  db.students.insertMany([
...     {_id: ObjectId("uyrtdfg12345"), name: "rama", age: 30, email: "rama@gmail.com", hobbies: ["music", "sports"]},
...     {_id: ObjectId("uyrtdfd12345"), name: "john", age: 25, email: "john@gmail.com", hobbies: ["books", "travel"]},
...     {_id: ObjectId("uyrtdfh12345"), name: "jack", age: 35, email: "jack@gmail.com", hobbies: ["sports", "travel"]}
...
...  ]);
BSONError: input must be a 24 character hex string, 12 byte Uint8Array, or an integer
batch20_2025>  db.students.insertMany([
...     {_id: ObjectId("uyrtdfg12345uyrtdfg12345"), name: "rama", age: 30, email: "rama@gmail.com", hobbies: ["music", "sports"]},
...     {_id: ObjectId("uyrtdfd12345uyrtdfg12345"), name: "john", age: 25, email: "john@gmail.com", hobbies: ["books", "travel"]},
...     {_id: ObjectId("uyrtdfh12345uyrtdfg12345"), name: "jack", age: 35, email: "jack@gmail.com", hobbies: ["sports", "travel"]}
...
...  ]);
BSONError: input must be a 24 character hex string, 12 byte Uint8Array, or an integer
batch20_2025> db.students.insertMany([
...     {_id: "venkat_1", name: "rama", age: 30, email: "rama@gmail.com", hobbies: ["music", "sports"]},
...     {_id: "venkat_2", name: "john", age: 25, email: "john@gmail.com", hobbies: ["books", "travel"]},
...     {_id: "venkat_3", name: "jack", age: 35, email: "jack@gmail.com", hobbies: ["sports", "travel"]}
...
...  ])
{
  acknowledged: true,
  insertedIds: { '0': 'venkat_1', '1': 'venkat_2', '2': 'venkat_3' }
}
batch20_2025> db.students.find()
[
  {
    _id: ObjectId('67e6b564db922283cb90df04'),
    name: 'rama',
    age: 30,
    email: 'rama@gmail.com',
    hobbies: [ 'music', 'sports' ]
  },
  {
    _id: ObjectId('67e6b564db922283cb90df05'),
    name: 'john',
    age: 25,
    email: 'john@gmail.com',
    hobbies: [ 'books', 'travel' ]
  },
  {
    _id: ObjectId('67e6b564db922283cb90df06'),
    name: 'jack',
    age: 35,
    email: 'jack@gmail.com',
    hobbies: [ 'sports', 'travel' ]
  },
  {
    _id: 'venkat_1',
    name: 'rama',
    age: 30,
    email: 'rama@gmail.com',
    hobbies: [ 'music', 'sports' ]
  },
  {
    _id: 'venkat_2',
    name: 'john',
    age: 25,
    email: 'john@gmail.com',
    hobbies: [ 'books', 'travel' ]
  },
  {
    _id: 'venkat_3',
    name: 'jack',
    age: 35,
    email: 'jack@gmail.com',
    hobbies: [ 'sports', 'travel' ]
  }
]
batch20_2025>  db.students.insertMany([
... {_id: "venkat_4", name: "rama", age: 30, email: "rama@gmail.com", hobbies: ["music", "sports"], grade: "A"},
...     {_id: "venkat_5", name: "john", age: 25, email: "john@gmail.com", hobbies: ["books", "travel"], grade: "B"},
...     {_id: "venkat_6", name: "jack", age: 35, email: "jack@gmail.com", hobbies: ["sports", "travel"], grade: "C"},
...     {_id: "venkat_7", name: "rama", age: 30, email: "rama@gmail.com", hobbies: ["music", "sports"], grade: "B"},
...     {_id: "venkat_8", name: "john", age: 25, email: "john@gmail.com", hobbies: ["books", "travel"], grade: "C"},
...     {_id: "venkat_9", name: "jack", age: 35, email: "jack@gmail.com", hobbies: ["sports", "travel"], grade: "D"},
...
...  ]);
{
  acknowledged: true,
  insertedIds: {
    '0': 'venkat_4',
    '1': 'venkat_5',
    '2': 'venkat_6',
    '3': 'venkat_7',
    '4': 'venkat_8',
    '5': 'venkat_9'
  }
}
batch20_2025> db.students.find()
[
  {
    _id: ObjectId('67e6b564db922283cb90df04'),
    name: 'rama',
    age: 30,
    email: 'rama@gmail.com',
    hobbies: [ 'music', 'sports' ]
  },
  {
    _id: ObjectId('67e6b564db922283cb90df05'),
    name: 'john',
    age: 25,
    email: 'john@gmail.com',
    hobbies: [ 'books', 'travel' ]
  },
  {
    _id: ObjectId('67e6b564db922283cb90df06'),
    name: 'jack',
    age: 35,
    email: 'jack@gmail.com',
    hobbies: [ 'sports', 'travel' ]
  },
  {
    _id: 'venkat_1',
    name: 'rama',
    age: 30,
    email: 'rama@gmail.com',
    hobbies: [ 'music', 'sports' ]
  },
  {
    _id: 'venkat_2',
    name: 'john',
    age: 25,
    email: 'john@gmail.com',
    hobbies: [ 'books', 'travel' ]
  },
  {
    _id: 'venkat_3',
    name: 'jack',
    age: 35,
    email: 'jack@gmail.com',
    hobbies: [ 'sports', 'travel' ]
  },
  {
    _id: 'venkat_4',
    name: 'rama',
    age: 30,
    email: 'rama@gmail.com',
    hobbies: [ 'music', 'sports' ],
    grade: 'A'
  },
  {
    _id: 'venkat_5',
    name: 'john',
    age: 25,
    email: 'john@gmail.com',
    hobbies: [ 'books', 'travel' ],
    grade: 'B'
  },
  {
    _id: 'venkat_6',
    name: 'jack',
    age: 35,
    email: 'jack@gmail.com',
    hobbies: [ 'sports', 'travel' ],
    grade: 'C'
  },
  {
    _id: 'venkat_7',
    name: 'rama',
    age: 30,
    email: 'rama@gmail.com',
    hobbies: [ 'music', 'sports' ],
    grade: 'B'
  },
  {
    _id: 'venkat_8',
    name: 'john',
    age: 25,
    email: 'john@gmail.com',
    hobbies: [ 'books', 'travel' ],
    grade: 'C'
  },
  {
    _id: 'venkat_9',
    name: 'jack',
    age: 35,
    email: 'jack@gmail.com',
    hobbies: [ 'sports', 'travel' ],
    grade: 'D'
  }
]
batch20_2025>  db.students.find({
...     $and: [
...         {age: {$gt: 20}},
...         {grade: "A"}
...     ]
...  })
[
  {
    _id: 'venkat_4',
    name: 'rama',
    age: 30,
    email: 'rama@gmail.com',
    hobbies: [ 'music', 'sports' ],
    grade: 'A'
  }
]
batch20_2025>

batch20_2025> db.students.find({
...     grade: {$in: ["A", "B"]}
... })
[
  {
    _id: 'venkat_4',
    name: 'rama',
    age: 30,
    email: 'rama@gmail.com',
    hobbies: [ 'music', 'sports' ],
    grade: 'A'
  },
  {
    _id: 'venkat_5',
    name: 'john',
    age: 25,
    email: 'john@gmail.com',
    hobbies: [ 'books', 'travel' ],
    grade: 'B'
  },
  {
    _id: 'venkat_7',
    name: 'rama',
    age: 30,
    email: 'rama@gmail.com',
    hobbies: [ 'music', 'sports' ],
    grade: 'B'
  }
]
batch20_2025> [ 'music', 'sports' ],
...     gr
ReferenceError: gr is not defined
batch20_2025> db.students.find({
...     grade: {$ne: "A"}
... });
[
  {
    _id: ObjectId('67e6b564db922283cb90df04'),
    name: 'rama',
    age: 30,
    email: 'rama@gmail.com',
    hobbies: [ 'music', 'sports' ]
  },
  {
    _id: ObjectId('67e6b564db922283cb90df05'),
    name: 'john',
    age: 25,
    email: 'john@gmail.com',
    hobbies: [ 'books', 'travel' ]
  },
  {
    _id: ObjectId('67e6b564db922283cb90df06'),
    name: 'jack',
    age: 35,
    email: 'jack@gmail.com',
    hobbies: [ 'sports', 'travel' ]
  },
  {
    _id: 'venkat_1',
    name: 'rama',
    age: 30,
    email: 'rama@gmail.com',
    hobbies: [ 'music', 'sports' ]
  },
  {
    _id: 'venkat_2',
    name: 'john',
    age: 25,
    email: 'john@gmail.com',
    hobbies: [ 'books', 'travel' ]
  },
  {
    _id: 'venkat_3',
    name: 'jack',
    age: 35,
    email: 'jack@gmail.com',
    hobbies: [ 'sports', 'travel' ]
  },
  {
    _id: 'venkat_5',
    name: 'john',
    age: 25,
    email: 'john@gmail.com',
    hobbies: [ 'books', 'travel' ],
    grade: 'B'
  },
  {
    _id: 'venkat_6',
    name: 'jack',
    age: 35,
    email: 'jack@gmail.com',
    hobbies: [ 'sports', 'travel' ],
    grade: 'C'
  },
  {
    _id: 'venkat_7',
    name: 'rama',
    age: 30,
    email: 'rama@gmail.com',
    hobbies: [ 'music', 'sports' ],
    grade: 'B'
  },
  {
    _id: 'venkat_8',
    name: 'john',
    age: 25,
    email: 'john@gmail.com',
    hobbies: [ 'books', 'travel' ],
    grade: 'C'
  },
  {
    _id: 'venkat_9',
    name: 'jack',
    age: 35,
    email: 'jack@gmail.com',
    hobbies: [ 'sports', 'travel' ],
    grade: 'D'
  }
]
batch20_2025> db.students.find({
... name: {$regex: /^J/}
...
... });

batch20_2025>

batch20_2025> db.students.find({
... name: {$regex: /^j/}
...
... });
[
  {
    _id: ObjectId('67e6b564db922283cb90df05'),
    name: 'john',
    age: 25,
    email: 'john@gmail.com',
    hobbies: [ 'books', 'travel' ]
  },
  {
    _id: ObjectId('67e6b564db922283cb90df06'),
    name: 'jack',
    age: 35,
    email: 'jack@gmail.com',
    hobbies: [ 'sports', 'travel' ]
  },
  {
    _id: 'venkat_2',
    name: 'john',
    age: 25,
    email: 'john@gmail.com',
    hobbies: [ 'books', 'travel' ]
  },
  {
    _id: 'venkat_3',
    name: 'jack',
    age: 35,
    email: 'jack@gmail.com',
    hobbies: [ 'sports', 'travel' ]
  },
  {
    _id: 'venkat_5',
    name: 'john',
    age: 25,
    email: 'john@gmail.com',
    hobbies: [ 'books', 'travel' ],
    grade: 'B'
  },
  {
    _id: 'venkat_6',
    name: 'jack',
    age: 35,
    email: 'jack@gmail.com',
    hobbies: [ 'sports', 'travel' ],
    grade: 'C'
  },
  {
    _id: 'venkat_8',
    name: 'john',
    age: 25,
    email: 'john@gmail.com',
    hobbies: [ 'books', 'travel' ],
    grade: 'C'
  },
  {
    _id: 'venkat_9',
    name: 'jack',
    age: 35,
    email: 'jack@gmail.com',
    hobbies: [ 'sports', 'travel' ],
    grade: 'D'
  }
]
batch20_2025> db.students.find({
... name: {$regex: /^r/}
...
... })
[
  {
    _id: ObjectId('67e6b564db922283cb90df04'),
    name: 'rama',
    age: 30,
    email: 'rama@gmail.com',
    hobbies: [ 'music', 'sports' ]
  },
  {
    _id: 'venkat_1',
    name: 'rama',
    age: 30,
    email: 'rama@gmail.com',
    hobbies: [ 'music', 'sports' ]
  },
  {
    _id: 'venkat_4',
    name: 'rama',
    age: 30,
    email: 'rama@gmail.com',
    hobbies: [ 'music', 'sports' ],
    grade: 'A'
  },
  {
    _id: 'venkat_7',
    name: 'rama',
    age: 30,
    email: 'rama@gmail.com',
    hobbies: [ 'music', 'sports' ],
    grade: 'B'
  }
]
batch20_2025> db.students.find({
... name: {$regex: /k$/}
...
... });
[
  {
    _id: ObjectId('67e6b564db922283cb90df06'),
    name: 'jack',
    age: 35,
    email: 'jack@gmail.com',
    hobbies: [ 'sports', 'travel' ]
  },
  {
    _id: 'venkat_3',
    name: 'jack',
    age: 35,
    email: 'jack@gmail.com',
    hobbies: [ 'sports', 'travel' ]
  },
  {
    _id: 'venkat_6',
    name: 'jack',
    age: 35,
    email: 'jack@gmail.com',
    hobbies: [ 'sports', 'travel' ],
    grade: 'C'
  },
  {
    _id: 'venkat_9',
    name: 'jack',
    age: 35,
    email: 'jack@gmail.com',
    hobbies: [ 'sports', 'travel' ],
    grade: 'D'
  }
]
batch20_2025> db.students.find().sort({age : 1})
[
  {
    _id: ObjectId('67e6b564db922283cb90df05'),
    name: 'john',
    age: 25,
    email: 'john@gmail.com',
    hobbies: [ 'books', 'travel' ]
  },
  {
    _id: 'venkat_2',
    name: 'john',
    age: 25,
    email: 'john@gmail.com',
    hobbies: [ 'books', 'travel' ]
  },
  {
    _id: 'venkat_5',
    name: 'john',
    age: 25,
    email: 'john@gmail.com',
    hobbies: [ 'books', 'travel' ],
    grade: 'B'
  },
  {
    _id: 'venkat_8',
    name: 'john',
    age: 25,
    email: 'john@gmail.com',
    hobbies: [ 'books', 'travel' ],
    grade: 'C'
  },
  {
    _id: ObjectId('67e6b564db922283cb90df04'),
    name: 'rama',
    age: 30,
    email: 'rama@gmail.com',
    hobbies: [ 'music', 'sports' ]
  },
  {
    _id: 'venkat_1',
    name: 'rama',
    age: 30,
    email: 'rama@gmail.com',
    hobbies: [ 'music', 'sports' ]
  },
  {
    _id: 'venkat_4',
    name: 'rama',
    age: 30,
    email: 'rama@gmail.com',
    hobbies: [ 'music', 'sports' ],
    grade: 'A'
  },
  {
    _id: 'venkat_7',
    name: 'rama',
    age: 30,
    email: 'rama@gmail.com',
    hobbies: [ 'music', 'sports' ],
    grade: 'B'
  },
  {
    _id: ObjectId('67e6b564db922283cb90df06'),
    name: 'jack',
    age: 35,
    email: 'jack@gmail.com',
    hobbies: [ 'sports', 'travel' ]
  },
  {
    _id: 'venkat_3',
    name: 'jack',
    age: 35,
    email: 'jack@gmail.com',
    hobbies: [ 'sports', 'travel' ]
  },
  {
    _id: 'venkat_6',
    name: 'jack',
    age: 35,
    email: 'jack@gmail.com',
    hobbies: [ 'sports', 'travel' ],
    grade: 'C'
  },
  {
    _id: 'venkat_9',
    name: 'jack',
    age: 35,
    email: 'jack@gmail.com',
    hobbies: [ 'sports', 'travel' ],
    grade: 'D'
  }
]
batch20_2025> ame: 'jack',
...     age: 35,
batch20_2025> db.students.find().sort({age : -1})
[
  {
    _id: ObjectId('67e6b564db922283cb90df06'),
    name: 'jack',
    age: 35,
    email: 'jack@gmail.com',
    hobbies: [ 'sports', 'travel' ]
  },
  {
    _id: 'venkat_3',
    name: 'jack',
    age: 35,
    email: 'jack@gmail.com',
    hobbies: [ 'sports', 'travel' ]
  },
  {
    _id: 'venkat_6',
    name: 'jack',
    age: 35,
    email: 'jack@gmail.com',
    hobbies: [ 'sports', 'travel' ],
    grade: 'C'
  },
  {
    _id: 'venkat_9',
    name: 'jack',
    age: 35,
    email: 'jack@gmail.com',
    hobbies: [ 'sports', 'travel' ],
    grade: 'D'
  },
  {
    _id: ObjectId('67e6b564db922283cb90df04'),
    name: 'rama',
    age: 30,
    email: 'rama@gmail.com',
    hobbies: [ 'music', 'sports' ]
  },
  {
    _id: 'venkat_1',
    name: 'rama',
    age: 30,
    email: 'rama@gmail.com',
    hobbies: [ 'music', 'sports' ]
  },
  {
    _id: 'venkat_4',
    name: 'rama',
    age: 30,
    email: 'rama@gmail.com',
    hobbies: [ 'music', 'sports' ],
    grade: 'A'
  },
  {
    _id: 'venkat_7',
    name: 'rama',
    age: 30,
    email: 'rama@gmail.com',
    hobbies: [ 'music', 'sports' ],
    grade: 'B'
  },
  {
    _id: ObjectId('67e6b564db922283cb90df05'),
    name: 'john',
    age: 25,
    email: 'john@gmail.com',
    hobbies: [ 'books', 'travel' ]
  },
  {
    _id: 'venkat_2',
    name: 'john',
    age: 25,
    email: 'john@gmail.com',
    hobbies: [ 'books', 'travel' ]
  },
  {
    _id: 'venkat_5',
    name: 'john',
    age: 25,
    email: 'john@gmail.com',
    hobbies: [ 'books', 'travel' ],
    grade: 'B'
  },
  {
    _id: 'venkat_8',
    name: 'john',
    age: 25,
    email: 'john@gmail.com',
    hobbies: [ 'books', 'travel' ],
    grade: 'C'
  }
]
batch20_2025> db.students.find().limit(3)
[
  {
    _id: ObjectId('67e6b564db922283cb90df04'),
    name: 'rama',
    age: 30,
    email: 'rama@gmail.com',
    hobbies: [ 'music', 'sports' ]
  },
  {
    _id: ObjectId('67e6b564db922283cb90df05'),
    name: 'john',
    age: 25,
    email: 'john@gmail.com',
    hobbies: [ 'books', 'travel' ]
  },
  {
    _id: ObjectId('67e6b564db922283cb90df06'),
    name: 'jack',
    age: 35,
    email: 'jack@gmail.com',
    hobbies: [ 'sports', 'travel' ]
  }
]
batch20_2025> db.students.find().skip(2).limit(3)
[
  {
    _id: ObjectId('67e6b564db922283cb90df06'),
    name: 'jack',
    age: 35,
    email: 'jack@gmail.com',
    hobbies: [ 'sports', 'travel' ]
  },
  {
    _id: 'venkat_1',
    name: 'rama',
    age: 30,
    email: 'rama@gmail.com',
    hobbies: [ 'music', 'sports' ]
  },
  {
    _id: 'venkat_2',
    name: 'john',
    age: 25,
    email: 'john@gmail.com',
    hobbies: [ 'books', 'travel' ]
  }
]
batch20_2025> db.students.find({ $or: [{age: {$gt:21}}, {grade: "A"}]})
[
  {
    _id: ObjectId('67e6b564db922283cb90df04'),
    name: 'rama',
    age: 30,
    email: 'rama@gmail.com',
    hobbies: [ 'music', 'sports' ]
  },
  {
    _id: ObjectId('67e6b564db922283cb90df05'),
    name: 'john',
    age: 25,
    email: 'john@gmail.com',
    hobbies: [ 'books', 'travel' ]
  },
  {
    _id: ObjectId('67e6b564db922283cb90df06'),
    name: 'jack',
    age: 35,
    email: 'jack@gmail.com',
    hobbies: [ 'sports', 'travel' ]
  },
  {
    _id: 'venkat_1',
    name: 'rama',
    age: 30,
    email: 'rama@gmail.com',
    hobbies: [ 'music', 'sports' ]
  },
  {
    _id: 'venkat_2',
    name: 'john',
    age: 25,
    email: 'john@gmail.com',
    hobbies: [ 'books', 'travel' ]
  },
  {
    _id: 'venkat_3',
    name: 'jack',
    age: 35,
    email: 'jack@gmail.com',
    hobbies: [ 'sports', 'travel' ]
  },
  {
    _id: 'venkat_4',
    name: 'rama',
    age: 30,
    email: 'rama@gmail.com',
    hobbies: [ 'music', 'sports' ],
    grade: 'A'
  },
  {
    _id: 'venkat_5',
    name: 'john',
    age: 25,
    email: 'john@gmail.com',
    hobbies: [ 'books', 'travel' ],
    grade: 'B'
  },
  {
    _id: 'venkat_6',
    name: 'jack',
    age: 35,
    email: 'jack@gmail.com',
    hobbies: [ 'sports', 'travel' ],
    grade: 'C'
  },
  {
    _id: 'venkat_7',
    name: 'rama',
    age: 30,
    email: 'rama@gmail.com',
    hobbies: [ 'music', 'sports' ],
    grade: 'B'
  },
  {
    _id: 'venkat_8',
    name: 'john',
    age: 25,
    email: 'john@gmail.com',
    hobbies: [ 'books', 'travel' ],
    grade: 'C'
  },
  {
    _id: 'venkat_9',
    name: 'jack',
    age: 35,
    email: 'jack@gmail.com',
    hobbies: [ 'sports', 'travel' ],
    grade: 'D'
  }
]
batch20_2025> db.students.find({ $or: [{age: {$gt:34}}, {grade: "C"}]})
[
  {
    _id: ObjectId('67e6b564db922283cb90df06'),
    name: 'jack',
    age: 35,
    email: 'jack@gmail.com',
    hobbies: [ 'sports', 'travel' ]
  },
  {
    _id: 'venkat_3',
    name: 'jack',
    age: 35,
    email: 'jack@gmail.com',
    hobbies: [ 'sports', 'travel' ]
  },
  {
    _id: 'venkat_6',
    name: 'jack',
    age: 35,
    email: 'jack@gmail.com',
    hobbies: [ 'sports', 'travel' ],
    grade: 'C'
  },
  {
    _id: 'venkat_8',
    name: 'john',
    age: 25,
    email: 'john@gmail.com',
    hobbies: [ 'books', 'travel' ],
    grade: 'C'
  },
  {
    _id: 'venkat_9',
    name: 'jack',
    age: 35,
    email: 'jack@gmail.com',
    hobbies: [ 'sports', 'travel' ],
    grade: 'D'
  }
]
batch20_2025>