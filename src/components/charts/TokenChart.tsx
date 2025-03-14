
import React from "react";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts";

interface TokenModel {
  name: string;
  tokens: number;
}

interface TokenChartProps {
  title: string;
  subtitle?: string;
  data: TokenModel[];
}

const TokenChart: React.FC<TokenChartProps> = ({ title, subtitle, data }) => {
  return (
    <div className="w-full rounded-lg overflow-hidden border border-gray-700 bg-gray-900 p-4">
      <div className="mb-4">
        <h3 className="text-xl font-bold text-teal-600">{title}</h3>
        {subtitle && <p className="text-sm text-gray-400">{subtitle}</p>}
      </div>
      {/* Chart container with increased height */}
      <div className="h-[400px] w-full">
        <ChartContainer 
          config={{
            tokens: {
              label: "Ilość tokenów",
              theme: {
                light: "#1e40af",
                dark: "#1e40af"
              }
            }
          }}
        >
          {/* Bar chart with adjusted margins */}
          <BarChart data={data} margin={{ top: 20, right: 30, left: 40, bottom: 60 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis 
              dataKey="name" 
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8" }}
              dy={10}
            />
            <YAxis 
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#94a3b8" }}
              tickFormatter={(value) => value.toLocaleString()}
              domain={[0, 'dataMax + 20000']}
            />
            <Bar 
              dataKey="tokens" 
              fill="#1e40af" 
              name="tokens"
              radius={[4, 4, 0, 0]}
            />
            <ChartTooltip
              content={<ChartTooltipContent />}
              cursor={{ fill: "rgba(100, 116, 139, 0.1)" }}
            />
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export default TokenChart;
