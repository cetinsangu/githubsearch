import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { useAppContext } from '../../context/context';

ChartJS.register(ArcElement, Tooltip, Legend);

export function MostUsedLangs() {
  const { githubRepos, isDarkMode } = useAppContext();

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    animation: {
      delay: 2200,
    },

    plugins: {
      legend: {
        display: true,
        labels: {
          color: isDarkMode ? 'rgb(255, 255, 255)' : 'rgb(0,0,0)',
        },
      },
    },
  };
  const calcLangs = githubRepos.reduce((acc, curr) => {
    const { language } = curr;
    if (!language) return acc;
    if (!acc[language]) {
      acc[language] = 1;
    } else {
      acc[language] += 1;
    }
    return acc;
  }, {});
  const langs = Object.values(calcLangs);

  const labels = Object.keys(calcLangs);
  const data = {
    labels: labels,
    datasets: [
      {
        offset: 0,
        data: langs,
        backgroundColor: [
          'rgb(255, 66, 132)',
          'rgb(28, 78, 216)',
          'rgb(255, 206, 86)',
          'rgb(75, 192, 192)',
          'rgb(153, 102, 255)',
          'rgb(255, 159, 64)',
        ],
      },
    ],
  };

  return (
    <div className="h-96 w-full">
      {langs.length >= 1 ? (
        <Pie data={data} options={options} />
      ) : (
        <div className="text-center text-xl text-gray-500">
          No language found
        </div>
      )}
    </div>
  );
}
