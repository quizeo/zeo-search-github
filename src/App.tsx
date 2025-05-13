import { Button } from "./components/ui/button";

const App = () => {
  return (
    <div>
      <h1 className="flex items-center justify-center h-screen">
        <div className="flex gap-4">
          <Button>Click Me</Button>
          <Button variant="outline" size="lg">
            Click Me
          </Button>
          <Button variant="destructive" size="sm">
            Click Me
          </Button>
        </div>
      </h1>
    </div>
  );
};

export default App;
