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

interface EditTopicParams {
  id: string;
}

interface EditTopicProps {
  params: Promise<EditTopicParams>;
}
export default async function EditTopic({ params }: EditTopicProps) {
  const resolveParams = await params;
  const { id } = resolveParams;
  const { topic } = await getTopicById(id);
  return (
    <div>
      <Editform topic={topic} />
    </div>
  );
}
