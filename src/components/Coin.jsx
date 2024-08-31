import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Coin = () => {
  const { coinId } = useParams(); // Get the coin ID from the URL
  const [coin, setCoin] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoinData = async () => {
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${coinId}`
        );
        if (!response.ok) throw new Error("Failed to fetch coin data");
        const data = await response.json();
        setCoin(data);
      } catch (error) {
        setError(error.message);
        console.error("Error fetching coin data:", error);
      }
    };

    fetchCoinData();
  }, [coinId]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!coin) {
    return <div>Loading...</div>;
  }

  return (
    <div className="text-white flex flex-col max-w-6xl m-auto mt-[5rem]">
      <div className="flex items-center">
        <img src={coin.image.thumb} alt={coin.name} />
        <h1 className="ml-5 text-3xl font-bold">{coin.name}</h1>
        <p></p>
      </div>
      <div className="mt-3 flex">
        <p className="text-5xl">${coin.market_data.current_price.usd}</p>
      </div>

      <p>Market Cap: ${coin.market_data.market_cap.usd}</p>
    </div>
  );
};

export default Coin;
