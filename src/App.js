import { Route, Switch } from "react-router-dom";
import React, { useEffect, useState } from "react";

import Layout from "./components/layout/Layout";
import Control from "./components/layout/Control";
import NearestRides from "./pages/NearestRides";
import PastRides from "./pages/PastRides";
import UpcomingRides from "./pages/UpcomingRides";

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [loadedRides, setLoadedRides] = useState([]);
	const rides = [];

	useEffect(() => {
		setIsLoading(true);
		fetch("https://assessment.api.vweb.app/rides")
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				const rides = [];

				for (const key in data) {
					const ride = {
						id: key,
						...data[key],
					};

					rides.push(ride);
				}

				setIsLoading(false);
				setLoadedRides(rides);
				// console.log(rides);
			});
	}, []);

	if (isLoading) {
		return (
			<section>
				<p>Loading...</p>
			</section>
		);
	}

	return (
		<Layout>
			<Control />
			<Switch>
				<Route path="/nearest" exact>
					<NearestRides data={loadedRides} />
				</Route>
				<Route path="/upcoming">
					<UpcomingRides data={loadedRides} />
				</Route>
				<Route path="/past">
					<PastRides data={loadedRides} />
				</Route>
			</Switch>
		</Layout>
	);
}

export default App;
