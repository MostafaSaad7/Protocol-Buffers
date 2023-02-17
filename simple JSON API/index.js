
const fs = require('fs');
const express = require('express');
const app = express();


const students = [{

    name: 'Saad',
    dof: '6/7/1999',
    id: 1,
}]

const Mostafa = {
    name: 'Mostafa',
    dof: '6/7/1999',
    id: 2,
}

students.push(Mostafa)
students.push(Mostafa)
students.push(Mostafa)

fs.writeFileSync('students.json', JSON.stringify(students));


app.get('/', (req, res) => {
    res.send(JSON.stringify(students));
})


app.listen(3000, () => {
    console.log('Server is running on port 3000');
}
)