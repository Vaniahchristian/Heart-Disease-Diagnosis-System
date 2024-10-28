import React from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, Legend
} from 'recharts';
import { FaUpload, FaHeartbeat, FaUsers } from 'react-icons/fa';

const Dashboard = () => {
  // Sample data for Line Chart (Heart Diagnoses Over Time)
  const diagnosesOverTime = [
    { month: 'Jan', diagnoses: 10 },
    { month: 'Feb', diagnoses: 20 },
    { month: 'Mar', diagnoses: 25 },
    { month: 'Apr', diagnoses: 30 },
    { month: 'May', diagnoses: 40 },
    { month: 'Jun', diagnoses: 55 },
    { month: 'Jul', diagnoses: 60 },
    { month: 'Aug', diagnoses: 75 },
    { month: 'Sep', diagnoses: 90 },
    { month: 'Oct', diagnoses: 100 },
    { month: 'Nov', diagnoses: 85 },
    { month: 'Dec', diagnoses: 110 },
  ];

  // Sample data for Pie Chart (Heart Conditions Distribution)
  const heartConditions = [
    { name: 'Hypertension', value: 400 },
    { name: 'Coronary Artery Disease', value: 300 },
    { name: 'Heart Failure', value: 300 },
    { name: 'Arrhythmias', value: 200 },
    { name: 'Valvular Heart Disease', value: 278 },
    { name: 'Other', value: 189 },
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AA336A', '#8884D8'];

  // Sample data for Recent Activities
  const recentActivities = [
    { id: 1, user: 'Jane Smith', action: 'Uploaded a symptom report', date: '2024-10-10' },
    { id: 2, user: 'John Doe', action: 'Received diagnosis results', date: '2024-10-09' },
    { id: 3, user: 'Alice Johnson', action: 'Viewed heart health resources', date: '2024-10-08' },
    { id: 4, user: 'Bob Brown', action: 'Uploaded a symptom report', date: '2024-10-07' },
    { id: 5, user: 'Clara Lee', action: 'Received treatment advice', date: '2024-10-06' },
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-lg p-6 shadow-lg">
        <h1 className="text-3xl font-bold">Welcome Back, John!</h1>
        <p className="mt-2">Here’s your heart health dashboard overview.</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Diagnoses Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex items-center">
          <FaUpload className="text-indigo-500 w-12 h-12 mr-4" />
          <div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Total Diagnoses</h2>
            <p className="mt-2 text-2xl font-bold text-gray-700 dark:text-gray-300">110</p>
          </div>
        </div>

        {/* Treatments Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex items-center">
          <FaHeartbeat className="text-red-500 w-12 h-12 mr-4" />
          <div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Total Treatments</h2>
            <p className="mt-2 text-2xl font-bold text-gray-700 dark:text-gray-300">95</p>
          </div>
        </div>

        {/* Users Card */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 flex items-center">
          <FaUsers className="text-green-500 w-12 h-12 mr-4" />
          <div>
            <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">Active Users</h2>
            <p className="mt-2 text-2xl font-bold text-gray-700 dark:text-gray-300">75</p>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Diagnoses Over Time Line Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Heart Diagnoses Over Time</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={diagnosesOverTime}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" stroke="#8884d8" />
              <YAxis stroke="#8884d8" />
              <Tooltip />
              <Line type="monotone" dataKey="diagnoses" stroke="#8884d8" activeDot={{ r: 8 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Heart Conditions Distribution Pie Chart */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Heart Conditions Distribution</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={heartConditions}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {heartConditions.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={36}/>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Recent Activities</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  User
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Action
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                  Date
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
              {recentActivities.map((activity) => (
                <tr key={activity.id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                    {activity.user}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                    {activity.action}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 dark:text-gray-300">
                    {activity.date}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Actionable Tips */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-4">Actionable Tips for Heart Health</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
          <li>Maintain a balanced diet low in saturated fats and sodium.</li>
          <li>Engage in regular physical activity for at least 150 minutes per week.</li>
          <li>Manage stress through relaxation techniques like meditation and yoga.</li>
          <li>Avoid smoking and limit alcohol consumption.</li>
          <li>Regularly monitor your blood pressure and cholesterol levels.</li>
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
