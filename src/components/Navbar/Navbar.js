import React, { Component } from 'react';
class Nav extends Component {
	state = {};
	loggout = () => {
		localStorage.removeItem('username');
		localStorage.removeItem('password');
		this.props.history.push('/login');
	};
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-light bg-light">
				<a className="navbar-brand" href="!#">
					<span style={{ color: '#35CD9B', fontWeight: '600' }}>Basis</span>
				</a>

				<div className="collapse navbar-collapse " id="navbarNavDropdown">
					<ul className="navbar-nav ml-md-auto ">
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle "
								href="/#"
								id="navbarDropdownMenuLink"
								role="button"
								data-toggle="dropdown"
								aria-haspopup="true"
								aria-expanded="false"
							/>
							<div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
								<a className="dropdown-item" href="!#">
									<i class="fa fa-user" aria-hidden="true" />
									<span style={{ paddingLeft: '1rem' }}>Profile</span>
								</a>
								<a className="dropdown-item" href="!#">
									<i class="fa fa-sign-out" />
									<span style={{ paddingLeft: '1rem' }} onClick={this.loggout}>
										Logout{' '}
									</span>
								</a>
							</div>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Nav;
