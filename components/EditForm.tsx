'use client'
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function Editing({ topic }: { topic: { _id: string; title: string; description: string } }) {

    const [title, setTitle] = useState(topic?.title || "")
    const [description, setDescription] = useState(topic?.description || "")

    const route = useRouter()
    useEffect(() => {
        if (topic) {
            setTitle(topic.title);
            setDescription(topic.description);
        }
    }, [topic]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {

            const res = await fetch(`http://localhost:3000/api/topics/${topic._id}`, {
                method: 'PUT',
                headers: {
                    "Content-type": 'application/json',
                },
                body: JSON.stringify({ title: title, description: description }),
            })
            console.log(res)
            if (res.ok) {
                alert('topic updated successfully!')
                route.push('/')
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (<div>
        {topic ?
            <div>
                <h1>Update Topic</h1>
                <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                    <input value={title ?? ''} onChange={(e) => { setTitle(e.target.value) }} className="border border-slate-500 px-8 py-2 rounded" type="text" placeholder="Topic Title" />
                    <input value={description ?? ''} onChange={(e) => { setDescription(e.target.value) }} className="border border-slate-500 px-8 py-2 rounded" type="text" placeholder="Topic Description" />
                    <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit rounded">update</button>
                </form>
            </div>
            : <p>Loading ...</p>}
    </div>)
}