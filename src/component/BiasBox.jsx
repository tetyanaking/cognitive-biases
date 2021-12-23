import {hot} from 'react-hot-loader';
import React from 'react';
import './BiasBox.css';

class BiasBox extends React.Component {

    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            bias: this.props.data,
            name: this.props.data.name,
            categories: this.props.data.categories,
            description: this.props.data.description,
            icon: this.props.data.icon,
            example: this.props.data.example,
        };
        this.categoryColors = props.categoryColors;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.data && this.state.name != this.props.data.name) {
            this.setState({
                bias: this.props.data,
                name: this.props.data.name,
                categories: this.props.data.categories,
                description: this.props.data.description,
                icon: this.props.data.icon,
                example: this.props.data.example,
            });
        }
    }

    render() {
        return (<div className="biasbox_container">
            <div className={"biasbox_cat_container"}>
                {this.state.categories.map(cat =>
                    <div className={"biasbox_cat"} style={{backgroundColor: this.categoryColors[cat]}}/>
                )}
            </div>
            <p className={"biasbox_name"}>{this.state.name}</p>
            <p className={"biasbox_description"}>{this.state.description}</p>
            <img className={"biasbox_icon"} src={this.state.icon}/>
            <p className={"biasbox_example"}> {this.state.example}</p>
        </div>)
    }
}

export default hot(module)(BiasBox);
