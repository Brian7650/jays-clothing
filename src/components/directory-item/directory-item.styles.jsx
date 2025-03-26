import styled from 'styled-components';

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: ${({ $imageUrl }) => `url(${$imageUrl})`};
  will-change: transform;
  transition: transform 0.5s ease-out;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const Body = styled.div`
  height: 120px;
  padding: 0 25px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  background-color: white;
  opacity: 0.7;
  position: absolute;
  transition: opacity 0.3s ease-out;
  will-change: opacity;

  h2 {
    font-weight: bold;
    margin: 0 6px 0;
    font-size: clamp(18px, 2vw, 22px);
    color: #4a4a4a;
    text-transform: uppercase;
    text-align: center;
  }

  p {
    font-weight: lighter;
    font-size: clamp(14px, 1.5vw, 16px);
  }

  @media (prefers-reduced-motion: reduce) {
    transition: none;
  }
`;

export const DirectoryItemContainer = styled.div`
  min-width: 30%;
  height: 240px;
  flex: 1 1 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  margin: 0 7.5px 15px;
  overflow: hidden;
  position: relative;
  
  &:focus-within {
    outline: 2px solid #4a90e2;
    outline-offset: 2px;
  }

  &:hover {
    cursor: pointer;

    ${BackgroundImage} {
      transform: scale(1.1);
      transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
    }

    ${Body} {
      opacity: 0.9;
    }
  }

  @media (max-width: 768px) {
    min-width: 45%;
    height: 200px;
  }

  @media (max-width: 480px) {
    min-width: 100%;
    height: 180px;
    margin: 0 0 10px;
  }

  &:first-child {
    margin-right: 7.5px;

    @media (max-width: 480px) {
      margin-right: 0;
    }
  }

  &:last-child {
    margin-left: 7.5px;

    @media (max-width: 480px) {
      margin-left: 0;
    }
  }
`;