
import React, { useState } from "react";
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
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleMouseEnter = (_: any, index: number) => {
    setActiveIndex(index);
  };

  const handleMouseLeave = () => {
    setActiveIndex(null);
  };

  // Custom bar colors based on active state
  const getBarFill = (entry: any, index: number) => {
    return index === activeIndex ? "#8B5CF6" : "#1e40af"; // Violet when active, blue when inactive
  };

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
          <BarChart 
            data={data} 
            margin={{ top: 20, right: 30, left: 40, bottom: 60 }}
            onMouseLeave={handleMouseLeave}
          >
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
              name="tokens"
              radius={[4, 4, 0, 0]}
              fill="#1e40af"
              onMouseEnter={handleMouseEnter}
              cursor="pointer"
              isAnimationActive={true}
            >
              {data.map((entry, index) => (
                <rect 
                  key={`bar-${index}`} 
                  fill={getBarFill(entry, index)}
                  className="transition-colors duration-200"
                />
              ))}
            </Bar>
            <ChartTooltip
              content={<ChartTooltipContent />}
              cursor={false} // Remove the cursor overlay completely
            />
          </BarChart>
        </ChartContainer>
      </div>
    </div>
  );
};

export default TokenChart;
