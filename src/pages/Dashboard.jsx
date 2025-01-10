import ProgressBar from "@/webcomponents/dashboard/ProgressBar";
import GoalProgressChart from "@/webcomponents/dashboard/GoalProgressChart";
import StatCard from "@/webcomponents/dashboard/StatCard";
import NotesCard from "@/webcomponents/dashboard/NotesCard";
import CreateNewNotes from "@/webcomponents/dashboard/CreateNewNotes";

const Dashboard = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <h1 className=" text-slate-900 text-3xl font-semibold m-3">Dashboard</h1>
      <main className=" m-3">
        <div className="flex flex-col gap-1">
          <h2 className="text-gray-900 text-lg font-semibold">Hello Sourabh Ghosh !</h2>
          <p className="text-gray-600 mb-6">Every small step brings you closer to your big dreams</p>
        </div>
        {/* STATS */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          <StatCard
            heading="Total Goals"
            value="12"
            color="#6366F1"
            month= "+2 from last month"
          />
          <StatCard
            heading="Completed Tasks"
            value="27"
            color="#885CF6"
            month= "+5 from last month"
          />
          <StatCard
            heading="Pending Tasks"
            value="18"
            color="#EC4899"
            month= "+3 from last month"
          />
        </div>

        {/* Progress */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ProgressBar
          progress={80}
          value={80}
          />
        </div>

        {/* CHARTS */}
        <div className="mt-10" >
        <GoalProgressChart/>
        </div>

        {/* Notes card */}
        <h1 className="m-2 text-2xl font-semibold">Memories</h1>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mb-8">
          <NotesCard
          heading="To Do List"
          progress="0/1"
          name="deep"
          status="Running"
          description="Mixin.parseExpression"
          time= "Today"/>
          <NotesCard
          heading="To Do List"
          progress="0/1"
          name="deep"
          status="Running"
          description="Mixin.parseExpression"
          time= "Today"/>
          <CreateNewNotes/>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;