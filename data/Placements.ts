export const tableData = [
  {
    metric: "Highest Package",
    lastYear: "45.0 LPA",
    overall: "48.0 LPA",
  },
  {
    metric: "Average Package",
    lastYear: "10.5 LPA",
    overall: "12.5 LPA",
  },
  {
    metric: "Median Package",
    lastYear: "7.0 LPA",
    overall: "9.0 LPA",
  },
  {
    metric: "Placement Percentage",
    lastYear: "65.38%",
    overall: "80.77%",
  },
]

export const chartData = [
  { range: "< 10 LPA", value: 25, fill: "var(--color-range1)" },
  { range: "10 - 20 LPA", value: 50, fill: "var(--color-range2)" },
  { range: "> 20 LPA", value: 25, fill: "var(--color-range3)" },
]

export const chartConfig = {
  value: {
    label: "Percentage (%)",
  },
  range1: {
    label: "< 10 LPA",
    color: "hsl(var(--chart-1))",
  },
  range2: {
    label: "10 - 20 LPA",
    color: "hsl(var(--chart-2))",
  },
  range3: {
    label: "> 20 LPA",
    color: "hsl(var(--chart-3))",
  },
}