import { CodeStringInterface } from "@/app/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";

interface FileDropdownProps {
  files: CodeStringInterface[];
  onFileChange: (file: CodeStringInterface) => void;
}

export const FileDropdown = ({ files, onFileChange }: FileDropdownProps) => {
  const [selectedFile, setSelectedFile] = useState<CodeStringInterface>(
    files[0]
  );

  const handleFileChange = (file: CodeStringInterface) => {
    setSelectedFile(file);
    onFileChange(file);
  };

  return (
    <section className="flex-center">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex-center" asChild>
          <div className="border flexr-center gap-x-2 font-semibold h-8 rounded-md bg-background  min-w-20 text-xs overflow-hidden  w-auto ">
            {selectedFile.filename}
            <ChevronDownIcon size={12} />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {files.map((file, index) => (
            <DropdownMenuItem
              key={index}
              onClick={() => handleFileChange(file)}
            >
              {file.filename}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </section>
  );
};



export const FileDropDownCodeString = `
import { CodeStringInterface } from "@/app/types";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";

interface FileDropdownProps {
  files: CodeStringInterface[];
  onFileChange: (file: CodeStringInterface) => void;
}

const FileDropdown = ({ files, onFileChange }: FileDropdownProps) => {
  const [selectedFile, setSelectedFile] = useState<CodeStringInterface>(
    files[0]
  );

  const handleFileChange = (file: CodeStringInterface) => {
    setSelectedFile(file);
    onFileChange(file);
  };

  return (
    <section className="flex-center">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex-center" asChild>
          <div className="border flexr-center gap-x-2 font-semibold h-8 rounded-md bg-background  min-w-20 text-xs overflow-hidden  w-auto ">
            {selectedFile.filename}
            <ChevronDownIcon size={12} />
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          {files.map((file, index) => (
            <DropdownMenuItem
              key={index}
              onClick={() => handleFileChange(file)}
            >
              {file.filename}
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </section>
  );
};

export default FileDropdown;


`;
