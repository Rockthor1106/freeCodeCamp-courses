import './App.css';
//I use curly braces here because I am exporting multiple components from Testimonial
import Testimonial from './components/Testimonial';//React assume Testimonial as a file.js

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimonial
          name='Shawn Wang'
          country='Singapore'
          image='Shawn'
          altDescription="Shawn"
          position='Software Engineer'
          company='Amazon'
          testimonial="It's scary to change careers. I only gained confidence that I could code by working through the hundreds of hours of free lessons on freeCodeCamp. Within a year I had a six-figure job as a Software Engineer. freeCodeCamp changed my life."
        />
        <Testimonial
          name='Sarah Chima'
          country='Nigeria'
          image='Sarah'
          altDescription="Sarah"
          position='Software Engineer'
          company='ChatDesk'
          testimonial="freeCodeCamp was the gateway to my career as a software developer. The well-structured curriculum took my coding knowledge from a total beginner level to a very confident level. It was everything I needed to land my first dev job at an amazing company."
        />
        <Testimonial //This values only can be sent from this element since it renders the component not in both ways
          name='Emma Bostian'
          country='Sweden'
          image='Emma'
          altDescription="Emma"
          position='Software Engineer'
          company='Spotify'
          testimonial="I've always struggled with learning JavaScript. I've taken many courses but freeCodeCamp's course was the one which stuck. Studying JavaScript as well as data structures and algorithms on freeCodeCamp gave me the skills and confidence I needed to land my dream job as a software engineer at Spotify."
        />
      </div>
    </div>
  );
}

export default App;
