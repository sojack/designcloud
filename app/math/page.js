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

<Script
            src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-mml-chtml.js"
        />

        <main>
            <div className="sample">When \(a \ne 0\), there are two solutions to \(ax^2 + bx + c = 0\) and they are:
                $$x = -b \pm \sqrt {`{b^2-4ac}`} \over 2a$$
            </div>
            <div className="sample">
                <h1>Taylor Series</h1>
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

        </main>
    </>
  )
}