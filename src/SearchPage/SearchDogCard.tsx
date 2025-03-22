import { Card, Col } from 'react-bootstrap'
import { Dog } from '../utils/interfaces'

interface SearchDogCardProps {
    dog: Dog
    onSelectDogBreed: (id: string) => void
}

const SearchDogCard: React.FC<SearchDogCardProps> = ({dog}) => {
    return (
        <Col xs={12} sm={6} md={4} lg={3} xl={2}>
            <Card className='h-100'>
                <Card.Img variant='top' src={dog.img} style={{objectFit: 'cover', height: '12.5rem'}}/>
                <Card.Body>
                    <Card.Title>{dog.name}</Card.Title>
                    <strong>Breed:</strong> {dog.breed} <br />
                    <strong>Age:</strong> {dog.age} <br />
                    <strong>Zip Code:</strong> {dog.zip_code}
                </Card.Body>
            </Card>
        </Col>
    )
}

export default SearchDogCard
