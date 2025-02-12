import { CallDirections } from "@/constants/call-types"

export type TCallDirections = typeof CallDirections[keyof typeof CallDirections]

export interface ICall {
    id: string | number,
    caller: string,
    receiver: string,
    startDateTime: Date,
    endDateTime: Date,
    callType: TCallDirections,
    isLive: boolean,
    durationSeconds: number, // Seconds
    recorder: string,
    streamingUrl: string,
    downloadUrl: string,
}

export interface ICallFilters {
    search?: string,
    callDirection?: TCallDirections,
    startDate?: Date, // UTC Str
    endDate?: Date, // UTC Str
    minimumDurationSeconds?: number,
    maximumDurationSeconds?: number,
    caller?: string,
    receiver?: string,
    recorder?: string,
    hasVideoRecording?: boolean,
    hasPciCompliance?: boolean,
    hasQualityEvaluation?: boolean,
}

export interface ICallLogs {
    hasNext?: boolean,
    hasPrevious?: boolean,
    items: ICall[] | [],
    pageSize?: number
    pageOffset?: number
    totalCount?: number,
    totalPages?: number
}

export interface ICallAdvanceFilterComponent {
    startDate?: Date, // UTC Str
    endDate?: Date, // UTC Str
    minimumDurationSeconds?: number,
    maximumDurationSeconds?: number,
    hasVideoRecording?: boolean,
    hasPciCompliance?: boolean,
    hasQualityEvaluation?: boolean,
}