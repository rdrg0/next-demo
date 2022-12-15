/** @jsxImportSource theme-ui */
import { useColorMode } from 'theme-ui'

export default function ColorModeButton() {
  const [colorMode, setColorMode] = useColorMode()
  return (
    <button
      sx={{ variant: 'button', p: '20px', cursor: 'pointer', borderRadius: '10px', mb: '40px' }}
      onClick={(e) => {
        setColorMode(colorMode === 'light' ? 'dark' : 'light')
      }}>
      Set {colorMode === 'light' ? 'Dark' : 'Light'} Mode
    </button>
  )
}