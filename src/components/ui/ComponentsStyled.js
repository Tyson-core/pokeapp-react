import { css, keyframes } from "@emotion/core";
import styled from "@emotion/styled";

const resWidth = [540, 768, 992, 1200, 400];
// Animation
export const fadeIn = keyframes`
  from {
      opacity:0;
  }
  to {
      opacity:1;
  }
`
// ColorTypePoke
export const bgColor = {
  fire: "#FDDFDF",
  grass: "#DEFDE0",
  electric: "#FCF7DE",
  water: "#DEF3FD",
  ground: "#f4e7da",
  rock: "#d5d5d4",
  fairy: "#fceaff",
  poison: "#98d7a5",
  bug: "#f8d5a3",
  dragon: "#97b3e6",
  psychic: "#B7A0CA",
  flying: "#F5F5F5",
  fighting: "#E6E0D4",
  normal: "#F5F5F5",
  steel: "#B4B5B7",
  ice: "#B8F1FF",
  dark: "#D3D3D3",
  ghost: "#E2E3E9",
};
export const colorType = Object.keys(bgColor);

// MediaQuery
export const maxQ = resWidth.map((bp) => `@media (max-width: ${bp}px)`);

export const minQ = resWidth.map((bp) => `@media (min-width: ${bp}px)`);

// Component
export const NavbarUi = styled.nav((props) => ({
  padding: "6px",
  height: "7vh",
  width: "100%",
  backgroundColor: props.darkMode ? "#444444" : "#CE5C5C",
  borderBottom: "solid 4px black",
  display: "flex",
  justifyContent: "space-between",
}));

export const HomeContainer = styled.section({
  margin: "29px",
  padding: "10px",
});

export const FormSearch = styled.form({
  marginTop: "50px",
  fontSize: "12px",
});

export const Card = styled.div({
  marginTop: "30px",
  fontSize: "12px",
  display: "flex",
  border: "3px solid black",
  padding: "0.5rem 0.4rem",
  flexDirection: "column",
});

export const CardBody = styled.div({
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
});

export const ButtonSec = styled.div({
  display: "flex",
  width: "100vw",
  justifyContent: "center",
  flexFlow: "row wrap",
});

export const NextPrevBtn = styled.div({
  display: "flex",
  justifyContent: "center",
  marginTop: "10px",
});

export const SearchHelper = styled.div({
  width: "100%",
  height: "100%",
  borderBottom: "3px black solid",
  borderRight: "3px black solid",
  borderLeft: "3px black solid",
  display: "flex",
  flexDirection: "column",
});

export const SelectBtn = styled.button({
  backgroundColor: "white",
  transition: "ease-in-out all .3s",
  [`:hover`]: {
    backgroundColor: "gray",
    color: "white",
  },
  [`:focus`]: {
    outline: "none",
  },
});

// CSS

export const pInTop = css({
  display: "table",
  padding: "0px .7rem",
  margin: "-1.2rem auto 1rem",
  fontSize: "1rem",
  backgroundColor: "#fff",
});

export const cardImg = css({
  width: "200px",
  alignSelf: "center",
  justifySelf: "center",
  marginBottom: "20px",
  imageRendering: "pixelated",
});

export const exitModalBtn = css({
  width: "20px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  margin: "5px",
  height: "20px",
  position: "absolute",
  right: "0",
  top: "0",
});

export const wrongPlaceStyle = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh",
  flexDirection: "column",
});

export const compareStyleCard = css({
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  [`& div`]: {
    [maxQ[1]]: [
      {
        width: "73vw",
      },
    ],
    margin: "20px",
    width: "40vw",
    backgroundColor: "white",
  },
});

export const chartSection = css({
  display: "flex",
  justifyContent: "center",
  marginTop: "40px",
  flexDirection: "column",
});

export const chartStyleStatic = css({
  backgroundColor: "white",
  border: "3px solid black",
  color: "red",
  position: "relative",
  margin: "auto",
  height: "50vh",
  width: "80vw",
  marginBottom: "30px",
});

export const clockTop = css({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  border: "3px solid",
  transition:'.3s ease all',
  [`:hover`]:{
    boxShadow:'0px 0px 10px 0px rgba(0,0,0,0.75)'
  }
});

export const imgNavbarStyle =css({
  height: "110%",
  transition:'.1s ease all',
  [`:hover`]:{
    transform:'scale(1.1)'
  }
})
