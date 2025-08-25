import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import SideBar from "../components/SideBar";

const AdminLayout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 shadow-sm">
        <NavBar />
      </header>

      {/* Main Content Area */}
      <div className="flex flex-1">
        {/* Sidebar */}
        <aside className="hidden md:block w-64 border-r border-gray-200 bg-white shadow-sm">
          <SideBar />
        </aside>

        {/* Page Content */}
        <main className="flex-1 px-6 py-8 overflow-y-auto">
          <div className="max-w-6xl mx-auto">{children}</div>
        </main>
      </div>

      {/* Footer */}
      <footer className="mt-auto border-t border-gray-200">
        <Footer />
      </footer>
    </div>
  );
};

export default AdminLayout;
