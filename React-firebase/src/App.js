import React, {Component} from 'react';
import ThreadDisplay from './components/ThreadDisplay.jsx';
import firebase from 'firebase/app';
import 'firebase/database';
import './App.css';

class App extends Component{
	constructor(props){
		super(props);
		const config = {
			apiKey: "AIzaSyBD00E4ktswDgFhcQjVCAqdbbC1ZapTQBA",
	    	authDomain: "forum-e3e28.firebaseapp.com",
	    	databaseURL: "https://forum-e3e28.firebaseio.com",
	    	projectId: "forum-e3e28",
		    storageBucket: "forum-e3e28.appspot.com",
	    	messagingSenderId: "677237478125"
		};
		this.app = firebase.initializeApp(config);
		this.database = this.app.database();
	}

    render(){
        return(
                <ThreadDisplay database={this.database} />
        );
    }
}

export default App;