import styled from "styled-components";

export const TypingAnimationContainer = styled.div`
  @keyframes typing {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }

  margin: 0 auto;
  padding: 20px;

  p {
    font-family: monospace;
    white-space: nowrap;
    overflow: hidden;
    width: 0;
    animation: typing 5s steps(90) infinite;
  }
`;
