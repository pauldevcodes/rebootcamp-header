import React from 'react'
import computeClassNames from 'classnames'


const PageSection = ({ children, className, containerTag = 'section', containerClassName }) => {
    const derivedContainerClsName = computeClassNames(
        'w-full',
        { [containerClassName]: !!containerClassName },
    )

    const derivedClsName = computeClassNames(
        'max-w-screen-2xl px-4 md:px-6 lg:px-16 xl:px-30 py-10 lg:py-16 mx-auto',
        { [className]: !!className },
    )

    return React.createElement(
        containerTag,
        { className: derivedContainerClsName },
        <div className={derivedClsName}>{children}</div>
    )
}

export default PageSection
