import React from 'react'
import FormInput from '../form-input/form-input.component'
import './sign-in.styles.scss'
import CustomButton from '../custom-button/custom-button.component'

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
                <h2 className = 'title'>I already have an account</h2>
                <span>Sign in with your email account</span>

                <form onSubmit = {this.handleSubmit}> 
                <FormInput 
                name = "email" 
                onChange = {this.handleChange}
                 type= "email"
                 label= "email"
                  value = {email}
                   required />


                <FormInput name = "password"
                 onChange = {this.handleChange}
                  type = "password"
                  label = 'password'
                   value = {password}
                    required />

                <CustomButton type="submit"> Sign in </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn