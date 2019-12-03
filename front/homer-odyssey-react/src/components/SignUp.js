import React from 'react';

class SignUp extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            email :"",
            password: "",
            password2: "",
            firstName: "",
            lastName: ""
        };
    }

    updateEmailField(event){
        this.setState({
            email : event.target.value
        })
    };

    updatePasswordField(event){
        this.setState({
            password : event.target.value
        })
    };

    updatePasswordVerificationField(event){
        this.setState({
            password2 : event.target.value
        })
    };

    updateFirstnameField(event){
        this.setState({
            firstName : event.target.value
        })
    };

    updateLastnameField(event){
        this.setState({
            lastName : event.target.value
        })
    };

    handleSubmit(){
        console.log(JSON.stringify(this.state, 1, 1));
    };



    render() {
        return(
           <div className="form">
               <h1>{JSON.stringify(this.state, 1, 1)}</h1>
               <form onSubmit={this.handleSubmit.bind(this)}>
                   <label htmlFor="email">Email :</label>
                   <input onChange={this.updateEmailField.bind(this)} type="email" name="email" /> <br/>
                   <label htmlFor="password">Password :</label>
                   <input onChange={this.updatePasswordField.bind(this)} type="password" name="password"/><br/>
                   <label htmlFor="passwordVerification">Password 2 :</label>
                   <input onChange={this.updatePasswordVerificationField.bind(this)} type="password" name="passwordVerification"/><br/>
                   <label htmlFor="firstname">Prénom :</label>
                   <input onChange={this.updateFirstnameField.bind(this)} type="text" name="firstname"/><br/>
                   <label htmlFor="lastname">Nom :</label>
                   <input onChange={this.updateLastnameField.bind(this)} type="text" name="lastname"/><br/>
                   <input type="submit" value="Submit"/>
               </form>
           </div>
        );
    }
}

export default SignUp;