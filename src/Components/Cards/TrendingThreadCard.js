import React from "react";

function TrendingThreadCard(props) {
  return (
    <div>
      <div className="rectangle card" style={{ float: "left", width: "100%", margin:"0px 10px 10px 0px"}}>
        <div style={{ float: "left", width: "25%", padding: "15px" }}>
          <img
            src={props.value.threadImage}
            alt="error"
            style={{ height: "80px", width: "80px" }}
          />
        </div>
        <div style={{ float: "left", width: "75%", padding: "10px 20px" }}>
          <h4>
            <b>{props.value.threadTitle}</b>
          </h4>
          <div style={{ position: "absolute", bottom: "-10px", right: "10px" }}>
            <p style={{ textAlign: "right" }}>
              <b>{props.value.threadChannel}</b>
            </p>
          </div>
        </div>
      </div>
      {/* <ThreadFrame show={modalOpen} setModalOpen={setModalOpen} /> */}
    </div>
  );
}
export default TrendingThreadCard;
