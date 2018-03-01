import React, {Component} from 'react';

class Header extends Component{
    render(){
        const { winner, master, refreshGame } = this.props;
        let status = winner ? `Winner is ${winner}！` : `Next Player: ${master}`;
        return(
            <div className='title'>
                {status}
                <button className='refresh' onClick={refreshGame}/>
            </div>
        )
    }
}

export default Header;
