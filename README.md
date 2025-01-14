## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

*Ensure that after any feature you add, you must write it in the documentation - write how to set it up (like .env variables)*

## Setup Instructions for Vercel Analytics

1. Install the necessary dependencies:

```bash
npm install @vercel/analytics chart.js react-chartjs-2
```

2. Add the following environment variables to your `.env` file:

```
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your-vercel-analytics-id
```

3. Add the tracking code to your `src/app/layout.tsx` file:

```tsx
import { Analytics } from '@vercel/analytics/react';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
```

4. Implement event tracking for specific interactions like button clicks or form submissions in your components, such as `src/components/ui/button.tsx`:

```tsx
import { logEvent } from '@vercel/analytics';

const handleClick = (event) => {
  logEvent('button_click', { variant, size });
};
```

5. Create a new page to display the analytics data in the form of charts, graphs, or visuals. For example, `src/app/analytics.tsx`:

```tsx
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
```
