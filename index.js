const schema = require('./students_pb');
const fs = require('fs');

// Create a new message
const student1 = new schema.Student();

// Set the fields
student1.setId(1);
student1.setName('Mostafa Saad');
student1.setDof("1999-01-01");


const student2 = new schema.Student();

// Set the fields
student2.setId(1);
student2.setName('Mostafa Saad Helal');
student1.setDof("1999-06-07");


console.log("The student name is " + student1.getName() + " and his date of birth is " + student1.getDof());
console.log("The student name is " + student2.getName() + " and his date of birth is " + student2.getDof());

const students = new schema.Students();

students.addStudents(student1);
students.addStudents(student2);

const bytes = students.serializeBinary();
console.log("binary data: " + bytes);
fs.writeFileSync('students.bin', bytes);


const deserializedData= schema.Students.deserializeBinary(bytes);
console.log("deserialized data: " + JSON.stringify(deserializedData));
console.log( deserializedData.toString());


/*
    Pros and Cons of Protocol Buffers
---------------------------------------------------------------------------------------
    Pros:
    - Small size
    - Fast
    - Language independent
    - Easy to use
    - Easy to maintain
    - Easy to extend
---------------------------------------------------------------------------------------
    Cons:
    - Not human readable
    - Not easy to debug
    - Take time to establish a schema
    - Provide a Schema 'Complicate Implementation small application'.
---------------------------------------------------------------------------------------
    Use cases:
    - Data storage
    - Data transfer
    - Data serialization
    - Data deserialization

*/
