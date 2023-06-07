export const revalidate = 0;
import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://ekxacncpbggwxpghqxcc.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY as string;
const supabase = createClient(supabaseUrl, supabaseKey);
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent?: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id;

  const { data: fields, error } = await supabase
    .from("fields")
    .select("*, concepts(id, name, quick_scan(content))")
    .eq("id", Number(params.id));

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = [];

  return {
    title: "Syncratic - " + fields[0].name,
    openGraph: {
      images: ["/some-specific-page-image.jpg", ...previousImages],
    },
  };
}

export default async function Page({ params }) {
  const { data: fields, error } = await supabase
    .from("fields")
    .select("*, concepts(id, name, quick_scan(content))")
    .eq("id", Number(params.id));

  return (
    <div className="pl-8">
      <h1 className="text-black text-3xl">{fields[0].name}</h1>
      <ul className="grid grid-cols-4 gap-4 mt-8">
        {fields[0].concepts.map((concept) => (
          <li
            key={concept.id}
            className="w-[300px] border border-2 border-black rounded p-4"
          >
            <p className="bg-black w-fit text-white py-1 px-2 text-xs rounded mb-4">
              Quick Scan
            </p>
            <p className="font-bold mb-2 text-lg">{concept.name}</p>
            <p>{concept.quick_scan[0]?.content}</p>
            <a className="underline text-sm text-right w-full block mt-4">
              Deep Dive
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
