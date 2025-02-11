import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ICall } from "@/lib/interfaces/call-interface";
import CallListSkeleton from "@/components/presentational/call-list-skeleton";
import React from "react";
import { useQueryClient } from "@tanstack/react-query";
import { CallDirectionIcons } from "@/constants/call-types";
import { capitalizeFirstLetter } from "@/lib/utils/format-text";
import { formatDurationToHours } from "@/lib/utils/format-duration";

interface CallListProps {
  calls?: ICall[];
  isFetching?: boolean;
  onPlayAudio?: (url: string | null) => void;
}

const callIcons = CallDirectionIcons

export const CallList = ({ calls, isFetching, onPlayAudio }: CallListProps) => {
  const queryClient = useQueryClient();
  const currentAudioUrl = queryClient.getQueryData<string | null>([
    "currentAudio",
  ]);

  if (isFetching) {
    return <CallListSkeleton />;
  }

  console.log("CALLS LIST", calls)
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Caller</TableHead>
            <TableHead>Receiver</TableHead>
            <TableHead>Start Date</TableHead>
            <TableHead>End Date</TableHead>
            <TableHead>Call Direction</TableHead>
            <TableHead>Is Live</TableHead>
            <TableHead>Duration (s)</TableHead>
            <TableHead>Recorder</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {calls && calls.length > 0 ? (
            calls.map((call) => (
              <TableRow key={call.id}>
                <TableCell>{call.caller}</TableCell>
                <TableCell>{call.receiver}</TableCell>
                <TableCell>
                  {call.startDateTime instanceof Date
                    ? call.startDateTime.toLocaleString()
                    : call.startDateTime}
                </TableCell>
                <TableCell>
                  {call.endDateTime instanceof Date
                    ? call.endDateTime.toLocaleString()
                    : call.endDateTime}
                </TableCell>
                <TableCell>
                  {call.callType && callIcons[call.callType.toUpperCase()] ? (
                    <div
                      className={`flex items-center ${callIcons[call.callType].colorClass
                        }`}
                    >
                      {React.createElement(callIcons[call.callType].icon, {
                        className: "h-5 w-5",
                      })}
                      <span className="ml-2 font-bold">
                        {capitalizeFirstLetter(call.callType) || ""}
                      </span>
                    </div>
                  ) : (
                    <span>No Direction</span>
                  )}
                </TableCell>
                <TableCell>{call.isLive}</TableCell>
                <TableCell>{formatDurationToHours(call.durationSeconds)}</TableCell>
                <TableCell>{call.recorder}</TableCell>
                {/* <TableCell>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={async () => {
                        const audioUrl = await fetchMp3Url(call.id.toString());
                        onPlayAudio &&
                          onPlayAudio(
                            currentAudioUrl === audioUrl ? null : audioUrl
                          );
                      }}
                      className="text-gray-700 cursor-pointer"
                    >
                      {currentAudioUrl ===
                      `https://www.example.com/audio/${call.id}.mp3` ? ( //change this to a parameterized URL
                        <Pause className="h-5 w-5 text-blue-500" />
                      ) : (
                        <CirclePlay className="h-5 w-5 text-green-500" />
                      )}
                    </button>
                    <span>{formatDuration(call.duration)}</span>
                  </div>
                </TableCell> */}
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
    </div>
  );
};
