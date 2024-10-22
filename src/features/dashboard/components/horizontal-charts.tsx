// Code:
import { Bar, BarChart, XAxis, YAxis } from "recharts"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart"
import { TrendingUp } from "lucide-react"

export const description = "A bar chart with a custom label"

const chartData = [
    { Ongoing: 150, Closed: 20 },

]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "hsla(217, 23%, 27%, 1)",
    },
    mobile: {
        label: "Mobile",
        color: "hsla(218, 80%, 46%, 1)",
    },
    label: {
        color: "hsl(var(--background))",
    },
} satisfies ChartConfig

export function Component() {
    return (
        <Card className="font-Instrument h-full">
            <CardHeader>
                <CardTitle className="text-gray-700 text-sm font-semibold tracking-normal">Sales Performance Snapshot</CardTitle>
            </CardHeader>
            <CardContent>
                <h2 className="text-3xl font-semibold text-gray-900">{
                    chartData.reduce((acc, { Ongoing, Closed }) => acc + Ongoing + Closed, 0)
                }</h2>
                <CardDescription className="text-gray-500 text-sm">Lead Engaged</CardDescription>
                <ChartContainer config={chartConfig} className="h-9 w-full mt-4 gap-1">
                    <BarChart
                        accessibilityLayer
                        data={chartData}
                        barGap={4}
                        layout="vertical"
                        margin={{
                            right: 16,
                        }}
                        className="bg-[#EAECF0] rounded-lg pl-1 gap-1"
                    >
                        <YAxis
                            dataKey="month"
                            type="category"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 5)}
                            hide
                        />
                        <XAxis type="number" hide />

                        <ChartTooltip
                            cursor={false}
                            content={<ChartTooltipContent indicator="line" />}
                        />
                        <Bar
                            dataKey="Ongoing"
                            stackId="a"
                            fill="var(--color-desktop)"
                            radius={[4, 0, 0, 4]}

                        />
                        <Bar
                            dataKey="Closed"
                            stackId="a"
                            fill="var(--color-mobile)"
                            radius={[0, 4, 4, 0]}
                        />

                    </BarChart>
                </ChartContainer>
                <div className="flex gap-2 font-semibold leading-none text-green-700 text-xs mt-2">
                    Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
                </div>


            </CardContent>

        </Card>
    )
}
