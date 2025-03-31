"use client"

import {useTheme} from "next-themes";

export function ThemeToggle() {
    const { theme, setTheme } = useTheme()
    const handleOnClick = () => {
        setTheme(theme => theme === 'dark' ? 'light' : 'dark')
    }
    return (
        <>
            <button onClick={handleOnClick} className="capitalize">{theme}</button>
        </>
    )
}