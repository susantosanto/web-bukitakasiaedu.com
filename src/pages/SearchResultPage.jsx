import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const SearchResultsPage = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get('query');
    const [results, setResults] = useState([]);

    useEffect(() => {
        // Simulate fetching or filtering content based on the search query
        const fetchResults = async () => {
            // Replace this with actual search logic or API call
            const data = [
                { id: 1, title: 'Tentang Kami', content: 'Ini adalah halaman tentang kami.' },
                { id: 2, title: 'Fasilitas', content: 'Ini adalah halaman fasilitas.' },
                { id: 3, title: 'Berita', content: 'Ini adalah halaman berita.' },
                { id: 4, title: 'Kegiatan', content: 'Ini adalah halaman kegiatan.' },
                // Add more dummy data as needed
            ];

            const filteredResults = data.filter(item => 
                item.title.toLowerCase().includes(query.toLowerCase()) ||
                item.content.toLowerCase().includes(query.toLowerCase())
            );
            setResults(filteredResults);
        };

        if (query) {
            fetchResults();
        }
    }, [query]);

    return (
        <div className="w-9/12 mx-auto mt-20">
            <h1 className="text-3xl mb-8">Search Results</h1>
            <p>Results for: <span className="font-bold">{query}</span></p>
            <ul>
                {results.map(result => (
                    <li key={result.id} className="mb-4">
                        <h2 className="text-xl font-bold">{result.title}</h2>
                        <p>{result.content}</p>
                    </li>
                ))}
            </ul>
            {results.length === 0 && <p>No results found.</p>}
        </div>
    );
};

export default SearchResultsPage;
