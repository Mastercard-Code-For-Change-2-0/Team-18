// src/components/SideBar.jsx
import { NavLink } from "react-router-dom";
import { LayoutDashboard, Upload, Bell } from "lucide-react"; // optional icons

const SideBar = () => {
	return (
		<div className="w-60 min-h-screen bg-white shadow-md flex flex-col justify-between">
			<div>
				{/* Logo */}
				<div className="p-4 text-xl font-bold border-b">Y4D</div>

				{/* Navigation */}
				<nav className="mt-4">
					<NavLink
						to="/admin-dashboard"
						className={({ isActive }) =>
							`flex items-center gap-3 px-4 py-2 hover:bg-gray-100 ${
								isActive ? "bg-gray-200 font-semibold" : ""
							}`
						}
					>
						<LayoutDashboard size={18} />
						Dashboard
					</NavLink>

					<NavLink
						to="/admin/bulk-upload"
						className={({ isActive }) =>
							`flex items-center gap-3 px-4 py-2 hover:bg-gray-100 ${
								isActive ? "bg-gray-200 font-semibold" : ""
							}`
						}
					>
						<Upload size={18} />
						Bulk Upload
					</NavLink>

					
				</nav>
			</div>

			{/* Footer Links */}
			<div className="p-4 border-t">
				<button className="w-full text-left px-4 py-2 hover:bg-gray-100">
					Logout
				</button>
			</div>
		</div>
	);
};

export default SideBar;
