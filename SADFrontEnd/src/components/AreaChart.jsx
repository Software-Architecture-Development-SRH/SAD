import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';


const AreaChartComponent = ({data}) => {
  return (
    <ResponsiveContainer width='100%' height={300}>
      <AreaChart data={data} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray='8 8' />
        <XAxis dataKey='date' />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Area type='monotone' dataKey='count' stroke='#bb44f0' fill='#f3ccff' />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComponent;