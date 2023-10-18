"use client";
import { HomeContainer } from "./styles";
import TypingAnimation from "../components/TypingAnimation";
export default function Home() {
  return (
    <HomeContainer>
      <div>
        <div>
        <TypingAnimation />
          <p>
            Você está prestes a adentrar o fascinante mundo da tecnologia React
            e Next.js por meio do nosso site especializado, o Kain's Dev. Aqui,
            oferecemos a você uma experiência única e enriquecedora de imersão
            no vasto ecossistema dessas poderosas ferramentas de desenvolvimento
            web.
          </p>
          <h2>Sobre o Kain's Dev:</h2>
          <p>
            O Kain's Dev é mais do que um simples site, é um ponto de encontro
            para entusiastas, profissionais e curiosos que desejam explorar o
            React e o Next.js de forma prática e informativa. Nosso principal
            objetivo é fornecer um espaço dedicado à apresentação de portfólios
            e testes de componentes, permitindo a você descobrir as
            possibilidades infinitas oferecidas por essas tecnologias
            inovadoras.
          </p>
          <h2>O que você encontrará no Kain's Dev:</h2>
          <p>
            <strong>Portfólio Interativo:</strong> Explore uma variedade de
            projetos e portfólios desenvolvidos com React e Next.js. Navegue
            pelas páginas interativas e conheça as habilidades e criatividade
            por trás de cada projeto apresentado.
          </p>
          <p>
            <strong>Teste de Componentes:</strong> Experimente e teste
            diferentes componentes criados com React e Next.js. Tenha a
            oportunidade de interagir e entender como esses elementos essenciais
            funcionam, fornecendo insights valiosos para o seu próprio
            desenvolvimento.
          </p>
          <p>
            <strong>Recursos Instrutivos:</strong> Aprofunde seus conhecimentos
            com nossos artigos informativos, tutoriais e guias práticos sobre
            React e Next.js. Desde noções básicas até técnicas avançadas,
            estamos aqui para auxiliá-lo em sua jornada de aprendizado.
          </p>
          <p>
            Estamos comprometidos em oferecer um ambiente acolhedor e
            inspirador, onde você pode se sentir à vontade para explorar,
            aprender e se conectar com outros apaixonados pela tecnologia React
            e Next.js.
          </p>
          <p>
            Prepare-se para mergulhar no mundo React com Next.js e transformar
            suas ideias em realidade!
          </p>
          <p>
            <strong>Equipe Kain's Dev</strong>
          </p>
        </div>
      </div>
    </HomeContainer>
  );
}
