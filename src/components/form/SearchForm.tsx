import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { type FormEvent } from "react";
import { useState } from "react";
import { toast } from "sonner";

type SearchFormProps = {
  userName: string;
  setUsername: React.Dispatch<React.SetStateAction<string>>;
};

const SearchForm = ({ userName, setUsername }: SearchFormProps) => {
  const [text, setText] = useState<string>(userName);

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text.trim() === "") {
      toast.error("Please enter a valid username");
      return;
    }
    setUsername(text);
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center gap-x-2 w-full lg:w-1/3 mb-8"
    >
      <Label htmlFor="search" className="sr-only">
        Search
      </Label>
      <Input
        type="text"
        id="search"
        placeholder="Search GitHub username..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-grow  bg-background"
      />
      <Button type="submit" className="bg-primary text-primary-foreground">
        Search
      </Button>
    </form>
  );
};

export default SearchForm;
