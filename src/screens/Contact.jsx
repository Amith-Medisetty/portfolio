import { Box, styled } from "@mui/material";
import StyledButton from "../components/StyledButton";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import PhoneIcon from "@mui/icons-material/Phone";
import { myEmail, phone } from "../MyDetails";

const Contact = () => {
  const ContactSection = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",

    "& .details": {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      flex: "1 1 50%",
      flexWrap: "wrap",
      fontSize: "1rem",
      marginTop: "50px",
      fontWeight: 600,
      gap: "20px",
    },
  }));

  return (
    <Box id="contact">
      <ContactSection padding="2rem 8% 3rem">
        <StyledButton href="https://www.linkedin.com/in/amith-medisetty-3479192b1/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          {" "}
          Linked In
        </StyledButton>
        <Box className="details">
          <Box
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            gap="10px"
          >
            <MarkunreadIcon />
            {myEmail}
          </Box>
          <Box
            display="flex"
            justifyContent="space-around"
            alignItems="center"
            gap="10px"
          >
            <PhoneIcon /> {phone}{" "}
          </Box>
        </Box>
      </ContactSection>
    </Box>
  );
};

export default Contact;
