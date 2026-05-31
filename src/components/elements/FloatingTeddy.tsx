import styled from "styled-components";
import { useEffect, useState } from "react";

const TARGET_COUNT = 40;
const LOADER_DELAY = 6000;

const FloatingTeddy = () => {
  const [count, setCount] = useState(0);
  const [startCounter, setStartCounter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartCounter(true);
    }, LOADER_DELAY);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!startCounter || count >= TARGET_COUNT) {
      return;
    }

    const timer = setTimeout(() => {
      setCount((prev) => {
        const increment = Math.max(1, Math.floor((TARGET_COUNT - prev) / 8));

        return Math.min(prev + increment, TARGET_COUNT);
      });
    }, 60);

    return () => clearTimeout(timer);
  }, [count, startCounter]);

  return (
    <StyledWrapper>
      <div className="card">
        <div className="image-container">
          <div className="floating-wrapper">
            <img
              src="/robo.png"
              alt="Floating Teddy"
              className="image"
              loading="eager"
              decoding="async"
            />

            <div
              className={`counter-card ${
                startCounter ? "opacity-100" : "opacity-0"
              } transition-opacity duration-700`}
            >
              <div className="glass-card rounded-3xl p-6 backdrop-blur-xl min-h-[100px] min-w-[200px] flex flex-col items-center justify-center text-center">
                <div className="text-4xl font-bold text-white mb-2 tracking-tight">
                  {count}
                  <span className="text-white/80">+</span>
                </div>

                <div className="text-md text-white/80">Full Stack Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .image-container {
    position: relative;
    display: inline-block;
  }

  .floating-wrapper {
    position: relative;
    display: inline-block;
    animation: move 8s ease-in-out infinite;
  }

  .image {
    width: 200px;
    height: 200px;
    z-index: 10;
    user-select: none;
    pointer-events: none;
  }

  .counter-card {
    position: absolute;
    bottom: 100%;
    left: 100%;
    transform: translate(-50%, 50%);
    z-index: 20;
  }

  .glass-card {
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
  }

  @keyframes move {
    0% {
      transform: translate3d(2em, 2em, 0);
    }

    25% {
      transform: translate3d(-1em, -1em, 0) rotate(-8deg);
    }

    50% {
      transform: translate3d(-1em, 1em, 0);
    }

    75% {
      transform: translate3d(1em, -1.25em, 0) rotate(8deg);
    }

    100% {
      transform: translate3d(2em, 2em, 0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .floating-wrapper {
      animation: none;
      transform: none;
    }
  }
`;

export default FloatingTeddy;
