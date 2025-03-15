import Link from "next/link";
import Removebtn from "./Removebtn";
import { HiPencilAlt } from "react-icons/hi";
import { Topic } from "@/types/topic";

const getTopic = async () => {
    try {
        const res = await fetch('http://localhost:3000/api/topics', {
            cache: 'no-store'
        });
        if (!res.ok) {
            throw new Error('Failed to fetch topics');
        }
        return res.json();

    } catch (error) {
        console.log(error)
    }
}


const handleDelete = async (_id: string) => {
    console.log('id here>>>>>>>>', _id)
    try {
        const result = await fetch(`http://localhost:3000/api/topics/id=${_id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            },
        })
        if (!result.ok) {
            throw new Error("Failed to delete the topic!");
        }
    } catch (error) {
        console.log(error)
    }
};

export default async function TopicLists() {

    const { topics } = await getTopic();
    return (
        <>
            {topics.map((top: Topic) => (
                <div key={top._id} className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
                    <div>
                        <h2 className="font-bold text-2xl">{top.title}</h2>
                        <div>{top.description}</div>
                    </div>
                    <div className="flex gap-2">
                        <Removebtn onClick={() => handleDelete(top._id)} />
                        <Link href={`/editTopic/${top._id}`}><HiPencilAlt size={24} /></Link>
                    </div>
                </div>))}
        </>
    )
}