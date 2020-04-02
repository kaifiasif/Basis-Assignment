import React, { Component } from 'react';
import loginBgImg from '../../img/assets/bg.svg';
import userImg from '../../img/assets/avatar.svg';
import leftImg from '../../img/assets/wave.png';
import './login.css';

class Login extends Component {
	state = {
		userName: '',
		password: ''
	};

	loginUser = () => {
		if (this.state.userName && this.state.password) {
			console.log('Valid User');
		} else {
			console.log('Invalid Users');
		}
	};
	render() {
		return (
			<div>
				<img className="wave" src={leftImg} alt="" />
				<div className="container">
					<div className="img">
						<img src={loginBgImg} alt="" />
					</div>
					<div className="login-content">
						<form>
							<img src={userImg} alt="" />
							<h3 className="title">Welcome to Basics</h3>
							<div className="input-div one">
								<div className="i">
									<i className="fa fa-user" />
								</div>
								<div className="div">
									<input type="text" className="input" placeholder="Enter your email " />
								</div>
							</div>
							<div className="input-div pass">
								<div className="i">
									<i className="fa fa-lock" />
								</div>
								<div className="div">
									<input type="password" className="input" placeholder="Enter your password" />
								</div>
							</div>
							<a href="!#">Forgot Password?</a>
							<input type="submit" className="btn" Value="Login" onSubmit={this.loginUser()} />
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
