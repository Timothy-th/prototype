import { Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/layout/DashboardLayout";
import Overview from "./pages/Overview";
import Analytics from "./pages/Analytics";
import ChangeDetection from "./pages/ChangeDetection";
import DataSources from "./pages/DataSources";
import MonitoringMap from "./pages/MonitoringMap";

// const PlaceholderPage = ({ title }: { title: string }) => (
//   <div>
//     <h1 className="font-heading text-2xl font-bold text-ink">{title}</h1>
//     <p className="mt-2 text-sm text-muted">
//       This section is currently under development.
//     </p>
//   </div>
// );

const App = () => {
  return (
    <Routes>
      <Route element={<DashboardLayout />}>
        <Route path="/" element={<Overview />} />
        <Route path="/map" element={<MonitoringMap />} />
        <Route path="/detection" element={<ChangeDetection />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/sources" element={<DataSources />} />
      </Route>
    </Routes>
  );
};

export default App;
