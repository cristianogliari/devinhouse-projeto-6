import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  root: {
    maxWidth: '50%',
    margin: 'auto',
    border: '1px solid #c6c6c675',
    borderRadius: '5px',
    boxShadow: 'none',
    padding: 0,
      '&:last-child': {
        paddingBottom: 0,
      },
  }, 
  logoProcesso: {
    
  },
  title: `
    font-weight: bold;
    font-size: 0.8rem;
  `,

  // title: { 
  //   fontSize: '0.9rem'
  // },
  subtitle: {
    fontSize: '1rem'
  },
  text: {

  },
  main: {
    padding: 0,
  },
  gridCardStyle: {
    padding: 0,
  },
  mainImage: {
    width: '90px',
    height: '90px',
    marginTop: '10px',
    marginLeft: '10px',
    padding: 0,
      '&:last-child': {
        paddingBottom: 0,
      },
  },
  image: {
    width: '100%',
    height: '100%',
  },
  gridTypoSize: {
    padding: 0,
      '&:last-child': {
        paddingBottom: 0,
      },

  },
  iconStyle: {
    display: 'flex',
    justifyContent: 'end',
  },
  moreInfo: {

  },
})