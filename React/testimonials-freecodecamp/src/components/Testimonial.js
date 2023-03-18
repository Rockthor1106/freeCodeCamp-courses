import React from 'react' //This line is not neccessary in curren versions of react
import '../stylesheets/Testimonial.css';

function Testimonial(props) {//This is another way to export a component, this allows us to export multiple component
  return(//A functional component returns a jsx component
    <div className='testimonial-container'>
      <img 
        className='testimonial-image'
        src={require(`../images/${props.image}.png`)}//everythig within the curly braces is considered javascript code
        alt={`${props.altDescription}'s phography`}
      />
      <div className='text-testimonial-container'>
        <p className='testimonial-name'>
          <strong>{props.name}</strong> in <strong>{props.country}</strong>
        </p>
        <p className='testimonial-position'>{props.position} at <strong>{props.company}</strong></p>
        <p className='testimonial-text'>"{props.testimonial}"</p>
      </div>
    </div>
  );
}

export default Testimonial; //This allows to import from the application to render the component