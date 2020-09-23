//is going to hold handler functions and we will EVENTUALLY store data here. 
//exporting in node is different also: exporting an object of methods. 

const { send } = require("process");

//const movies is DATA! So it's an api essentially. It's an array of objects
let movies =[
    {id:1, name: 'Sponge Bob', goodMovie: true},
    {id:2, name: 'Invisible Man', goodMovie: true},
    {id:3, name: 'Star Wars', goodMovie: false}
];


module.exports ={

    greeting: (req, res) => {
        res.status(200).send('Hello World')
    },
        getMovies: (req,res) => {
            res.status(200).send(movies)
        }, 
        getSingleMovie: (req, res) => {
            // console.log(req.params)
            let movie = movies.find(element => {element.id === +req.params.id})
            res.status(200).send(movie)
        },
        addMovie: (req, res) => {
         // console.log(req.body)

            let newMovie={
                id: movies[movies.length-1].id +1,
                name: req.body.name,
                goodMovie:req.body.newMovie
            }
            movies.push(newMovie);
            res.status(200).send(movies)
        },
        updateName: (req, res) => {
            let movie = movies.find(element => element.id === +req.params.id)
            movie.name = req.body.name

            res.status(200).send(movies)
        },
        deleteMovie: (req, res) => {
                // console.log(req.params)
                let movie = movies.findIndex(element => element.id === +req.params.id);
                movies.splice(movie, 1);

                res.status(200).send(movies)
        }
}