import React from 'react'

class SignIn extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault()

        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = event => {
        const {value, name} = event.target

        this.setState({
            [name]: value
        })
    }

    render() {
        const {email, password} = this.state
        return(
            <div className = "sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email account</span>

                <form onSubmit = {this.handleSubmit}> 
                <input name = "email" 
                onChange = {this.handleChange}
                 type= "email"
                  value = {email}
                   required />
                <label >Email</label>

                <input name = "password"
                 onChange = {this.handleChange}
                  type = "email"
                   value = {password}
                    required />
                <label >password</label>

                <input type="submit" value = "submit"/>
                </form>
            </div>
        )
    }
}

export default SignIn