"use client"

import React from "react"
import { Pie, PieChart } from "recharts"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent
} from "@/components/ui/chart"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { tableData, chartData, chartConfig } from "@/data/Placements"

export function PlacementStats() {
  return (
    <section className="section-shell py-8 md:py-16">
      <div className="mb-12 text-center" data-aos="fade-up">
        <h2 className="section-title mb-4">Placement Statistics</h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          A glance at our recent placement records and salary distributions, showcasing our commitment to student success.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
        {/* Left Side: Table */}
        <div data-aos="fade-right" data-aos-delay="100" className="h-full">
          <Card className="glass-panel border-0 shadow-soft h-full transition-all hover:shadow-lg flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl font-display text-slate-800 dark:text-white">Key Metrics</CardTitle>
              <CardDescription className="text-slate-500">Comparison between last year and overall stats</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-center">
              <div className="rounded-lg border border-slate-200 dark:border-slate-800 overflow-hidden">
                <Table>
                  <TableHeader className="bg-slate-50 dark:bg-slate-900">
                    <TableRow>
                      <TableHead className="font-semibold text-slate-700 dark:text-slate-300">Metric</TableHead>
                      <TableHead className="font-semibold text-slate-700 dark:text-slate-300">Last Year Stats</TableHead>
                      <TableHead className="text-right font-semibold text-slate-700 dark:text-slate-300">Overall Stats</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {tableData.map((row) => (
                      <TableRow key={row.metric} className="transition-colors hover:bg-slate-50/50 dark:hover:bg-slate-800/50">
                        <TableCell className="font-medium text-slate-800 dark:text-slate-200 py-4">{row.metric}</TableCell>
                        <TableCell className="text-slate-600 dark:text-slate-400 py-4">{row.lastYear}</TableCell>
                        <TableCell className="text-right text-slate-600 dark:text-slate-400 font-semibold py-4">{row.overall}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Right Side: Pie Chart */}
        <div data-aos="fade-left" data-aos-delay="200" className="h-full">
          <Card className="glass-panel border-0 shadow-soft h-full transition-all hover:shadow-lg flex flex-col">
            <CardHeader>
              <CardTitle className="text-2xl font-display text-slate-800 dark:text-white">Salary Distribution</CardTitle>
              <CardDescription className="text-slate-500">Breakdown of package ranges (Overall)</CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex items-center justify-center pb-0">
              <div className="w-full max-w-[400px] h-[350px]">
                <ChartContainer
                  config={chartConfig}
                  className="w-full h-[300px] aspect-square mx-auto pb-4"
                >
                  <PieChart>
                    <ChartTooltip
                      cursor={false}
                      content={<ChartTooltipContent hideLabel />}
                    />
                    <Pie
                      data={chartData}
                      dataKey="value"
                      nameKey="range"
                      innerRadius={70}
                      outerRadius={100}
                      strokeWidth={5}
                      stroke="var(--card)"
                      paddingAngle={5}
                      cornerRadius={5}
                    />
                    <ChartLegend
                      content={<ChartLegendContent />}
                      className="mt-6 flex-wrap gap-4"
                    />
                  </PieChart>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default PlacementStats;