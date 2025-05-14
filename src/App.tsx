import { useState } from "react";
import SearchForm from "./components/form/SearchForm";
import UserProfile from "./components/user/userProfile";

const App = () => {
  const [username, setUsername] = useState<string>("quincylaron");
  return (
    <main className="mx-auto max-w-6xl px-8 py-20">
      <SearchForm userName={username} setUsername={setUsername} />
      <UserProfile userName={username} />
    </main>
  );
};

export default App;
