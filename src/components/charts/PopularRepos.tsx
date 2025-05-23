import { type Repository } from "@/types";
import { calculateMostStarredRepo } from "@/utils";
import { Bar, BarChart, XAxis, YAxis, CartesianGrid } from "recharts";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartConfig = {
  repo: {
    label: "Repository",
    color: "#e11c47",
  },
} satisfies ChartConfig;

const PopularRepos = ({ repositories }: { repositories: Repository[] }) => {
  const popularRepos = calculateMostStarredRepo(repositories);

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mb-4">Popular Repos</h2>
      <ChartContainer config={chartConfig} className="h-100 w-full ">
        <BarChart accessibilityLayer data={popularRepos}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="repo"
            tickLine={false}
            tickMargin={10}
            tickFormatter={(value) => value.slice(0, 10)}
          />
          <YAxis dataKey="stars" />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="stars" fill="#e11c47" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default PopularRepos;
