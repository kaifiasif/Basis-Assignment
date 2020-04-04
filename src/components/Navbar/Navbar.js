import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Nav extends Component {
	state = {};
	loggout = () => {
		localStorage.removeItem('username');
		localStorage.removeItem('password');
		this.props.history.push('/');
	};
	profilePopup = () => {
		this.props.history.push('/profile');
	};
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" href="!#">
					<span style={{ color: '#35CD9B', fontWeight: '600' }}>Basis</span>
				</a>

				<div className="collapse navbar-collapse" id="navbarNavDropdown">
					<ul className="navbar-nav ml-md-auto">
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								href="!#"
								id="navbarDropdownMenuLink"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							/>
							<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
								<p className="dropdown-item">
									<i className="fa fa-sign-out" />
									<span style={{ paddingLeft: '1rem' }} onClick={this.loggout}>
										Logout
									</span>
								</p>
							</div>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default withRouter(Nav);
