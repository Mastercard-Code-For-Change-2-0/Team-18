// NavBar.jsx
import NavLink from "./NavLink";

const NavBar = () => {
	return (
		<nav className="bg-orange-50 py-5 flex flex-col md:flex-row p-3 gap-2 justify-around items-center border-b-3 border-orange-200">
			<p className="text-3xl font-extrabold text-orange-700">Y4D Foundation</p>
			<div className="flex flex-col md:flex-row gap-2">
				<NavLink name="Home" unlock="true" />
				<NavLink name="About Us" unlock="true" />
				<NavLink name="Contact Us" unlock="true" />
				<NavLink name="Donate" unlock="true" />
				<NavLink name="Register" unlock="true" />
				<NavLink name="Login" unlock="true" />
			</div>
		</nav>
	);
};

export default NavBar;
