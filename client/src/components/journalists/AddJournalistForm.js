import React, {Component} from 'react'

class AddJournalistForm extends Component {
constructor(props) {
    super(props)
    this.state = {
        firstName: "",
        lastName: "",
        phoneNumber: "",
        employed: true
    }
    this.handleFirstNameChange=this.handleFirstNameChange.bind(this);
    this.handleLastNameChange=this.handleLastNameChange.bind(this);
    this.handlePhoneNumberChange=this.handlePhoneNumberChange.bind(this);
    this.handleRadioButtonChange=this.handleRadioButtonChange.bind(this);
}

handleFirstNameChange(event) {
    this.setState({firstName: event.target.value})
}

handleLastNameChange(event) {
    this.setState({lastName: event.target.value})
}

handlePhoneNumberChange(event) {
    this.setState({phoneNumber: event.target.value})
}

handleRadioButtonChange(event) {
    this.setState({employed: event.target.value})
}

    render(){
        return(
            // first name , last name , phone number, employed
<form>
    First name: <input type="text" value={this.state.firstName} onChange={this.handleFirstNameChange}/><br/> <br/>
    Last name: <input type="text" value={this.state.lastName} onChange={this.handleLastNameChange}/><br/> <br/>
    Phone number: <input type="text" value={this.state.phoneNumber} onChange={this.handlePhoneNumberChange} /><br/><br/>
    
    Employed?: <input type="radio" name="employed" value={true} onChange={this.handleRadioButtonChange} checked />
    <label for="employed">Yes</label>
    <input type="radio" name="employed" value={false} onChange={this.handleRadioButtonChange}/>
    <label for="employed">No</label>

    
</form>
        )
    }
}

export default AddJournalistForm