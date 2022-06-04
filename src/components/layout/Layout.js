import classes from "./Layout.module.css";
import React, { useEffect, useState } from "react";
import MainNav from "./MainNav";

function Layout(props) {
	const [users, setUsers] = useState([]);

	const fetchData = () => {
		fetch("https://assessment.api.vweb.app/user")
			.then((response) => {
				return response.json();
			})
			.then((data) => {
				setUsers(data);
			});
	};

	useEffect(() => {
		fetchData();
	}, []);

	// console.log(users.station_code);

	return (
		<div>
			<MainNav userName={users.name} userIcon={users.url} />
			<main className={classes.main}>{props.children}</main>
		</div>
	);
}

export default Layout;
