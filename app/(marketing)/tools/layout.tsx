const ToolsLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="h-full w-full flex flex-col justify-start items-start relative">
            {children}
        </div>
    )
}

export default ToolsLayout;