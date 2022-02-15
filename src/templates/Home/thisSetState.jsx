import { React, Component } from 'react/cjs/react.production.min';
import './styles.css';

export class Home extends Component {
    state = {
        counter: 0
    }

    handleClick = () => {
        this.setState((prevState) => {
            return { counter: prevState.counter + 1 }
        }, () => {
            console.log(this.state.counter);
        })
    }

    render() {
        return (
            <div className='container'>
                <h1>{this.state.counter}</h1>
                <button onClick={this.handleClick}>Increment</button>
            </div>
        )
    }
}
