import { Input } from "@/components/ui/input";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { CallTypes } from "@/constants/call-types";
import { useDebounce } from "@/hooks/use-debounce";
import { ICallFilters, TCallType } from "@/lib/interfaces/call-interface";
import { capitalizeFirstLetter } from "@/lib/utils/format-text";
import { SelectLabel } from "@radix-ui/react-select";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

interface CallListFiltersProps {
    onChange: (filters?: ICallFilters) => void;
}

export const CallListFilters = ({ onChange }: CallListFiltersProps) => {
    const [search, setSearch] = useState<ICallFilters['search']>("");
    const debouncedSearch = useDebounce(search);

    const handleSelectCallType = (value: string) => {
        if (value === "ALL") {
            onChange({ callType: "" });
        }
        if (value !== "ALL" && value !== "") {
            const callType = value as TCallType; // Safely cast to TCallType
            onChange({ callType });
        }
    }

    // For search, update url params
    useEffect(() => {
        onChange({search: debouncedSearch})
    }, [debouncedSearch]);

    return (
        <div className="flex gap-4">
            <ToggleGroup
                type="single"
                defaultValue={"ALL"}
                onValueChange={handleSelectCallType}
            >
                <ToggleGroupItem value="ALL" aria-label="Toggle all">
                    All
                </ToggleGroupItem>
                {Object.keys(CallTypes).map((key) => (
                    <ToggleGroupItem value={key} aria-label={"Toggle " + key} key={key}>
                        {key === ""
                            ? "No call type"
                            : capitalizeFirstLetter(CallTypes[key as Exclude<TCallType, "">])}
                    </ToggleGroupItem>
                ))}
            </ToggleGroup>

            <div className="relative w-full">
                <Input className="pr-9" placeholder="Search phone number, participants, or date range..." onChangeCapture={(e) => setSearch(e.currentTarget.value)} />
                <Search className="absolute right-0 top-0 m-2.5 h-4 w-4 text-muted-foreground" />
            </div>
        </div>
    )
}
