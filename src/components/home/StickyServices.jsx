import React from 'react'

const StickyServices = () => {
    return (
        <>
            <div className="w-full h-[250vh] flex">
                
                {/* LEFT (Sticky) */}
                <div className="w-1/2 sticky top-0 h-screen bg-pattern bg-[#30A81D]! flex items-center justify-center">
                    <div className="w-[88%] aspect-square center rounded-full bg-[#141414]">
                        <div className="w-[40%] rounded-lg overflow-hidden aspect-4/3">
                        <img className='cover' src="https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd133_quiet-8.avif" alt="" />
                        </div>
                    </div>
                </div>

                {/* RIGHT (Scrollable content) */}
                <div className="w-1/2 px-20 py-32 text-white bg-[#141414]">
                    
                    {[1,2,3,4,5].map((i) => (
                        <div key={i} className="pb-44">
                            <p className='text-5xl leading-none'>
                                {i}. Service Title
                            </p>
                            <p className='text-xl font-thin leading-tight mt-5'>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum quibusdam facilis ratione. Quibusdam saepe quae mollitia molestias dolor, repudiandae laborum?
                            </p>
                        </div>
                    ))}

                </div>
            </div>
        </>
    )
}

export default StickyServices