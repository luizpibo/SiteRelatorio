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


export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  const [data, setDate] = React.useState('');
  const [qtde, setQtde] = React.useState('');

  return (
      <PageBackground>
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
            <Widget.Content>
              <p>{db.description}</p>
              <form onSubmit={function (infoDoEvento){
                infosDoEvento.preventDefault();
                router.push(`/quiz?name=${name}`);
                console.log('Fazendo uma submissão por meio do react');
              }}
              >
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
                <Input
                  type="number"
                  name="nomeMacaco"
                  onChange={(qtde) => setQtde(qtde.target.value)}
                  placeholder=" "
                  value={qtde}
                />
                <Button type="submit" disabled={name.length === 0}>
                  {`Jogar ${name}`}
                </Button>
                <p>{data}</p>
              </form>
            </Widget.Content>
          </Widget>
          
          <Widget
            as={motion.section}
            transition={{ delay: 0.5, duration: 0.5 }}
            variants={{
              show: { opacity: 1 },
              hidden: { opacity: 0 },
            }}
          >
            <Widget.Content>
              <h1>Quizes da Galera</h1>

            </Widget.Content>   
          </Widget> 

        </Container>
      </PageBackground>
  );
}
