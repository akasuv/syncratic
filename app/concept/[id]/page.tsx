export const revalidate = 0;
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ekxacncpbggwxpghqxcc.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY as string;
const supabase = createClient(supabaseUrl, supabaseKey);
import { Metadata, ResolvingMetadata } from "next";
import ReactMarkdown from "react-markdown";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function Page({ params }) {
  const { data, error } = await supabase
    .from("concepts")
    .select("*, deep_dive(content), feeling_curious(content)")
    .eq("id", Number(params.id));

  const concept = data?.[0];

  console.log(concept);

  if (!concept) {
    return <h1>Not found</h1>;
  }

  return (
    <div className="py-4 px-8 grid grid-cols-3 ">
      <div className="col-span-2">
        <p className="bg-black w-fit text-white py-1 px-2 text-xs rounded mb-4">
          Deep Dive
        </p>
        <ReactMarkdown className="prose w-full">
          {"## " + concept.name + "\n" + concept.deep_dive[0]?.content}
        </ReactMarkdown>
      </div>
      <div className="pr-8">
        <p className="bg-black w-fit text-white py-1 px-2 text-xs rounded mb-4">
          Feeling Curious
        </p>
        <p>{concept.feeling_curious[0]?.content}</p>
      </div>
    </div>
  );
}
