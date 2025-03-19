import React from 'react';
import styled from 'styled-components';

const FloatingTeddy = () => {
    return (
        <StyledWrapper>
            <div className="card">
                <img src="/robo.png" alt="" className="image" />
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  /* HOLD THE ASTRONAUT */

  .card img {
    width: 200px;
    height: 200px;
    margin-right: 1em;
    animation: move 6s ease-in-out infinite;
    z-index: 50;
  }

  .image:hover {
    cursor: -webkit-grab;
    cursor: grab;
  }

  @keyframes move {
    0% {
      transform: translateX(2em) translateY(2em);
    }
    25% {
      transform: translateY(-1em) translateX(-1em);
      rotate: -10deg;
    }
    50% {
      transform: translateY(1em) translateX(-1em);
    }
    75% {
      transform: translateY(-1.25em) translateX(1em);
      rotate: 10deg;
    }
    100% {
      transform: translateX(2em) translateY(2em);
    }
  }
`;

export default FloatingTeddy;
