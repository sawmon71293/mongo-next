import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex justify-between items-center bg-slate-800 px-8 py-3 rounded">
            <Link className="text-white font-bold" href={'/'}>MonCoding</Link>
            <Link className="bg-white p-2 rounded" href={'/addTopic'}>Add Topic</Link>
        </nav>
    )
}