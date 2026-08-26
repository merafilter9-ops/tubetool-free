'use client';

import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';

const Providers = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            {children}
            <ProgressBar
                height="3px"
                color="#e30c0c"
                options={{ showSpinner: false }}
                shallowRouting
            />
        </>
    );
};

export default Providers;