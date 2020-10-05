import React from "react";
import Room from "../Room/Room";

const roomList = ({ rooms }) => {
  if (rooms.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no rooms matched your search parameters</h3>
      </div>
    );
  }

  return (
    <section className="roomlist">
      <div className="roomlist-center">
        {rooms.map((value) => {
          return <Room key={value.id} room={value} />;
        })}
      </div>
    </section>
  );
};

export default roomList;
