import React, {Component} from 'react';

class Board extends Component{

    /**
     * 渲染多个棋盘格
     */
    renderSquares = () => {
        const { squares, onClickSquare } = this.props;
        let squaresDom = [];
        for(let i=0;i<9;i++){
            squaresDom.push(
                <button
                    key={i}
                    className='square'
                    onClick={e=>onClickSquare(e,i)}
                >
                    {squares[i]}
                </button>
            )
        };
        return squaresDom;
    }

    render(){
        return(
            <div className='board'>
                {this.renderSquares()}
            </div>
        )
    }
}

export default Board;
