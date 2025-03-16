import React from 'react';
import Header from './components/Header';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import {
  Grid,
  Typography,
  Box,
  Card,
  CardContent
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import lara from '../src/assets/lara/image.webp';
import lara2 from '../src/assets/lara/image.png';
import escenario from './assets/escenario/escenarioBASE.svg';
import escenarioWEBP from './assets/escenario/escenarioBASE.webp';
import escenarioAVIF from './assets/escenario/escenarioBASE.avif';
import trailer from "./assets/video/laraadventure_trailer.mp4";
import trailer2 from "./assets/video/laraadventure_trailer.webm";
import soundtrack from "./assets/audio/mellow-happy-20241117-305260.mp3";

const useStyles = makeStyles((theme) => ({
  mainContent: {
    maxWidth: '75rem',
    margin: '0 auto',
    padding: '1rem',
  },
  section: {
    marginBottom: '2rem',
    padding: '1rem',
    borderRadius: '8px',
    backgroundColor: '#f5f5f5',
  },
  card: {
    marginBottom: '1rem',
    transition: 'transform 0.3s',
    '&:hover': {
      transform: 'translateY(-5px)',
    },
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    borderRadius: '8px',
  },
  characterImage: {
    width: '30%',
    borderRadius: '8px',
    margin: '1rem 0',
  },
  projectImage: {
    width: '100%',
    borderRadius: '8px',
    margin: '1rem 0',
  },
  escenarioImage: {
    width: '26rem', // Adjusted width using rem
    height: 'auto',
    borderRadius: '8px',
    margin: '1rem 0',
  },
}));

function App() {
  const classes = useStyles();

  return (
      <div className="App">
        <Header />
        <main className={classes.mainContent}>
          <header>
            <Typography variant="h2" gutterBottom>
              Lara's Adventure
            </Typography>
            <Typography variant="body1" paragraph>
              Bienvenidos a la página oficial de Lara's Adventure, en esta página queremos dar a conocer el juego, sobretodo
              a la protagonista, escenario, trailer y premisa de la historia
            </Typography>
          </header>

          <section className={classes.section}>
            <Typography variant="h4" gutterBottom>
              La historia
            </Typography>
            <Typography variant="body1" paragraph>
              En un mundo de dulces y maravillas, el reino de Candyland enfrenta una crisis sin precedentes. El malvado Emperador Gumball ha robado el Collar Protector, el objeto mágico más preciado del pueblo, sumiendo a todos en oscuridad y miedo.
            </Typography>
            <Typography variant="body1" paragraph>
              Lara, nuestra valiente heroína, emprende un viaje épico para recuperar el Collar Protector y devolver la paz a su hogar. Con determinación y valor, Lara enfrentará al Emperador Gumball y a sus secuaces, superando obstáculos y peligros en cada paso del camino.
            </Typography>

            <Typography variant="h5" gutterBottom>
              La Misión
            </Typography>
            <Typography variant="body1" paragraph>
              Lara no está sola en esta misión. Con su fiel bastón de caramelo, podrá pegarse a paredes para superar obstáculos imposibles y defenderse de los enemigos que se interpongan en su camino. Cada nivel del juego revelará nuevos secretos sobre el pasado de Candyland y el poder del Collar Protector.
            </Typography>

            <Typography variant="h5" gutterBottom>
              El Destino de un Reino
            </Typography>
            <Typography variant="body1" paragraph>
              La historia de Lara's Adventure es una emocionante aventura llena de acción, magia y emociones. Descubre cómo Lara transformará no solo su destino, sino el de todo Candyland. ¿Podrá Lara vencer al Emperador Gumball y devolver la paz a su pueblo? La respuesta está en tus manos.
            </Typography>
          </section>

          <section className={classes.section}>
            <Typography variant="h4" gutterBottom>
              Conoce a Lara: La Heroína de Candyland
            </Typography>
            <Typography variant="body1" paragraph>
              Lara es la protagonista de nuestra emocionante aventura, una joven valiente y altruista que se ha convertido en la última esperanza de su pueblo. Con solo 18 años, Lara ha demostrado una determinación extraordinaria al decidirse a enfrentar al poderoso Emperador Gumball y recuperar el Collar Protector, el objeto mágico más sagrado de Candyland.
            </Typography>

            <Typography variant="h5" gutterBottom>
              Una Líder Nata
            </Typography>
            <Typography variant="body1" paragraph>
              Desde pequeña, Lara ha demostrado una gran empatía hacia los demás, siempre dispuesta a ayudar a quienes más lo necesitan. Su carácter fuerte y decidido la ha llevado a convertirse en una líder natural, ganándose el respeto y la admiración de los habitantes de Candyland.
            </Typography>

            <Typography variant="h5" gutterBottom>
              Preparada para el Desafío
            </Typography>
            <Typography variant="body1" paragraph>
              Para su misión, Lara cuenta con habilidades únicas que la hacen perfecta para este desafío:
            </Typography>
            <ul>
              <li><strong>Agilidad excepcional</strong>: Lara puede moverse con gran rapidez y precisión, lo que le permite esquivar trampas y enemigos</li>
              <li><strong>Inteligencia estratégica</strong>: Su capacidad para analizar situaciones complejas le permite encontrar soluciones incluso en los momentos más difíciles</li>
              <li><strong>Maestría con el bastón de caramelo</strong>: Lara ha entrenado durante años con este instrumento versátil, aprendiendo a usarlo tanto como herramienta como arma</li>
            </ul>

            <Typography variant="h5" gutterBottom>
              Su Motivación
            </Typography>
            <Typography variant="body1" paragraph>
              El bienestar de su pueblo es lo único que importa para Lara. Cuando el Emperador Gumball robó el Collar Protector, no solo robó un artefacto mágico, sino la esperanza y la paz de todo Candyland. Lara ha jurado recuperar este tesoro a toda costa, incluso si eso significa arriesgar su propia vida.
            </Typography>

            <Typography variant="h5" gutterBottom>
              Una Transformación Única
            </Typography>
            <Typography variant="body1" paragraph>
              A lo largo de su aventura, Lara no solo demostrará su valor y habilidad, sino que también descubrirá secretos sobre su pasado y su conexión con el Collar Protector. Esta búsqueda no solo cambiará el destino de Candyland, sino que también transformará a Lara en una heroína legendaria.
            </Typography>

            <Typography variant="body1" paragraph>
              Únete a Lara en esta emocionante aventura y ayuda a escribir la próxima página de la historia de Candyland.
            </Typography>

            <picture>
              <source srcSet={lara} type="image/webp" />
              <img src={lara2} alt="Lara, la protagonista" className={classes.characterImage} />
            </picture>
          </section>

          <section className={classes.section}>
            <Typography variant="h4" gutterBottom>
              Escenario
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <picture>
                  <source srcSet={escenarioAVIF} type="image/avif" />
                  <source srcSet={escenarioWEBP} type="image/webp" />
                  <img src={escenario} alt="Escenario del juego" className={classes.escenarioImage} />
                </picture>
              </Grid>
              <Grid item xs={12} sm={6}>
                <CardContent>
                  <Typography variant="body1" paragraph>
                    El mundo que explorarás será un mundo colorido como este, por lo que siempre te sentirás con energías de seguir
                    ayudando a gente y explorando los diferentes mundos que hay a lo largo de este juego
                  </Typography>
                </CardContent>
              </Grid>
            </Grid>
          </section>

          <section className={classes.section}>
            <Typography variant="h4" gutterBottom>
              Trailer del Juego
            </Typography>
            <video controls={true} width={640} height={480}>
              <source src={trailer} type="video/mp4" />
              <source src={trailer2} type="video/webm" />
            </video>
          </section>

          <section className={classes.section}>
            <Typography variant="h4" gutterBottom>
              Tema principal
            </Typography>
            <audio controls={true} width={640} height={480}>
              <source src={soundtrack} type="audio/mp3" />
            </audio>

          </section>

          <section className={classes.section}>
            <Typography variant="h4" gutterBottom>
              Contáctame
            </Typography>
            <ContactForm />
          </section>
        </main>
        <Footer />
      </div>
  );
}

export default App;