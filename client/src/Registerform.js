import React from 'react';
// import Recaptcha from 'react-recaptcha';
import './RegisterForm.css';
import axios from 'axios';


class Registerform extends React.Component {



    constructor(props) {
        super(props);

        this.state = {
            email: '',
        };



        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }
    // componentDidMount() {
    //     const script = document.getElementsByClassName("g-recaptcha")

    //     script.src = "https://www.google.com/recaptcha/api.js";
    //     script.async = true;

    //     document.body.appendChild(script);
    // }

    handleSubmit = async e => {
        e.preventDefault();
        console.log(this.state);
        var data = { email: this.state.email };

        // fetch('/register', {
        //     method: 'POST',
        //     body: JSON.stringify(data),
        //     headers: { 'Content-Type': 'application/json' }
        // }).then(response => response.json())
        //   .catch(error => console.log(error));
       try{
           const body = data ;
           const response = await fetch("/register",{
               method: "POST",
               headers: {"Content-Type":'application/json'},
               body: JSON.stringify(body)
           });
           console.log(response);
       } catch (err) {
           console.error(err.message);
       }
    };
    

    
    // handle the state changed 
    handleChange(event) {
        this.setState({
            [event.target.id]: event.target.value
            // grab the state property
        })

    }



    render() {
        return (
            <div className="form-div">
                <form method="post" action="/register" onSubmit={this.handleSubmit}>
                    Email : <br />
                    <input type="text" id="email" onChange={this.handleChange} />

                    <div
                        className="g-recaptcha"
                        data-sitekey="6LeM5rwZAAAAAN_oBVB8O5T2TpEArvf-nR-1PSpSy">
                    </div>
                    <br />
                    <input type="submit" id="btn" value="Register" />
                </form>
            </div>
        )
    }
}



export default Registerform;