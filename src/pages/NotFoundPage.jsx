import { Link } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
            <h1 className="text-6xl font-bold text-red-600">404</h1>
            <p className="text-2xl mt-4">Page Not Found</p>
            <p className="mt-4">Sorry, the page you're looking for doesn't exist.</p>
            <Link to="/" className="mt-6 px-4 py-2 bg-primary text-white rounded hover:bg-secondary">
                Go to Homepage
            </Link>
        </div>
    );
};

export default NotFoundPage;
