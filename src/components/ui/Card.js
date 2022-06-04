import classes from "./Card.module.css";

function Card(props) {
	console.log(props.station_code);
	function calcDistance(stationCode, path) {
		var curr = path[0];
		path.forEach((stop) => {
			if (Math.abs(stationCode - stop) < Math.abs(stationCode - curr))
				curr = stop;
		});
		return Math.abs(curr - stationCode);
	}

	return (
		<div className={classes.card}>
			<div className={classes.img}>
				<img src={props.map_url}></img>
			</div>
			<div className={classes.info}>
				<div className={classes.details}>
					<div className={classes.detail}>
						<span className={classes.key}>Ride Id : </span>
						<span className={classes.value}>{props.id}</span>
					</div>
					<div className={classes.detail}>
						<span className={classes.key}>Origin Station : </span>
						<span className={classes.value}>{props.osa}</span>
					</div>
					<div className={classes.detail}>
						<span className={classes.key}>station_path : </span>
						<span className={classes.value}>
							[{props.format_path}]
						</span>
					</div>
					<div className={classes.detail}>
						<span className={classes.key}>Date : </span>
						<span className={classes.value}>{props.date}</span>
					</div>
					<div className={classes.detail}>
						<span className={classes.key}>Distance : </span>
						<span className={classes.value}>
							{calcDistance(props.station_code, props.path)}
						</span>
					</div>
				</div>
				<div className={classes.loc}>
					<span>{props.state}</span>
					<span>{props.city}</span>
				</div>
			</div>
		</div>
	);
}

export default Card;
