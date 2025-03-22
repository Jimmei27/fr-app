import Select from "react-select";

interface SearchSelectProps {
    breeds?: string[]
    selectedBreeds: string[]
    setSelectedBreeds: (breeds: string[]) => void
}

const SearchSelect: React.FC<SearchSelectProps> = ({ breeds, selectedBreeds, setSelectedBreeds}) => {

    const options = breeds?.map((breed) => ({ value: breed, label: breed})) || []

    return (
        <div>
            <label>Select Breeds</label>
            <Select
                isMulti
                options={options}
                value={options.filter((option) => selectedBreeds.includes(option.value))}
                onChange={(selectedOptions) => setSelectedBreeds(selectedOptions.map((option) => option.value))}
                closeMenuOnSelect={false}
                hideSelectedOptions={false}
                className='basic-multi-select'
                classNamePrefix='select'
            />
        </div>
    )
}

export default SearchSelect