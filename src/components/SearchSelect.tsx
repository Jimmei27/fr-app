import Select from "react-select";

interface SearchSelectProps {
    breeds: Record<string, string>[]
    selectedBreeds: string[]
    setSelectedBreeds: (breeds: string[]) => void
}

const SearchSelect: React.FC<SearchSelectProps> = ({ breeds, selectedBreeds, setSelectedBreeds}) => {

    const options = breeds?.map((breed) => ({ value: breed, label: breed})) || []

    return (
            <Select
                isMulti
                options={options}
                value={options.filter((option) => selectedBreeds?.includes(option.value.toString()))}
                onChange={(selectedOptions) => setSelectedBreeds(selectedOptions?.map((option) => option.value.toString()))}
                closeMenuOnSelect={false}
                hideSelectedOptions={false}
                className='basic-multi-select'
                classNamePrefix='select'
                data-testid={'search-select'}
                placeholder='Select Dog Breeds'
                styles={{
                    control: (base) => ({
                        ...base,
                        minHeight: '6rem',
                        maxHeight: '6rem',
                        overflowY: 'auto'
                    })
                }}
            />
    )
}

export default SearchSelect