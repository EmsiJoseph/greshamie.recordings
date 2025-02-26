import Pagination from '@/components/common/pagination';
import { useQueryClient } from '@tanstack/react-query';
import React from 'react';
import { useCallFilters } from '../lib/use-call-filters';
import { ICallLogs } from '@/lib/interfaces/call-interface';
import { useUpdateUrlParams } from '@/hooks/browser-url-params/use-update-url-params';
import { parseNumber } from '@/lib/utils/parse-values';
import useFilterStore from '../lib/use-filter-store';

interface CallPaginationProps {
  callLogs?: ICallLogs
}

export const CallPagination = ({ callLogs }: CallPaginationProps) => {
  const { filters } = useFilterStore()
  const { updateUrlParams } = useUpdateUrlParams()
  const currPage = filters?.pageOffSet
  const totalPages = filters?.totalPages
  const hasNext = filters?.hasNext


  const handlePageChange = (
    nextOrPrevOrSet?: "next" | "prev" | "set",
    page?: string | number
  ) => {
    if (nextOrPrevOrSet === "set") {
      page = page ? page : 1; // if undefined, set to 1
      updateUrlParams({ "pageOffSet": page })
      return
    }

    // For previous and next
    if (!currPage) {
      // if undefined, just set the page to 1
      updateUrlParams({ "pageOffSet": 1 })
      return
    }

    if (nextOrPrevOrSet === "next") {
      updateUrlParams({ "pageOffSet": currPage + 1 })
      return
    }

    if (nextOrPrevOrSet === "prev") {
      if (currPage >= 2) {
        updateUrlParams({ "pageOffSet": currPage - 1 })
        return
      }
    }


  }

  return (
    <Pagination
      currentPage={currPage}
      totalPages={totalPages}
      hasNext={hasNext}
      onPageChange={handlePageChange}
    />
  );
};
