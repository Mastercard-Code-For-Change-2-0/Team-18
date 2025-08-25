export default function NavLink({ name, unlock }) {

	// let to;

	// if (name === "Register") to = "/register";
	// else if (name === "") to = "/login";
	// else to = null;

	return (
		unlock === "true" ?
			<span className="p-3 font-medium text-[17px] text-gray-900">
				{name}
			</span>
			// 	<Link to={to} className="p-3 font-medium text-[17px] hover:text-blue-500 transition">
			// 	{name}
			// </Link>
			:
			<span className="p-3 font-medium text-[17px] text-gray-400 cursor-not-allowed">
				{name}
			</span>
	);
}