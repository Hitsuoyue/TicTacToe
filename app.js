import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import TicTacToe from './src/TicTacToe';
import './index.scss';

class APP extends Component{
    render(){
        return(
            <TicTacToe/>
        )
    }
}

ReactDOM.render(<APP/>, document.getElementById('app'));
