import TimezoneSelect, { type ITimezone } from "react-timezone-select";

export default function Settings({
  selectedTimezone,
  setSelectedTimezone,
}: {
  selectedTimezone: ITimezone;
  setSelectedTimezone: (value: any) => void;
}) {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl">Change your Time zone</h1>
      <TimezoneSelect
        className="text-primary text-left"
        value={selectedTimezone}
        onChange={setSelectedTimezone}
      />
    </div>
  );
}
