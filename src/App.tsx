import { Routes, Route } from "react-router-dom";

import PublicLayout from "./components/layout/PublicLayout";
import DashboardLayout from "./components/layout/DashboardLayout";

import Home from "./pages/Home";
import Overview from "./pages/Overview";
import Analytics from "./pages/Analytics";
import ChangeDetection from "./pages/ChangeDetection";
import DataSources from "./pages/DataSources";
import MonitoringMap from "./pages/MonitoringMap";
import Stories from "./pages/Stories";
import Education from "./pages/Education";
import TakeAction from "./pages/TakeAction";
import About from "./pages/About";

const App = () => {
  return (
    <Routes>
      {/* Public Website */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
      </Route>
      {/* Public Website */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/education" element={<Education />} />
        <Route path="/take-action" element={<TakeAction />} />
        <Route path="/about" element={<About />} />
      </Route>
      {/* Scientific Dashboard */}
      <Route element={<DashboardLayout />}>
        <Route path="/monitor" element={<Overview />} />
        <Route path="/map" element={<MonitoringMap />} />
        <Route path="/detection" element={<ChangeDetection />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/sources" element={<DataSources />} />
      </Route>
    </Routes>
  );
};

export default App;
