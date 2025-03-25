import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Main Styling */

  body, .content {
    background-color: black;
    color: white;
    margin: 0;
  }

  main {
    view-timeline: --main;
  }

  .section {
    scroll-snap-align: start;
    scroll-snap-stop: always;
    view-timeline: --section;
    height: 100dvh;
  }

  .content {
    position: fixed;
    inset: 0;
    overflow: hidden;
    --contrast: 4;
    --blur: 0.5rem;
    animation: blink ease-in-out both;
    animation-timeline: --section;
  }

  /* Animations */
  @keyframes blink {
    0%, 100% { filter: blur(var(--blur)) contrast(var(--contrast)); opacity: 0; visibility: hidden; }
    50% { filter: blur(0) contrast(1); opacity: 1; visibility: visible; }
  }

  @keyframes horizontal-scroll {
    0% { transform: translate3d(100%, 0%, 0); }
    50% { transform: none; }
    100% { transform: translate3d(-100%, 0%, 0); }
  }

  @keyframes backwards-scroll {
    0% { transform: translate3d(0%, -100%, 0); }
    50% { transform: none; }
    100% { transform: translate3d(0%, 100%, 0); }
  }

  @keyframes zoom-scroll {
    0% { filter: blur(5rem); transform: scale(0); opacity: 0; visibility: hidden; }
    50% { filter: blur(0); transform: none; opacity: 1; visibility: visible; }
    100% { filter: blur(3rem); transform: scale(1.5); opacity: 0; visibility: hidden; }
  }

  /* Apply animation based on selected effect */
  body[data-effect="horizontal-scroll"] .content { animation-name: horizontal-scroll; }
  body[data-effect="backwards-scroll"] .content { animation-name: backwards-scroll; }
  body[data-effect="zoom-scroll"] .content { animation-name: zoom-scroll; }

  /* Navigation & Indicators */
  .site-header label {
    cursor: pointer;
    display: block;
    padding: 10px;
  }

  .indicator {
    display: flex;
    list-style: none;
    justify-content: center;
    gap: 20px;
    padding: 10px;
  }

  .indicator a {
    color: white;
    text-decoration: none;
  }
`;

const sections = [
    {
        id: "snapping",
        title: "First, we set up the snapping points",
        description:
            "We set the scrolling element to snap using `scroll-snap-type: y mandatory`.",
        image: "https://assets.codepen.io/197359/flower-white.png",
    },
    {
        id: "scrolling",
        title: "Next, we set up the scrolling animation",
        description:
            "We track the `view()` position of the sections using the named timeline `view-timeline: --section;`.",
        image: "https://assets.codepen.io/197359/flower-yellow.png",
    },
    {
        id: "layout",
        title: "Then, we position a fixed layout",
        description:
            "We set `.content` to `position: fixed`, so only one is visible at a time.",
        image: "https://assets.codepen.io/197359/flower-blue.png",
    },
    {
        id: "transition",
        title: "Finally, we create the transition effects",
        description:
            "We use `@keyframe` animations to create different effects.",
        image: "https://assets.codepen.io/197359/flower-red.png",
    },
    {
        id: "caveats",
        title: "Caveats",
        description:
            "Scrolling animations aren't available in Firefox. This layout is fragile due to `position: fixed`.",
        image: "https://assets.codepen.io/197359/flower-purple.png",
    },
];

const ScrollNapping: React.FC = () => {
    const [effect, setEffect] = useState("blink");

    // Apply effect as a data attribute on the body
    React.useEffect(() => {
        document.body.setAttribute("data-effect", effect);
    }, [effect]);

    return (
        <>
            <GlobalStyle />
            <header className="site-header">
                <h1 className="sr-only">Scrollnapping animations</h1>

                <div className="fieldset-wrapper">
                    <fieldset>
                        <legend className="sr-only">Effects</legend>
                        {["blink", "horizontal-scroll", "backwards-scroll", "zoom-scroll"].map((e) => (
                            <label key={e}>
                                <input
                                    type="radio"
                                    name="effect"
                                    value={e}
                                    checked={effect === e}
                                    onChange={() => setEffect(e)}
                                />
                                {e.replace("-", " ").toUpperCase()}
                            </label>
                        ))}
                    </fieldset>
                </div>

                <nav>
                    <ul className="indicator">
                        {sections.map((section) => (
                            <li key={section.id}>
                                <a href={`#${section.id}`}>
                                    <span className="sr-only">{section.title}</span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </header>

            <main>
                {sections.map((section) => (
                    <section id={section.id} key={section.id} className="section">
                        <div className="content">
                            <h2>{section.title}</h2>
                            <img src={section.image} alt="" />
                            <p>{section.description}</p>
                        </div>
                    </section>
                ))}
            </main>

            <footer>
                <p>That's it! 🌸</p>
            </footer>
        </>
    );
};

export default ScrollNapping;
