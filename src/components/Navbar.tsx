
const Navbar = () => {
    return (
        <nav className="container mx-auto p-4 py-6 flex items-center justify-between">
            <h1 className="text-4xl flex-1 uppercase font-semibold tracking-[1.2px]">Rohit</h1>
            <div className="flex items-center gap-x-10">
                <p className="text-xl">
                    Skills
                </p>
                <p className="text-xl">
                    Projects
                </p>
                <p className="text-xl">
                    Contact
                </p>
            </div>
        </nav>
    )
}

export default Navbar