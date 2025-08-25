// NavLink.jsx
import { Link } from "react-router-dom";

export default function NavLink({ name, unlock }) {
	let to;
	switch (name) {
		case "SignUp":
			to = "/register";
			break;
		case "SignIn":
			to = "/login";
			break;
		default:
			to = "/";
	}

	return unlock === "true" ? (
		<Link
			to={to}
			className="p-3 font-medium text-[17px] text-orange-600 hover:text-orange-600 transition-colors"
		>
			{name}
		</Link>
	) : (
		<span className="p-3 font-medium text-[17px] text-orange-900 cursor-not-allowed">
			{name}
		</span>
	);
}
