import profilepic from "../profilepic.svg";
export default function Friend({
  friend,
}: {
  friend: { name: string; imageUrl: string; selectedTimezone: string };
}) {
  return (
    <div className="flex flex-row hover:cursor-pointer">
      <img
        src={friend.imageUrl}
        alt={friend.name}
        className="rounded-full size-20"
      />
    </div>
  );
}
