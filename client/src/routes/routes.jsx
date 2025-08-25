import { createBrowserRouter } from "react-router-dom";
import Admin from "../pages/Admin";
import Home from "../pages/Home";


import AdminDashboard from "../components/AdminDashBoard";
import StudentDetails from "../components/StudentDetails";
const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		// errorElement: <NotFound />,
	},
	{
		  path:"/admin/bulk-upload",
		  element:<Admin/>
	},
	{
		  path:"/admin-dashboard",
		  element:<AdminDashboard />
	},
	{
		 path:"/student/:name" ,
		 element:<StudentDetails/>} 
	,
	{
		
        
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