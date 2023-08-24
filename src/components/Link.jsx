const Link = ({ to, className, children }) => {
    const baseClassName = 'text-gray-80 hover:text-gray-110'
    const derivedClassName = className ? `${baseClassName} ${className}` : baseClassName

    return (
        // TODO: Swap out with Link component from React Router
        <a className={derivedClassName} href={to}>{children}</a>
    )
}

export default Link
