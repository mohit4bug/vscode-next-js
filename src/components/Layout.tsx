import SideBar from "./SideBar";
import StatusBar from "./StatusBar";
import TitleBar from "./TitleBar";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="select-none">
            <TitleBar />
            <div className="h-[calc(100dvh-4rem)] flex">
                <SideBar />
                <div className="w-full h-full">
                    {children}
                </div>
            </div>
            <StatusBar />
        </main>
    )
}