import * as React from "react";
import {connect} from "react-redux";
import {register} from "../../actions/register-action";

class Register extends React.Component <{
    onRegister: any,
}, any> {


    constructor(props: any) {
        super(props);
        this.state = {
            username: '',
            password: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event: any) {
        const key  = event.target.name;
        this.setState({[key]: event.target.value});
    }

    handleSubmit(event: any) {
        event.preventDefault();
        this.props.onRegister(this.state);
    }



    render() {
        return (
            <div>
                <div>
                    <h3>Register</h3>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>
                            username:
                            <input name="username" type="text" value={this.state.username} onChange={this.handleChange} />
                        </label>
                    </div>
                    <div>
                        <label>
                            Password:
                            <input name="password" type="password" value={this.state.password} onChange={this.handleChange} />
                        </label>
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch: any) => ({
        onRegister: (form: any) => dispatch(register(form))
});

export default connect(null,
    mapDispatchToProps)(Register);