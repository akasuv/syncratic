export const revalidate = 0;

import TopicSection from "@/components/TopicSection";
import QuickScanCard from "@/components/QuickScanCard";
import { Database } from "@/supabase";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ekxacncpbggwxpghqxcc.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY as string;
const supabase = createClient(supabaseUrl, supabaseKey);

export default async function Home() {
  const { data: concepts, error } = await supabase
    .from("industries")
    .select("*, fields(name)")
    .eq("id", 23);

  console.log({ concepts });

  return (
    <main className="p-8 pt-0">
      <TopicSection
        title="Artificial Intelligence"
        description="Artificial intelligence (AI) refers to the ability of machines to mimic intelligent behavior normally associated with humans, such as learning from experience, reasoning about concepts, recognizing patterns in data, and drawing inferences and conclusions. Modern AI systems leverage technologies like machine learning, neural networks, natural language processing and computer vision, enabled by recent advances in massive data, processing power and algorithms."
      >
        {(concepts as Database["public"]["Tables"]["quick_scan"]["Row"][])?.map(
          (concept) => (
            <QuickScanCard key={concept.id} {...concept} />
          )
        )}
      </TopicSection>
    </main>
  );
}
