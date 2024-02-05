import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';


const BarChartComponent = ({data}) => {
  return (
  <ResponsiveContainer width='100%' height={500}>
  <BarChart data={data} margin={{ top: 50 }}>
    <CartesianGrid strokeDasharray='8 8' />
    <XAxis dataKey='date' />
    <YAxis allowDecimals={false} />
    <Tooltip />
    <Bar dataKey='count' fill='#bb44f0' barSize={45} />
  </BarChart>
</ResponsiveContainer>
);
};

export default BarChartComponent;