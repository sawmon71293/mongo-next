import Editform from "@/components/EditForm";

const getTopicById = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/topics/${id}`);
    if (!res.ok) {
      throw new Error("Failed to fetch the topic");
    }
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

type PageProps = {
  id: string;
};

export default async function editTopic({ id }: PageProps) {
  console.log("Params id is:", id);
  return "";
  console.log("id is", id);
  const { topic } = await getTopicById(id);
  return (
    <div>
      <Editform topic={topic} />
    </div>
  );
}
