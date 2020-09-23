import React, {Component} from "react"
import axios from 'axios'

class movieDisplay extends Component{
    constructor(){
        super()

        this.state ={
            selectedMovie: {}
        }
    }
       componentDidMount(){
            axios.get('/api/movie/1')
                .then(res => {
                    console.log(res.data)
                    this.setState({selectedMovie: res.data})
                })
                .catch(err => console.log(err))
    }
    render(){
        return(
            <section>
                {this.state.selectedMovie.name
               ? <h1> {this.state.selectedMovie.name} </h1>
                : null}
                
               
            </section>
        )
    }
}

export default movieDisplay;