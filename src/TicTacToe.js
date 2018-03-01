import React, {Component} from 'react';
import Header from './Header';
import Board from './Board';
import Steps from './Steps';

class TicTacToe extends Component{
    constructor(props){
        super(props);
        this.state = {
            master: 'A',
            winner: '',
            squares: Array(9).fill(undefined),
            history: {
                flag: false,
                data:[{
                    master: 'A',
                    squares: Array(9).fill(undefined)
                }]
            }
        };
        this.squaresA = [];
        this.squaresB = [];
    }



    /**
     * 判断是否有人连线成功
     */
    calculateWinner = () => {
        let winner = '';
        const { master } = this.state;
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        let squares = (master === 'A') ? this.squaresA : this.squaresB;

        lines.forEach(arr => {
            if(squares.indexOf(arr[0]) !== -1 && squares.indexOf(arr[1]) !== -1 && squares.indexOf(arr[2]) !== -1){
                winner = master;
            }
        });
        return winner;
    }

    /**
     * 下棋触发
     * @returns {*}
     */
    onClickSquare = (e, index) => {
        const {master, squares, winner, history} = this.state;
        const { flag, data } = history;
        if(squares[index] === undefined && !winner){
            if(flag){
                let newMaster = data[data.length-1].master;
                let newSquares = data[data.length-1].squares;
                let newHistory = Object.assign([], history);
                newHistory.flag = false;
                this.setState({
                    master: newMaster,
                    squares: newSquares,
                    history: newHistory
                })
            }else{
                let newSquares = Object.assign([], squares);
                newSquares[index] = master;
                let newMaster = '';
                switch (master){
                    case 'A':
                        newMaster = 'B';
                        this.squaresA.push(index);
                        break;
                    case 'B':
                        newMaster = 'A';
                        this.squaresB.push(index);
                        break;
                    default:
                        break;
                }

                let newHistory = Object.assign([], history);
                newHistory.data.push({
                    master: newMaster,
                    squares: newSquares
                });


                let winner = this.calculateWinner();

                this.setState({
                    master: newMaster,
                    squares: newSquares,
                    history: newHistory,
                    winner: winner
                })
            }
        }
    }

    /**
     * 再玩一把
     */
    refreshGame = () => {
        this.squaresA = [];
        this.squaresB = [];
        this.setState({
            master: 'A',
            winner: '',
            squares: Array(9).fill(undefined),
            history: {
                flag: false,
                data:[{
                    master: 'A',
                    squares: Array(9).fill(undefined)
                }]
            }
        })
    }

    /**
     * 跳转到某一步
     * @returns {*}
     */
    turnToStep = (e, index) => {
        const { history } = this.state;
        const { master, squares } = this.state.history.data[index];
        let newHistory = Object.assign({}, history);
        newHistory.flag = true;
        this.setState({
            squares: squares,
            master: master,
            history: newHistory
        })
    }

    render(){
        const { master, winner, squares, history } = this.state;
        return(
            <div className='game'>
                <Header
                    master={master}
                    winner={winner}
                    refreshGame={this.refreshGame}
                />
                <Board
                    squares={squares}
                    onClickSquare={this.onClickSquare}
                />
                <Steps
                    history={history}
                    turnToStep={this.turnToStep}
                />
            </div>
        )
    }
}

export default TicTacToe;
