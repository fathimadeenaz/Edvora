import Card from "../components/ui/Card";

function PastRides(props) {
	let formattedDate = [];
	let formattedPath = [];
	for (let i = 0; i < props.data.length; i++) {
		var myDate = String(new Date(props.data[i].date)).slice(4, 21);
		formattedDate.push(myDate);
	}

	const now = new Date();
	var past = [];

	for (let i = 0; i < props.data.length; i++) {
		var date = new Date(props.data[i].date);
		if (date < now) past.push(props.data[i]);
	}

	function calcDistance(stationCode, path) {
		var curr = path[0];
		path.forEach((stop) => {
			if (Math.abs(stationCode - stop) < Math.abs(stationCode - curr))
				curr = stop;
		});
		return Math.abs(curr - stationCode);
	}

	// console.log(past);

	if (past.length === 0) return <div>There are no Past Rides</div>;
	else
		return (
			<div>
				{past.map((ride, i) => (
					<Card
						key={ride.id}
						id={ride.id}
						osa={ride.origin_station_code}
						format_path={props.data[i].station_path.map(
							(number, j) => {
								if (j === props.data[i].station_path.length - 1)
									return <span>{number}</span>;
								else return <span>{number}, </span>;
							}
						)}
						path={props.data[i].station_path}
						dsa={ride.destination_station_code}
						date={formattedDate[i]}
						map_url={ride.map_url}
						state={ride.state}
						city={ride.city}
						station_code={props.users.station_code}
						distance={calcDistance(
							props.users.station_code,
							props.data[i].station_path
						)}
					/>
				))}
			</div>
		);
}

export default PastRides;
