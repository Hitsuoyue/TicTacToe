import React, {Component} from 'react';

class Steps extends Component{

    /**
     * 渲染步骤条
     */
    renderSteps = () => {
        const { history, turnToStep } = this.props;
        let steps = [];
        history['data'].forEach((obj, index) => {
            steps.push(
                <button
                    key={index}
                    onClick={e=>turnToStep(e, index)}
                    className='step-btn'
                >
                    step{index}
                </button>
            )
        })
        return steps;
    }

    render(){
        return(
            <div className='steps'>
                {this.renderSteps()}
            </div>
        )
    }
}

export default Steps;
