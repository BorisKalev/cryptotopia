import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
const Market = () => {
  const [coins, setCoins] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(3);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function addCommasToNumber(number) {
    let numString = number.toString();
    numString = numString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return numString;
  }

  // Fetch coins whenever the page changes
  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=5&page=${currentPage}&sparkline=false`
        );
        if (!response.ok) throw new Error("Failed to fetch coins");
        const data = await response.json();
        setCoins(data);
        setLoading(false);
        setError(null);
      } catch (error) {
        setError("The number of request has exceeded the amount available");
        setLoading(true);
      }
    };

    fetchCoins();
  }, [currentPage]);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleCoinClick = (coinId) => {
    navigate(`/coin/${coinId}`);
  };

  return (
    <>
      {/* Header Section */}
      <div className="flex flex-col items-center mt-[10rem]" id="market">
        <div className="border border-[#432f68] rounded-full text-white text-center">
          <p className="p-4 font-sans opacity-90">Over 200 coins</p>
        </div>
      </div>
      <div className="relative flex justify-center text-white mt-5">
        <h1 className="text-4xl font-mix w-2/5 text-center lg-max:w-3/4">
          Trade, Exchange, Stake and More with All Popular Coins
        </h1>
      </div>
      <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full purple__gradient top-[50rem] lg-max:top-[90rem]" />
      <div className="absolute z-[0] w-[60%] h-[60%] -left-[50%] rounded-full white__gradient top-[50rem] lg-max:top-[90rem]" />

      {/* Market Section */}
      <div className="max-w-6xl mt-[4rem] m-auto relative sm-max:px-10 px-7">
        {/* Market Table Header */}
        <div className="grid grid-cols-4 gap-4 text-[#8D5FE3] mt-5 text-md lg-max:grid-cols-3 px-7">
          <p className="">Coin</p>
          <p className="text-center">Price</p>
          <p className="text-center lg-max:text-right">24H Change</p>
          <p className="text-right lg-max:hidden">Market Cap</p>
        </div>

        {/* Loading and Error Handling */}
        {loading && (
          <div className="flex items-center justify-center min-h-[200px]">
            <ClipLoader color="#8D5FE3" size={50} />
          </div>
        )}
        {error && (
          <div className="text-red-500 text-center min-h-[200px]">
            <p>Error fetching coins: {error}</p>
          </div>
        )}
        {coins.length === 0 && !loading && !error && (
          <div className="text-white text-center min-h-[200px]">
            <p>No coins available</p>
          </div>
        )}

        {/* Coin Listings */}
        {coins.map((coin) => (
          <div key={coin.id} className="mt-10">
            <div
              className="grid grid-cols-4 gap-4 items-center text-white text-xl font-mix lg-max:grid-cols-3 px-7 cursor-pointer"
              onClick={() => handleCoinClick(coin.id)}
            >
              <p className="flex items-center md-max:flex-col md-max:items-start">
                <img
                  src={coin.image}
                  alt={coin.name}
                  className="inline-block w-8 h-8 mr-2"
                />
                {coin.name}
              </p>
              <p className="text-center">${coin.current_price.toFixed(2)}</p>
              <p
                className={`text-center lg-max:text-right ${
                  coin.price_change_percentage_24h > 0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {coin.price_change_percentage_24h.toFixed(2)}%
              </p>
              <p className="text-right lg-max:hidden">
                ${addCommasToNumber(coin.market_cap)}
              </p>
            </div>
            <div className="w-full h-[5px] bg-gradient-white-purple mt-5" />
          </div>
        ))}

        {/* Pagination Controls */}
        {loading ? (
          ""
        ) : (
          <div className="flex justify-center mt-10 space-x-4">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className={`text-white px-4 py-2 rounded ${
                currentPage === 1
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-[#8D5FE3]"
              }`}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            {[...Array(totalPages).keys()].map((_, index) => (
              <button
                key={index + 1}
                onClick={() => handlePageChange(index + 1)}
                className={`text-white px-4 py-2 rounded ${
                  currentPage === index + 1 ? "bg-[#8D5FE3]" : "bg-gray-500"
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className={`text-white px-4 py-2 rounded ${
                currentPage === totalPages
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-[#8D5FE3]"
              }`}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default Market;
