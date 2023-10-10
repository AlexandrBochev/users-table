import usersData from "../../data/users-data"
import { User } from "../User/User"
import { Container, Table, TableHead } from "../../styles/Users.styled"

// ✓ TOOD: update this component to display a header and a list of users
// ✓ User Name | Gender | Hair Color | Birth date | Phone number
// ✓ TODO: Style this component using styled-components
// ✓ TODO: Use Users-homework.jpg or Users-homework.fig as a reference
// ✓ TODO: Add your styled-components to src/lesson13/Users-homework.styled.tsx !!! it's here src/styles/Users.styled.tsx !!!

const titles = ["Users", "User Name", "Gender", "Hair Color", "Birth date", "Phone number"]

const Users = () => {
  return (
    <Container>
      <Table>
        <thead>
          <tr>{ titles.map(title => <TableHead key={title}>{ title }</TableHead>) }</tr>
        </thead>
        <tbody>
          { usersData.map(user => <User data={ user } key={user.id} />) }
        </tbody>
      </Table> 
    </Container>
  )
}

export { Users }