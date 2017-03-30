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
  occ: require("../assets/occ.png"),
  quick: require("../assets/quicksilver.gif"),
  slow: require("../assets/sloth.gif"),
  react: require("../assets/react.svg"),
  nelson: require("../assets/nelson.gif"),
  assert: require("../assets/assert.gif"),
  runner: require("../assets/runner.gif"),
  lego: require("../assets/lego.png"),
  wall: require("../assets/wall.jpg"),
  search: require("../assets/search.png"),
  learning: require("../assets/learning.gif"), 
  enzyme: require("../assets/enzyme.jpg"),
  karma: require("../assets/karma.svg"),
  jasmine: require("../assets/jasmine.png"),
  mocha: require("../assets/mocha.svg"),
  chai: require("../assets/chai.png"),
  sinon: require("../assets/sinon.png")
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
            <ListItem>Introducción</ListItem>
            <ListItem>Unit Testing</ListItem>
            <ListItem>Tecnologias</ListItem>
            <ListItem>Ejemplos</ListItem>
            <ListItem>Experiencias</ListItem>
            <ListItem>Preguntas</ListItem>
          </List>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={1} textColor="primary" fit="true">Introducción</Heading>
        </Slide>
        
        <Slide transition={["slide"]} bgColor="primary" notes="*Estaba trabajando en una empresa gigante/lenta. <br/> *Deseaba regresar desarrollo web/veloz">
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

        <Slide transition={["slide"]} bgColor="primary" notes="*Contratado en OCC <br/>*Ocupamos tecnologias nuevas <br/>*Nuevos sitios en React <br/>*Arquitecto front end <br/>*Buenas practicas <br/>*Primer tarea => Pruebas">
          <Image src={images.occ.replace("/","")} height="150%"/>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" notes="*Mejor practica preguntarse <br/> *No solo hacer por hacer <br/> *Muchas razones, solo muestro algunas <br/>*Desarrollo rapido <br/>*On-boarding rapido <br/>*Entender mejor codigo">
          <Heading size={2} textColor="secondary" margin="30px" fit>🤔¿Por qué probar?</Heading>
          <Appear fid="1">
            <Text size={5} textColor="quartenary" textAlign="left" bold margin="10px">
              ⚙️App funciona
            </Text>
          </Appear>
          <Appear fid="2">
            <Text size={5} textColor="quartenary" textAlign="left" bold margin="10px">
              👌No rompí nada
            </Text>
          </Appear>
          <Appear fid="3">
            <Text size={5} textColor="quartenary" textAlign="left" bold margin="10px">
              📖Documentación viva
            </Text>
          </Appear>
        </Slide>

        <Slide transition={["slide"]} bgColor="secondary">
          <Heading size={1} textColor="primary" fit="true">Pruebas unitarias</Heading>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary" notes="*Hay muchos tipos de pruebas <br/> *Integracion <br/> *Regresion <br/> *Sanity/Smoke <br/> *Unitarias => Excelente punto de inicio <br/>">
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
          <Heading size={1} textColor="primary" fit="true">¿Qué prueban?</Heading>
        </Slide>

        <CodeSlide
          notes="**ESTA ES LA PRIMERA VEZ QUE ESTAS ENSEÑANDO CODIGO EN PANTALLA**<BR/>**EXPLICA BREVEMENTE SINTAXIS** <br/> 1: Funcion it, estandar testing en JS <br/> 2.Guardar resultado <br/> 3. ESPERAMOS que el RESULTADO SEA IGUAL a ARGUMENTO"
          transition={[]}
          lang="javascript"
          code={require("raw-loader!../assets/returnValue.example")}
          ranges={[
            { loc: [0, 1], title:"Regresa el valor esperado" },
            { loc: [3, 4] },
            { loc: [4, 5] }
          ]}/>

          <CodeSlide
            notes = "1. <br/> 2. Crear un componente con ciertas propiedades <br/> 3.Esperamos que el estado interno sea X"
            transition={[]}
            lang="javascript"
            code={require("raw-loader!../assets/internalState.example")}
            ranges={[
              { loc: [0, 1], title:"Modifica el estado" },
              { loc: [4, 5] },
              { loc: [6, 7] }
            ]}/>

          <CodeSlide
            notes = "1. <br/> 2. Crear un componente <br/> 3.Esperamos que haya hecho una llamada asincrona al montarse"
            transition={[]}
            lang="javascript"
            code={require("raw-loader!../assets/behavior.example")}
            ranges={[
              { loc: [0, 1], title:"Actua como esperamos" },
              { loc: [5, 6] },
              { loc: [7, 8] }
            ]}/>

        <Slide transition={["slide"]} bgColor="primary" notes="Stub / Spy">
          <Heading size={2} textColor="secondary">Mocking</Heading>
          <Image src={images.nelson.replace("/","")} width="75%"/>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary"
        notes = "*Cuando lo vamos a ocupar<br/> 1. Funcion llama otra <br/> 2. Componente tiene un hijo <br/> 3.Cliente llama al servidor <br/> *Estamos isolando <br/> *Probando solo la izquierda <br/> *Recuerden la definicion de Unit Testing">
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
            notes = "*Retomando el ultimo ejemplo de slide anterior <br/>"
            transition={[]}
            lang="javascript"
            code={require("raw-loader!../assets/behavior.example")}
            ranges={[
              { loc: [1, 4], title:"Sustituir la llamada" }
            ]}/>

        <CodeSlide
            notes = "*Asumimos que el servidor va a responder bien <br/> *Otro equipo se encarga de eso <br/> *Tampoco podemos esperar a que responda <br/> *Ni sabemos donde se correra nuestra prueba, container/docker"
            transition={[]}
            lang="javascript"
            code={require("raw-loader!../assets/moxios.example")}
            ranges={[
              { loc: [3, 4], title:"Sustituir al servidor" }
            ]}/>

        <Slide transition={["slide"]} bgColor="secondary" notes="O unit testing en JS">
          <Heading size={1} textColor="primary" fit="true">Tecnologias</Heading>
        </Slide>

         <Slide transition={["slide"]} bgColor="primary"
         notes = "*Runner: <br/> -Identificar tests <br/>-Correrlos <br/> -Regresarnos los resultados<br/><br/>*Assert <br/> -Compara resultados con valores esperados <br/> -Sintaxis de igualdad <br/> -Mas flexible que ===<br/><br/>*Mock: <br/> -Sustituir nuestras dependencias <br/>-Probar el comportamiento <br/> -Espias">
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

        <Slide transition={["slide"]} bgColor="primary"
        notes = "*Mocha + maduro <br/> *Chai va de la mano de mocha <br/> *Sinon puede mockear servers <br/> *Jest es de facebook, no confundir con test-utils <br/> *Jest era 'fork' de Jasmime <br/> *Karma corre javascript en el browser. Aunque no es un problema si ocupas node y chrome porque tienen el mismo engine">
          <Layout>
            <Table>
              <TableHeader>
                <TableItem/>
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
                    <Image src={images.mocha} height="50px"/>
                  </TableItem>
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
                    <Image src={images.chai.replace("/","")} height="50px"/>
                  </TableItem>
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
                    <Image src={images.sinon.replace("/","")} height="50px"/>
                  </TableItem>
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
                    <Text size={6} textColor="quartenary" textAlign="center" bold margin="10px">🃏</Text>
                  </TableItem>
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
                    <Image src={images.jasmine.replace("/","")} height="50px"/>
                  </TableItem>
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
                    <Image src={images.karma} width="75px"/>
                  </TableItem>
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

        <Slide transition={["slide"]} bgColor="primary"
          notes="*Debate de build it yourself O todo completo <br/> *Enzyme nos da un DOM virtual y es semi-mocker con shallow <br/> *Istambul nos da reportes de cobertura">
          <Heading size={2} textColor="secondary" fit>¿Qué ocupamos nosotros?</Heading>
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
                    <Appear fid="2">
                        <Image src={images.wall.replace("/","")} width="200px"/>
                    </Appear>
                    <Appear fid="2">
                      <Text size={5} textColor="quartenary" textAlign="center" bold margin="10px">Jest</Text>
                    </Appear>
                  </TableItem>
                </TableRow>
                <TableRow>
                  <TableItem>
                    <Appear fid="3">
                        <Image src={images.enzyme.replace("/","")} width="200px"/>
                    </Appear>
                    <Appear fid="3">
                      <Text size={5} textColor="quartenary" textAlign="center" bold margin="10px">Enzyme</Text>
                    </Appear>
                  </TableItem>
                  <TableItem>
                    <Appear fid="4">
                      <Text size={5} textColor="quartenary" textAlign="center" bold margin="10px">Istanbul</Text>
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
          notes="*Podemos y DEBEMOS probar plain old JS <br/> **2 lineas de codigo"
          transition={[]}
          lang="javascript"
          code={require("raw-loader!../assets/clientFunction.example")}
          ranges={[
            { loc: [0, 1], title:"Función en el cliente" },
            { loc: [1, 2] }
          ]}/>

          <CodeSlide
          notes="*Si tienes redux <br/> Funciones puras como el cliente<br/> <br/> **2 lineas de codigo"
          transition={[]}
          lang="javascript"
          code={require("raw-loader!../assets/reducer.example")}
          ranges={[
            { loc: [0, 1], title:"Reductores" },
            { loc: [13, 14] }
          ]}/>

        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={2} textColor="secondary" fit>Componentes</Heading>
        </Slide>
         
         <CodeSlide
          notes="*Esto es Jest. Snapshots.<br/> <br/> **8 lineas de codigo"
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
          notes="**6 lineas de codigo"
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
           notes="*Ejemplo de espia <br/> <br/>**6 lineas de codigo"
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
            <Heading size={2} textColor="secondary">Iniciando</Heading>
            <Layout>
            <Table>
              <TableBody>
                <TableItem>
                    <Image src={images.learning.replace("/","")} width="75%"/>
                </TableItem>
                <TableItem>
                  <Appear fid="1">
                    <Text size={5} textColor="quartenary" textAlign="left" bold margin="10px">-Cualquier framework es bueno</Text>
                  </Appear>
                   <Appear fid="2">
                    <Text size={5} textColor="quartenary" textAlign="left" bold margin="10px">-Empieza probando solo JS</Text>
                  </Appear>
                  <Appear fid="3">
                    <Text size={5} textColor="quartenary" textAlign="left" bold margin="10px">-Sigue con "dumb" components</Text>
                  </Appear>
                  <Appear fid="4">
                    <Text size={5} textColor="quartenary" textAlign="left" bold margin="10px">-Deja las pruebas asincronas al final</Text>
                  </Appear>
                  <Appear fid="5">
                    <Text size={5} textColor="quartenary" textAlign="left" bold margin="10px">-Es normal que el código de prueba sea largo</Text>
                  </Appear>
                </TableItem>
              </TableBody>
            </Table>
          </Layout>
          </Slide>
                    
          <Slide transition={["slide"]} bgColor="primary">
            <Heading size={2} textColor="secondary" fit="true">Mandamientos</Heading>
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
                    <Text size={6} textColor="quartenary" textAlign="left" bold margin="5px">6. Tu cobertura NUNCA será 100%</Text>
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
          <Heading size={6} textColor="quartenary" fit="true">github.com/occmundial/unit-testing-presentation</Heading>
        </Slide>
      </Deck>
    );
  }
}
