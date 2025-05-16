import type { Repository } from "@/types";
import { calculatePopularLanguages } from "@/utils";
import { Bar, BarChart, XAxis, YAxis, CartesianGrid } from "recharts";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const UsedLanguages = ({ repositories }: { repositories: Repository[] }) => {
  const popularLanguages = calculatePopularLanguages(repositories);

  const chartConfig = {
    Language: {
      label: "Language",
      color: "#2563eb",
    },
  } satisfies ChartConfig;

  return (
    <div>
      <h2 className="text-2xl font-semibold text-center mb-4">
        Used Languages
      </h2>
      <ChartContainer config={chartConfig} className="h-100 w-full ">
        <BarChart accessibilityLayer data={popularLanguages}>
          <CartesianGrid vertical={false} />
          <XAxis dataKey="language" tickLine={false} tickMargin={10} />
          <YAxis dataKey="count" />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey="count" fill="#2563eb" radius={4} />
        </BarChart>
      </ChartContainer>
    </div>
  );
};

export default UsedLanguages;
