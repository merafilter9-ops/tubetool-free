'use client';

import { Skeleton } from "@/components/ui/skeleton";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

import { cn } from "@/lib/utils";
import { TableSkeletonProps } from "@/types/props";

const TableSkeleton = ({
    mainClassName = '',
    headers = [],
    rows = 10,
}: TableSkeletonProps) => {
    return (
        <div className={cn('w-full mt-4 h-fit border rounded', mainClassName)}>
            <Table>
                <TableHeader>
                    <TableRow>
                        {
                            headers.map((header, index) => (
                                <TableHead key={index} className={header?.className}>{header?.title}</TableHead>
                            ))
                        }
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        Array.from({ length: rows }).map((_, index) => (
                            <TableRow key={index}>
                                {
                                    Array.from({ length: headers.length }).map((_, index) => (
                                        <TableCell key={index} className="font-medium align-top">
                                            <Skeleton className="w-full h-5" />
                                        </TableCell>
                                    ))
                                }
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
};

export default TableSkeleton;