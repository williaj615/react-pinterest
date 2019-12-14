import React from 'react';
import firebase from 'firebase/app';
import './App.scss';
import firebaseConnection from '../helpers/data/connection';
import Auth from '../components/Auth/Auth';
import MyNavBar from '../components/MyNavBar/MyNavBar';

firebaseConnection.firebaseApp();
class App extends React.Component {
  state = {
    authed: false,
  }

  componentDidMount() {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ authed: true });
      } else {
        this.setState({ authed: false });
      }
    });
  }

  componentWillUnmount() {
    this.removeListener();
  }

  render() {
    const { authed } = this.state;

    return (
      <div className="App">
        <MyNavBar authed={authed}/>
          <button className="btn btn-info">REACT PINTEREST</button>
          {
            (authed) ? (<div>You logged in</div>) : (<Auth />)
          }
      </div>
    );
  }
}

export default App;
