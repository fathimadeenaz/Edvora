import Card from "../components/ui/Card";

function NearestRides(props) {
	let formattedDate = [];
	let formattedPath = [];
	// let t = [];
	for (let i = 0; i < props.data.length; i++) {
		var myDate = String(new Date(props.data[i].date)).slice(4, 21);
		formattedDate.push(myDate);
	}

	return (
		<div>
			{props.data.map((ride, i) => (
				<Card
					key={ride.id}
					id={ride.id}
					osa={ride.origin_station_code}
					format_path={props.data[i].station_path.map((number, j) => {
						if (j === props.data[i].station_path.length - 1)
							return <span>{number}</span>;
						else return <span>{number}, </span>;
					})}
					path={props.data[i].station_path}
					dsa={ride.destination_station_code}
					date={formattedDate[i]}
					map_url={ride.map_url}
					state={ride.state}
					city={ride.city}
					station_code={props.users.station_code}
				/>
			))}
		</div>

		// <Card
		// 	id={ride.id}
		// 	osa={ride.origin_station_code}
		// 	dsa={ride.destination_station_code}
		// 	date={ride.date}
		// 	map_url={ride.map_url}
		// 	state={ride.state}
		// 	city={ride.city}
		// />;
	);
}

export default NearestRides;
