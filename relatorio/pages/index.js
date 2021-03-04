import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

import db from '../db.json';
import Button from '../src/components/Button';
import Container from '../src/components/Container';
import PageBackground from '../src/components/PageBackground';
import Logo from '../src/components/QuizLogo';
import Widget from '../src/components/Widget'; 
import Input from '../src/components/Input';

const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`;

/*
<Input
  type='string'
  name="nomeDoUsuario"
  onChange={(infosDoEvento) => setName(infosDoEvento.target.value)}
  placeholder="Diz ai seu nome"
  value={name}
/>
<Input
  type="date"
  name="dataNascimento"
  onChange={(data) => setDate(data.target.value)}
  placeholder="Qual sua data de nascimento"
  value={data}
/>
*/
export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  //const [data, setDate] = React.useState('');
  const [qtde, setQtde] = React.useState(0);

  return (
      <PageBackground backgroundImage={db.bg}>
        <Head>
          <title>
            {db.title}
          </title>
        </Head>
        <Container>
          <Logo />
          <Widget
          as={motion.section}
          transition={{ delay: 0, duration: 1}}
          variants={{
            show: { opacity: 1, y: '0'},
            hidden: { opacity: 0, y: '100%' },
          }}

          initial="hidden"
          animate="show"
          >
            <Widget.Header>
              <h1>{db.title}</h1>
            </Widget.Header>
            <Widget.Content id="container">
              <p>{"Quantas notas tem o relatorio"}</p>
              <form onSubmit={function (infosDoEvento){
                infosDoEvento.preventDefault();
              }}>
                <Input
                    type="number"
                    name="quantidade de linhas"
                    onChange={(qtde) => setQtde(qtde.target.value)}
                    placeholder=" "
                    value={qtde}
                    id = "botao"
                  />
                <Button type="submit" disabled={qtde == 0} onClick= {function(){
                  var row;
                  const c = window.document.getElementById("container");
                  let qtdeB = window.document.getElementById("botao").value;
                  window.console.log(qtdeB);
                  for(let i= 0; i<qtdeB; i++){
                    row = row+"<Input type = 'text'/>"
                  }
                  
                  }
                }>
                  {`Gerar relatorio com ${qtde} linhas`}
                </Button>
              </form>
                
            </Widget.Content>
          </Widget>
        </Container>
      </PageBackground>
  );
}


