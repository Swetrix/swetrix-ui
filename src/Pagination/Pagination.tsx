import React, {memo, useMemo} from 'react'
import {ArrowLongLeftIcon, ArrowLongRightIcon} from '@heroicons/react/24/solid'
import _map from 'lodash/map'
import cx from 'clsx'

const ENTRIES_PER_PAGE_DASHBOARD = 10
const DOTS = '...'

const range = (start: number, end: number) => {
    const length = end - start + 1
    return Array.from({length}, (_, idx) => idx + start)
}


export const usePagination = (
    totalCount: number,
    currentPage: number,
    siblingCount: number = 1,
    pageSize: number = ENTRIES_PER_PAGE_DASHBOARD,
): number[] | any[] => {
    return useMemo(() => {
        const totalPageCount = Math.ceil(totalCount / pageSize)

        // Pages count is determined as siblingCount + firstPage + lastPage + currentPage + 2*DOTS
        const totalPageNumbers = siblingCount + 5

        /*
          If the number of pages is less than the page numbers we want to show in our
          paginationComponent, we return the range [1..totalPageCount]
        */
        if (totalPageNumbers >= totalPageCount) {
            return range(1, totalPageCount)
        }

        const leftSiblingIndex = Math.max(currentPage - siblingCount, 1)
        const rightSiblingIndex = Math.min(
            currentPage + siblingCount,
            totalPageCount,
        )

        /*
          We do not want to show dots if there is only one position left
          after/before the left/right page count as that would lead to a change if our Pagination
          component size which we do not want
        */
        const shouldShowLeftDots = leftSiblingIndex > 2
        const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2

        const firstPageIndex = 1
        const lastPageIndex = totalPageCount

        if (!shouldShowLeftDots && shouldShowRightDots) {
            const leftItemCount = 3 + 2 * siblingCount
            const leftRange = range(1, leftItemCount)

            return [...leftRange, DOTS, totalPageCount]
        }

        if (shouldShowLeftDots && !shouldShowRightDots) {
            const rightItemCount = 3 + 2 * siblingCount
            const rightRange = range(
                totalPageCount - rightItemCount + 1,
                totalPageCount,
            )
            return [firstPageIndex, DOTS, ...rightRange]
        }

        if (shouldShowLeftDots && shouldShowRightDots) {
            const middleRange = range(leftSiblingIndex, rightSiblingIndex)
            return [firstPageIndex, DOTS, ...middleRange, DOTS, lastPageIndex]
        }

        return []
    }, [totalCount, pageSize, siblingCount, currentPage])
}


export interface IPaginationProps {
    page: number
    setPage: (item: number) => {}
    pageAmount: number
    total: number
    prevButtonText?: string
    nextButtonText?: string
}

const Pagination: React.FC<IPaginationProps> = ({
                                                    page,
                                                    setPage,
                                                    pageAmount,
                                                    total,
                                                    prevButtonText = 'prev',
                                                    nextButtonText= 'next'
                                                }) => {
    const paginationRange = usePagination(total, page)

    return (
        <nav className='border-t-0 border-gray-200 px-4 flex items-center justify-between sm:px-0'>
            <div className='-mt-px w-0 flex-1 flex group'>
                {
                    page > 1 && (
                        <button
                            type='button'
                            onClick={() => setPage(page - 1)}
                            className='pt-4 pr-1 inline-flex items-center text-sm font-medium dark:group-hover:text-gray-400 group-hover:text-gray-700 dark:text-gray-300 text-gray-500'
                        >
                            <ArrowLongLeftIcon
                                className='mr-3 h-5 w-5 dark:group-hover:text-gray-400 group-hover:text-gray-700 dark:text-gray-300 text-gray-500 transition-none'
                                aria-hidden='true'/>
                            {prevButtonText}
                        </button>
                    )
                }
            </div>
            <div className='hidden md:-mt-px md:flex'>
                {
                    _map(paginationRange, (item, index) => {
                        if (item === DOTS) {
                            return (
                                <span
                                    className='border-transparent text-gray-500 dark:text-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium'
                                    key={item + index}>
                  {DOTS}
                </span>
                            )
                        }

                        return (
                            <button
                                key={item}
                                type='button'
                                onClick={() => setPage(item)}
                                className={cx({
                                    'border-indigo-500 text-indigo-600 dark:text-indigo-400 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium': item === page,
                                    'border-transparent text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-gray-400 hover:border-gray-300 border-t-2 pt-4 px-4 inline-flex items-center text-sm font-medium': item !== page,
                                })}
                            >
                                {item}
                            </button>
                        )
                    })
                }
            </div>
            <div className='-mt-px w-0 flex-1 flex justify-end group'>
                {
                    page !== pageAmount && (
                        <button
                            type='button'
                            onClick={() => setPage(page + 1)}
                            className='pt-4 pl-1 inline-flex items-center text-sm font-medium dark:group-hover:text-gray-400 group-hover:text-gray-700 dark:text-gray-300 text-gray-500'
                        >
                            {nextButtonText}
                            <ArrowLongRightIcon
                                className='ml-3 h-5 w-5 dark:group-hover:text-gray-400 group-hover:text-gray-700 dark:text-gray-300 text-gray-500 transition-none'
                                aria-hidden='true'/>
                        </button>
                    )
                }
            </div>
        </nav>
    )
}


export default memo(Pagination)
