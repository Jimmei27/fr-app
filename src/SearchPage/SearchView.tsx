import { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button, Card, Dropdown, Pagination } from 'react-bootstrap'
import { useNavigate } from "react-router-dom";
import { useGetBreeds, useLogout, useSearchDogs } from '../hooks/requests';
import SearchSelect from './SearchSelect';
import SearchDogCard from './SearchDogCard';
import { Dog } from '../utils/interfaces';

const SearchView = () => {

    const [selectedBreeds, setSelectedBreeds] = useState<string[]>([])
    const [filter, setFilter] = useState({})
    const navigate = useNavigate()
    const { mutate: logout, isSuccess } = useLogout()
    // const { data: breeds } = useGetBreeds()
    const { dogDatas, isLoading, refetch } = useSearchDogs(filter)
    
    useEffect(() => {
        if (isSuccess){
            navigate('/login')
        }
    }, [isSuccess])

    console.log('test 1 ' + JSON.stringify(dogDatas))

    const onSelectDogBreed = (id: string) => {
        selectedBreeds.includes(id) ? setSelectedBreeds(selectedBreeds.filter(breed => breed !== id)) : setSelectedBreeds([...selectedBreeds, id])
    }

    return (
        <div className='vh-100 d-flex flex-rows'>
            <Col md={3} className='bg-light p-4'>
                <h4>Search Filter</h4>
                {/* <SearchSelect breeds={breeds} selectedBreeds={selectedBreeds} setSelectedBreeds={setSelectedBreeds}/> */}
                <Button size='sm' className='fr-button mt-4'>Search</Button>
            </Col>
            <Col md={9} className='flex-fill'>
                <div className='d-flex justify-content-end p-4'>
                    <Button onClick={() => logout()} size='sm' className='fr-button'>Log Out</Button>
                </div>
                <Row className='g-3'>
                    {
                        dogDatas?.map((dog: Dog) => (
                            <SearchDogCard dog={dog} onSelectDogBreed={onSelectDogBreed}/>

                        ))
                    }
                </Row>
            </Col>
        </div>
    )
}

export default SearchView