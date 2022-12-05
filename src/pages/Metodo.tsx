import { Box, Typography, Divider } from "@mui/material";

import megaphoneImg from "../assets/megaphone.png";
import presentationImg from "../assets/presentation.png";

const Metodo: React.FC = () => {
  return (
    <Box>
      <Box
        sx={{
          paddingTop: "4rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Divider
          sx={{
            width: "9rem",
            border: "5px solid #6A20F1",
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
          Nossa Metodologia
        </Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box sx={{ marginBottom: "5rem" }}>
          <img
            style={{
              width: "400px",
              height: "400px",
              position: "relative",
              top: "4rem",
              left: "8rem",
            }}
            src={megaphoneImg}
            alt="megafone"
          />
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "10rem 8rem 10rem 10rem",
            marginLeft: "10rem",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Solway",
              fontSize: "50px",
              lineHeight: "60px",
              fontWeight: 700,
              color: "#6A20F1",
            }}
          >
            compartilha a ideia
          </Typography>
          <Typography
            sx={{
              fontFamily: "Solway",
              fontSize: "20px",
              lineHeight: "35px",
              fontWeight: 300,
            }}
          >
            Descobrimos o que é mais importante para o momento do seu negócio e
            definimos métricas que vão determinar o sucesso do projeto.
          </Typography>
        </Box>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: "4rem 18rem 4rem 5rem",
            justifyContent: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Solway",
              fontSize: "50px",
              lineHeight: "60px",
              fontWeight: 700,
              color: "#E08D2F",
              textAlign: "right",
            }}
          >
            definição da solução
          </Typography>
          <Typography
            sx={{
              fontFamily: "Solway",
              fontSize: "20px",
              lineHeight: "35px",
              fontWeight: 300,
              textAlign: "right",
              paddingLeft: "5rem",
            }}
          >
            Entre métricas, dados e protótipos usamos de métodos de design e
            inovação para entregar fluxos e interfaces eficientes e de alto
            impacto.
          </Typography>
        </Box>

        <Box sx={{ marginBottom: "5rem" }}>
          <img
            style={{
              width: "400px",
              height: "400px",
              position: "relative",
              top: "4rem",
              right: "10rem",
            }}
            src={presentationImg}
            alt="megafone"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Metodo;
