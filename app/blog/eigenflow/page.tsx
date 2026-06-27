import Link from "next/link"

export default function EigenflowPage() {
  return (
    <div className="min-h-screen p-8 font-mono bg-black text-white">
      <div className="max-w-xl">
        <Link href="/blog" className="hover:underline">
          ← back
        </Link>

        <h1 className="text-lg font-normal mt-8 mb-2">EigenFlow</h1>
        <p className="text-white/50 mb-2">June 15th 2026</p>
        <a
          href="https://github.com/akhil-40409/eigenflow"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline text-white/50"
        >
          github.com/akhil-40409/eigenflow
        </a>

        <p className="text-white/50 text-sm mt-8 mb-8 leading-relaxed border border-white/20 p-4">
          This is an informal research log, not a peer-reviewed paper. Experimental results are
          preliminary, conclusions may change, and nothing here should be treated as established
          fact. I&apos;m writing to think out loud and document work in progress.
        </p>

        <article className="space-y-6 leading-relaxed">
          <p>
            So here&apos;s what I&apos;ve been building. EigenFlow. A clean, minimalistic
            JAX-accelerated library for classical and quantum machine learning and hybrid models.
            Right now it&apos;s specifically tailored for symbolic regression benchmarks, but the
            plan is bigger than that.
          </p>

          <p>
            The current status is this: I&apos;ve implemented multilayer perceptrons (MLPs),
            B-spline Kolmogorov-Arnold Networks (KANs), and also QKAN — a quantum KAN that uses a
            data-reuploading circuit as its activation function. There are drop-in layers, some
            importable datasets, and a few experimental training runs done. The whole point is to
            first understand what KANs actually are, and then figure out how to take the classically
            trained version (which uses B-splines, a classical basis) and build a quantum version
            that replaces the activation functions with quantum variational activation functions.
            EigenFlow is my pennylane + JAX re-implementation and benchmarking of it.
          </p>

          <p>
            When you build a parametrized circuit, the model&apos;s output as a function of the{" "}
            <em>input data</em> <code className="text-white/80">x</code> is a Fourier series. But
            the Fourier part doesn&apos;t come from the trainable rotation gates — it comes from the{" "}
            <strong>data-encoding</strong> gates. The accessible frequencies (which sines and
            cosines you get) are set by the encoding: the eigenvalue spectrum of the generators you
            use to feed <code className="text-white/80">x</code> in, and how many times you
            re-upload the data. The trainable gates and the measurement observable only set the{" "}
            <strong>coefficients</strong> on top of that basis. So encoding picks the frequencies,
            training picks the amplitudes. That&apos;s the result from Schuld, Sweke &amp; Meyer (
            <em>
              Effect of data encoding on the expressive power of variational quantum models
            </em>
            , PRA 103, 032430 — arXiv:2008.08605).
          </p>

          <p>
            Encoding <code className="text-white/80">x</code> through a gate like{" "}
            <code className="text-white/80">exp(-i x H)</code> evolves the state by complex
            exponentials, and the frequencies of those exponentials are the differences of
            eigenvalues of <code className="text-white/80">H</code>. Measure an observable and the
            exponentials collapse into real sines and cosines. It bottoms out in oscillations, but
            specifically because of the eigenvalue spectrum of the encoding Hamiltonian. The DARUAN
            trick is to also make the data-preprocessing weights trainable, which lets you stretch
            that frequency spectrum and grow it exponentially with reuploading depth.
          </p>

          <p>
            We use MLPs mostly as a baseline. In a KAN, the trainable functions on the edges are
            parametrized by B-splines, which are classical (Liu et al.,{" "}
            <em>KAN: Kolmogorov-Arnold Networks</em>, arXiv:2404.19756). One thing I want to keep
            straight: the B-spline is just <em>how each univariate edge function is represented</em>
            . The reason you can decompose a multivariate function into univariate functions plus
            addition at all is the <strong>Kolmogorov-Arnold representation theorem.</strong> (Side
            note for precision: the original KAN edge isn&apos;t only a spline, there&apos;s also a
            residual base term, a SiLU, added to it.)
          </p>

          <p>
            Think of the spline like this: if you have to recreate a bigger function, you build it
            out of a bunch of local piecewise-polynomial pieces summed together. B-splines have{" "}
            <strong>compact (finite) support</strong>, meaning each basis function is nonzero only
            over a few knot intervals.
          </p>

          <p>
            So the current results: MLPs and KANs are implemented and behave as expected. MLPs
            slightly underperformed on the regression task but trained faster; KANs had better loss
            but took significantly longer to train even with JAX acceleration on both. The honest
            caveat is that &ldquo;MLPs slightly underperformed&rdquo; only means something if the
            comparison is parameter-matched and both models were actually tuned. So before I claim
            it as a result rather than an anecdote, I need to lock that down (matched params, same
            optimizer budget, per-architecture tuning).
          </p>

          <p>
            One of the big cons of KANs is that downstream results so far have been underwhelming.
            Their advantage is interpretability, you can crack the black box open. Concretely, KAN
            interpretability means you can <em>visualize, prune, and symbolically fit the learned univariate edge functions</em>{" "}
            directly, rather than staring at a wall of weights. I still want to get deeper into how
            the symbolic-fitting / pruning pipeline actually works in practice.
          </p>

          <p>
            One experiment I ran was on the relativistic time-dilation factor, which is part of the
            Feynman symbolic-regression benchmark I&apos;m using to compare all these models
            (Udrescu &amp; Tegmark, <em>AI Feynman</em>, Science Advances 2020 — arXiv:1905.11481).
            I&apos;m leaning on this benchmark because KANs have shown their strongest real results
            on symbolic / formulaic regression, as opposed to the heavy stuff like vision or audio
            where classical MLPs still win. But the symbolic-regression niche is exactly where the
            interpretability edge pays off.
          </p>

          <p>
            A lot of QML really does come down to encoding, because it sets your frequency
            spectrum. You also have the measurement/observable (which coefficients you can actually
            read out), the variational ansatz, and the optimization landscape (barren plateaus,
            trainability).
          </p>

          <p>
            To recap the experiments so far: MLPs and KANs, with KANs winning on the regression task
            and paying for it in runtime, since B-splines are heavier to train than a plain MLP
            layer. Next, I need to confirm the ground truth of the MLP/KAN numbers (the
            parameter-matched, properly-tuned version), and only then move to the Quantum KANs.
          </p>

          <p>
            The Quantum KAN implementation will use PennyLane and JAX: replace the B-spline on each
            edge with a one-qubit variational data-reuploading circuit, then parallelize across edges
            with JAX&apos;s <code className="text-white/80">vmap</code>. PennyLane is mostly there
            to verify the quantum layer is doing what I think; the heavy lifting stays in JAX.
          </p>

          <p>
            But for now: MLPs and KANs are implemented and compared. I just have to nail the ground
            truth to confirm the data&apos;s validity, and then move on to the QKANs, the quantum
            systems, and eventually a hybrid version.
          </p>

          <hr className="border-white/20" />

          <section>
            <h2 className="text-lg font-normal mb-4">References</h2>
            <ul className="space-y-3 text-sm leading-relaxed">
              <li>
                V. Sharma, A. Padhy, L. Sen, V. J. Karanjkar, S. Behera, S. Mukherjee, A.
                Shrivastava. <em>QuIRK: Quantum-Inspired Re-uploading KAN.</em> (2025)
                arXiv:2510.08650.
              </li>
              <li>
                M. Schuld, R. Sweke, J. J. Meyer.{" "}
                <em>
                  The effect of data encoding on the expressive power of variational quantum
                  machine learning models.
                </em>{" "}
                Phys. Rev. A 103, 032430 (2021). arXiv:2008.08605.
              </li>
              <li>
                A. Pérez-Salinas et al.{" "}
                <em>Data re-uploading for a universal quantum classifier.</em> Quantum 4, 226
                (2020). arXiv:1907.02085.
              </li>
              <li>
                Z. Liu et al. <em>KAN: Kolmogorov-Arnold Networks.</em> (2024) arXiv:2404.19756.
              </li>
              <li>
                J.-C. Jiang et al.{" "}
                <em>
                  Quantum Variational Activation Functions Empower Kolmogorov-Arnold Networks.
                </em>{" "}
                (2025) arXiv:2509.14026. (DARUAN)
              </li>
              <li>
                <em>
                  QKAN-LSTM: Quantum-inspired Kolmogorov-Arnold Long Short-Term Memory.
                </em>{" "}
                (2025) arXiv:2512.05049.
              </li>
              <li>
                S.-M. Udrescu, M. Tegmark.{" "}
                <em>
                  AI Feynman: A physics-inspired method for symbolic regression.
                </em>{" "}
                Science Advances 6, eaay2631 (2020). arXiv:1905.11481. (Feynman symbolic-regression
                benchmark)
              </li>
            </ul>
          </section>
        </article>
      </div>
    </div>
  )
}
