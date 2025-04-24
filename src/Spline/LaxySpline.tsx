import { lazy, Suspense } from 'react'

const Galaxy = lazy(() => import('./Galaxy'))

export default function LazySpline() {
    return (
        <>
            <video autoPlay loop className='fixed w-full -top-18 -z-10 h-[120%] object-cover' muted src='/spline_2.mp4' />
            <Suspense fallback={<div className="text-white text-center text-[.5rem]">Loading 3D Scene...</div>}>
                <Galaxy />
            </Suspense>
        </>
    )
}
