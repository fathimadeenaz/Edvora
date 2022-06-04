import classes from "./Layout.module.css";
import React, { useEffect, useState } from "react";
import MainNav from "./MainNav";

function Layout(props) {
	return (
		<div>
			<MainNav userName={props.data.name} userIcon={props.data.url} />
			<main className={classes.main}>{props.children}</main>
		</div>
	);
}

export default Layout;
