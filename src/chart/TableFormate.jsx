const DataTable = () => {
  const data = [
    { month: "January", sales: 30 },
    { month: "February", sales: 40 },
    { month: "March", sales: 35 },
    { month: "April", sales: 50 },
    { month: "May", sales: 49 },
  ];

  return (
    <>
      <h1 className="text-center text-white text-4xl font-bold mb-4">
        Sale Report
      </h1>
      <table className="table-auto border-collapse border-2 border-white w-full h-[80%] mx-auto text-center">
        <thead>
          <tr>
            <th className="border-b-2 border-white px-4 py-2">Month</th>
            <th className="border-b-2 border-white px-4 py-2">Sales</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr
              key={index}
              className={index % 2 === 0 ? "bg-gray-800" : "bg-gray-700"}
            >
              <td className="border-b border-white px-4 py-2">{item.month}</td>
              <td className="border-b border-white px-4 py-2">{item.sales}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default DataTable;
