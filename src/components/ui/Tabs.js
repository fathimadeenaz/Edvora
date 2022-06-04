import { NavLink, useLocation } from "react-router-dom";
import classes from "./Tabs.module.css";

function Tabs() {
	// const location = useLocation();
	// const { pathname } = location;
	// const splitLocation = pathname.split("/");
	// console.log(splitLocation[1]);
	return (
		<div>
			<ul className={classes.tabs}>
				<li>
					<NavLink
						to="/nearest"
						className={classes.tab}
						activeStyle={{
							fontWeight: "bold",
							color: "white",
							textDecoration: "underline",
							textUnderlineOffset: "4px",
						}}
					>
						Nearest rides
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/upcoming"
						className={classes.tab}
						activeStyle={{
							fontWeight: "bold",
							color: "white",
							textDecoration: "underline",
							textUnderlineOffset: "4px",
						}}
					>
						Upcoming rides (x)
					</NavLink>
				</li>
				<li>
					<NavLink
						to="/past"
						className={classes.tab}
						activeStyle={{
							fontWeight: "bold",
							color: "white",
							textDecoration: "underline",
							textUnderlineOffset: "4px",
						}}
					>
						Past rides (x)
					</NavLink>
				</li>
			</ul>
		</div>
	);
}

export default Tabs;
