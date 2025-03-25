import { ChangeEvent, useState } from "react"
import { Form, Button } from "react-bootstrap"
import SearchSelect from "./SearchSelect"
import { SearchFields } from "../utils/interfaces"

interface SearchFormProps {
    breeds?: Record<string, string>[]
    setFilter: (data: SearchFields) => void
}

const SearchForm: React.FC<SearchFormProps> = ({breeds, setFilter}) => {
    const [formData, setFormData] = useState<SearchFields>({
        ageMin: '',
        ageMax: '',
        zipCodes: '',
        breeds: []
    })

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target

        setFormData((prev) => ({
            ...prev,
            [name] : value ? value : ''
        }))
    }

    const handleSelectChange = (selectedValue: string[]) => {
        setFormData((prev) => ({
            ...prev,
            breeds : selectedValue || []
        }))
    }


    const onSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('test 99 ' + JSON.stringify(formData))
        setFilter(formData)
    }

    return (
        <Form className='p-3 mt-3 border rounded bg-white' onSubmit={onSubmit}>
            <Form.Group className='mb-2'>
                <Form.Label>Minimum Age</Form.Label>
                <Form.Control 
                    data-testid='age-min-input'
                    type='number' 
                    name='ageMin' 
                    min='0' 
                    value={formData.ageMin} 
                    onChange={handleChange} 
                    placeholder='Enter Minimum Age'
                />
            </Form.Group>
            <Form.Group className='mb-2'>
                <Form.Label>Maximum Age</Form.Label>
                <Form.Control 
                    data-testid='age-max-input'
                    type='number' 
                    name='ageMax' 
                    min='0' 
                    value={formData.ageMax} 
                    onChange={handleChange} 
                    placeholder='Enter Maximum Age'
                />
            </Form.Group>
            <Form.Group className='mb-2'>
                <Form.Label>Zip code</Form.Label>
                <Form.Control 
                    data-testid='zipcode-input'
                    type='text' 
                    name='zipCodes' 
                    pattern='\d{5}'
                    value={formData.zipCodes} 
                    onChange={handleChange} 
                    placeholder='Enter Zip Code'
                />
            </Form.Group>
            <Form.Group>
                <Form.Label>Select Breeds</Form.Label>
                <SearchSelect breeds={breeds ?? []} selectedBreeds={formData.breeds ?? []} setSelectedBreeds={handleSelectChange}/>
            </Form.Group>
            <Button size='sm' className='fr-button mt-4 w-100' type='submit'>Search</Button>
        </Form>
    )
}

export default SearchForm