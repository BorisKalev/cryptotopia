import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import { AreaChart, Card } from "@tremor/react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { useNavigate } from "react-router-dom";
const Coin = () => {
  const { coinId, coinName } = useParams();
  const [coin, setCoin] = useState(null);
  const [error, setError] = useState(null);
  const [chartData, setChartData] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const navigate = useNavigate();
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

    const fetchChartData = async () => {
      try {
        // Fetch Bitcoin price data for the last 24 hours
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${coinName}/market_chart?vs_currency=usd&days=1`
        );
        const data = await response.json();

        // Format the data for AreaChart
        const formattedData = data.prices.map((price) => ({
          time: new Date(price[0]).toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
          price: price[1],
        }));

        // Find the min and max prices
        const prices = data.prices.map((price) => price[1]);
        const minPrice = Math.min(...prices) - 1000;
        const maxPrice = Math.max(...prices) + 1000;

        setChartData(formattedData);
        setMinPrice(minPrice);
        setMaxPrice(maxPrice);
      } catch (error) {
        console.error("Error fetching chart data:", error);
      }
    };

    fetchCoinData();
    fetchChartData();
  }, [coinId, coinName]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!coin) {
    return <div>Loading...</div>;
  }

  function addCommasToNumber(number) {
    if (number === null || number === undefined) {
      return "N/A";
    }
    return number.toLocaleString();
  }

  function turnPositive(number) {
    return number >= 0 ? number : number * -1;
  }

  const handleReturnClick = () => {
    navigate(`/`);
  };

  function formatNumber(value) {
    if (value >= 1e9) return `$${(value / 1e9).toFixed(2)}B`;
    if (value >= 1e6) return `$${(value / 1e6).toFixed(2)}M`;
    if (value >= 1e3) return `$${(value / 1e3).toFixed(2)}K`;
    return `$${value.toFixed(2)}`;
  }

  return (
    <>
      <div
        className="flex text-white items-center max-w-6xl m-auto mt-10 cursor-pointer"
        onClick={() => handleReturnClick()}
      >
        <MdKeyboardArrowLeft className="text-3xl" />
        <h1 className="text-xl">Return</h1>
      </div>

      <div className="text-white flex justify-between max-w-6xl m-auto mt-[5rem]">
        <div className="w-2/6">
          <div className="flex items-center">
            <img src={coin.image.thumb} alt={coin.name} />
            <h1 className="ml-5 text-3xl font-bold">{coin.name}</h1>
            <p className="px-3 opacity-50">{coin.symbol.toUpperCase()} Price</p>
            <p className="p-1 bg-purple-200 text-black rounded-lg text-sm">
              #{coin.market_cap_rank}
            </p>
          </div>
          <div className="mt-3 flex items-center">
            <p className="text-5xl">
              ${addCommasToNumber(coin.market_data.current_price.usd)}
            </p>
            {coin.market_data.price_change_percentage_24h > 0 ? (
              <IoMdArrowDropup className="ml-3 text-lg text-green-500" />
            ) : (
              <IoMdArrowDropdown className="ml-3 text-lg text-red-500" />
            )}
            <p
              className={`${
                coin.market_data.price_change_percentage_24h > 0
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {turnPositive(coin.market_data.price_change_percentage_24h)}%
            </p>
          </div>

          <div className="flex flex-col mt-10">
            {[
              { label: "Market Cap", value: coin.market_data.market_cap.usd },
              {
                label: "Fully Diluted Valuation",
                value: coin.market_data.fully_diluted_valuation.usd,
              },
              {
                label: "Circulating Supply",
                value: coin.market_data.circulating_supply,
              },
              { label: "Total Supply", value: coin.market_data.total_supply },
              { label: "Max Supply", value: coin.market_data.max_supply },
            ].map(({ label, value }, index) => (
              <div key={index} className="flex flex-col">
                <div className="flex items-center justify-between py-5">
                  <p className="opacity-70">{label}</p>
                  <p className="font-bold">${addCommasToNumber(value)}</p>
                </div>
                {index < 4 && <div className="w-full h-[1px] bg-purple-200" />}
              </div>
            ))}
          </div>
        </div>

        <div className="w-4/6 flex items-center justify-center ml-10 mt-[10rem]">
          <Card className="w-full h-[350px]">
            <AreaChart
              className="custom-chart"
              data={chartData}
              categories={["price"]}
              index="time"
              colors={["#9F7AEA"]}
              showLegend={false}
              valueFormatter={(value) => formatNumber(value)}
              title="Bitcoin Price - Last 24 Hours"
              yAxisWidth={70}
              xAxisOptions={{
                tickInterval: 5,
                formatter: (value) => value,
              }}
              minValue={minPrice}
              maxValue={maxPrice}
            />
          </Card>

          <style jsx>{`
            .custom-chart .recharts-cartesian-axis-tick tspan {
              fill: white !important; /* Force the text for the tick labels to be white */
            }

            .custom-chart .recharts-cartesian-axis-line,
            .custom-chart .recharts-cartesian-grid-horizontal line,
            .custom-chart .recharts-cartesian-grid-vertical line {
              stroke: white !important; /* Force the grid lines and axis lines to be white */
            }
          `}</style>
        </div>
      </div>
    </>
  );
};

export default Coin;
