import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ArrowUpDown, ArrowUpWideNarrow, ArrowDownNarrowWide, CirclePlay, Pause } from "lucide-react";
import { ICall, ICallLogs } from "@/lib/interfaces/call-interface";
import CallListSkeleton from "@/components/presentational/call-list-skeleton";
import { formatDurationToHours } from "@/lib/utils/format-duration";
import { CallTypeWithIcon } from "./call-type-with-icon";
import { formatDate } from "@/lib/utils/format-date";
import { sortData, ISortConfig } from "@/lib/utils/sort-data";
import { CallPagination } from "./call-pagination";

interface CallListProps {
  calls?: ICallLogs;
  isFetching?: boolean;
  onPlayAudio?: (call: ICall | null) => void;
  activeCallId?: string | number | null;
  audioPlaying?: boolean;
  onToggleAudio?: () => void;
}

export const CallList = ({
  calls,
  isFetching,
  onPlayAudio,
  activeCallId,
  audioPlaying,
  onToggleAudio, }: CallListProps) => {

  const [sortConfig, setSortConfig] = useState<ISortConfig<ICall> | null>({ key: "endDateTime", direction: "descending" });
  const sortedCalls = React.useMemo(() => sortData(calls?.items ?? [], sortConfig), [calls?.items, sortConfig]);

  const requestSort = (key: keyof ICall) => {
    let direction: "ascending" | "descending" | null = "ascending";
    if (sortConfig && sortConfig.key === key) {
      if (sortConfig.direction === "ascending") {
        direction = "descending";
      } else if (sortConfig.direction === "descending") {
        direction = null;
      }
    }
    setSortConfig(direction ? { key, direction } : null);
  };

  const getSortIcon = (key: keyof ICall) => {
    if (!sortConfig) return <ArrowUpDown size={15} />;
    if (sortConfig.key !== key) return <ArrowUpDown size={15} />;
    return sortConfig.direction === "ascending" ? <ArrowUpWideNarrow size={15} /> : <ArrowDownNarrowWide size={15} />;
  };

  if (isFetching) {
    return <CallListSkeleton />;
  }

  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead onClick={() => requestSort("caller")}>
              Caller {getSortIcon("caller")}
            </TableHead>
            <TableHead onClick={() => requestSort("receiver")}>
              Receiver {getSortIcon("receiver")}
            </TableHead>
            <TableHead onClick={() => requestSort("startDateTime")}>
              Start Date {getSortIcon("startDateTime")}
            </TableHead>
            <TableHead onClick={() => requestSort("endDateTime")}>
              End Date {getSortIcon("endDateTime")}
            </TableHead>
            <TableHead onClick={() => requestSort("callType")}>
              Call Direction {getSortIcon("callType")}
            </TableHead>
            <TableHead onClick={() => requestSort("isLive")}>
              Is Live {getSortIcon("isLive")}
            </TableHead>
            <TableHead onClick={() => requestSort("durationSeconds")}>
              Duration {getSortIcon("durationSeconds")}
            </TableHead>
            <TableHead onClick={() => requestSort("recorder")}>
              Recorder {getSortIcon("recorder")}
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {sortedCalls && sortedCalls.length > 0 ? (
            sortedCalls.map((call: ICall) => (
              <TableRow key={String(call?.id)}>
                <TableCell>{call?.caller}</TableCell>
                <TableCell>{call?.receiver}</TableCell>
                <TableCell>{formatDate(call?.startDateTime)}</TableCell>
                <TableCell>{formatDate(call?.endDateTime)}</TableCell>
                <TableCell>
                  <CallTypeWithIcon callType={call?.callType} />
                </TableCell>
                <TableCell>{call?.isLive ? "True" : "False"}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => {
                        if (activeCallId === call.id) {
                          onToggleAudio && onToggleAudio();
                        } else {
                          onPlayAudio && onPlayAudio(call);
                        }
                      }}
                      className="text-gray-700 cursor-pointer"
                    >
                      {activeCallId === call.id && audioPlaying ? (
                        <Pause className="h-5 w-5 text-blue-500" />
                      ) : (
                        <CirclePlay className="h-5 w-5 text-green-500" />
                      )}
                    </button>
                    <span>{formatDurationToHours(call.durationSeconds)}</span>
                  </div>
                </TableCell>
                <TableCell>{call.recorder}</TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={7} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>

      {calls && calls.items && <CallPagination callLogs={calls} />}
    </div>
  );
};
