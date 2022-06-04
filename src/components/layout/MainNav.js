import classes from "./MainNav.module.css";

function MainNav(props) {
	return (
		<nav>
			<ul className={classes.outer}>
				<li className={classes.logo}>
					<h1>edvora</h1>
				</li>
				<li className={classes.profile}>
					<ul className={classes.inner}>
						<li className={classes.username}>{props.userName}</li>
						<li>
							<img src={props.userIcon}></img>
						</li>
					</ul>
				</li>
			</ul>
		</nav>
	);
}

export default MainNav;
