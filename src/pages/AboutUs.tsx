import { Box, Typography, Divider } from "@mui/material";

import people from "../assets/people.png";

const AboutUs: React.FC = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "row" }}>
      <Box
        sx={{
          padding: "4rem 9rem 4rem 6rem",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <Divider
          sx={{
            width: "9rem",
            border: "5px solid #2EBF91",
            borderRadius: "10px",
          }}
        />
        <Typography
          sx={{
            fontFamily: "Solway",
            fontSize: "50px",
            lineHeight: "60px",
            fontWeight: 700,
          }}
        >
          Quem Somos
        </Typography>
        <Typography
          sx={{
            fontFamily: "Solway",
            fontSize: "20px",
            lineHeight: "35px",
            fontWeight: 300,
            marginTop: "10px",
          }}
        >
          Somos uma fábrica de software com foco na melhor experiência do
          usuário.Criamos soluções inovadoras, interfaces intuitivas, modernas,
          elegantes e fáceis de usar.
        </Typography>
        <Typography
          sx={{
            fontFamily: "Solway",
            fontSize: "20px",
            lineHeight: "35px",
            fontWeight: 500,
          }}
        >
          Somos uma fábrica de software com foco na melhor experiência do
          usuário.Criamos soluções inovadoras, interfaces intuitivas, modernas,
          elegantes e fáceis de usar.
        </Typography>
      </Box>

      <Box>
        <img
          style={{ position: "relative", top: "1rem", right: "3rem" }}
          src={people}
          alt="pessoas reunidas"
        />
      </Box>
    </Box>
  );
};

export default AboutUs;
