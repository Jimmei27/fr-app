import { Card, Col } from 'react-bootstrap';
import { Dog } from '../utils/interfaces';

interface SearchDogCardProps {
  dog: Dog;
  onSelectDogBreed: (id: string, breed: string) => void;
}

const SearchDogCard: React.FC<SearchDogCardProps> = ({
  dog,
  onSelectDogBreed,
}) => {
  return (
    <Col
      onClick={() => onSelectDogBreed(dog.id, dog.breed)}
      data-testid={`${dog.name}-card`}
    >
      <Card className="h-100" style={{ minWidth: '7rem' }}>
        <Card.Img
          variant="top"
          src={dog.img}
          style={{ objectFit: 'cover', height: '12.5rem' }}
        />
        <Card.Body>
          <Card.Title>{dog.name}</Card.Title>
          <strong>Breed:</strong> {dog.breed} <br />
          <strong>Age:</strong> {dog.age} <br />
          <strong>Zip Code:</strong> {dog.zip_code}
        </Card.Body>
      </Card>
    </Col>
  );
};

export default SearchDogCard;
