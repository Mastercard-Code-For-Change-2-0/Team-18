// NavBar.jsx
import NavLink from "./NavLink";
import { useNavigate } from "react-router-dom";

const NavBar = () => {
	const navigate = useNavigate();
	return (
		
		<nav className="bg-orange-50 py-5 flex flex-col md:flex-row p-3 gap-2 justify-around hover:cursor-pointer items-center border-b-3 border-orange-200">
			<p className="text-3xl font-extrabold" onClick={()=>{
				navigate('/')
			}}>Y4D Foundation</p>
			<div className="flex flex-col md:flex-row gap-2">
				{/* <NavLink name="Home" unlock="true" /> */}
				{/* <NavLink name="About Us" /> */}
				{/* <NavLink name="Contact Us" /> */}
				{/* <NavLink name="Donate" /> */}
				<NavLink name="SignUp" unlock="true" />
				<NavLink name="SignIn" unlock="true" />
			</div>
		</nav>
	);
};

export default NavBar;
