import Footer from "@/app/(home)/footer";
import Header from "@/app/(home)/header";

export default async function HomeLayout(
    {children} : { children: React.ReactNode}
) {

    return (
        <div className="max-w-3xl m-auto">
            <main className="p-6 pt-3 md:pt-6 min-h-screen flex flex-col">
                <Header />
                {children}
                <Footer/>
            </main>
        </div>

    )
}