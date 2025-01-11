import BarChart from "./chart/barchart";
import PieChart from "./chart/PieChart";
import TableFormate from "./chart/TableFormate";
const Formate = () => {
  return (
    <div className=" bg-slate-400 w-screen h-screen text-white py-3 overflow-hidden">
      <div className="h-[50%] w-full  my-5">
        <TableFormate></TableFormate>
      </div>
      <div className="flex h-[50%] ">
        <div className=" w-[50%]    py-5">
          <PieChart></PieChart>
        </div>
        <div className=" w-[50%]  py-5">
          <BarChart></BarChart>
        </div>
      </div>
    </div>
  );
};

export default Formate;
