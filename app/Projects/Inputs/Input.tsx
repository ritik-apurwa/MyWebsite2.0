import { Input } from "@/components/ui/input";
import { SheetTrigger } from "@/components/ui/sheet";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";
import { FiX } from "react-icons/fi";
import { MdOutlineSearch } from "react-icons/md";

export interface SearchInputProps {
  label?: string;
  onSearch: (query: string) => void;
}

export const SearchInput = ({ onSearch, label }: SearchInputProps) => {
  const [value, setValue] = useState<string>("");

  const clearValue = () => {
    if (value.length > 0) {
      setValue("");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleSearch = () => {
    if (onSearch) {
      onSearch(value);
    }
  };

  useEffect(() => {
    if (onSearch) {
      onSearch(value);
    }
  }, [value, onSearch]);

  return (
    <section className="size-full flex-center">
      <div className="relative h-4/5 w-full">
        <div className="relative h-4/5 w-full">
          <Input
            className="hover:ring-border hover:ring-2 ring-offset-2 pl-10"
            type="text"
            value={value}
            onChange={handleInputChange}
          />
          <label htmlFor="" className="input-peer-label">
            {label}
          </label>

          <button
            onClick={clearValue}
            className="absolute top-0 h-full right-0 w-10 flex-center"
          >
            <FiX />
          </button>
          <button
            onClick={handleSearch}
            className="absolute top-0 left-0 h-full w-10 flex-center"
          >
            <MdOutlineSearch />
          </button>
        </div>
      </div>
    </section>
  );
};

export const SearchInputClose = () => {
  return (
    <section className="flex-center w-3/12  h-4/5">
      <SheetTrigger asChild>
        <button className="bg-background border rounded-md text-sm font-semibold  size-full">
          Close
        </button>
      </SheetTrigger>
    </section>
  );
};

export interface ProjectSearchInputProps {
  lable?: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ProjectSearchInput = ({
  lable = "search",
  value,
  placeholder = "search",
  onChange,
}: ProjectSearchInputProps) => {
  return (
    <section className="size-full flex-center  h-full">
      <div className="relative size-full  items-center flex px-2  ">
        <input
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full h-4/5 peer px-4 focus:placeholder:text-transparent bg-background text-foreground py-2 pl-8 border-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-400 dark:focus:ring-indigo-600 focus:border-transparent"
        />
        <label htmlFor="input" className="input-label-peer">
          {lable}
        </label>
        <div className="absolute top-0 h-full  w-8 flex items-center justify-end left-0 ">
          <button className="">
            <Search size={15} />
          </button>
        </div>
      </div>
    </section>
  );
};
