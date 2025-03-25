import { Dropdown } from "react-bootstrap"
import { SortType } from "../utils/interfaces"

interface SortDropdownProps {
    handleSort: (action: SortType) => void
}

const SortDropdown: React.FC<SortDropdownProps> = ({ handleSort }) => {

    return (
        <Dropdown className='me-3'>
            <Dropdown.Toggle className='fr-button'>
                Sort
            </Dropdown.Toggle>
            <Dropdown.Menu>
                <Dropdown.Item onClick={() => handleSort(SortType.ASC_BREED)}>
                    Breed: A - Z
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleSort(SortType.DESC_BREED)}>
                    Breed: Z - A
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleSort(SortType.ASC_AGE)}>
                    Age: Young to Old
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleSort(SortType.DESC_AGE)}>
                    Age: Old to Young
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleSort(SortType.ASC_NAME)}>
                    Name: A - Z
                </Dropdown.Item>
                <Dropdown.Item onClick={() => handleSort(SortType.DESC_NAME)}>
                    Name: Z - A
                </Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default SortDropdown