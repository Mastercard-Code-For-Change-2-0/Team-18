import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar"; // if you’re using sidebar

const AdminLayout = ({ children }) => {
  return (
    <>
      {/* Header */}
      <NavBar />

      {/* Body with Sidebar + Content */}
      <div className="flex min-h-screen">
        <SideBar />

        <main className="flex-1 px-6 py-10 bg-gray-50">
          {children}
        </main>
      </div>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default AdminLayout;
