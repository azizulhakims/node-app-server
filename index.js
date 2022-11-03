const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('simple node server running')
});

app.use(cors());
app.use(express.json());

const users = [
    { id: 1, name: 'azizul', email: 'it.azizulhakim@gmail.com' },
    { id: 2, name: 'hakim', email: 'it.azizulhakim@gmsil.com' },
    { id: 3, name: 'shahin', email: 'it.azizulhakim@gmsil.com' },
    { id: 4, name: 'rahim', email: 'it.azizulhakim@gmsil.com' },
    { id: 5, name: 'milon', email: 'it.azizulhakim@gmsil.com' },
];

app.get('/users', (req, res) => {
    res.send(users);
});

app.post('/users', (req, res) => {
    console.log('post API called');
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    console.log(user)
    res.send(user);
});



app.listen(port, () => {
    console.log(`simple not server running on port ${port}`);
})
