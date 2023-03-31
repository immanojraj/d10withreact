import React from 'react';
import './App.css';
import LayoutsList from './components/Layouts/LayoutsList';
import config from './config';

const API_ROOT = `${config.base}jsonapi/`;
const CONTENT_TYPE = `layouts`;
const LIST_URL = `${API_ROOT}node/${CONTENT_TYPE}`;

class App extends React.Component{
  constructor(){
    super();
      this.state = {data: null}
      this.loadDestinations = this.loadDestinations.bind(this);
      this.updateData = this.updateData.bind(this);
  }
  componentDidMount() {
    this.loadDestinations();
  }

  loadDestinations() {
    // Fetch Destinations.
    fetch(LIST_URL, {mode:'cors'})
      .then(function (response) {
        return response.json();
      })
      .then((data) => this.updateData(data))
      .catch(err => console.log('Fetching Contents Failed', err));
  }

  updateData(responseData) {
    this.setState({data: responseData.data});
  }

  render(){
    return<>
      <LayoutsList name="Button" data={this.state.data}/>
    </>
  }

}

export default App;
