import React, { Component } from 'react';

class WeightForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {weight: ''};
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            ...this.state,
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        const { weight } = this.state;
        alert(`weight: ${weight}`);

        const datapack = {
            "weight": weight
        };

        const floute = "127.0.0.1:5000/"
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Weight:
                    <input name='weight' 
                    type='number' 
                    value= {this.state.weight} 
                    onChange={this.handleChange}
                    />
                </label>
                <input type='submit' /><br />
            </form>
        );
    }

}

export default WeightForm;