'use client'

import React from 'react'

import { getGreeting } from '@/lib/utils'
import { useCurrentUser } from '@/hooks/use-current-user'

const CustomGreeting = () => {
    const user = useCurrentUser()
    return (
        <div className='hidden lg:block'>
            <p className='font-normal'>{getGreeting()},&nbsp;<strong>{user?.firstName}</strong></p>
        </div>
    )
}

export default CustomGreeting;