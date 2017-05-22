import React from 'react';
import axios from 'axios'
import ListItmes from './components/listItems'
import './App.css';

class App extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			data: []
		}
	}

	componentWillMount(){
		let self = this
		axios.get('https://newsapi.org/v1/articles?source=techcrunch&apiKey=8f3ef4123b884857b17e951ae16e4142')
	  .then(function (response) {
	    self.setState({
				data : response.data.articles
			})
	  })
	  .catch(function (error) {
	    console.log(error);
	  });
	}

	componentDidMount(){

	}

  render() {
    return (
      <div className="App">
				<ListItmes data={this.state.data} />
      </div>
    );
  }
}

export default App;
