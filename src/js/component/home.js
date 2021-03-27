import React, { useState, useEffect } from "react";
import "bootstrap";
import { Numero } from "./numero.js";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [segundos, setSegundos] = useState(0);
	const [decimas, setDecimas] = useState(0);
	const [centesimas, setCentesimas] = useState(0);
	const [milesimas, setMilesimas] = useState(0);
	const [diezMilesimas, setDiezMilesimas] = useState(0);
	const [cienMilesimas, setCienMilesimas] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setSegundos(segundos => segundos + 1);
		}, 1000);
	}, []);

	useEffect(() => {
		if (segundos === 10) {
			setSegundos(segundos => 0);
		}
	}, [segundos]);

	useEffect(() => {
		const interval = setInterval(() => {
			setDecimas(decimas => decimas + 1);
		}, 10000);
	}, []);

	useEffect(() => {
		if (decimas === 10) {
			setDecimas(decimas => 0);
		}
	}, [decimas]);

	useEffect(() => {
		const interval = setInterval(() => {
			setCentesimas(centesimas => centesimas + 1);
		}, 100000);
	}, []);

	useEffect(() => {
		if (centesimas === 10) {
			setCentesimas(centesimas => 0);
		}
	}, [centesimas]);

	useEffect(() => {
		const interval = setInterval(() => {
			setMilesimas(milesimas => milesimas + 1);
		}, 1000000);
	}, []);

	useEffect(() => {
		if (milesimas === 10) {
			setMilesimas(milesimas => 0);
		}
	}, [milesimas]);

	return (
		<div className="mt-5">
			<div className="row">
				<div className="col-2 d-inline-flex offset-md-4">
					<Numero className="ml-5" contador={cienMilesimas} />
					<Numero contador={diezMilesimas} />
					<Numero contador={milesimas} />
					<Numero contador={centesimas} />
					<Numero contador={decimas} />
					<Numero contador={segundos} />
				</div>
			</div>
		</div>
	);
}
