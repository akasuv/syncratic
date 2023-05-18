const topics = [
  "Technology",
  "Business",
  "Science",
  "Engineering",
  "Health",
  "Education",
  "Environment",
  "Government",
  "Psychology",
  "Economics",
  "Sustainability",
  "Law",
  "Security",
  "Philosophy",
  "Politics",
  "History",
  "Social Issues",
  "Art",
  "Design",
  "Culture",
  "Media",
  "Transportation",
  "Agriculture",
  "Hospitality",
  "Sports",
  "Finance",
  "Marketing",
  "Communication",
  "Development",
  "Innovation",
  "Creativity",
  "Problem Solving",
  "Leadership",
  "Management",
  "Teamwork",
  "Entrepreneurship",
  "Workplace",
];

function Topics() {
  return (
    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-6 px-8">
      {topics.map((topic) => (
        <a
          href="#"
          key={topic}
          className="card rounded-sm p-4 border border-black hover:bg-black hover:text-white transition"
        >
          <h3 className="text-lg font-medium">{topic}</h3>
        </a>
      ))}
    </div>
  );
}

export default Topics;
