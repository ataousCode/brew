import React from 'react'

const PageContainer = ({ children, gradient = 'from-green-50 to-white' }) => {
    return (
        <div className={
            `min-h-screen pt-20 px-4 bg-gradient-to-b ${gradient}`}>
            <div className='max-w-6xl mx-auto py-16'>
                {children}
            </div>
        </div>
    )
}

export default PageContainer;