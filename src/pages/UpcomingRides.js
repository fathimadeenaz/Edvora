import Card from "../components/ui/Card";

function UpcomingRides(props) {
	let formattedDate = [];
	let formattedPath = [];
	for (let i = 0; i < props.data.length; i++) {
		var myDate = String(new Date(props.data[i].date)).slice(4, 21);
		formattedDate.push(myDate);
	}

	const now = new Date();
	var upcoming = [];

	for (let i = 0; i < props.data.length; i++) {
		var date = new Date(props.data[i].date);
		if (date > now) upcoming.push(props.data[i]);
	}

	// console.log(upcoming);

	if (upcoming.length === 0) return <div>There are no Upcoming Rides</div>;
	else
		return (
			<div>
				{upcoming.map((ride, i) => (
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
					/>
				))}
			</div>
		);
}

export default UpcomingRides;
