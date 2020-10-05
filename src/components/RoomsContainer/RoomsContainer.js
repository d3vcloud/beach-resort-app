import React from "react";
import RoomList from "../RoomList/RoomList";
import RoomFilter from "../RoomFilter/RoomFilter";
import { withRoomConsumer } from "../../Context/Context";
import Loading from "../UI/Loading/Loading";

function RoomContainer({ context }) {
  const { loading, sortedRooms, rooms } = context;
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <RoomFilter rooms={rooms} />
      <RoomList rooms={sortedRooms} />
    </>
  );
}

export default withRoomConsumer(RoomContainer);

// const roomsContainer = () => {
//   return (
//     <RoomConsumer>
//       {(value) => {
//         const { loading, sortedRooms, rooms } = value;
//         if (loading) {
//           return <Loading />;
//         }
//         return (
//           <div>
//             <h1>hello</h1>
//             <RoomFilter rooms={rooms} />
//             <RoomList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// };

// export default roomsContainer;
