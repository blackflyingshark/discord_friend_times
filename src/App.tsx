import { useState, useEffect } from "react";
import "./App.css";
import Friend from "./components/Friend";
import Navbar from "./components/Navbar";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Home } from "./routes/Home";
import Create from "./routes/Create";
import Settings from "./routes/Settings";
import TimezoneSelect, { type ITimezone } from "react-timezone-select";

function App() {
  const [ownTimezone, setOwnTimezone] = useState<ITimezone>(
    Intl.DateTimeFormat().resolvedOptions().timeZone
  );

  return (
    <div className="flex flex-row text-white">
      <Navbar />
      <div className="text-center flex-auto">
        <header className="flex flex-col bg-primary items-center min-h-screen justify-center gap-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="discord_friend_times" element={<Home />} />
            <Route path="create" element={<Create />} />
            <Route
              path="settings"
              element={
                <Settings
                  selectedTimezone={ownTimezone}
                  setSelectedTimezone={setOwnTimezone}
                />
              }
            />
            <Route path="*" element={<></>} />
          </Routes>
        </header>
      </div>
    </div>
  );
}
export default App;
