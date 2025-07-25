import styled from "styled-components";
import variaveis from "../../styles/variaveis";

export const Container = styled.div`
  margin-top: 100px;
  text-align: center;

  @media (max-width: 1024px) {
    margin-top: 80px;
  }

  @media (max-width: 768px) {
    margin-top: 40px;
  }

  @media (max-width: 480px) {
    margin-top: 20px;
  }
`;

export const Title = styled.h1`
  font-size: 40px;
  margin-bottom: 40px;
  color: ${variaveis.branco}
`;

export const Description = styled.p`
  font-size: 20px;
  color: ${variaveis.cinza};
  margin-bottom: 180px;

  @media (max-width: 768px) {
    margin-bottom: 60px;
  }
`;

export const CardContainer = styled.div`
  margin-top: 40px;
  margin-bottom: 40px;
  display: block;
`;

export const Cards = styled.div`
  width: 100%;
  gap: 40px;
  display: flex;
  flex-direction: column;
`;

export const CardItem = styled.div`
  border: 1px solid rgba(65, 67, 69);
  border-radius: 20px;
  background-color: rgba(65, 67, 69, 0.65);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.5);
  padding: 18px;
  margin-left: 18px;
  margin-bottom: 40px;
  text-align: left;
  line-height: 2;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    transition: transform 0.3s ease;
  }

  h3,
  p {
    color: ${variaveis.branco};
  }
  span {
    color: ${variaveis.cinza};
  }
  a {
    text-decoration: none;
    color: ${variaveis.highlightAzul};
    margin-right: 18px;
  }
`;

// export const Card = styled.div`
//   background-color: ${variaveis.preto};
//   border-radius: 16px;
//   box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
//   overflow: hidden;
//   transition: box-shadow 0.3s ease, transform 0.2s cubic-bezier(0.68, -0.55, 0.265, 1.55);
//   max-width: 320px;
//   display: flex;
//   flex-direction: column;

//   &:hover {
//     transform: translateY(-12px) scale(1.02);
//     box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3);
//   }
// `;

// export const Image = styled.img`
//   width: 100%;
//   height: 180px;
//   object-fit: cover;
// `;

// export const Content = styled.div`
//   padding: 1rem;
// `;

// export const ProjectTitle = styled.h3`
//   margin: 0 0 0.5rem;
//   font-size: 1.25rem;
//   color: ${variaveis.branco};
// `;

// export const ProjectDescription = styled.p`
//   font-size: 0.9rem;
//   color: ${variaveis.cinza};
// `;

// export const TechList = styled.div`
//   margin-top: 0.5rem;
//   display: flex;
//   flex-wrap: wrap;
//   gap: 0.5rem;

//   span {
//     background: #f0f0f0;
//     padding: 0.25rem 0.5rem;
//     border-radius: 12px;
//     font-size: 0.75rem;
//   }
// `;

// export const Button = styled.a`
//   margin-top: 1rem;
//   background-color: #0070f3;
//   color: #fff;
//   padding: 0.6rem 1rem;
//   text-align: center;
//   text-decoration: none;
//   border-radius: 8px;
//   font-weight: bold;
//   display: inline-block;
//   transition: background-color 0.3s;
//   cursor: none;

//   &:hover {
//     background-color: #0059c9;
//   }
// `;
