import { memo } from 'react'
//eslint-disable-next-line
const Search = ({ handleSearch }) => {
    console.log("search rendered!")
  return (
    <input 
      type="text"
      placeholder="Search users..."
      onChange={(e) =>handleSearch(e.target.value)}
    />
  )
}
//eslint-disable-next-line
export default memo(Search);
