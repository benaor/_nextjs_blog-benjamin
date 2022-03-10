import { NextPage } from 'next'
import React, { CSSProperties } from 'react'
import PresentationCard from '../../components/molecules/PresentationCard'
import DisplayUnit from '../../components/organisms/DisplayUnit'
import PageWithNavbar from '../../components/templates/PageWithNavbar'

const Home: NextPage = () => {
  const styles: CSSProperties = {
    backgroundImage: `url('/img/header-blog.jpg')`
  }

  return (
    <div data-testid="Home">
      <PageWithNavbar>
        <DisplayUnit
          title="Salut."
          backgroundImage="/img/header-blog.jpg"
          color="#FFFFFF"
          style={{ justifyContent: 'center', paddingTop: '10%' }}
        >
          <h3
            style={{
              fontFamily: 'abhaya_libre',
              fontSize: '44px',
              textAlign: 'center',
              paddingTop: '30px'
            }}
          >
            Benjamin GIRARD <br /> Concepteur et Développeur
          </h3>
        </DisplayUnit>

        <DisplayUnit title="En un mot" backgroundImage="/img/moon.jpg" color="#FFFFFF">
          <PresentationCard imgSrc="/img/fist.png" title="AUTODIDACTE">
            Développeur web fullstack depuis 2019. Diplomé d’état (Web et web mobile) depuis 2020,
            puis a nouveau diplômé (Concepteur Développeur d’applications) en 2022. Début de
            l’aventure freelance en 2022
          </PresentationCard>
          <PresentationCard imgSrc="/img/rocket.png" title="EPISTEMOPHILE">
            Programmation orienté objet, programmation fonctionnelle, architecture hexagonale,
            atomic design ... Dès que je rencontre un terme technique qui m’est inconnu, je dois le
            comprendre !
          </PresentationCard>
          <PresentationCard imgSrc="/img/boxing.png" title="SPORT ADDICT">
            Passionné de musclation et powerlifting depuis toujours, mon amour du sport m’a poussé
            plus tard vers les sports de combat : le MMA, kick-bowing et penchak-silat font
            désormais parties de ma vie et me guide vers un mode de vie sain et équilibré.
          </PresentationCard>
        </DisplayUnit>

        <DisplayUnit title="Mes favoris" backgroundImage="/img/dev.jpg">
          <PresentationCard
            imgSrc="/img/react-icon.png"
            imgWidth={100}
            imgHeigth={90}
            title="FRONTEND"
          >
            React + Redux <br />
            TypeScript <br />
            NextJS
          </PresentationCard>
          <PresentationCard
            imgSrc="/img/node-logo.png"
            imgWidth={150}
            imgHeigth={90}
            title="BACKEND"
          >
            NodeJS + Typescript <br />
            ExpressJS <br />
            SQL & noSQL
          </PresentationCard>
          <PresentationCard
            imgSrc="/img/devops-logo.png"
            imgWidth={150}
            imgHeigth={90}
            title="DEVOPS"
          >
            Linux <br />
            Docker <br />
            Gitlab CI/CD
          </PresentationCard>
        </DisplayUnit>
      </PageWithNavbar>
    </div>
  )
}

export default Home
