import {hot} from 'react-hot-loader';
import React from 'react';
import './BiasBox.css';
import ReactGA from "react-ga";

ReactGA.initialize('UA-131044764-1');
ReactGA.pageview(window.location.pathname + window.location.search);

class BiasBox extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {bias: props.data}
        this.categoryColors = props.categoryColors;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.data && this.state.bias && prevState.data.name !== this.state.bias.name) {
            this.setState({bias: this.props.data});
        }
    }

    render() {
        return (<div className="biasbox_container">
            <div className={"biasbox_cat_container"}>
                {this.state.bias.categories.map( cat =>
                    <div className={"biasbox_cat"} style={{backgroundColor: this.categoryColors[cat]}} />
                )}
            </div>
            <p className={"biasbox_name"}>{this.state.bias.name}</p>
            <p className={"biasbox_description"}>{this.state.bias.description}</p>
            <img className={"biasbox_icon"} src={this.state.bias.icon}/>
            <p className={"biasbox_example"}> {this.state.bias.example}</p>
        </div>)
    }
}

export default hot(module)(BiasBox);
