import React, { useEffect, useState } from "react";
import io from "socket.io-client";
import Chart from "./components/Chart";

const socket = io("http://localhost:5000");

function App() {
  const [dataPoints, setDataPoints] = useState([]);

  useEffect(() => {
    socket.on("priceUpdate", (data) => {
      setDataPoints(prev => [...prev.slice(-9), {
        time: data.time,
        price: data.price,
      }]);
    });
  }, []);

  return (
    <div>
      <h2>Real-Time Bitcoin Price</h2>
      <Chart dataPoints={dataPoints} />
    </div>
  );
}

export default App;
