/* eslint-disable import/no-extraneous-dependencies */
import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: [
    {
      "https://ekxacncpbggwxpghqxcc.supabase.co/graphql/v1/": {
        headers: {
          apikey:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVreGFjbmNwYmdnd3hwZ2hxeGNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ0MTA5NDksImV4cCI6MTk5OTk4Njk0OX0.uCg1ItzaITWuER_SnW9wq2asbtAb4pquEU5PQXcoxn8",
        },
      },
    },
  ],
  documents: ["app/**/*.tsx", "!app/gql/**/*"],
  generates: {
    "./generated/gql/": {
      preset: "client",
      plugins: [],
    },
  },
  hooks: { afterAllFileWrite: ["prettier --write"] },
};

export default config;
