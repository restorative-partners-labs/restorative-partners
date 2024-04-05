import React from 'react'

const PreLoading = () => {
    return (
        <div className="fixed z-50 top-0 left-0 w-full h-full flex justify-center items-center bg-[#f9fffc]" >
            <dotlottie-player src="https://lottie.host/f049e307-d4b6-40be-812e-2ac589351070/5JgAg32Se6.json" background="transparent" speed=".9" style={{ width: "300px", height: "300px" }} loop="" autoplay=""></dotlottie-player>
            <script src="https://unpkg.com/@dotlottie/player-component@latest/dist/dotlottie-player.mjs" type="module"></script>
        </div>
    )
}

export default PreLoading