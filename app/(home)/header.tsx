import {ThemeToggle} from "@/components/theme-toggle";

export default function Header() {
    return (
        <header className="mb-5 md:mb-10">
            <nav className="mx-auto flex items-center justify-between">
                <div className="flex items-center w-full">
                   Logo
                </div>
                <div className="flex items-center gap-x-4">
                    <ThemeToggle/>
                </div>
            </nav>
        </header>
    )
}