import Editform from "@/components/EditForm";
import { Topic } from "@/types/topic";

const getTopicById = async (id: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/topics/${id}`
    );
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
  const res = await getTopicById(id);
  const topic: Topic = res?.topic ?? {};
  console.log("Editing topic===>", topic);
  if (!topic) {
    return (
      <div>
        <p>No Topic Found</p>
      </div>
    );
  } else {
    return (
      <div>
        <Editform {...topic} />
      </div>
    );
  }
}
