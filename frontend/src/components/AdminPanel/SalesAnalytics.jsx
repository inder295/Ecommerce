import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { useAnalytics } from "../../store/useAnalytics";

ChartJS.register(
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

export const SalesAnalytics = () => {
  const [type, setType] = useState("weekly");
  const [labels, setLabels] = useState([]);
  const [data,setData]=useState([]);

  const {getSalesData,fetchingSalesData,salesData}=useAnalytics();
  
  const formatLabel = (dateString, type) => {
    const date = new Date(dateString);

    switch (type) {
        case "weekly":
        // Week range (Oct 20 – Oct 26)
      const start = new Date(date);
      const end = new Date(date);
      end.setDate(start.getDate() + 6);

      return `${start.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
      })} - ${end.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
      })}`;

    case "monthly":
      // Oct 2025
      return date.toLocaleDateString("en-IN", {
        month: "short",
        year: "numeric",
      });

    case "yearly":
      // 2025
      return date.getFullYear().toString();

    default:
      return date.toDateString();
  }
};


  const analytics = () => {
     
  };

  useEffect(async () => {
    await analytics();
    await getSalesData(type).then(()=>{
        console.log(salesData);
        
    })
    
    
  }, [type]);

  const chartData = {
  labels,
  datasets: [
    {
      label: "Sales",
      data: salesData,
      fill: true,
      tension: 0.4,
      borderColor: "#2563eb",
      backgroundColor: (context) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 300);
        gradient.addColorStop(0, "rgba(37, 99, 235, 0.5)");
        gradient.addColorStop(1, "rgba(37, 99, 235, 0.05)");
        return gradient;
      },
      pointBackgroundColor: "#2563eb",
      pointRadius: 4,
    },
  ],
};


  return (
    <div className="w-full max-w-5xl p-4 bg-white rounded my-11 shadow-xl ">
      <div className="flex justify-between mb-4">
        <h2 className="text-xl font-bold my-2">Sales Record</h2>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="p-2 border rounded"
        >
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      <Line data={chartData} />
      <p className="text-center font-bold text-gra">{type}</p>
    </div>
  );
};
