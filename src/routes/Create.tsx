import Input from "../components/Input";
import { useState } from "react";
import TimezoneSelect, {
  type ITimezone,
  allTimezones,
} from "react-timezone-select";

export default function Create() {
  const [selectedTimezone, setSelectedTimezone] = useState<ITimezone>("");
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  return (
    <div className="flex flex-col gap-4 items-stretch">
      <h1 className="text-4xl mb-10">Add a new friend</h1>
      <div className="flex flex-row gap-2 items-center justify-between">
        <h1 className="text-xl">Discord handle/ Nickname:</h1>
        <Input
          state={name}
          setState={setName}
          placeholder="Best friend <2"
          type="string"
        />
      </div>
      <div className="flex flex-row gap-2 items-center justify-between">
        <h1 className="text-xl">Image URL:</h1>
        <Input
          state={imageUrl}
          setState={setImageUrl}
          placeholder="Get the link from somewhere :)"
          type="string"
        />
      </div>
      <div className="flex flex-row gap-2 items-center justify-between">
        <h1 className="text-xl">Timezone:</h1>
        <TimezoneSelect
          className="flex text-primary text-left w-1/2"
          value={selectedTimezone}
          onChange={setSelectedTimezone}
        />
      </div>
      <button
        className="flex self-center bg-primary-light px-4 py-2 rounded-xl hover:bg-primary-lighter"
        onClick={() => {
          const friend = {
            name,
            imageUrl,
            selectedTimezone: JSON.stringify(selectedTimezone, null, 2),
          };

          const friends = [
            ...JSON.parse(localStorage.getItem("friends") ?? "[]"),
            friend,
          ];
          localStorage.setItem("friends", JSON.stringify(friends));

          alert(`Added friend: ${name}`);
        }}
      >
        Submit
      </button>
    </div>
  );
}
