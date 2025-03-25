import { ListGroup, Button } from 'react-bootstrap';

interface FavoriteDogsProps {
  selectedBreeds: { id: string; breed: string }[];
  onMatchClick: () => void;
  onResetClick: () => void;
}

const FavoriteDogs: React.FC<FavoriteDogsProps> = ({
  selectedBreeds,
  onMatchClick,
  onResetClick,
}) => {
  return (
    <div className="mt-3">
      <h4 className="border-top pt-3">Favorite Breeds</h4>
      <div
        style={{ height: '10rem' }}
        className="overflow-auto bg-white border rounded px-3 py-2"
      >
        {selectedBreeds.map((breed) => (
          <ListGroup.Item key={breed.id}>{breed.breed}</ListGroup.Item>
        ))}
      </div>
      <Button
        size="sm"
        className="fr-button w-100 mt-4"
        hidden={selectedBreeds.length === 0}
        onClick={onMatchClick}
      >
        Match
      </Button>
      <Button
        size="sm"
        className="fr-button w-100 mt-4"
        hidden={selectedBreeds.length === 0}
        onClick={onResetClick}
      >
        Reset
      </Button>
    </div>
  );
};

export default FavoriteDogs;
