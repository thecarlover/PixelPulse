import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const GameSelection = () => {
  return (
    <section className="bg-gray-900 min-h-screen py-20">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-white mb-12">PixelPulse Originals</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Game Box 1 */}
          <Link to="/Plinko" className="game-box rounded-lg overflow-hidden relative">
            <img src="https://mediumrare.imgix.net/5cbb2498c956527e6584c6af216489b85bbb7a909c7d3c4e131a3be9bd1cc6bf" alt="Plinko" className="object-cover w-full h-full" />
            <div className="overlay bg-black bg-opacity-50 absolute inset-0 flex items-center justify-center transition duration-300 opacity-0 hover:opacity-100">
              <h2 className="text-2xl font-bold text-white">Plinko</h2>
            </div>
          </Link>
          {/* Game Box 2 */}
          <Link to="/Game2" className="game-box rounded-lg overflow-hidden relative">
            <img src="https://mediumrare.imgix.net/15a51a2ae2895872ae2b600fa6fe8d7f8d32c9814766b66ddea2b288d04ba89c?&dpr=2&format=auto&auto=format&q=50" alt="Game 2" className="object-cover w-full h-full" />
            <div className="overlay bg-black bg-opacity-50 absolute inset-0 flex items-center justify-center transition duration-300 opacity-0 hover:opacity-100">
              <h2 className="text-2xl font-bold text-white">Coming Soon</h2>
            </div>
          </Link>
          {/* Game Box 3 */}
          <Link to="/Game3" className="game-box rounded-lg overflow-hidden relative">
            <img src="https://mediumrare.imgix.net/102cf3d7c840018b939cd787bf013e080b996d80e604f3008f21dddf1f1aa201?&dpr=2&format=auto&auto=format&q=50&w=167" alt="Game 3" className="object-cover w-full h-full" />
            <div className="overlay bg-black bg-opacity-50 absolute inset-0 flex items-center justify-center transition duration-300 opacity-0 hover:opacity-100">
              <h2 className="text-2xl font-bold text-white">Coming Soon</h2>
            </div>
          </Link>
          {/* Add more game boxes as needed */}
        </div>
      </div>
    </section>
  );
};

export default GameSelection;
