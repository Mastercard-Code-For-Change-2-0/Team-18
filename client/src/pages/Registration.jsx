import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import RegistrationPage from "../components/RegistrationPage"

const Registration = () => {
	return (
		<>
			<NavBar />
			<div className="min-h-screen px-6 py-10">

				Registration dashboard
				<RegistrationPage />
			</div>
			<Footer />
		</>
	)
}

export default Registration;