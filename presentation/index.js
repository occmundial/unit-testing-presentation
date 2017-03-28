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
  Image
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  occ: require("../assets/occ-imagotipo.svg"),
  quick: require("../assets/quicksilver.gif")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#CC1F62",//Purple
  tertiary: "black",//Black
  quartenary: "#424242"//Gray
}, {
  primary: "Montserrat",
  secondary: "Roboto"
});

export default class Presentation extends React.Component {

  render() {
    console.log(images);
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme} progress="bar">
        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={1} textColor="primary" fit="true">Unit Testing en ReactJS</Heading>
          <Heading size={6} textColor="primary">Jose Franco</Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2} textColor="secondary">Agenda</Heading>
           <List textColor="quartenary">
            <ListItem>Introduccion</ListItem>
            <ListItem>Unit Testing</ListItem>
            <ListItem>Tecnologias</ListItem>
            <ListItem>Ejemplos</ListItem>
            <ListItem>Lecciones aprendidas</ListItem>
            <ListItem>Preguntas</ListItem>
          </List>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={1} textColor="primary" fit="true">Introduccion</Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2} textColor="secondary">Yo</Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary">
          <Image src={images.occ} height="100%" color="white"/>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2} textColor="secondary" fit margin="30px">🤔¿Porque probar?</Heading>
          <Appear fid="1">
            <Text size={5} textColor="quartenary" textAlign="left" bold margin="10px">
              ⚙️App funciona
            </Text>
          </Appear>
          <Appear fid="2">
            <Text size={5} textColor="quartenary" textAlign="left" bold margin="10px">
              👌No rompi nada
            </Text>
          </Appear>
          <Appear fid="3">
            <Text size={5} textColor="quartenary" textAlign="left" bold margin="10px">
              📖Documentacion viva
            </Text>
          </Appear>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={1} textColor="primary" fit="true">Pruebas unitarias</Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2} textColor="secondary">¿Que son?</Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2} textColor="secondary">¿Que prueban?</Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2} textColor="secondary">Mocking</Heading>
          //nelson from the simpsons image
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={1} textColor="primary" fit="true">Tecnologias</Heading>
          //O unit testing en JS
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2} textColor="secondary">¿Que necesitamos?</Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2} textColor="secondary">¿Que elegimos nosotros?</Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={1} textColor="primary" fit="true">Ejemplos</Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2} textColor="secondary">Funciones en el cliente</Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2} textColor="secondary">Reductores</Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2} textColor="secondary">Componentes</Heading>
        </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} textColor="secondary">Buscar</Heading>
            //Imagen de un boton de busqueda
            //Presionando un boton
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} textColor="secondary">Mocking del Server</Heading>
          </Slide>
            <Slide transition={["slide"]} bgColor="primary">
              <Heading size={2} textColor="secondary">Mocking del server</Heading>
              //Diagrama del servidor
            </Slide>
            <Slide transition={["slide"]} bgColor="primary">
              <Heading size={2} textColor="secondary">Mocking de la llamada</Heading>
              //Diagrama del servidor/llamada
            </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} textColor="secondary">Se ve como esperamos</Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} textColor="secondary">Modifica el estado del componente</Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} textColor="secondary">Se comporta como esperamos</Heading>
          </Slide>
        
        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={1} textColor="primary" fit="true">Experiencias</Heading>
        </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} textColor="secondary">Workflow</Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} textColor="secondary">Metricas</Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} textColor="secondary">Mandamientos</Heading>
          </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} textColor="secondary" fit="true">Preguntas</Heading>
        </Slide>

        {/*<Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>Typography</Heading>
          <Heading size={1} textColor="secondary">Heading 1</Heading>
          <Heading size={2} textColor="secondary">Heading 2</Heading>
          <Heading size={3} textColor="secondary">Heading 3</Heading>
          <Heading size={4} textColor="secondary">Heading 4</Heading>
          <Heading size={5} textColor="secondary">Heading 5</Heading>
          <Text size={6} textColor="secondary">Standard text</Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>*/}
      </Deck>
    );
  }
}
