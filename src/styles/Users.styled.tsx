import styled from "styled-components"

export const MainSpace = styled.div`
  width: 100%;
  height: 100%;
  padding: 10.5rem 0;
`

export const Container = styled.div`
width: 70rem;
margin: 0 auto;
`

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`

export const TableRow = styled.tr`
  box-shadow: 0px -1px 0px 0px rgba(30, 32, 37, 0.08) inset;
`

export const TableHead = styled.th`
  color: var(--Natural-Color, #6F767E);
  font-weight: 500;
  height: 5.75rem;
  text-align: left;
  &:first-child {
    font-size: 1.25rem;
    transform: translateY(-3.7rem);
  }
`

export const TableData = styled.td`
  color: var(--Natural-Color, #333333);
  height: 3.25rem;
  text-align: left;
`

export const HairColorIcon = styled.div<{ color: string }>`
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50%;
  background-color: ${props => hairColorCode(props.color)};
`

const hairColorCode = (color: string) => {
  if (color === "Blond") {
    return "#faf0be"
  } else if (color === "Brown") {
    return "#af593e"
  } else if (color === "Chestnut") {
    return "#bdaa8d"
  } else if (color === "Auburn") {
    return "#9d3e0c"
  } else return "#000000"
}