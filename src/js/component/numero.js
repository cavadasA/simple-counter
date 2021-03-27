import React from "react";
import "bootstrap";
import PropTypes from "prop-types";

export function Numero(props) {
	return (
		<div className="ml-5">
			<div className="card bg-dark" style={{ width: "4rem" }}>
				<div className="card-body">
					<h1 className="card-title text-white">{props.contador}</h1>
				</div>
			</div>
		</div>
	);
}

Numero.propTypes = {
	contador: PropTypes.number
};
