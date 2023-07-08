import { styled, Typography } from '@mui/material'

export const NavbarText = styled(Typography)<{
  color?: string
  colorHover?: string
  colorLine?: string
  textalign?: string
  fsize?: string
  margin?: string
  padding?: string
}>`
  font-family: Georama, sans-serif;
  font-size: ${(props) => props.fsize || '22px'};
  font-weight: 500;
  color: ${(props) => props.color || 'var(--black)'};
  text-align: ${(props) => props.textalign || 'left'};
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '0'};
  &:after {
    background: ${(props) => props.colorLine || 'var(--theme)'};
  }
  &:hover {
    color: ${(props) => props.colorHover || 'var(--theme)'};
  }
`
