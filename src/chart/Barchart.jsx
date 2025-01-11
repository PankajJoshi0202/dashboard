import Chart from "react-apexcharts";

const BarChart = () => {
  return (
    <div className="w-full h-[80%] flex justify-center items-center">
      <Chart
        type="bar"
        width={500}
        height={400}
        series={[
          {
            name: "Sale Report",
            data: [30, 40, 35, 50, 49],
          },
        ]}
        options={{
          chart: {
            toolbar: {
              show: false,
            },
            zoom: {
              enabled: false,
            },
          },
          theme: {
            mode: "dark",
          },
          plotOptions: {
            bar: {
              horizontal: false,
              columnWidth: "50%",
              colors: {
                backgroundBarRadius: 5,
                opacity: 1,
                ranges: [
                  {
                    from: 0,
                    to: 100,
                    color: "#ff0000",
                  },
                ],
              },
            },
          },
          xaxis: {
            categories: ["January", "February", "March", "April", "May"],
            labels: {
              style: {
                colors: "#ffffff",
              },
            },
          },
          yaxis: {
            labels: {
              style: {
                colors: "#ffffff",
              },
            },
          },
          title: {
            text: "Monthly Sales Data",
            align: "center",
            style: {
              fontSize: "18px",
              fontWeight: "bold",
              color: "#ffffff",
            },
          },
          grid: {
            borderColor: "#ffffff",
          },
        }}
      />
    </div>
  );
};

export default BarChart;
