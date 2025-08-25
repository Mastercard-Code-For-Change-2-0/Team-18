// src/components/SideBar.jsx
import { NavLink } from "react-router-dom";
import { LayoutDashboard, Upload, Bell } from "lucide-react";

const SideBar = () => {
	return (
		<div className="w-60 min-h-screen bg-white shadow-md flex flex-col justify-between border-r border-gray-200">
			<div>
				{/* Logo */}
				<div className="p-4 text-2xl font-extrabold text-orange-700 border-b">
					Y4D
				</div>

				{/* Navigation */}
				<nav className="mt-4 space-y-1">
					<NavLink
						to="/admin-dashboard"
						className={({ isActive }) =>
							`flex items-center gap-3 px-4 py-2 rounded-md transition-colors ${isActive
								? "bg-orange-100 text-orange-700 font-semibold"
								: "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
							}`
						}
					>
						<LayoutDashboard size={18} />
						Dashboard
					</NavLink>

					<NavLink
						to="/admin/bulk-upload"
						className={({ isActive }) =>
							`flex items-center gap-3 px-4 py-2 rounded-md transition-colors ${isActive
								? "bg-orange-100 text-orange-700 font-semibold"
								: "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
							}`
						}
					>
						<Upload size={18} />
						Bulk Upload
					</NavLink>

					<NavLink
						to="/admin/notifications"
						className={({ isActive }) =>
							`flex items-center gap-3 px-4 py-2 rounded-md transition-colors ${isActive
								? "bg-orange-100 text-orange-700 font-semibold"
								: "text-gray-700 hover:bg-orange-50 hover:text-orange-600"
							}`
						}
					>
						<Bell size={18} />
						Notifications
					</NavLink>
				</nav>
			</div>

			{/* Footer Links */}
			<div className="p-4 border-t">
				<button className="w-full text-left px-4 py-2 text-gray-700 rounded-md hover:bg-orange-50 hover:text-orange-600 transition">
					Logout
				</button>
			</div>
		</div>
	);
};

export default SideBar;
