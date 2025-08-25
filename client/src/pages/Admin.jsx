import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import BulkUpload from "../components/BulkUpload";
import SideBar from "../components/SideBar";

const Admin = () => {
	return (
		<>
			<NavBar />
			<div className="flex min-h-screen">
				{/* Sidebar */}
				<SideBar />

				{/* Main Content */}
				<main className="flex-1 px-6 py-10 bg-gray-50">
					<BulkUpload />
				</main>
			</div>
			<Footer />
		</>
	)
}

export default Admin;