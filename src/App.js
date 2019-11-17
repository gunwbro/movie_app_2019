import React from 'react';
import axios from "axios";
class App extends React.Component{
  state = {
    isLoading: true,
    movies: []
  }
  componentDidMount(){                      //render가 되면 호출되는 함수

    axios.get("https://yts-proxy.now.sh/list_movies.json");
  }
  render(){
    const { isLoading } = this.state;
    return  (
      <div>
        {
          isLoading ? "Loading" : "We are ready"
        }
      </div>
    );
  }
}

export default App;
