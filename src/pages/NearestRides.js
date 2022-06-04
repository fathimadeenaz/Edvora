import Card from "../components/ui/Card";

function NearestRides(props) {
	let formattedDate = [];
	let formattedPath = [];
	for (let i = 0; i < props.data.length; i++) {
		var myDate = String(new Date(props.data[i].date)).slice(4, 21);
		formattedDate.push(myDate);
	}

	function calcDistance(stationCode, path) {
		let res = path[0];
		for (let i = 0; i < path.length; i++) {
			if (Math.abs(stationCode - res) > Math.abs(stationCode - path[i]))
				res = path[i];
		}
		return Math.abs(res - stationCode);
	}

	let clone = structuredClone(props.data);

	for (let i = 0; i < clone.length; i++) {
		clone[i].distance = calcDistance(
			props.users.station_code,
			clone[i].station_path
		);
		// console.log(clone[i].distance);
	}

	clone.sort((a, b) => (a.distance > b.distance ? 1 : -1));

	// console.log(clone);
	// console.log(props.users.station_code);

	return (
		<div>
			{clone.map((ride, i) => (
				<Card
					key={ride.id}
					id={ride.id}
					osa={ride.origin_station_code}
					format_path={clone[i].station_path.map((number, j) => {
						if (j === clone[i].station_path.length - 1)
							return <span>{number}</span>;
						else return <span>{number}, </span>;
					})}
					path={clone[i].station_path}
					dsa={ride.destination_station_code}
					date={formattedDate[i]}
					map_url={ride.map_url}
					state={ride.state}
					city={ride.city}
					station_code={props.users.station_code}
					distance={calcDistance(
						props.users.station_code,
						clone[i].station_path
					)}
				/>
			))}
		</div>
	);
}

export default NearestRides;
