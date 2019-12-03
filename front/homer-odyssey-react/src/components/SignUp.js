import React from 'react';

class SignUp extends React.Component {
    updateEmailField(event){
        console.log(event);
        document.getElementsByTagName('h1')[0].innerText = event.target.value;
    };

    render() {
        return(
           <div className="form">
               <h1>ALED</h1>
               <input onChange={this.updateEmailField.bind(this)} type="email" name="email" />
           </div>
        );
    }
}

export default SignUp;