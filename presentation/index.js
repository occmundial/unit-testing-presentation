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
  Layout, TableBody, TableHeader, TableHeaderItem, TableItem, TableRow, Table,
} from "spectacle";

import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const images = {
  occ: require("../assets/occ-imagotipo.svg"),
  quick: require("../assets/quicksilver.gif"),
  slow: require("../assets/sloth.gif"),
  react: require("../assets/react.svg"),
  nelson: require("../assets/nelson.gif"),
  assert: require("../assets/assert.gif"),
  runner: require("../assets/runner.gif"),
  lego: require("../assets/lego.png"),
  wall: require("../assets/wall.jpg"),
  search: require("../assets/search.png"),
  learning: require("../assets/learning.gif")
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
      <Deck transition={[]} transitionDuration={500} theme={theme} progress="bar">
        
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
          <Layout>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHeaderItem><Heading size={2} textColor="secondary">Yo</Heading></TableHeaderItem>                  
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableItem>
                  <Appear fid="1">
                    <Image src={images.slow.replace("/","")} width="75%"/>
                  </Appear>
                </TableItem>
                <TableItem>
                  <Appear fid="2">
                    <Image src={images.quick.replace("/","")} width="75%"/>
                  </Appear>
                </TableItem>
              </TableBody>
            </Table>
          </Layout>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <Image src={images.occ} height="100%"/>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2} textColor="secondary" margin="30px">🤔¿Porque probar?</Heading>
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
          <Heading size={2} textColor="secondary" margin="30px">¿Qué son?</Heading>
          <Appear fid="1">
            <Text size={5} textColor="quartenary" textAlign="left" bold margin="10px">
              - Tomamos la parte más chica del código 
            </Text>
          </Appear>
          <Appear fid="2">
            <Text size={5} textColor="quartenary" textAlign="left" bold margin="10px">
            - React => componentes
            </Text>
          </Appear>
          <Appear fid="3">
            <Text size={5} textColor="quartenary" textAlign="left" bold margin="10px">
              - Y probamos que funcione
            </Text>
          </Appear>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={1} textColor="primary" fit="true">¿Que prueban?</Heading>
        </Slide>

        <CodeSlide
          transition={[]}
          lang="javascript"
          code={require("raw-loader!../assets/returnValue.example")}
          ranges={[
            { loc: [0, 1], title:"Regresa el valor esperado" },
            { loc: [3, 4] },
            { loc: [4, 5] }
          ]}/>

          <CodeSlide
            transition={[]}
            lang="javascript"
            code={require("raw-loader!../assets/internalState.example")}
            ranges={[
              { loc: [0, 1], title:"Modifica el estado" },
              { loc: [4, 5] },
              { loc: [6, 7] }
            ]}/>

          <CodeSlide
            transition={[]}
            lang="javascript"
            code={require("raw-loader!../assets/behavior.example")}
            ranges={[
              { loc: [0, 1], title:"Actua como esperamos" },
              { loc: [5, 6] },
              { loc: [7, 8] }
            ]}/>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2} textColor="secondary">Mocking</Heading>
          <Image src={images.nelson.replace("/","")} width="75%"/>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2} textColor="secondary" margin="30px">Mocking</Heading>
          <Layout>
            <Table>
              <TableBody>
                 <TableRow>
                  <TableItem>
                    <Appear fid="1">
                      <Text size={5} textColor="quartenary" textAlign="left" bold margin="10px">
                        {"function(){}"}
                      </Text>
                    </Appear>
                  </TableItem>
                  <TableItem>
                    <Appear fid="2">
                      <Text size={5} textColor="quartenary" textAlign="left" bold margin="10px">
                        =>
                      </Text>
                    </Appear>
                  </TableItem>
                  <TableItem>
                    <Appear fid="2">
                      <Text size={5} textColor="quartenary" textAlign="left" bold margin="10px">
                        {"function(){}"}
                      </Text>
                    </Appear>
                  </TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>
                    <Appear fid="1">
                      <Text size={5} textColor="quartenary" textAlign="left" bold margin="10px">
                        {"<Job List/>"}
                      </Text>
                    </Appear>
                  </TableItem>
                  <TableItem>
                    <Appear fid="2">
                      <Text size={5} textColor="quartenary" textAlign="left" bold margin="10px">
                        =>
                      </Text>
                    </Appear>
                  </TableItem>
                  <TableItem>
                    <Appear fid="2">
                      <Text size={5} textColor="quartenary" textAlign="left" bold margin="10px">
                        {"<Job Description/>"}
                      </Text>
                    </Appear>
                  </TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>
                    <Appear fid="1">
                      <Text size={5} textColor="quartenary" textAlign="left" bold margin="10px">
                        📱
                      </Text>
                    </Appear>
                  </TableItem>
                  <TableItem>
                    <Appear fid="2">
                      <Text size={5} textColor="quartenary" textAlign="left" bold margin="10px">
                        =>
                      </Text>
                    </Appear>
                  </TableItem>
                  <TableItem>
                    <Appear fid="2">
                      <Text size={5} textColor="quartenary" textAlign="left" bold margin="10px">
                        🖥️
                      </Text>
                    </Appear>
                  </TableItem>
                </TableRow>
              </TableBody>
            </Table>
          </Layout>
        </Slide>

        <CodeSlide
            transition={[]}
            lang="javascript"
            code={require("raw-loader!../assets/behavior.example")}
            ranges={[
              { loc: [1, 4], title:"Sustituir la llamada" }
            ]}/>

        <CodeSlide
            transition={[]}
            lang="javascript"
            code={require("raw-loader!../assets/moxios.example")}
            ranges={[
              { loc: [3, 4], title:"Sustituir al servidor" }
            ]}/>

        <Slide transition={["slide"]} bgColor="secondary" notes="O unit testing en JS">
          <Heading size={1} textColor="primary" fit="true">Tecnologias</Heading>
        </Slide>

         <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2} textColor="secondary" margin="30px" fit>¿Qué necesitamos?</Heading>
          <Layout>
            <Table>
              <TableBody>
                <TableRow>
                  <TableItem>
                    <Appear fid="1">
                        <Image src={images.runner.replace("/","")} width="200px"/>
                    </Appear>
                    <Appear fid="1">
                      <Text size={5} textColor="quartenary" textAlign="center" bold margin="10px">Run</Text>
                    </Appear>
                  </TableItem>
                  <TableItem>
                    <Appear fid="2">
                        <Image src={images.assert.replace("/","")} width="200px"/>
                    </Appear>
                    <Appear fid="2">
                      <Text size={5} textColor="quartenary" textAlign="center" bold margin="10px">Assert</Text>
                    </Appear>
                  </TableItem>
                  <TableItem>
                    <Appear fid="3">
                        <Image src={images.nelson.replace("/","")} width="200px"/>
                    </Appear>
                    <Appear fid="1">
                      <Text size={5} textColor="quartenary" textAlign="center" bold margin="10px">Mock</Text>
                    </Appear>
                  </TableItem>
                </TableRow>
              </TableBody>
            </Table>
          </Layout>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Layout>
            <Table>
              <TableHeader>
                <TableItem/>
                <TableItem>
                  <Text size={5} textColor="secondary" textAlign="center" bold margin="20px">Run</Text>
                </TableItem>
                <TableItem>
                  <Text size={5} textColor="secondary" textAlign="center" bold margin="20px">Assert</Text>
                </TableItem>
                <TableItem>
                  <Text size={5} textColor="secondary" textAlign="center" bold margin="20px">Mock</Text>
                </TableItem>
              </TableHeader>              
              <TableBody>
                <TableRow>
                  <TableItem>
                    <Text size={6} textColor="quartenary" textAlign="center" bold margin="10px">Mocha</Text>
                  </TableItem>
                  <TableItem>
                    <Text size={6} textColor="secondary" textAlign="center" bold margin="10px">✓</Text>
                  </TableItem>
                  <TableItem/>
                  <TableItem/>
                </TableRow>
                <TableRow>
                  <TableItem>
                    <Text size={6} textColor="quartenary" textAlign="center" bold margin="10px">Chai</Text>
                  </TableItem>
                  <TableItem/>
                  <TableItem>
                    <Text size={6} textColor="secondary" textAlign="center" bold margin="10px">✓</Text>
                  </TableItem>
                  <TableItem/>
                </TableRow>
                <TableRow>
                  <TableItem>
                    <Text size={6} textColor="quartenary" textAlign="center" bold margin="10px">Sinon</Text>
                  </TableItem>
                  <TableItem/>
                  <TableItem/>
                  <TableItem>
                    <Text size={6} textColor="secondary" textAlign="center" bold margin="10px">✓</Text>
                  </TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>
                    <Text size={6} textColor="quartenary" textAlign="center" bold margin="10px">Jest</Text>
                  </TableItem>
                  <TableItem>
                    <Text size={6} textColor="secondary" textAlign="center" bold margin="10px">✓</Text>
                  </TableItem>
                  <TableItem>
                    <Text size={6} textColor="secondary" textAlign="center" bold margin="10px">✓</Text>
                  </TableItem>
                  <TableItem>
                    <Text size={6} textColor="secondary" textAlign="center" bold margin="10px">✓</Text>
                  </TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>
                    <Text size={6} textColor="quartenary" textAlign="center" bold margin="10px">Jasmine</Text>
                  </TableItem>
                  <TableItem>
                    <Text size={6} textColor="secondary" textAlign="center" bold margin="10px">✓</Text>
                  </TableItem>
                  <TableItem>
                    <Text size={6} textColor="secondary" textAlign="center" bold margin="10px">✓</Text>
                  </TableItem>
                  <TableItem>
                    <Text size={6} textColor="secondary" textAlign="center" bold margin="10px">✓</Text>
                  </TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>
                    <Text size={6} textColor="quartenary" textAlign="center" bold margin="10px">Karma</Text>
                  </TableItem>
                  <TableItem>
                    <Text size={6} textColor="secondary" textAlign="center" bold margin="10px">✓</Text>
                  </TableItem>
                  <TableItem/>
                  <TableItem/>
                </TableRow>
              </TableBody>
            </Table>
          </Layout>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2} textColor="secondary" fit>¿Que ocupamos nosotros?</Heading>
          <Layout>
            <Table>
              <TableBody>
                <TableRow>
                  <TableItem>
                    <Appear fid="1">
                        <Image src={images.lego.replace("/","")} width="200px"/>
                    </Appear>
                    <Appear fid="1">
                      <Text size={5} textColor="quartenary" textAlign="center" bold margin="10px">Mocha + Chai + Sinon</Text>
                    </Appear>
                  </TableItem>
                  <TableItem>
                    <Appear fid="1">
                        <Image src={images.wall.replace("/","")} width="200px"/>
                    </Appear>
                    <Appear fid="1">
                      <Text size={5} textColor="quartenary" textAlign="center" bold margin="10px">Jest</Text>
                    </Appear>
                  </TableItem>
                </TableRow>
              </TableBody>
            </Table>
          </Layout>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={1} textColor="primary" fit="true">Ejemplos</Heading>
        </Slide>

        <CodeSlide
          transition={[]}
          lang="javascript"
          code={require("raw-loader!../assets/clientFunction.example")}
          ranges={[
            { loc: [0, 1], title:"Funcion en el cliente" },
            { loc: [6, 9] }
          ]}/>

          <CodeSlide
          transition={[]}
          lang="javascript"
          code={require("raw-loader!../assets/reducer.example")}
          ranges={[
            { loc: [0, 1], title:"Reductores" },
            { loc: [19, 23] }
          ]}/>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2} textColor="secondary" fit>Componentes</Heading>
        </Slide>
         
         <CodeSlide
          transition={[]}
          lang="javascript"
          code={require("raw-loader!../assets/snapshot.example")}
          ranges={[
            { loc: [0, 1], title:"Se ve como esperamos" },
            { loc: [4, 5] },
            { loc: [7, 8] },
            { loc: [8, 9] },
            { loc: [23, 24] },
            { loc: [26, 27] },
            { loc: [27, 28] },
            { loc: [28, 29] },
          ]}/>

          <CodeSlide
          transition={[]}
          lang="javascript"
          code={require("raw-loader!../assets/state.example")}
          ranges={[
            { loc: [0, 1], title:"Modifica el estado interno" },
            { loc: [5, 9] },
            { loc: [11, 12] },
            { loc: [16, 17] },
            { loc: [17, 18] },
            { loc: [18, 19] }
          ]}/>

           <CodeSlide
          transition={[]}
          lang="javascript"
          code={require("raw-loader!../assets/callsFunction.example")}
          ranges={[
            { loc: [0, 1], title:"Actua como esperamos" },
            { loc: [1, 2] },
            { loc: [6, 10] },
            { loc: [11, 12] },
            { loc: [12, 13] },
            { loc: [13, 14] }
          ]}/>
          
        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={1} textColor="primary" fit="true">Experiencias</Heading>
        </Slide>
          
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} textColor="secondary">Aprendizaje</Heading>
            <Layout>
            <Table>
              <TableBody>
                <TableItem>
                    <Image src={images.learning.replace("/","")} width="75%"/>
                </TableItem>
                <TableItem>
                  <Appear fid="1">
                    <Text size={5} textColor="quartenary" textAlign="left" bold margin="10px">- No es fácil</Text>
                  </Appear>
                   <Appear fid="2">
                    <Text size={5} textColor="quartenary" textAlign="left" bold margin="10px">- Es tardado</Text>
                  </Appear>
                  <Appear fid="3">
                    <Text size={5} textColor="quartenary" textAlign="left" bold margin="10px">- Es una inversion</Text>
                  </Appear>
                </TableItem>
              </TableBody>
            </Table>
          </Layout>
          </Slide>
                    
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} textColor="secondary">Mandamientos</Heading>
                  <Appear fid="1">
                    <Text size={10} textColor="quartenary" textAlign="left" bold margin="5px">1. Feature nueva = Prueba</Text>
                  </Appear>
                   <Appear fid="2">
                    <Text size={6} textColor="quartenary" textAlign="left" bold margin="5px">2. Agrega tiempo para probar</Text>
                  </Appear>
                  <Appear fid="3">
                    <Text size={6} textColor="quartenary" textAlign="left" bold margin="5px">3. Un componente = Un archivo</Text>
                  </Appear>
                  <Appear fid="4">
                    <Text size={6} textColor="quartenary" textAlign="left" bold margin="5px">4. Exporta solo un componente</Text>
                  </Appear>
                  <Appear fid="5">
                    <Text size={6} textColor="quartenary" textAlign="left" bold margin="5px">5. "Mockea" TODO</Text>
                  </Appear>
                  <Appear fid="6">
                    <Text size={6} textColor="quartenary" textAlign="left" bold margin="5px">6. Tu cobertura NUNCA sera 100%</Text>
                  </Appear>
                  <Appear fid="7">
                    <Text size={6} textColor="quartenary" textAlign="left" bold margin="5px">7. Prueba features criticas primero</Text>
                  </Appear>
                  <Appear fid="8">
                    <Text size={6} textColor="quartenary" textAlign="left" bold margin="5px">8. Prueba tus limites</Text>
                  </Appear>
                  <Appear fid="9">
                    <Text size={6} textColor="quartenary" textAlign="left" bold margin="5px">9. JAMAS hagas commit si pruebas fallan</Text>
                  </Appear>
                  <Appear fid="10">
                    <Text size={6} textColor="quartenary" textAlign="left" bold margin="5px">10. Sigue probando a manita</Text>
                  </Appear>
          </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={1} textColor="primary" fit="true">Preguntas</Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} textColor="secondary" fit="true">👏¡Gracias!</Heading>
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
