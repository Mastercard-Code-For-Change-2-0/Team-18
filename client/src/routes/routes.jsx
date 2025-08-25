import { createBrowserRouter } from "react-router-dom";
import Admin from "../pages/Admin";
import Home from "../pages/Home";
const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
		// errorElement: <NotFound />,
	},
	{
		  path:"/admin/bulk-upload",
		  element:<Admin />
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