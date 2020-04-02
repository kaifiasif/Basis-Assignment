import React, { Component } from 'react';
import loginBgImg from '../img/assets/bg.svg';
import userImg from '../img/assets/avatar.svg';
import leftImg from '../img/assets/wave.png';
import './login.css';

class Login extends Component {
	state = {
		userName: 'hello@basics.com',
		password: '123456'
	};

	loginUser = () => {
		if (this.state.userName && this.state.password) {
			console.log('Valid User');
		} else {
			alert('Please check your username and password ');
		}
	};
	render() {
		return (
			<div>
				<img className="wave" src={leftImg} />
				<div className="container">
					<div className="img">
						<img src={loginBgImg} />
					</div>
					<div className="login-content">
						<form>
							<img src={userImg} />
							<h3 className="title">Welcome to Basics</h3>
							<div className="input-div one">
								<div className="i">
									<i className="fa fa-user" />
								</div>
								<div className="div">
									<h5>Email/Mobile No</h5>
									<input type="text" className="input" />
								</div>
							</div>
							<div className="input-div pass">
								<div className="i">
									<i className="fa fa-lock" />
								</div>
								<div className="div">
									<h5>Password</h5>
									<input type="password" className="input" />
								</div>
							</div>
							<a href="#">Forgot Password?</a>
							<input type="submit" className="btn" Value="Login" onSubmit={this.loginUser()} />
						</form>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;
