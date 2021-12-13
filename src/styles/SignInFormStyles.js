import sizes from "../components/sizes";

// eslint-disable-next-line
export default {
  root: {
    // background: `url(${sunset})`,
    backgroundPosition: "center",
    margin: "auto",
    backgroundSize: "",
    padding: "3%",
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    fontFamily: "Raleway Dots, cursive",
  fontWeight: '900'
  },

  form: {
    width: '',
    padding: "2%",

  },

  title: {
    color: "white",
  },

  textBox: {
    display: "flex",
    alignItems: "center",
    justifyContent: 'center'

  },

  textArea: {
    borderRadius: "15px",
    marginTop: "20px",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    padding: "10px",
    width: "555px",
    height: "150px",
    backgroundColor: "rgba(0,0,0,0)",
    color: "white",
    outline: "none",
    "&::placeholder": {
      color: "white",
      fontFamily: "Raleway Dots, cursive",
      fontSize: "14px",
      opacity: 0.5,
      paddingLeft: "10px",
      fontWeight: '600'
    },
   
  },

  nameEmail: {
    display: 'flex',
    alignItems: "center",
    justifyContent: 'center'
  },

  name: {
    alignItems: "center",
    outline: "none",
    borderRadius: "15px",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    padding: "10px",
    width: "250px",
    marginRight: "10px",
    backgroundColor: "rgba(0,0,0,0)",
    color: "white",
    "&::placeholder": {
      color: "white",
      fontFamily: "Raleway Dots, cursive",
      fontSize: "14px",
      opacity: 0.5,
      paddingLeft: "10px",
      fontWeight: '600',
      
    },
    
  },

  email: {
    outline: "none",
    borderRadius: "25px",
    border: "1px solid rgba(255, 255, 255, 0.3)",
    padding: "10px",
    width: "250px",
    marginLeft: "10px",
    backgroundColor: "rgba(0,0,0,0)",
    color: "white",
    "&::placeholder": {
      color: "white",
      fontFamily: "Raleway Dots, cursive",
      fontSize: "14px",
      opacity: 0.5,
      paddingLeft: "10px",
      fontWeight: '600'
    },
  },


 bottomDiv: {
    display: 'flex',
    margin: 'auto',
    height: '300px',
    width: '100%',
    marginTop: "1%",
    justifyContent: 'space-evenly',
    [sizes.down('md')]:{
      height: '25vh',
      justifyContent: 'space-around',
    },
    [sizes.down('sm')]:{
      justifyContent: 'space-between',
    }
  },


  CheckDiv: {
    color: "rgba(255, 255, 255, 0.7)",
    height: "50px",
    width: '175px',
    fontSize: "14px",
    fontWeight: "800",
    display: 'flex',
  },


  checkbox: {
    color: "#f1f1f1",
  },

  messageButton: {
    color: "rgba(255, 255, 255, 1)",
    backgroundColor: "#de2a72",
    height: '50px',
    borderRadius: '30px',
    width: '150px',
    marginTop: '5px'
  },


messageText: {
  textTransform: 'none',
  fontFamily: "Raleway Dots, cursive",
  fontWeight: '600'

},

  separator: {
    marginTop: "-20%",
    display: "block",
    textAlign: "center",
    whiteSpace: "nowrap",
    color: "white",
    fontFamily: "Raleway Dots, cursive",
  fontWeight: '600',
    "& hr": {
      display: "inline-block",
      width: "10%",
      opacity: 0.4,
      fontSize: "12px",
      marginLeft: '0.5%',
      marginRight: '0.5%',
      marginTop: "50px",
      [sizes.down("sm")]: {
        width: "30%",
        margin: 'auto',
        display: "flex",
        marginTop: "4%",
        marginBottom: "2%",
      },
    },
  },
  phoneNo: {
    color: "white",
    marginTop: "7px",
    textAlign: 'center',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    wordSpacing: '3px',
    fontFamily: "Raleway Dots, cursive",
  fontWeight: '600'

  },

  span: {
    opacity: "0.8",
    fontSize: "14px",
    textAlign:'center',
  },
  
  sendCopy: {
    marginTop: '10%',
    fontFamily: "Raleway Dots, cursive",
  fontWeight: '600'
}
};

