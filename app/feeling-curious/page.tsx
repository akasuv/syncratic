import React from "react";

type FeelingCuriousPageProps = {
  title: string;
  content: string;
};

const FeelingCuriousPage = () => {
  return (
    <div className="container mx-auto pb-8">
      <div className="flex flex-col mb-4 gap-y-2">
        <span
          className="bg-black w-fit text-white text-sm  
           font-semibold mr-2 px-2.5 py-0.5 rounded"
        >
          Feeling Curious
        </span>
        <h2 className="text-3xl font-bold">Neural Networks</h2>
      </div>
      <div className="mb-4 text-gray-600">
        {`
        Recent years have seen tremendous advances in neural networks, enabling
        them to achieve superhuman performance at narrow tasks like image
        recognition, machine translation and game playing. However, for neural
        networks to approach the general intelligence exhibited by humans, much
        work remains to be done. Several key frontier areas of research include:
        Biological Plausibility Researchers are studying the brain's
        architectural principles and neural coding schemes to gain insight for
        designing more biologically plausible neural networks. Approximating
        aspects of neuroanatomy and physiology could help networks develop
        capabilities like commonsense reasoning and conceptual understanding
        that have so far eluded artificial systems. However, mapping neural
        mechanisms to algorithmic counterparts remains difficult. Researchers
        continue to investigate which aspects of brain structure and function
        are most important to approximate for enabling generally intelligent
        behavior. Studies point to several promising directions, including
        approximating hierarchies of abstraction, plasticity in connections,
        context-dependent representation and the ability to form invariances.
        But a comprehensive theory of how brain computations lead to general
        intelligence remains elusive. Lifelong Learning Most neural networks
        require extensive retraining to adapt to new tasks and environments.
        This likely requires developing memory-based networks that can learn
        from very few examples and incrementally update their knowledge. But
        major challenges around continual learning remain unsolved, including
        how to determine what knowledge is important to retain and how best to
        consolidate new learnings with prior knowledge. Researchers are actively
        exploring new network architectures, training algorithms and
        representations to enable truly lifelong machine learning.
        Compositionality While neural networks have achieved great feats of
        pattern recognition and inference, they largely lack the ability to
        compose or recombine layers to generate novel outcomes. The lack of
        systematic compositionality severely limits the flexibility and
        creativity of artificial neural systems. Researchers are exploring
        architectural and training strategies to build compositionality into
        networks in biologically plausible ways, but success has been limited
        thus far. Scaling As neural networks increase in size and complexity,
        issues arise around data requirements, training efficiency, optimization
        stability and robustness... Researchers aim to develop "scaling laws"
        that elucidate how network performance relates to architectural
        parameters and data at different scales. Collectively, overcoming these
        barriers could push the capabilities of neural networks... But bridging
        the large gap between current networks and human intelligence will
        require fundamental breakthroughs...Speculatively, synthesizing
        principles from neuroscience, cognition and machine learning may be
        necessary to achieve truly intelligent artificial neural systems.
        However, the challenges are immense and success is far from guaranteed.
	`}
      </div>
    </div>
  );
};

export default FeelingCuriousPage;
