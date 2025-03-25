import { useState, useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import { useGetBreeds, useLogout, useMatchDog, useSearchDogs } from '../hooks/requests';
import SearchForm from '../components/SearchForm';
import SearchDogCard from '../components/SearchDogCard';
import FavoriteDogs from '../components/FavoriteDogs';
import MatchedModal from '../components/MatchedModal';
import SortDropdown from '../components/SortDropDown';
import PagePagination from '../components/PagePagination';
import { Dog, SortType, SearchFields } from '../utils/interfaces';

const SearchView = () => {

    const [dogData, setDogData] = useState<Dog[]>([])
    const [favoriteBreeds, setFavoriteBreeds] = useState<{ id: string; breed: string}[]>([])
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [filter, setFilter] = useState({})
    const navigate = useNavigate()
    const { mutate: logout, isSuccess } = useLogout()
    const { data: breeds } = useGetBreeds()
    const { dogDatas } = useSearchDogs(filter)
    const { mutate: matchDog, isSuccess: matchDogSuccess, data: matchData } = useMatchDog()
    
    useEffect(() => {
        if (isSuccess){
            navigate('/login')
        }
    }, [isSuccess, navigate])

    useEffect(() => {
        if (dogDatas != null) {
            setDogData(dogDatas)
        }
    }, [dogDatas])  

    useEffect(() => {
        setFilter((prevFilter) => ({
            ...prevFilter,
            from: (currentPage * 25).toString(),
          }));
    }, [currentPage])  

    const onSelectDogBreed = (id: string, breed: string) => {
        setFavoriteBreeds((prevBreeds) => {
            const isSelected = prevBreeds.some((breed) => breed.id === id)
            if (isSelected) {
                return prevBreeds.filter((breed) => breed.id !== id)
            } else {
                return [...prevBreeds, {id, breed}]
            }
        })
    }

    const onMatchDogClick = () => {
        matchDog(favoriteBreeds.map((breed) => breed.id))
    }

    const handleSort = (action: SortType) => {
        const data = [...dogData]
        switch (action) {
            case SortType.ASC_BREED:
                setDogData(data.sort((a,b) => a.breed.localeCompare(b.breed)))
                break;
            case SortType.DESC_BREED:
                setDogData(data.sort((a,b) => b.breed.localeCompare(a.breed)))
                break;
            case SortType.ASC_AGE:
                setDogData(data.sort((a,b) => a.age - b.age))
                break;
            case SortType.DESC_AGE:
                setDogData(data.sort((a,b) => b.age - a.age))
                break;
            case SortType.ASC_NAME:
                setDogData(data.sort((a,b) => a.name.localeCompare(b.name)))
                break;
            case SortType.DESC_NAME:
                setDogData(data.sort((a,b) => b.name.localeCompare(a.name)))
                break;
            default:
                break
        }
    }

    const handleSubmit = (formData: SearchFields) => {
        setFilter({
            ...formData,
            from: '25',
            size: '25'
        })
        setCurrentPage(1)
    }

    return (
        <div className='vh-100 d-flex flex-rows'>
            <Col md={3} className='bg-light p-4'>
                <h4>Search Fields</h4>
                <SearchForm breeds={breeds} setFilter={handleSubmit}/>
                <FavoriteDogs selectedBreeds={favoriteBreeds} onMatchClick={onMatchDogClick} onResetClick={() => setFavoriteBreeds([])}/>
            </Col>
            <Col md={9} className='flex-fill'>
                <div className='d-flex justify-content-end p-4'>
                    <SortDropdown handleSort={handleSort} />
                    <Button onClick={() => logout()} size='sm' className='fr-button'>Log Out</Button>
                </div>
                {dogData.length > 0 ? (
                    <>
                        <Row className='g-3 mx-3 row-cols-5'>
                        {
                            dogData?.map((dog: Dog) => (
                                <SearchDogCard key={dog.id} dog={dog} onSelectDogBreed={onSelectDogBreed}/>

                            ))
                        }
                        </Row>
                        <PagePagination currentPage={currentPage} setCurrentPage={(page) => setCurrentPage(page)} />
                    </>
                ) : <div className='d-flex justify-content-center mt-5'><h5>Please change the search fields and search again.</h5></div>}
            </Col>
            {matchDogSuccess && matchData != null ? (
                <MatchedModal dogId={matchData} />
            ) : null}
        </div>
    )
}

export default SearchView