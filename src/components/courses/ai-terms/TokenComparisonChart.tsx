
import { 
  Bar, 
  BarChart, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Label
} from "recharts";

// Data for token comparison chart
const tokenComparisonData = [
  { name: "ChatGPT 3.5", tokens: 16000, fill: "#9b87f5" },
  { name: "Gemini 1.0", tokens: 32000, fill: "#cf0e81" },
  { name: "ChatGPT 4.0", tokens: 128000, fill: "#5c26e0" },
];

const TokenComparisonChart = () => {
  return (
    <div className="mt-6 mb-6">
      <h3 className="text-xl font-bold text-magenta mb-6 text-center">Możliwości przetwarzania tokenów</h3>
      <div className="w-full max-w-3xl mx-auto h-[300px] rounded-xl border border-purple/20 overflow-hidden bg-gradient-to-br from-slate-50 to-purple/5">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={tokenComparisonData}
            margin={{ top: 20, right: 30, left: 60, bottom: 40 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(156, 163, 175, 0.2)" vertical={false} />
            <XAxis 
              dataKey="name" 
              tick={{ fill: '#4B5563', fontSize: 12 }}
              tickLine={{ stroke: 'rgba(156, 163, 175, 0.3)' }}
              axisLine={{ stroke: 'rgba(156, 163, 175, 0.3)' }}
            />
            <YAxis 
              tick={{ fill: '#4B5563', fontSize: 12 }}
              tickLine={{ stroke: 'rgba(156, 163, 175, 0.3)' }}
              axisLine={{ stroke: 'rgba(156, 163, 175, 0.3)' }}
            >
              <Label 
                value="Ilość tokenów" 
                position="insideLeft" 
                angle={-90} 
                style={{ textAnchor: 'middle', fill: '#4B5563', fontSize: 12 }} 
                offset={-45}
              />
            </YAxis>
            <Tooltip
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid rgba(92, 38, 224, 0.2)',
                borderRadius: '8px',
                color: '#4B5563',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
              }}
              formatter={(value: number) => [`${value.toLocaleString()} tokenów`, 'Ilość']}
              labelStyle={{ color: '#cf0e81', fontWeight: 'bold' }}
            />
            <Bar 
              dataKey="tokens" 
              radius={[4, 4, 0, 0]}
              animationDuration={1500}
              barSize={60}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TokenComparisonChart;
