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
  githubLogo: require("../assets/github.svg"),
  componentBased: require("../assets/component-based.png"),
  componentTree: require("../assets/component-tree.png")
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
        {/* REVISÃO JAVASCRIPT */}
        <Slide transition={["spin"]} bgColor="grayBg">
          <Heading size={1} fit caps lineHeight={1} textColor="white">
            Revisão JS (ES5/ES6/ES7)
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="grayBg">
          <Heading size={1} fit caps lineHeight={1} textColor="white">
            Arrow Function
          </Heading>
        </Slide>
        <Slide transition={["spin"]} bgColor="codeBg">
          <Layout>
            <Fill>
              <CodePane
                fontSize="20px"
                style={{ fontSize: "24px" }}
                lang="jsx"
                source={require("raw-loader!../assets/code/arrowFunction.example")}
              />
            </Fill>
            <Text
              style={{
                fontSize: "60px",
                color: "white",
                display: "flex",
                alignSelf: "center",
                marginRight: "30px"
              }}
            >
              =
            </Text>
            <Fill>
              <CodePane
                fontSize="20px"
                style={{ fontSize: "24px" }}
                lang="jsx"
                source={require("raw-loader!../assets/code/regularFunction.example")}
              />
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["fade"]} bgColor="grayBg">
          <Text size={3} fit lineHeight={1} textColor="white">
            Possui o this da função pai
          </Text>
          <CodePane
            fontSize="20px"
            style={{ fontSize: "24px" }}
            lang="jsx"
            source={require("raw-loader!../assets/code/arrowFunction2.example")}
          />
          <Text size={3} fit lineHeight={1} textColor="white">
            Mais concisa
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} fit lineHeight={1} textColor="white">
            .map
          </Heading>
          <List>
            <ListItem>Itera sobre um array</ListItem>
            <ListItem>Modifica cada item (através de uma função)</ListItem>
            <ListItem>Retorna um novo array</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="codeBg">
          <Layout>
            <Fill>
              <CodePane
                fontSize="20px"
                style={{ fontSize: "24px" }}
                lang="jsx"
                source={require("raw-loader!../assets/code/mapFunction.example")}
              />
            </Fill>
            <Fill>
              <CodePane
                fontSize="20px"
                style={{ fontSize: "24px" }}
                lang="jsx"
                source={require("raw-loader!../assets/code/mapFunction2.example")}
              />
            </Fill>
          </Layout>
        </Slide>
        <Slide transition={["spin"]} bgColor="tertiary">
          <Heading size={3} fit lineHeight={1} textColor="white">
            Classes
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="codeBg">
          <Layout>
            <Fill>
              <CodePane
                fontSize="20px"
                style={{ fontSize: "24px" }}
                lang="jsx"
                source={require("raw-loader!../assets/code/class.example")}
              />
            </Fill>
            <Text
              style={{
                fontSize: "60px",
                color: "white",
                display: "flex",
                alignSelf: "center",
                marginRight: "30px"
              }}
            >
              =
            </Text>
            <Fill>
              <CodePane
                fontSize="20px"
                style={{ fontSize: "24px" }}
                lang="jsx"
                source={require("raw-loader!../assets/code/class2.example")}
              />
            </Fill>
          </Layout>
        </Slide>
        {/* CONCEITOS INICIAIS */}
        <Slide transition={["fade"]} bgColor="grayBg">
          <Heading size={1} fit caps lineHeight={1} textColor="white">
            O que é React?
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="black">
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
        <Slide transition={["spin"]} bgColor="tertiary" textColor="black">
          <Image width="70%" height="625px" src={images.componentBased} />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} caps lineHeight={1}>
            Arquitetura Flux
          </Heading>
          <List>
            <ListItem>Transferência de dados unidirecional</ListItem>
            <ListItem>Dados são transferidos de pais para filhos </ListItem>
            <ListItem>Filhos não podem alterar os dados recebidos</ListItem>
            <ListItem>
              Filhos podem requisitar que os dados sejam alterados
            </ListItem>
          </List>
        </Slide>

        <Slide transition={["zoom"]} bgColor="dark">
          <Heading size={3} textColor="white" caps lineHeight={1}>
            Dados do componente - State and props
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={1} textColor="white" caps lineHeight={1}>
            State
          </Heading>
          <List>
            <Appear>
              <ListItem>State são os dados internos do componente</ListItem>
            </Appear>
            <Appear>
              <ListItem>Deve existir um estado inicial</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Apenas o próprio componente pode alterar seu estado
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Strings, numbers, booleans, objects, arrays</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={1} textColor="white" caps lineHeight={1}>
            Props
          </Heading>
          <List>
            <Appear>
              <ListItem>
                Props são os dados providos pelo componente pai ou uma store
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Não podem ser alterados</ListItem>
            </Appear>
            <Appear>
              <ListItem>
                Podem requisitar alterações através de callbacks
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Também podem ser funções</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide transition={["spin"]} bgColor="white" textColor="black">
          <Image src={images.componentTree} />
        </Slide>
      </Deck>
    );
  }
}
