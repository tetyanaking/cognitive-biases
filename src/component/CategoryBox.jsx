import {hot} from 'react-hot-loader';
import React from 'react';
import './CategoryBox.css';
import ReactGA from "react-ga";

ReactGA.initialize('UA-131044764-1');
ReactGA.pageview(window.location.pathname + window.location.search);

class CategoryBox extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            name: props.name,
            color: props.color
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.name != this.props.name)
            this.setState({
                name: this.props.name,
                color: this.props.color
            })
    }

    render() {
        return (<div className="biascategory_container" style={{backgroundColor: this.state.color}}>
            <div className={"biascategory_text"}>{this.state.name}</div>
        </div>)
    }
}

export default hot(module)(CategoryBox);
