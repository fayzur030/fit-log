import React from 'react'
type SearchInputProps = {
  value: string
  onChange: (value: string) => void
}
const SearchInput = ({ value, onChange }: SearchInputProps) => {
  const handleOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value)
  }

  return (
    <div>
      <input
        value={value}
        onChange={handleOnchange}
        type='text'
        placeholder='Search workout...'
        className='input input-md w-full'
      />
    </div>
  )
}

export default SearchInput
