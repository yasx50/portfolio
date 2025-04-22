import { lazy, Suspense } from 'react'

const Galaxy = lazy(() => import('./Galaxy'))

export default function LazySpline() {
    return (
        <Suspense fallback={<div className="text-white text-center">Loading 3D Scene...</div>}>
            <Galaxy />
        </Suspense>
    )
}
