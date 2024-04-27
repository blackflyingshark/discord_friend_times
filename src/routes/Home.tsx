import { useState, useEffect } from "react";
import Friend from "../components/Friend";

export function Home() {
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    setFriends(JSON.parse(localStorage.getItem("friends") ?? "[]"));
  }, [localStorage.getItem("friends")]);

  return (
    <>
      <h1 className="text-4xl">
        {friends
          .map(
            (element: {
              name: string;
              imageUrl: string;
              selectedTimezone: string;
            }) => element.name
          )
          .join(", ")}{" "}
        and you are active right now!
      </h1>
      <div className="flex gap-4 items">
        {friends.map((friend) => (
          <Friend friend={friend} />
        ))}
      </div>
    </>
  );
}
