import StatsCard from "./StatsCard";

type StatsContainerProps = {
  totalRepos: number;
  followers: number;
  following: number;
  gists: number;
};

const StatsContainer = ({
  totalRepos,
  followers,
  following,
  gists,
}: StatsContainerProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mb-8">
      <StatsCard title="Total Repositories" count={totalRepos} />
      <StatsCard title="Followers" count={followers} />
      <StatsCard title="Following" count={following} />
      <StatsCard title="Gist" count={gists} />
    </div>
  );
};

export default StatsContainer;
