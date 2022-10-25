import React from 'react';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


function ExerciseCard( props ) {
  return (
    <section className="show-gifs" >
    {props.exercises.map((item, index) => 
      <div className="exercise-card">
    <Link to={`gymathome/${item.id}`}>
      <Card >
        <Card.Img variant="top" key={index} src={item.gifUrl} alt={item.name} />
        <Card.Body>
          <Button 
            variant="primary" 
            value={item}
            // onClick={() => setThisExercise(item)}
          >
            Details
          </Button>

          {/* <Button 
            variant="primary" 
            style={{marginLeft: '10px'}}
            onClick={addToMyPlan}
          >
            Add to My Plan
          </Button> */}
        </Card.Body>
      </Card>
    
    
    </Link>
    </div>
        )}
      </section>
  )
}
export default ExerciseCard;
