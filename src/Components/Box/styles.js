export default {
  outer: {
    backgroundColor: '#ffabab',
  },
  inner: {
    backgroundColor: '#c9ff81',
    border: '0 solid #ffde8e'
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

    span: {
      background: 'white',
      zIndex: 3
    },

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
  }
}
