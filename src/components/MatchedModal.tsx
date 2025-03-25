import { useEffect, useState } from "react"
import { Button, Image, Modal, Spinner } from "react-bootstrap"
import { useGetDogs } from "../hooks/requests"


interface MatchedModalProps {
    dogId: Record<string, string>
}

const MatchedModal: React.FC<MatchedModalProps> = ({dogId}) => {

    const { mutate: getDog, data: dogData } = useGetDogs()
    const [showModal, setShowModal] = useState<boolean>(true)

    useEffect(() => {
        if (dogId.match != null) {
            getDog([dogId.match])
        }
    }, [dogId, getDog])

    const closeModal = () => setShowModal(false)

    return (
        <Modal show={showModal} onHide={closeModal} centered>
            {dogData != null ? (
                <>
                    <Modal.Header closeButton>
                        <Modal.Title>Dog Matched!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="d-flex">
                            <Image src={dogData[0].img} thumbnail className="w-50" style={{height: '13rem'}}/>
                            <div className="px-4 d-inline-block align-content-center">
                                <h4>Name: {dogData[0].name}</h4>
                                <strong>Breed:</strong> {dogData[0].breed} <br />
                                <strong>Age:</strong> {dogData[0].age} <br />
                                <strong>Zip Code:</strong> {dogData[0].zip_code} <br />
                                <Button size='sm' className='fr-button mt-3 w-100'>Pick Me</Button>
                            </div>
                        </div>
                    </Modal.Body>
                </>
            ) : (<Spinner animation="border" />)}
        </Modal>
    )
}

export default MatchedModal