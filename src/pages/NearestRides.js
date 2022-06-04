import Card from "../components/ui/Card";

function NearestRides(props) {
	let formattedDate = [];
	let formattedPath = [];
	for (let i = 0; i < props.data.length; i++) {
		var myDate = String(new Date(props.data[i].date)).slice(4, 21);
		formattedDate.push(myDate);
	}

	function calcDistance(stationCode, path) {
		var curr = path[0];
		path.forEach((stop) => {
			if (Math.abs(stationCode - stop) < Math.abs(stationCode - curr))
				curr = stop;
		});
		return Math.abs(curr - stationCode);
	}

	let clone = structuredClone(props.data);

	for (let i = 0; i < clone.length; i++) {
		clone[i].distance = calcDistance(
			props.users.station_code,
			clone[i].station_path
		);
	}

	clone.sort((a, b) => (a.distance > b.distance ? 1 : -1));

	console.log(clone);
	console.log(props.users.station_code);

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
