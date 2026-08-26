'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

// Helper function to transform the path into breadcrumb labels
const pathToLabel = (path: string) => {
    return path
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ')
}

const CustomBreadcrumb = () => {
    const pathname = usePathname()

    // Split the pathname into an array of segments
    const pathSegments = pathname.split('/').filter(Boolean)

    return (
        <Breadcrumb className='hidden lg:block'>
            <BreadcrumbList>
                <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>

                {/* Add separator after Home */}
                {pathSegments.length > 0 && <BreadcrumbSeparator />}

                {pathSegments.map((segment, index) => {
                    // Create the full path up to the current segment
                    // const href = `/${pathSegments.slice(0, index + 1).join('/')}`

                    return (
                        <React.Fragment key={index}>
                            <BreadcrumbItem>
                                {/* If it's the last item, make it plain text instead of a link */}
                                {index === pathSegments.length - 1 ? (
                                    <span>{pathToLabel(segment)}</span>
                                ) : (
                                    <BreadcrumbLink href={"#"}>{pathToLabel(segment)}</BreadcrumbLink>
                                )}
                            </BreadcrumbItem>

                            {/* Add separator if it's not the last item */}
                            {index !== pathSegments.length - 1 && <BreadcrumbSeparator />}
                        </React.Fragment>
                    )
                })}
            </BreadcrumbList>
        </Breadcrumb>
    )
}

export default CustomBreadcrumb;