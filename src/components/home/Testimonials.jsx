import React from 'react'
import CircularGallery from '../effects/CircularGallery'

const TestimonialsData = [
    {
        id: 1,
        text: "Priya D.",
        city: "New York",
        desc: "Tastes like a candy I used to enjoy as a kid, but it’s a vitamin. It tastes amazing!",
        image: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd15a_knight-1.avif"
    },
    {
        id: 2,
        text: "Priya D.",
        city: "New York",
        desc: "Tastes like a candy I used to enjoy as a kid, but it’s a vitamin. It tastes amazing!",
        image: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd15b_knight-8.avif"
    },
    {
        id: 3,
        text: "Priya D.",
        city: "New York",
        desc: "Tastes like a candy I used to enjoy as a kid, but it’s a vitamin. It tastes amazing!",
        image: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd157_knight-6.avif"
    },
    {
        id: 4,
        text: "Priya D.",
        city: "New York",
        desc: "Tastes like a candy I used to enjoy as a kid, but it’s a vitamin. It tastes amazing!",
        image: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd113_knight-3.avif"
    },
    {
        id: 4,
        text: "Priya D.",
        city: "New York",
        desc: "Tastes like a candy I used to enjoy as a kid, but it’s a vitamin. It tastes amazing!",
        image: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd116_knight-10.avif"
    },
    {
        id: 4,
        text: "Priya D.",
        city: "New York",
        desc: "Tastes like a candy I used to enjoy as a kid, but it’s a vitamin. It tastes amazing!",
        image: "https://cdn.prod.website-files.com/68ad8a274502a69dfd5cd0aa/68ad8a274502a69dfd5cd112_knight-5.avif"
    },
]

const Testimonials = () => {
    return (
        <>  
        <div className="h-screen">
                <CircularGallery items={TestimonialsData} bend={3} textColor="#" borderRadius={0.02} scrollEase={0.02}/>
        </div>
        </>
    )
}

export default Testimonials