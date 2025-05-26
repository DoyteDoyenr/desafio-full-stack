export default function ShowcaseLoading() {
  return (
    <div className='py-16'>
      <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
        <div className='mb-12 text-center'>
          <div className='bg-muted mx-auto h-8 w-48 rounded-md'></div>
          <div className='bg-muted mx-auto mt-4 h-4 w-96 rounded-md'></div>
        </div>

        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className='bg-card animate-pulse overflow-hidden rounded-lg'
            >
              <div className='bg-muted aspect-square'></div>
              <div className='p-4'>
                <div className='bg-muted mb-2 h-3 w-16 rounded-md'></div>
                <div className='bg-muted h-5 w-32 rounded-md'></div>
                <div className='bg-muted mt-3 h-4 w-20 rounded-md'></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
