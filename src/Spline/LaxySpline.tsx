import { lazy, Suspense } from 'react'

const Galaxy = lazy(() => import('./Galaxy'))

export default function LazySpline() {
    return (
        <Suspense fallback={<div className="text-white text-center text-[.5rem]">Loading 3D Scene...</div>}>
            <video
                className='fixed w-full -top-18 -z-[1] h-[120%] object-cover'
                autoPlay
                loop
                muted
                playsInline
                controls={false}>
                <source src='/spline_2.webm' />
            </video>
            <Galaxy />
        </Suspense>
    )
}
