import TopicSection from "@/components/TopicSection";
import QuickScanCard from "@/components/QuickScanCard";

export default function Home() {
  const concepts = [
    {
      concept: "Machine Learning",
      quickScan:
        "Machine learning is a subfield of AI that focuses on using statistical techniques to enable computer systems to improve automatically through experience and data with minimal human intervention. Machine learning algorithms 'learn' from training data to make predictions or decisions, rather than being explicitly programmed.",
    },
    {
      concept: "Neural Networks",
      quickScan:
        "Neural networks are systems of algorithms modeled after the human brain's neuronal structure, consisting of connected nodes like artificial neurons that are organized in layers. Neural networks 'learn' to perform tasks by considering examples, generally without being programmed with task-specific rules.",
    },
    {
      concept: "Deep Learning",
      quickScan:
        "Deep learning is a branch of machine learning that utilizes neural networks with many hidden layers to perform tasks such as visual object recognition, object detection, speech recognition, and natural language processing. Deep learning is able to achieve state-of-the-art performance on many AI tasks.",
    },
    {
      concept: "Machine Learning",
      quickScan:
        "Machine learning is a subfield of AI that focuses on using statistical techniques to enable computer systems to improve automatically through experience and data with minimal human intervention. Machine learning algorithms 'learn' from training data to make predictions or decisions, rather than being explicitly programmed.",
    },
    {
      concept: "Neural Networks",
      quickScan:
        "Neural networks are systems of algorithms modeled after the human brain's neuronal structure, consisting of connected nodes like artificial neurons that are organized in layers. Neural networks 'learn' to perform tasks by considering examples, generally without being programmed with task-specific rules.",
    },
    {
      concept: "Deep Learning",
      quickScan:
        "Deep learning is a branch of machine learning that utilizes neural networks with many hidden layers to perform tasks such as visual object recognition, object detection, speech recognition, and natural language processing. Deep learning is able to achieve state-of-the-art performance on many AI tasks.",
    },
    {
      concept: "Machine Learning",
      quickScan:
        "Machine learning is a subfield of AI that focuses on using statistical techniques to enable computer systems to improve automatically through experience and data with minimal human intervention. Machine learning algorithms 'learn' from training data to make predictions or decisions, rather than being explicitly programmed.",
    },
    {
      concept: "Neural Networks",
      quickScan:
        "Neural networks are systems of algorithms modeled after the human brain's neuronal structure, consisting of connected nodes like artificial neurons that are organized in layers. Neural networks 'learn' to perform tasks by considering examples, generally without being programmed with task-specific rules.",
    },
    {
      concept: "Deep Learning",
      quickScan:
        "Deep learning is a branch of machine learning that utilizes neural networks with many hidden layers to perform tasks such as visual object recognition, object detection, speech recognition, and natural language processing. Deep learning is able to achieve state-of-the-art performance on many AI tasks.",
    },
    {
      concept: "Machine Learning",
      quickScan:
        "Machine learning is a subfield of AI that focuses on using statistical techniques to enable computer systems to improve automatically through experience and data with minimal human intervention. Machine learning algorithms 'learn' from training data to make predictions or decisions, rather than being explicitly programmed.",
    },
    {
      concept: "Neural Networks",
      quickScan:
        "Neural networks are systems of algorithms modeled after the human brain's neuronal structure, consisting of connected nodes like artificial neurons that are organized in layers. Neural networks 'learn' to perform tasks by considering examples, generally without being programmed with task-specific rules.",
    },
    {
      concept: "Deep Learning",
      quickScan:
        "Deep learning is a branch of machine learning that utilizes neural networks with many hidden layers to perform tasks such as visual object recognition, object detection, speech recognition, and natural language processing. Deep learning is able to achieve state-of-the-art performance on many AI tasks.",
    },
  ];

  return (
    <main className="p-8 pt-0">
      <TopicSection
        title="Artificial Intelligence"
        description="Artificial intelligence (AI) refers to the ability of machines to mimic intelligent behavior normally associated with humans, such as learning from experience, reasoning about concepts, recognizing patterns in data, and drawing inferences and conclusions."
      >
        {concepts.map((concept) => (
          <QuickScanCard key={concept.concept} {...concept} />
        ))}
      </TopicSection>
      <TopicSection
        title="Artificial Intelligence"
        description="Artificial intelligence (AI) refers to the ability of machines to mimic intelligent behavior normally associated with humans, such as learning from experience, reasoning about concepts, recognizing patterns in data, and drawing inferences and conclusions."
      >
        {concepts.map((concept) => (
          <QuickScanCard key={concept.concept} {...concept} />
        ))}
      </TopicSection>
      <TopicSection
        title="Artificial Intelligence"
        description="Artificial intelligence (AI) refers to the ability of machines to mimic intelligent behavior normally associated with humans, such as learning from experience, reasoning about concepts, recognizing patterns in data, and drawing inferences and conclusions."
      >
        {concepts.map((concept) => (
          <QuickScanCard key={concept.concept} {...concept} />
        ))}
      </TopicSection>
      <TopicSection
        title="Artificial Intelligence"
        description="Artificial intelligence (AI) refers to the ability of machines to mimic intelligent behavior normally associated with humans, such as learning from experience, reasoning about concepts, recognizing patterns in data, and drawing inferences and conclusions."
      >
        {concepts.map((concept) => (
          <QuickScanCard key={concept.concept} {...concept} />
        ))}
      </TopicSection>
      <TopicSection
        title="Artificial Intelligence"
        description="Artificial intelligence (AI) refers to the ability of machines to mimic intelligent behavior normally associated with humans, such as learning from experience, reasoning about concepts, recognizing patterns in data, and drawing inferences and conclusions."
      >
        {concepts.map((concept) => (
          <QuickScanCard key={concept.concept} {...concept} />
        ))}
      </TopicSection>
      <TopicSection
        title="Artificial Intelligence"
        description="Artificial intelligence (AI) refers to the ability of machines to mimic intelligent behavior normally associated with humans, such as learning from experience, reasoning about concepts, recognizing patterns in data, and drawing inferences and conclusions."
      >
        {concepts.map((concept) => (
          <QuickScanCard key={concept.concept} {...concept} />
        ))}
      </TopicSection>
      <TopicSection
        title="Artificial Intelligence"
        description="Artificial intelligence (AI) refers to the ability of machines to mimic intelligent behavior normally associated with humans, such as learning from experience, reasoning about concepts, recognizing patterns in data, and drawing inferences and conclusions."
      >
        {concepts.map((concept) => (
          <QuickScanCard key={concept.concept} {...concept} />
        ))}
      </TopicSection>
      <TopicSection
        title="Artificial Intelligence"
        description="Artificial intelligence (AI) refers to the ability of machines to mimic intelligent behavior normally associated with humans, such as learning from experience, reasoning about concepts, recognizing patterns in data, and drawing inferences and conclusions."
      >
        {concepts.map((concept) => (
          <QuickScanCard key={concept.concept} {...concept} />
        ))}
      </TopicSection>
      <TopicSection
        title="Artificial Intelligence"
        description="Artificial intelligence (AI) refers to the ability of machines to mimic intelligent behavior normally associated with humans, such as learning from experience, reasoning about concepts, recognizing patterns in data, and drawing inferences and conclusions."
      >
        {concepts.map((concept) => (
          <QuickScanCard key={concept.concept} {...concept} />
        ))}
      </TopicSection>
      <TopicSection
        title="Artificial Intelligence"
        description="Artificial intelligence (AI) refers to the ability of machines to mimic intelligent behavior normally associated with humans, such as learning from experience, reasoning about concepts, recognizing patterns in data, and drawing inferences and conclusions."
      >
        {concepts.map((concept) => (
          <QuickScanCard key={concept.concept} {...concept} />
        ))}
      </TopicSection>
    </main>
  );
}
