import { Box, Typography, Button } from "@mui/material";

import icon from "../assets/matilhaIcon.png";
import browser from "../assets/browsers.png";
import monitor from "../assets/monitor.png";

const Home = () => {
  return (
    <Box sx={{ background: "#E7E7E7" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <img src={icon} alt="Icon da Matilha" />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "22px",
            padding: "2.5rem",
            color: "#8360C3",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Solway",
              fontSize: "16px",
              lineHeight: "19px",
              fontWeight: 700,
            }}
          >
            Nossos Produtos
          </Typography>
          <Typography
            sx={{ fontFamily: "Solway", fontSize: "16px", lineHeight: "19px" }}
          >
            Quem Somos
          </Typography>
          <Typography
            sx={{ fontFamily: "Solway", fontSize: "16px", lineHeight: "19px" }}
          >
            Metodologia
          </Typography>
          <Typography
            sx={{ fontFamily: "Solway", fontSize: "16px", lineHeight: "19px" }}
          >
            Nossos Clientes
          </Typography>
          <Typography
            sx={{ fontFamily: "Solway", fontSize: "16px", lineHeight: "19px" }}
          >
            Contato
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box
          sx={{
            padding: "1.5rem 3.5rem 5rem",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Solway",
              fontSize: "80px",
              lineHeight: "96px",
              fontWeight: 700,
              color: "#6A20F1",
            }}
          >
            Desenvolvimento de Softwares
          </Typography>
          <Typography
            sx={{
              fontFamily: "Solway",
              fontSize: "20px",
              lineHeight: "35px",
              fontWeight: 300,
              padding: "1rem 8rem 0 1rem",
            }}
          >
            Somos uma fábrica de software com foco na melhor experiência do
            usuário.
          </Typography>

          <Typography
            sx={{
              fontFamily: "Solway",
              fontSize: "20px",
              lineHeight: "35px",
              fontWeight: 300,
              padding: "0 8rem 1rem 1rem",
            }}
          >
            Criamos soluções inovadoras, interfaces intuitivas, modernas,
            elegantes e fáceis de usar.
          </Typography>

          <Button
            sx={{
              backgroundColor: "#5F19E0",
              color: "#fff",
              fontFamily: "Solway",
              fontSize: "30px",
              fontWeight: 500,
              lineHeight: "36px",
              textTransform: "none",
              width: "28rem",
              height: "70px",
              marginTop: "1rem",
              borderRadius: "138px 0px",
              ":hover": {
                backgroundColor: "#BF40BF",
              },
            }}
          >
            Fale Conosco
          </Button>
        </Box>

        <Box sx={{ paddingLeft: "7rem", height: "20vh" }}>
          <img
            src={browser}
            alt="Abas de navegação"
            style={{ position: "relative", right: "140px", bottom: "80px" }}
          />
          <img
            src={monitor}
            alt="Monitor"
            style={{ position: "absolute", bottom: "30px", right: "30px" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
