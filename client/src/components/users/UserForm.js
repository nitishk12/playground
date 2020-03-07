import React from 'react'
import { connect } from 'react-redux';

class UserForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            name: props.user ? props.user.name : '',
            email: props.user ? props.user.email : '',
            mobile: props.user ? props.user.mobile : '',
            city: props.user ? props.user.city : '',
            zipcode: props.user ? props.user.zipcode : '',
            company: props.user ? props.user.company : '',
            website: props.user ? props.user.website : ''
        }
    }

    handleChamge = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            name: this.state.name,
            email: this.state.email,
            mobile: this.state.mobile,
            city: this.state.city,
            zipcode: this.state.zipcode,
            company: this.state.company,
            website: this.state.website,
        }
        this.props.handleSubmit(formData)
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Name</label>
                    <input type="text" name="name" value={this.state.name} onChange={this.handleChamge} placeholder="Enter Name" /><br />
                    <label>Email</label>
                    <input type="text" name="email" value={this.state.email} onChange={this.handleChamge} placeholder="Enter Email" /><br />
                    <label>Mobile</label>
                    <input type="text" name="mobile" value={this.state.mobile} onChange={this.handleChamge} placeholder="Enter Mobile" /><br />
                    <label>City</label>
                    <input type="text" name="city" value={this.state.city} onChange={this.handleChamge} placeholder="Enter City" /><br />
                    <label>Zipcode</label>
                    <input type="text" name="zipcode" value={this.state.zipcode} onChange={this.handleChamge} placeholder="Enter Zipcode" /><br />
                    <label>Company</label>
                    <input type="text" name="company" value={this.state.company} onChange={this.handleChamge} placeholder="Enter Company" /><br />
                    <label>Website</label>
                    <input type="text" name="website" value={this.state.website} onChange={this.handleChamge} placeholder="Enter Website" /><br />

                    <input type="submit" />
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        user: state.users.find(usr => usr._id == props.user)
    }
}

export default connect(mapStateToProps)(UserForm)