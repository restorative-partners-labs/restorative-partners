import React, { useEffect } from 'react'

const useStickyHeader = (linkColor) => {
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => window.removeEventListener('scroll', isSticky)
    }, [])

    const isSticky = () => {
        const header = document.querySelector('.bottom-navbar');
        const mobileNavbar = document.querySelector('.mobile-navbar');
        const nav_link = document.querySelectorAll('.bottom-navbar .nav-link');
        const other_icon = document.querySelectorAll('.bottom-navbar .other_icon');
        const logo = document.querySelector(".logo")

        const scrollTop = window.scrollY;
        if (scrollTop >= 250) {
            header?.classList.add('container-fluid', 'fixed', 'top-0', 'left-0', 'w-full', 'bg-background', 'z-20', 'animate-slideDown', 'shadow-md')
            mobileNavbar?.classList.add('container-fluid', 'fixed', 'top-0', 'left-0', 'w-full', 'bg-background', 'z-20', 'animate-slideDown')

            nav_link.forEach((ele) => {
                ele.classList.remove("py-[34px]")
                ele.classList.add("py-5")
                if (linkColor) {
                    if (ele.classList.contains("text-white") || logo.classList.contains("text-black")) {
                        ele.classList.remove("text-white")
                        logo.classList.remove("text-white")
                        other_icon[0].classList.remove("text-white")
                        other_icon[1].classList.remove("text-white")
                    }
                    ele.classList.add("text-black")
                    logo.classList.add("text-black")
                    other_icon[0].classList.add("text-black")
                    other_icon[1].classList.add("text-black")
                }
            })
        }
        if (scrollTop < 50) {
            header?.classList.remove('container-fluid', 'fixed', 'top-0', 'left-0', 'w-full', 'bg-background', 'z-20', 'animate-slideDown', 'shadow-md')
            mobileNavbar?.classList.remove('container-fluid', 'fixed', 'top-0', 'left-0', 'w-full', 'bg-background', 'z-20', 'animate-slideDown')

            nav_link.forEach((ele) => {
                ele.classList.remove("py-5")
                ele.classList.add("py-[34px]")
                if (linkColor) {
                    if (ele.classList.contains("text-black") || logo.classList.contains("text-black")) {
                        ele.classList.remove("text-black")
                        logo.classList.remove("text-black")
                        other_icon[0].classList.remove("text-black")
                        other_icon[1].classList.remove("text-black")

                    }
                    ele.classList.add("text-white")
                    logo.classList.add("text-white")
                    other_icon[0].classList.add("text-white")
                    other_icon[1].classList.add("text-white")
                }
            })
        }
    };
}

export default useStickyHeader