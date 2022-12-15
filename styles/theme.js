
export const theme = {
  colors: {
    text: '#fff',
    background: '#000',
    primary: '#0070f3',
    modes: {
      light: {
        text: '#000',
        background: '#fff',
        primary: '#0070f3',
      }
    }
  },
  styles: {
    root: {
      body: {
        bg: 'background',
        color: 'text'
      }
    }

  },
  card: {
    color: 'text',
    borderColor: 'text',
    '&:hover, &:active': {
      color: 'primary',
      borderColor: 'primary'
    }
  },
  button: {
    color: 'primary',
    borderColor: 'primary',
    bg: 'background',
    '&:hover, &:active': {
      color: 'text',
      borderColor: 'text'
    }
  }
}