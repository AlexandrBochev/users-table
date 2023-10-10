import { TUser } from "../../data/users-data"
import { TableRow, TableData, HairColorIcon } from "../../styles/Users.styled"

// ✓ TODO: Update User component to display user's name, Gender, Hair color, Birth dat and phone number
// ✓ TODO: Style this component using styled-components
// ✓ TODO: Use Users-homework.jpg or Users-homework.fig as a reference
// ✓ TODO: Add a component to display user's hair color as a colored circle HairColorIcon
// ✓ TODO: Add a color prop to HairColorIcon, so it can be used to display different colors
// ✓ TODO: Add your styled-components to src/lesson13/Users-homework.styled.tsx !!! it's here src/styles/Users.styled.tsx !!!

interface UserProps {
  data: TUser
}

const User = ({ data }: UserProps) => {
  const userName = `${data.firstName} ${data.lastName}`
  const tableItems = ["", userName, data.gender, data.hair.color, data.birthDate, data.phone]
    
  return (
    <TableRow>
      { tableItems.map((item, i) => <TableData key={i}>
        { i === 3 ? <HairColorIcon color={ data.hair.color } /> : item }
      </TableData>) }
    </TableRow>
  )
}

export { User }