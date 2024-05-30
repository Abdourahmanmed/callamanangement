import React from 'react'

const Loading = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div className="flex justify-center items-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-500"></div>
            </div>
        </div>
    )
}

export default Loading