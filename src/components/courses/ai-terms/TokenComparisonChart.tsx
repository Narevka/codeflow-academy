
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
import { useTheme } from '@/contexts/ThemeContext';

// Data for token comparison chart
const tokenComparisonData = [
  { name: "ChatGPT 3.5", tokens: 16000, fill: "#0066cc" },
  { name: "Gemini 1.0", tokens: 32000, fill: "#0066cc" },
  { name: "ChatGPT 4.0", tokens: 128000, fill: "#0066cc" },
];

const TokenComparisonChart = () => {
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  
  return (
    <div className="mt-6 mb-6">
      <h3 className="text-xl font-bold text-magenta mb-6 text-center">Możliwości przetwarzania tokenów</h3>
      <div className={`w-full max-w-3xl mx-auto h-[300px] rounded-xl border overflow-hidden ${
        isDark 
          ? "bg-gradient-to-br from-[#1E2130] to-[#2A2E3F] border-white/20" 
          : "bg-gradient-to-br from-[#f8faff] to-[#edf1ff] border-gray-200"
      }`}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={tokenComparisonData}
            margin={{ top: 20, right: 30, left: 60, bottom: 40 }}
          >
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke={isDark ? "rgba(255, 255, 255, 0.08)" : "rgba(0, 0, 0, 0.1)"} 
              vertical={false} 
            />
            <XAxis 
              dataKey="name" 
              tick={{ fill: isDark ? 'white' : '#333', fontSize: 12 }}
              tickLine={{ stroke: isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)' }}
              axisLine={{ stroke: isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)' }}
            />
            <YAxis 
              tick={{ fill: isDark ? 'white' : '#333', fontSize: 12 }}
              tickLine={{ stroke: isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)' }}
              axisLine={{ stroke: isDark ? 'rgba(255, 255, 255, 0.15)' : 'rgba(0, 0, 0, 0.15)' }}
            >
              <Label 
                value="Ilość tokenów" 
                position="insideLeft" 
                angle={-90} 
                style={{ textAnchor: 'middle', fill: isDark ? 'white' : '#333', fontSize: 12 }} 
                offset={-45}
              />
            </YAxis>
            <Tooltip
              contentStyle={{ 
                backgroundColor: isDark ? 'rgba(15, 16, 25, 0.95)' : 'rgba(255, 255, 255, 0.95)', 
                border: isDark ? '1px solid rgba(255, 255, 255, 0.08)' : '1px solid rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
                color: isDark ? 'white' : '#333',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)'
              }}
              formatter={(value: number) => [`${value.toLocaleString()} tokenów`, 'Ilość']}
              labelStyle={{ color: '#cf0e81', fontWeight: 'bold' }}
            />
            <Bar 
              dataKey="tokens" 
              radius={[4, 4, 0, 0]}
              fill={isDark ? "#2872e5" : "#0075ff"}
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
