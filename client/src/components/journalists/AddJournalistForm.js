import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class AddJournalistForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            firstName: "",
            lastName: "",
            phoneNumber: "",
            employed: true
        }
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handlePhoneNumberChange = this.handlePhoneNumberChange.bind(this);
        this.handleRadioButtonChange = this.handleRadioButtonChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const firstName = this.state.firstName.trim();
        const lastName = this.state.lastName.trim();
        const phoneNumber = this.state.phoneNumber.trim();
        const employed = this.state.employed;
        if (!firstName || !lastName || !phoneNumber) {
            return
        }
        this.props.onJournalistSubmit({
            firstName: firstName,
            lastName: lastName,
            phoneNumber: phoneNumber,
            employed: employed
        })
        this.setState({
            firstName: "",
            lastName: "",
            phoneNumber: "",
            employed: true
        })
        return <Redirect to = "/http://localhost:3000/journalists" />
    }

    handleFirstNameChange(event) {
        this.setState({ firstName: event.target.value })
    }

    handleLastNameChange(event) {
        this.setState({ lastName: event.target.value })
    }

    handlePhoneNumberChange(event) {
        this.setState({ phoneNumber: event.target.value })
    }

    handleRadioButtonChange(event) {
        const booleanMapping = {
            "true": true,
            "false": false
        }
        this.setState({ employed: booleanMapping[event.target.value] })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                First name: 
                <input type="text" value={this.state.firstName} onChange={this.handleFirstNameChange} />
                Last name: 
                <input type="text" value={this.state.lastName} onChange={this.handleLastNameChange} />
                Phone number: 
                <input type="text" value={this.state.phoneNumber} onChange={this.handlePhoneNumberChange} />
                Employed?: 
                <div>
                    <input type="radio" name="employed" value="true" onChange={this.handleRadioButtonChange}  />
                    Yes
                </div>
                <div>
                    <input type="radio" name="employed" value="false" onChange={this.handleRadioButtonChange} />                
                    No
                </div>
                <button type="submit" value="Post" >Add Journalist</button>
            </form>
        )
    }
}

export default AddJournalistForm