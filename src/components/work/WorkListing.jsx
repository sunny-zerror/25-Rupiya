import InfiniteParallax from "../effects/InfiniteParallax";

export default function WorkListing() {
    return (
        <div className="w-full h-screen center ">
            <InfiniteParallax speed={80} draggable>
                <div className="w-full  pointer-events-none">
                    <div className=" w-[90vw] mt-10 h-[70vh] overflow-hidden rounded-4xl  select-none">
                        <img className="cover" src="https://images.unsplash.com/photo-1771926927841-1a81a1094b81?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className=" w-[90vw] mt-10 h-[70vh] overflow-hidden rounded-4xl  select-none">
                        <img className="cover" src="https://images.unsplash.com/photo-1702460858357-bdb7d20387aa?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                    </div>
                    <div className=" w-[90vw] mt-10 h-[70vh] overflow-hidden rounded-4xl  select-none">
                        <img className="cover" src="https://images.unsplash.com/photo-1718703357148-35ae8d58a6e6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D" alt="" />
                    </div>
                    <div className=" w-[90vw] mt-10 h-[70vh] overflow-hidden rounded-4xl  select-none">
                        <img className="cover" src="https://images.unsplash.com/photo-1750545337073-c320c4e0e251?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D" alt="" />
                    </div>
                    <div className=" w-[90vw] mt-10 h-[70vh] overflow-hidden rounded-4xl  select-none">
                        <img className="cover" src="https://images.unsplash.com/photo-1564220534-b8f363052ab7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0fHx8ZW58MHx8fHx8" alt="" />
                    </div>
                </div>
            </InfiniteParallax>
        </div>
    );
}