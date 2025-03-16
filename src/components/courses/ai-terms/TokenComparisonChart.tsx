
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
  { name: "ChatGPT 3.5", tokens: 16000, fill: "#0066cc" },
  { name: "Gemini 1.0", tokens: 32000, fill: "#0066cc" },
  { name: "ChatGPT 4.0", tokens: 128000, fill: "#0066cc" },
];

const TokenComparisonChart = () => {
  return (
    <div className="mt-6 mb-6">
      <h3 className="text-xl font-bold text-magenta mb-6 text-center">Możliwości przetwarzania tokenów</h3>
      <div className="w-full max-w-3xl mx-auto h-[300px] rounded-xl border border-white/20 overflow-hidden bg-gradient-to-br from-[#1E2130] to-[#2A2E3F]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={tokenComparisonData}
            margin={{ top: 20, right: 30, left: 60, bottom: 40 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255, 255, 255, 0.1)" vertical={false} />
            <XAxis 
              dataKey="name" 
              tick={{ fill: 'white', fontSize: 12 }}
              tickLine={{ stroke: 'rgba(255, 255, 255, 0.2)' }}
              axisLine={{ stroke: 'rgba(255, 255, 255, 0.2)' }}
            />
            <YAxis 
              tick={{ fill: 'white', fontSize: 12 }}
              tickLine={{ stroke: 'rgba(255, 255, 255, 0.2)' }}
              axisLine={{ stroke: 'rgba(255, 255, 255, 0.2)' }}
            >
              <Label 
                value="Ilość tokenów" 
                position="insideLeft" 
                angle={-90} 
                style={{ textAnchor: 'middle', fill: 'white', fontSize: 12 }} 
                offset={-45}
              />
            </YAxis>
            <Tooltip
              contentStyle={{ 
                backgroundColor: 'rgba(20, 22, 34, 0.9)', 
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '8px',
                color: 'white',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)'
              }}
              formatter={(value: number) => [`${value.toLocaleString()} tokenów`, 'Ilość']}
              labelStyle={{ color: '#cf0e81', fontWeight: 'bold' }}
            />
            <Bar 
              dataKey="tokens" 
              radius={[4, 4, 0, 0]}
              fill="#0075ff"
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
