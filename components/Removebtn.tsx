"use client";
import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

interface RemoveBtnProps {
  id: string;
}

export default function Removebtn({ id }: RemoveBtnProps) {
  const router = useRouter();
  const removeTopic = async (id: string) => {
    const confirmed = confirm("Are you sure to delete this topic!");
    if (confirmed) {
      try {
        const result = await fetch(
          `${process.env.NEXT_PUBLIC_BASE_URL}/api/topics?id=${id}`,
          {
            method: "DELETE",
            headers: {
              "Content-type": "application/json",
            },
          }
        );
        if (result.ok) {
          router.refresh();
        }
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <button onClick={() => removeTopic(id)} className="text-red-400 rounded">
        <HiOutlineTrash size={24} />
      </button>
    </>
  );
}
