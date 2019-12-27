import React from "react";
import ThreadCard from "./Cards/ThreadCard";
import ChannelCard from "./Cards/ChannelCard";

function Home() {
  const dummyData = {
    title: "test"
  };
  return (
    <div>
      <div style={{ float: "left", width: "25%" }} className="column">
        <p>left</p>
      </div>
      <div
        style={{ float: "left", width: "75%" }}
        className="column feedContainer"
      >
        <h2>
          <b>Latest Post From Your Subscriptions</b>
        </h2>
        <hr />
        <ThreadCard value={dummyData} />
        <ThreadCard value={dummyData} />
        <p>Load More</p>
        <hr />
        <ChannelCard
          channelImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2VKdDjfM1CWCwNier-1OKcUDefMRKyp0FXb2md6ZLHvIWgPsa"
          channelTitle="Test Channel"
          channelSubscribers="69"
        />
      </div>
    </div>
  );
}
export default Home;
