import NavLink from "./NavLink";

const NavBar = () => {
	return (
		<nav className="bg-white py-5 flex flex-col md:flex-row p-3 gap-2 justify-around items-center border-[#FD6500] border-b-3">
			<p className="text-3xl font-extrabold font-[integralCF]">Y4D Foundation</p>
			<div>
				<NavLink name="Home" unlock="true" />
				<NavLink name="About Us" />
				<NavLink name="Contact Us" />
				<NavLink name="Donate" />
				<NavLink name="Register" unlock="true" />
				<NavLink name="Login" unlock="true" />
			</div>
		</nav>
	)
}

export default NavBar;