import { useState } from "react";
import "./App.css";

function App() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(
                "https://hkgb7gnzm6yxzhvg4lcnmlbhxm0ilmom.lambda-url.ap-south-1.on.aws/",
            );
            const data = await response.json();
            if (username !== data.username || password !== data.password) {
                throw new Error("Invalid username or password!");
            }
            alert("Login Successful!");
            console.log(data);
            setImageUrl(data.imageURL);
        } catch (error) {
            alert(error.message);
        }
    };

    return !imageUrl ? (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
            <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-96">
                <h2 className="text-2xl font-bold mb-6 text-center text-white">
                    Login
                </h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label
                            htmlFor="username"
                            className="block text-sm font-medium text-gray-300"
                        >
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-white placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                            required
                        />
                    </div>
                    <div>
                        <label
                            htmlFor="password"
                            className="block text-sm font-medium text-gray-300"
                        >
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 block w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md shadow-sm text-white placeholder-gray-400 focus:outline-none focus:ring-purple-500 focus:border-purple-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-gray-800 transition-colors duration-200"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    ) : (
        <div className="min-h-screen bg-gray-900 flex items-center justify-center">
            <img
                src={imageUrl}
                alt="profile"
                className="max-w-2xl rounded-lg shadow-xl"
            />
        </div>
    );
}

export default App;
