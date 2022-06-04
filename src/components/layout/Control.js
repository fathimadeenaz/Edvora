import classes from "./Control.module.css";
import Tabs from "../ui/Tabs";
import Icon from "../ui/Icon";

function Control() {
	return (
		<div className={classes.control}>
			<Tabs />
			<div className={classes.icon}>
				<Icon />
				&nbsp;&nbsp;filter
			</div>
		</div>
	);
}

export default Control;
