import Link from "next/link";
import Removebtn from "./Removebtn";
import { HiPencilAlt } from "react-icons/hi";

export default function TopicLists() {
    return (
        <>
            <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
                <div>
                    <h2 className="font-bold text-2xl">topic title</h2>
                    <div>Topic description</div>
                </div>
                <div className="flex gap-2">
                    <Removebtn />
                    <Link href={'/editTopic/123'}><HiPencilAlt size={24} /></Link>
                </div>
            </div>
        </>
    )
}