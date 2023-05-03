import React, { Component } from 'react'
import api from './api'

class App extends Component {

  state= {
    filmes:[],
  }

  async componentDidMount(){
    const response = await api.get('star%20wars')
  
    this.setState({ filmes: response.data})
  }
  render(){

    const {filmes} = this.state

    return(
      <div>
        <h1>Listar os Filmes</h1>
        {console.log(filmes)}
        {filmes.map(filme=> (
          <li key={filme.show.id}>
            <h2><strong>Titulo: </strong>
            {filme.show.name}
            </h2>
            <p>
              {filme.show.url}
            </p>
            
          </li>
        ))}
      </div>
    )
  }
}

export default App;