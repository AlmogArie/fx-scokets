import { useState, useEffect } from "react";
import Graph from "../cmps/Graph";
import io from "socket.io-client";

const socket = io("http://localhost:8000", {
  transports: ["websocket", "polling"],
});

const Socket = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    socket.on("data", (newData) => {
      setData((currentData) => [...currentData, newData]);
    });
    socket.emit("subscribeToInterval", 60000);
  }, []);

  const onChangeInterval = (newInterval) => {
    setData([]);
    socket.emit("subscribeToInterval", newInterval);
  };

  return (
    <div>
      <Graph data={data} onChangeInterval={onChangeInterval} />
    </div>
  );
};

export default Socket;
