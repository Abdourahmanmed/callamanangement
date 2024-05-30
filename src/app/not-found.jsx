
import Link from 'next/link'
import React from 'react'

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gris mb-8">Page Not Found</h2>
            <p className="text-gray-600 mb-8">
                Sorry, the page you are looking for does not exist. You can always go back to the{' '}
                <Link href="/"  className="text-blue hover:underline">
                    homepage
                </Link>.
            </p>
            <Link href="/"className="px-4 py-2 bg-blue text-white rounded hover:bg-blue/80">
                
                    Go Home
                
            </Link>
        </div>
    )
}

export default NotFound