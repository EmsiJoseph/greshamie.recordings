import { useUpdateUrlParams } from "@/hooks/browser-url-params/use-update-url-params";
import { ICallFilters } from "@/lib/interfaces/call-interface";

export const useParseAdvanceFilterDefaults = () => {
    const { deleteUrlParam } = useUpdateUrlParams()
    const parseFilterDefaults = (retrievedFilters?: ICallFilters) => {
        if (!retrievedFilters) {
            return {
                startDate: undefined,
                endDate: undefined,
                startTime: undefined,
                endTime: undefined,
                minimumDurationSeconds: undefined,
                maximumDurationSeconds: undefined,
                hasPciCompliance: undefined,
                hasQualityEvaluation: undefined,
                hasVideoRecording: undefined,
            }
        }

        let startDate: string | undefined;
        let endDate: string | undefined;
        let startTime: string | undefined;
        let endTime: string | undefined;

        if (retrievedFilters?.startDate) {
            try {
                // Convert to UTC Date to check validity
                const dateObj = new Date(retrievedFilters.startDate)
                const [date, time] = dateObj.toISOString().split("T");
                startDate = date; // Time format: <input type="date" /> 

                // Split the time and format
                const [hh, mm] = time.split(":")
                startTime = `${hh}:${mm}` // Time format: <input type="time" />
            } catch {
                // deleteUrlParam("startDate") Cannot update a component (`Router`) while rendering a different component (`CallListAdvanceFilters`). 
                startDate = undefined
                startTime = undefined
            }
        }

        if (retrievedFilters?.endDate) {
            try {
                // Convert to UTC Date to check validity
                const dateObj = new Date(retrievedFilters.endDate)
                const [date, time] = dateObj.toISOString().split("T");
                endDate = date // Time format: <input type="date" /> 

                // Split the time and format
                const [hh, mm] = time.split(":")
                endTime = `${hh}:${mm}` // Time format: <input type="time" />

            } catch {
                // deleteUrlParam("endDate") Cannot update a component (`Router`) while rendering a different component (`CallListAdvanceFilters`). 
                endDate = undefined
                endTime = undefined
            }
        }

        const parsedValues = {
            startDate,
            endDate,
            startTime,
            endTime,
            minimumDurationSeconds: retrievedFilters?.minimumDurationSeconds ?? undefined,
            maximumDurationSeconds: retrievedFilters?.maximumDurationSeconds ?? undefined,
            hasPciCompliance: retrievedFilters?.hasPciCompliance ?? undefined,
            hasQualityEvaluation: retrievedFilters?.hasQualityEvaluation ?? undefined,
            hasVideoRecording: retrievedFilters?.hasVideoRecording ?? undefined,
        }
        return parsedValues
    }

    return { parseFilterDefaults }
}