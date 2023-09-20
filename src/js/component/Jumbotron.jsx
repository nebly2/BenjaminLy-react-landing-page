import React from "react";

const Jumbotron = () => {
    return (
        <div className="jumbotron m-5 bg-light p-2">
			<h1 className="display-4">A Warm Welcome!</h1>
			<p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
			<a className="btn btn-primary btn-lg" href="https://reactjs.org/" role="button">
				Call to Action!
			</a>
		</div>
    )
}

export default Jumbotron