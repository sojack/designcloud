import Script from 'next/script';
// import MathJax from '../components/mathjax'
import './styles.css'

export const metadata = {
    title: 'Math Typesetting',
    description: 'Digital math typesetting',
    }


export default function Home() {
  const content = '...' // enter original content here

  return (
    <>

        <Script  src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"  />

        <h2>Euler's Identity</h2>

        <p>Euler's identity is often called the most beautiful equation in mathematics. It relates five fundamental mathematical constants: \(e, \pi, 
i \) (the imaginary unit), 1, and 0, using addition, multiplication, exponentiation, and equality.</p>
        $$e^{`{`}i\pi{`}`} + 1 = 0$$

        <h2>Quadratic Equation</h2>
        <p>When \(a \ne 0\), there are two solutions to \(ax^2 + bx + c = 0\) and they are:</p>
            $$x = -b \pm \sqrt {`{b^2-4ac}`} \over 2a$$
        <h2>Navier-Stokes Equation</h2>
        <p>The Navier-Stokes equation is a set of nonlinear partial differential equations that describe the motion of fluid substances. It's used extensively in fluid dynamics to model phenomena such as airflow around an airplane wing or ocean currents.</p>

            $$

            \frac{`{`}\partial \mathbf{`{`}v{`}`}{`}`}  {`{`}\partial t{`}`} + (\mathbf{`{`}v{`}`} \cdot \nabla) \mathbf{`{`}v{`}`} = -\frac{`{`}\nabla p{`}`}{`{`}\rho{`}`} + \nu \nabla^2 \mathbf{`{`}v{`}`}


            $$

        <main>
            
            <div className="sample">
                <h2>Taylor Series</h2>
                    $$
                    P(x) = \color{`{teal}`}{`{f(0)}`} + \color{`{blue}`} \frac{`{df}`}{`{dx}`}(0)\frac{`{x^1}`}{`{1!}`}
                    + \color{`{green}`} \frac{`{d^2f}`}{`{dx^2}`}(0) \frac{`{x^2}`}{`{2!}`}
                    + \color{`{red}`} \frac{`{d^3f}`}{`{dx^3}`}(0)\frac{`{x^3}`}{`{3!}`}
                    +…
                    $$
            </div>

            <div className="sample">

                \begin{`{equation}`}
                \lim_{`{`}m\to \infty{`}`}\;\lim_{`{`}n\to \infty {`}`}\cos^{`{2n}`}(m!\pi x) = \cases{`{`}1: &$x$ is rational \\0: &$x$ is irrational{`}`}
                \end{`{equation}`}
                
                $$(8+1)^2=81$$
                
                $$\pi=2i\log\frac{`{1-i}`}{`{1+1}`}$$
                
                
                \begin{`{equation}`}
                \int_0^\infty \frac{`{x^3}`}{`{e^x-1}`}\,dx = \frac{`{`}\pi^4{`}`}{`{15}`}
                \label{`{`}eq:sample{`}`}
                \end{`{equation}`}
            
            </div>

            <div  className="sample">

                <h2>Standard Deviation</h2>
            $$\sigma = \sqrt{`{`} \frac{`{`}1{`}`}{`{`}N{`}`} \sum_{`{`}i=1{`}`}^N (x_i -\mu)^2{`}`}$$

            </div>

        </main>
    </>
  )
}