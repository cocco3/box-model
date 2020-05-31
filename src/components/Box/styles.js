export default (theme) => ({
  inner: {
    alignItems: 'center',
    borderStyle: 'solid',
    borderWidth: 0,
    display: 'flex',
    outlineStyle: 'dashed',
    outlineWidth: 0,
    cursor: 'pointer'
  },
  content: {
    backgroundColor: '#80ccff'
  },

  height: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '8px',
    position: 'relative',
    zIndex: 2,
    borderLeft: '1px solid #666',
    paddingLeft: '4px',
    width: '60px',

    '&::before': {
      background: '#666',
      display: 'block',
      content: '""',
      position: 'absolute',
      top: 0,
      height: '1px',
      width: '7px',
      left: '-4px'
    },

    '&::after': {
      background: '#666',
      display: 'block',
      content: '""',
      position: 'absolute',
      bottom: 0,
      height: '1px',
      width: '7px',
      left: '-4px'
    }
  },

  width: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '8px',
    position: 'relative',
    zIndex: 2,
    borderTop: '1px solid #666',
    paddingTop: '4px',

    '&::before': {
      background: '#666',
      display: 'block',
      content: '""',
      position: 'absolute',
      left: 0,
      width: '1px',
      height: '7px',
      top: '-4px'
    },

    '&::after': {
      background: '#666',
      display: 'block',
      content: '""',
      position: 'absolute',
      right: 0,
      width: '1px',
      height: '7px',
      top: '-4px'
    }
  }
})
