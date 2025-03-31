import Footer from "@/app/(home)/footer";
import Header from "@/app/(home)/header";

export default async function HomeLayout(
    {children} : { children: React.ReactNode}
) {

    return (
        <div className="max-w-2xl m-auto">
            <main className="min-h-screen p-6 pt-3 md:pt-6">
                <Header />
                {children}
                <Footer/>
            </main>
        </div>

    )
}