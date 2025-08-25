import { createBrowserRouter } from "react-router-dom";
import Admin from "../pages/Admin";
import Home from "../pages/Home";


import AdminDashboard from "../components/AdminDashboard";
import StudentDetails from "../components/StudentDetails";
import BulkUpload from "../components/BulkUpload";
import Clerk from "../pages/Clerk"
import Registration from "../pages/Registration";
import Login from "../pages/Login"


const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		// errorElement: <NotFound />,
	},
	{
		path: "/admin/bulk-upload",
		element: <BulkUpload />
	},
	{
		path: "/admin",
		element: <AdminDashboard />
	},
	{
		path: "/clerk",
		element: <Clerk />
	},
	{
		path: "/clerk/bulk-upload",
		element: <BulkUpload />
	},
	{
		path: "/register",
		element: <Registration />
	},
	{
		path: "/admin-dashboard",
		element: <AdminDashboard />
	},
	{
		path: "/student/:name",
		element: <StudentDetails />
	},
	{
		path: "/login",
		element: <Login />
	}
	// {
	// 	path: "shop",
	// 	element: <Shop />,
	// },
	// {
	// 	path: "product/:productId",
	// 	element: <ProductDetails />,
	// },
	// {
	// 	path: "cart",
	// 	element: <Cart />,
	// },
]);

export default router;