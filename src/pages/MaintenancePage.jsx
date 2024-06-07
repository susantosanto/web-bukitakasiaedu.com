import { Link } from "react-router-dom";

const MaintenancePage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-yellow-600">Pemeliharaan</h1>
            <p className="text-2xl mt-4">Kami akan segera kembali!</p>
            <p className="mt-4">Mohon maaf atas ketidaknyamanannya, kami sedang melakukan beberapa pemeliharaan saat ini. Kami akan segera kembali online!</p>
            <Link to="/" className="mt-6 px-4 py-2 bg-primary text-white rounded hover:bg-secondary">
                Kembali ke Beranda
            </Link>
        </div>
    );
};

export default MaintenancePage;
