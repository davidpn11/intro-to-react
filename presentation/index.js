// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Appear,
  Image,
  CodePane,
  Link,
  Fill,
  Fit,
  Layout
} from "spectacle";
import CodeSlide from "spectacle-code-slide";
// Import theme
import createTheme from "spectacle/lib/themes/default";
import profile from "../assets/profile.jpg";
// Require CSS
require("normalize.css");
import "./codeSlide.css";
const images = {
  reactLogo: require("../assets/react-logo.png"),
  profile: require("../assets/profile.jpg"),
  twitterLogo: require("../assets/twitter-logo.svg"),
  githubLogo: require("../assets/github.svg")
};

const codesandboxStyle = {
  width: "100%",
  height: "70vh",
  border: 0,
  borderRadius: "4px",
  overflow: "hidden"
};

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quarternary: "#CECECE",
    grayBg: "#37474F",
    whitesmoke: "whitesmoke",
    dark: "#111",
    codeBg: "#2a2734",
    codeSlideBg: "#122b45"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);
const code = require("../assets/code/code");
export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        {/* PRESENTATION SLIDE */}
        <Slide bgColor="dark">
          <Image width="20%" src={images.reactLogo} />
          <Heading
            size={1}
            fit
            caps
            lineHeight={1}
            color="whitesmoke"
            textFont="primary"
          >
            Intro to React
          </Heading>
          {/* <Text size={2} textColor="primary">
            Ao infinito e além
          </Text>
          <Image width="20%" src={images.infinty} /> */}
        </Slide>
        {/* Slide pessoal */}
        <Slide transition={["zoom"]} bgColor="primary">
          <Layout>
            <Fill>
              <Image
                height={300}
                width={300}
                src={profile}
                fit
                size={1}
                style={{ borderRadius: "100%" }}
              />
            </Fill>
            <Fill>
              <Heading size={1} fit lineHeight={1} textColor="tertiary">
                $ whoami
              </Heading>
              <Heading size={2} fit caps lineHeight={1} textColor="secondary">
                David Nascimento
              </Heading>
              <List style={{ fontSize: "10px" }}>
                <ListItem>Take - BLiP</ListItem>
                <ListItem>Front End Dev</ListItem>
              </List>
            </Fill>
          </Layout>
          <Link href="https://github.com/davidpn11" target="_blank">
            <Text textColor="accent" style={{ textAlign: "center" }}>
              <Image
                src={images.githubLogo}
                style={{ height: 50, margin: "0 0 10 0" }}
              />
              @davidpn11
            </Text>
          </Link>
        </Slide>
        <Slide transition={["fade"]} bgColor="grayBg">
          <Heading size={1} fit caps lineHeight={1} textColor="white">
            O que é React?
          </Heading>
        </Slide>
        {/* CONCEITOS INICIAIS */}
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} caps lineHeight={1}>
            Framework JS
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} caps lineHeight={1}>
            Component Based
          </Heading>
          <List>
            <ListItem>Pedaços do seu app</ListItem>
            <ListItem>Focado em funcionalidades específicas</ListItem>
            <ListItem>Atomic Design</ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} caps lineHeight={1}>
            Dados
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} caps lineHeight={1}>
            Transferência de dados unidirecional (Flux)
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
