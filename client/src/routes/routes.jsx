import { createBrowserRouter } from "react-router-dom";
import Admin from "../pages/Admin";
import Home from "../pages/Home";
import BulkUpload from "../components/BulkUpload";
import Clerk from "../pages/Clerk"
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
		element: <Admin />
	},
	{
		path: "/clerk",
		element: <Clerk />
	},
	{
		path: "/clerk/bulk-upload",
		element: <BulkUpload />
	},
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