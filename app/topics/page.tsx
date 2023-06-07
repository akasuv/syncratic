import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ekxacncpbggwxpghqxcc.supabase.co";
const supabaseKey = process.env.SUPABASE_KEY as string;
const supabase = createClient(supabaseUrl, supabaseKey);
export const revalidate = 0;

async function Topics() {
  const { data: industries, error } = await supabase
    .from("industries")
    .select("*, fields(id, name)");

  return (
    <div className="pl-8 flex flex-col gap-y-8">
      {industries?.map((industry) => (
        <div>
          <h3 className="text-2xl font-medium">{industry.name}</h3>
          <ul className="grid grid-cols-3 gap-y-2 mt-4">
            {industry.fields.map((field) => (
              <li key={field.id}>
                <a href={`/field/${field.id}`} className="hover:underline">
                  {field.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Topics;
