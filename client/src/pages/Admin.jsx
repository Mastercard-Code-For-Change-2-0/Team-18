import NavBar from "../components/NavBar";
// import MainContainer from "../components/MainContainer";
import Footer from "../components/Footer";
import AdminBulkUpload from "../components/AdminBulkUpload";

const Admin = () => {
	return (
		<>
			<NavBar />
			<div className="min-h-screen px-6 py-10">
				<AdminBulkUpload /> {/*  render here */}
			</div>
			<Footer />
		</>
	)
}

export default Admin;