export default function MiniButton({ children }: { children: React.ReactNode }) {
    return (
        <span className="text-neutral-200 cursor-pointer hover:bg-neutral-700 p-[0.2rem] rounded-md">
            {children}
        </span>
    )
}