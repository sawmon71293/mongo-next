import { Handlee } from "next/font/google";
import { HiOutlineTrash } from "react-icons/hi"

interface RemoveBtnProps {
    onClick: (id: string) => void;
    disabled?: boolean;
}

export default function Removebtn({ }: RemoveBtnProps) {

    return (<>
        <button className="text-red-400 rounded">
            <HiOutlineTrash size={24} />
        </button>
    </>)
}