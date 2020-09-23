const express = require('express');
const ctrl = require('./controller');

const app = express();

app.use(express.json());


// app.get('./api/greeting', (req, res) => {
//     res.status(200).send('Hello World')
// })
//best practice to only use nouns when writing endpoints
app.get('/api/greeting', ctrl.greeting);
app.get('/api/movies', ctrl.getMovies);
app.get('/api/movie/:id', ctrl.getSingleMovie); //using request params
app.post('/api/movie', ctrl.addMovie);
app.put('/api/movie/:id', ctrl.updateName) //has the most moving pieces. 
app.delete('/api/movie/:id', ctrl.deleteMovie)
app.listen(5000, () => console.log('Server is running on 5000'));