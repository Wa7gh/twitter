import React, { Component } from 'react'
import Axios from 'axios'

export class App extends Component {


  state = {
    data: [],
    id: 0,
    message: null,
    intervalIsSet: false,
    idToDelete: null,
    idToUpdate: null,
    objectToUpdate: null,
  };

  componentDidMount() {
    Axios.get('http://localhost:5200/auth')
    .then((res) => {
      console.log(res.data);
      this.setState({
        data: res.data
      })
    })
    
  }
  
  // componentDidMount() {
  //   fetch('http://localhost:5200/auth')
  //   .then((data) => data.json())
  //   .then((res) => this.setState({ data: res.data }));
  // }

  // componentDidMount() {
  //   this.getDataFromDb();
  //   if (!this.state.intervalIsSet) {
  //     let interval = setInterval(this.getDataFromDb, 1000);
  //     this.setState({ intervalIsSet: interval });
  //   }
  // }
  
  render() {


    const { data } = this.state;
    return (
      <div>

        { data}
      {/* <ul>
        {data.length <= 0
          ? 'NO DB ENTRIES YET'
          : data.map((dat) => (
              <li style={{ padding: '10px' }}>
                <span style={{ color: 'gray' }}> username: </span> {dat.username} <br />
                <span style={{ color: 'gray' }}> data: </span>
                {dat.message}
              </li>
            ))}
      </ul> */}
      </div>
    )
  }
}

export default App

