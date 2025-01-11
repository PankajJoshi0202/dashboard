import Chart from "react-apexcharts";

const PieChart = () => {
  return (
    <div className="flex justify-center items-center m-auto">
      <Chart
        type="pie"
        series={[30, 40, 35, 50, 49]}
        options={{
          labels: ["January", "February", "March", "April", "May"],
          title: {
            text: "Sales Report",
            align: "center",
            style: {
              fontSize: "18px",
              fontWeight: "bold",
              color: "white",
            },
          },
          chart: {
            width: "100%",
          },
          dataLabels: {
            enabled: true,
            style: {
              colors: ["#ffffff"],
              fontSize: "14px",
            },
          },
          legend: {
            show: true,
            labels: {
              style: {
                colors: "white",
                fontSize: "14px",
              },
            },
          },
        }}
        width={500}
      />
    </div>
  );
};

export default PieChart;
