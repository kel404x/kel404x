import Link from "next/link"

export default function PromptEngineeringPage() {
  return (
    <div className="min-h-screen p-8 font-mono bg-black text-white">
      <div className="max-w-xl">
        <Link href="/blog" className="hover:underline">
          ← back
        </Link>

        <h1 className="text-lg font-normal mt-8 mb-2">Prompt Engineering</h1>
        <p className="text-white/50 mb-12">Dec 19th 2024</p>

        <article className="space-y-6 leading-relaxed">
          <p>Algorithms are difficult to explain in natural language.</p>

          <p>
            So, why a functional-oriented language? The answer lies in modularity. In software
            engineering, breaking down problems into smaller, more manageable sub-problems is often
            the ideal approach. Functional-oriented programming or FOP languages are designed around
            modularity and composition, relying on functions to decompose complex tasks into smaller,
            reusable components.
          </p>

          <p>
            This is where AI comes in. Prompt engineering — the process of designing prompts to
            effectively communicate with AI models—shares a similar philosophy. Over the past year of
            using GPT, I&apos;ve learned that asking an AI model to perform a highly complex task in
            one go often yields subpar results. Instead, breaking the problem into simpler steps and
            scaling up tends to produce better outcomes.
          </p>

          <p>
            This inspired the idea of combining the principles of FOP with prompt engineering. What
            if we could apply the same philosophy of breaking problems into sub-problems and integrate
            it directly into a programming language? Imagine a language where prompts could be
            embedded inside functions to provide additional context and guidance for what the function
            should accomplish. These prompts would act as keywords, enabling seamless communication
            with an AI-powered compiler that generates code.
          </p>

          <p>
            By integrating large language models for code generation, we can create programs in any
            language supported by the model, whether it is Solidity for blockchain, C for low-level
            programming, or Java for object-oriented programming.
          </p>
        </article>
      </div>
    </div>
  )
}
