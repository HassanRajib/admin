import AppBarChart from "@/components/AppBarChart";
import AppPieChart from "@/components/AppPieChart";
import AreaCharts from "@/components/AreaCharts";


export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-1 2xl:col-span-2">
        <AppBarChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">test</div>
      <div className="bg-primary-foreground p-4 rounded-lg">
        <AppPieChart />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">test</div>
      <div className="bg-primary-foreground p-4 rounded-lg lg:col-span-1 2xl:col-span-2">
        <AreaCharts />
      </div>
      <div className="bg-primary-foreground p-4 rounded-lg">test</div>
    </div>
  );
}
