import React, { Component } from 'react';
import loginBgImg from '../../img/assets/bg.svg';
import userImg from '../../img/assets/avatar.svg';
import leftImg from '../../img/assets/wave.png';
import { withRouter } from 'react-router-dom';

import './login.css';

localStorage.setItem('username', 'test@basis.in');
localStorage.setItem('password', 123456);

let user = localStorage.getItem('username');
let password = localStorage.getItem('password');

class Login extends Component {
	state = {
		userName: '',
		password: ''
	};
	handleChange = (e) => {
		this.setState({ [e.target.name]: e.target.value });
	};
	loginUser = (e) => {
		e.preventDefault();
		if (this.state.userName === user && this.state.password === password) {
			this.props.history.push('/dashboard');
		} else {
			alert('Please enter valid credentials');
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
						<form onSubmit={this.loginUser}>
							<img src={userImg} alt="" />
							<h3 className="title">Welcome to Basis</h3>
							<div className="input-div one">
								<div className="i">
									<i className="fa fa-user" />
								</div>
								<div className="div">
									<input
										type="text"
										name="userName"
										value={this.state.userName}
										className="input"
										placeholder="Enter your email "
										onChange={this.handleChange}
									/>
								</div>
							</div>
							<div className="input-div pass">
								<div className="i">
									<i className="fa fa-lock" />
								</div>
								<div className="div">
									<input
										type="password"
										name="password"
										value={this.state.password}
										className="input"
										placeholder="Enter your password"
										onChange={this.handleChange}
									/>
								</div>
							</div>
							<a href="!#">Forgot Password?</a>
							<input type="submit" className="btn" value="Login" />
						</form>
					</div>
				</div>
			</div>
		);
	}
}

// export default Login;
export default withRouter(Login);
