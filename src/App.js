import BarChart from "./Charts/BarChart";
import DoughnutChart from "./Charts/DoughnutChart";
import PolarAreaChart from "./Charts/PolarAreaChart";
import RadarChart from "./Charts/RadarChart";

function App() {
  return (
    <div>
      <DoughnutChart />
      <BarChart />
      <RadarChart />
      <PolarAreaChart />
    </div>
  );
}

export default App;
