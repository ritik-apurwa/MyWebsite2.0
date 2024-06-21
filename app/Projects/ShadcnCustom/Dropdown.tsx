import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Filter } from "lucide-react";
import { IconType } from "react-icons";
import { FaFilter } from "react-icons/fa";
import { DropdownInterface } from "@/app/types";

const Dropdown = ({
  variant = "outline",
  size = "icon",
  ItemArray,
  icon: Icon = FaFilter,
  name,
  defaultValue,
  onValueChange,
}: DropdownInterface) => {
  const [selectedValue, setSelectedValue] = useState(defaultValue || "");

  const handleValueChange = (value: string) => {
    setSelectedValue(value);
    if (onValueChange) {
      onValueChange(value);
    }
  };

  return (
    <div id="filter_category" className="relative">
      <DropdownMenu>
        <DropdownMenuTrigger className="flexr-center gap-x-2" asChild>
          <Button variant={variant}>
            <Icon size={14} /> {selectedValue || name || "Category"}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40 bg-primary-foreground">
          <DropdownMenuLabel>Categories</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {ItemArray?.map((item) => (
            <DropdownMenuCheckboxItem
              key={item.id}
              checked={selectedValue === item.label}
              onCheckedChange={() => handleValueChange(item.label.toString())}
            >
              {item.label}
            </DropdownMenuCheckboxItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default Dropdown;
