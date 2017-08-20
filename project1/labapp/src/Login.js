import React, { Component } from 'react';

function LoginButton(props) {
	return (
		// onClick={props.onClick}
		<button onClick={props.onClick}>
			Login
		</button>
	);
}

function LogoutButton(props) {
	return (
		// onClick={props.onClick}
		<button onClick={props.onClick}>
			Logout
		</button>
	);
}


export default class Login extends Component {
	constructor(props) {
		super(props);
		this.handleLoginClick = this.handleLoginClick.bind(this);
		this.handleLogoutClick = this.handleLogoutClick.bind(this);
		this.state = { isLoggedIn: false };
	}

	handleLoginClick() {
		this.setState({ isLoggedIn: true});
	}

	handleLogoutClick() {
		this.setState({ isLoggedIn: false});
	}

	render() {
		const isLoggedIn = this.state.isLoggedIn;

		let button = null;
		if (isLoggedIn) {
			button = <LogoutButton onClick={this.handleLogoutClick} />;
		} else {
			button = <LoginButton onClick={this.handleLoginClick} />;
		}

		return button;
	}

};
