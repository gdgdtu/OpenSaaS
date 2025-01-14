import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import Chart from 'chart.js/auto';

const AnalyticsPage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch analytics data from your backend or analytics platform
    const fetchData = async () => {
      const response = await fetch('/api/analytics');
      const result = await response.json();
      setData(result);
    };

    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  const chartData = {
    labels: data.labels,
    datasets: [
      {
        label: 'Page Views',
        data: data.pageViews,
        backgroundColor: 'hsl(var(--chart-1))',
      },
      {
        label: 'Unique Visitors',
        data: data.uniqueVisitors,
        backgroundColor: 'hsl(var(--chart-2))',
      },
      {
        label: 'Bounce Rate',
        data: data.bounceRate,
        backgroundColor: 'hsl(var(--chart-3))',
      },
      {
        label: 'Average Session Duration',
        data: data.avgSessionDuration,
        backgroundColor: 'hsl(var(--chart-4))',
      },
      {
        label: 'Conversion Rate',
        data: data.conversionRate,
        backgroundColor: 'hsl(var(--chart-5))',
      },
    ],
  };

  return (
    <div>
      <h1>Analytics</h1>
      <Bar data={chartData} />
    </div>
  );
};

export default AnalyticsPage;
