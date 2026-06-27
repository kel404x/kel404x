import Link from "next/link"

export default function EntanglementPage() {
  return (
    <div className="min-h-screen p-8 font-mono bg-black text-white">
      <div className="max-w-xl">
        <Link href="/blog" className="hover:underline">
          ← back
        </Link>

        <h1 className="text-lg font-normal mt-8 mb-2">Entanglement</h1>
        <p className="text-white/50 mb-12">Nov 24 2025</p>

        <article className="space-y-6 leading-relaxed">
          <p>
            I am not a physics student; I&apos;m a computer science student, so I understand what a
            QPU is from a hardware perspective: it&apos;s basically a <em>special</em> kind of
            processor. Similar to how traditional CPUs have tiny transistors, physical qubits act
            like those tiny transistors, but for a quantum computer, of course.
          </p>

          <p>
            So my guess is that the latest available quantum computers have maybe around 500 qubits
            (I might be wrong, don&apos;t quote me). Essentially, we&apos;re still far from anything
            like ultimate computation. For now I&apos;ll just deal with 2 or maybe 3 qubits.
          </p>

          <p>
            We send signals to these qubits—electrical or maybe magnetic, I&apos;m not sure. The gold
            contraption is a fridge, a cooler that brings the qubits down to below 0 K (not sure of
            the exact number, but extremely cold) to create an isolated system, or at least the
            closest approximation, since a truly isolated system can&apos;t exist in nature. After
            cooling, signals are sent in.
          </p>

          <p>
            What do these signals contain? These signals are circuits that implement a specific
            algorithm. For example, if we wanted to run Grover&apos;s algorithm for 100 qubits, you
            would write a circuit—really, draw a circuit. It&apos;s like a musical sheet that
            manipulates the qubits in Hilbert space, and the quantum computer is the instrument that
            plays the sheet. You manipulate the qubits using quantum gates, the logic gates of
            quantum computing.
          </p>

          <p>
            Quantum mechanics is probabilistic in nature, so the output you get is essentially
            random—but not really. If done correctly, if you write a perfect musical sheet, what you
            should get is that the majority of the time the output collapses to the number you want.
            By obeying the laws of quantum mechanics, we can compute things differently. It&apos;s
            fundamentally different from traditional computation.
          </p>

          <p>
            In real life, scaling quantum computing has been the biggest challenge, primarily due to
            not being an truly isolated system (environmental noise) and difficulty is controlling
            the qubits.
          </p>

          <p>
            Entanglement is something I&apos;ve been trying to understand for months. I need to do
            the math, but to do the math I need to sit down and work through it.
          </p>

          <hr className="border-white/20" />

          <p>
            <strong>Einstein&apos;s</strong> perspective was that the two spins (the electron and
            positron) are determined, meaning the outcome of any measurement along any axis is
            pre-determined by nature. Measuring the spin of the positron (say, along z) forces it to
            orient and align in the +z or –z direction. If the positron spin is measured to be +z,
            the electron&apos;s spin will be –z. There is no <em>connection</em> between the two
            spins. This option is sometimes called &ldquo;hidden variables,&rdquo; as in: the
            projections along different axes are determined but hidden from us.
          </p>

          <p>
            <strong>Born&apos;s</strong> perspective is that the spins are undetermined in their
            initial states until they are measured. Measuring the positron&apos;s spin
            &ldquo;collapses&rdquo; the space of all possibilities to a single determined state,
            either +z or –z. This has been called &ldquo;spooky action at a distance,&rdquo; though
            one might less dramatically call it &ldquo;non-local physics.&rdquo;
          </p>

          <hr className="border-white/20" />

          <p className="italic">
            &ldquo;...quantum phenomena do not occur in a Hilbert space, they occur in a laboratory.
            – Asher Peres&rdquo; I am so confused that I dont know where to take this as an insult
            or a compliment towards quantum mechanics.
          </p>
        </article>
      </div>
    </div>
  )
}
