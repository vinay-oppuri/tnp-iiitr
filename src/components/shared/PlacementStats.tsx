"use client";

import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  XAxis,
  YAxis,
} from "recharts";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const placementData = [
  { batch: "2019-23", highestPackage: 45, placementRate: 68.80, companiesVisited: 16, fill: "url(#colorBlue)" },
  { batch: "2020-24", highestPackage: 21.5, placementRate: 21.05, companiesVisited: 15, fill: "url(#colorOrange)" },
  { batch: "2021-25", highestPackage: 48, placementRate: 41.03, companiesVisited: 19, fill: "url(#colorGreen)" },
  { batch: "2022-26*", highestPackage: 45, placementRate: 65.38, companiesVisited: 9, fill: "url(#colorPurple)" },
];

const chartConfig = {
  highestPackage: { label: "Highest Package (LPA)" },
  placementRate: { label: "Placement Rate (%)" },
  companiesVisited: { label: "Companies Visited" },
} satisfies ChartConfig;

const PlacementStats: React.FC = () => {
  return (
    <section className="w-full bg-[#f9f9fc] pb-20">
      {/* Header */}
      <div className="text-center mt-20 mb-12 px-4">
        <h2 className="font-poppins text-3xl sm:text-4xl font-bold text-[rgba(53,22,107,1)] mb-2">
          Placement Stats
        </h2>
      </div>

      {/* Charts Section */}
      <div className="grid gap-6 px-6 max-w-[1600px] mx-auto grid-cols-1 lg:grid-cols-3">
        {/* Card 1 */}
        <Card className="flex flex-col border-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl rounded-2xl overflow-hidden bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm sm:text-base font-semibold text-gray-800 font-montserrat flex gap-1 flex-wrap">
              Highest package per batch (LPA)
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 pb-6 px-4">
            <div className="h-[200px] sm:h-[250px] w-full">
              <ChartContainer config={chartConfig} className="h-full w-full">
                <BarChart accessibilityLayer data={placementData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                  <defs>
                    <linearGradient id="colorBlue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#60A5FA" />
                      <stop offset="100%" stopColor="#3B82F6" />
                    </linearGradient>
                    <linearGradient id="colorOrange" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#FBBF24" />
                      <stop offset="100%" stopColor="#F59E0B" />
                    </linearGradient>
                    <linearGradient id="colorGreen" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#34D399" />
                      <stop offset="100%" stopColor="#10B981" />
                    </linearGradient>
                    <linearGradient id="colorPurple" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#A78BFA" />
                      <stop offset="100%" stopColor="#8B5CF6" />
                    </linearGradient>
                  </defs>
                  <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis
                    dataKey="batch"
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: "#6b7280", fontSize: 12 }}
                    tickMargin={10}
                  />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: "#6b7280", fontSize: 12 }}
                    tickFormatter={(value) => `${value} L`}
                    ticks={[0, 10, 20, 30, 40, 50, 60]}
                    domain={[0, 60]}
                  />
                  <ChartTooltip cursor={{ fill: "rgba(0,0,0,0.05)" }} content={<ChartTooltipContent indicator="dashed" />} />
                  <Bar dataKey="highestPackage" radius={[6, 6, 0, 0]} maxBarSize={60}>
                    {placementData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        {/* Card 2 */}
        <Card className="flex flex-col border-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl rounded-2xl overflow-hidden bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm sm:text-base font-semibold text-gray-800 font-montserrat flex gap-1 flex-wrap">
              Placement Rate (%) <span className="font-normal text-gray-500">— Batch overview</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 pb-6 px-4">
            <div className="h-[200px] sm:h-[250px] w-full mt-4">
              <ChartContainer config={chartConfig} className="h-full w-full">
                <BarChart accessibilityLayer data={placementData} margin={{ top: 30, right: 0, left: -20, bottom: 0 }}>
                  <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis
                    dataKey="batch"
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: "#6b7280", fontSize: 12 }}
                    tickMargin={10}
                  />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: "#6b7280", fontSize: 12 }}
                    tickFormatter={(value) => `${value}%`}
                    ticks={[0, 20, 40, 60, 80, 100]}
                    domain={[0, 100]}
                  />
                  <ChartTooltip cursor={{ fill: "rgba(0,0,0,0.05)" }} content={<ChartTooltipContent indicator="dashed" />} />
                  <Bar dataKey="placementRate" radius={[6, 6, 0, 0]} maxBarSize={60}>
                    {placementData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>

        {/* Card 3 */}
        <Card className="flex flex-col border-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl rounded-2xl overflow-hidden bg-white">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm sm:text-base font-semibold text-gray-800 font-montserrat flex gap-1 flex-wrap">
              Companies visiting campus <span className="font-normal text-gray-500">— growing recruiter interest</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="flex-1 pb-6 px-4">
            <div className="h-[200px] sm:h-[250px] w-full">
              <ChartContainer config={chartConfig} className="h-full w-full">
                <BarChart accessibilityLayer data={placementData} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
                  <CartesianGrid vertical={false} strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis
                    dataKey="batch"
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: "#6b7280", fontSize: 12 }}
                    tickMargin={10}
                  />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: "#6b7280", fontSize: 12 }}
                    ticks={[0, 5, 10, 15, 20, 25]}
                    domain={[0, 25]}
                  />
                  <ChartTooltip cursor={{ fill: "rgba(0,0,0,0.05)" }} content={<ChartTooltipContent indicator="dashed" />} />
                  <Bar dataKey="companiesVisited" radius={[6, 6, 0, 0]} maxBarSize={60}>
                    {placementData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.fill} />
                    ))}
                  </Bar>
                </BarChart>
              </ChartContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PlacementStats;