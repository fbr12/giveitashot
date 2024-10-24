export const styles = {
    carouselContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      overflow: 'hidden',
      position: 'relative',
    },
    slider: {
      display: 'flex',
      transition: 'transform 0.5s ease-in-out',
      width: '100%',
    },
    slide: {
      minWidth: '100%',
      height: '300px', 
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    image: {
      width: '20%',
      height: 'auto',
    },
    arrowButton: {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        color: '#fff',
        zIndex: 2,
        '&:hover': {
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        },
    }
  };
  
