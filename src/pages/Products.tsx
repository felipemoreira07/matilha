import { Box, Divider, Typography, Button, Paper } from "@mui/material";

import taskIcon from "../assets/taskIcon.png";
import illustrationIcon from "../assets/illustrationIcon.png";
import designIcon from "../assets/designIcon.png";
import rocketIcon from "../assets/rocketIcon.png";

const Products: React.FC = () => {
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
          Nossos Produtos
        </Typography>
      </Box>

      <Box sx={{ display: "flex", flexDirection: "row" }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "35vw",
            padding: "3rem 4rem 4rem 5rem",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Solway",
              fontSize: "70px",
              lineHeight: "84px",
              fontWeight: 700,
              color: "#000",
            }}
          >
            Uma equipe especialista em produtos digitais.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Solway",
              fontSize: "20px",
              lineHeight: "35px",
              fontWeight: 300,
              marginTop: "20px",
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
            }}
          >
            Criamos soluções inovadoras, interfaces intuitivas, modernas,
            elegantes e fáceis de usar.
          </Typography>

          <Button
            sx={{
              backgroundColor: "#E08D2F",
              color: "#fff",
              fontFamily: "Solway",
              fontSize: "30px",
              fontWeight: 500,
              lineHeight: "36px",
              textTransform: "none",
              width: "28rem",
              height: "70px",
              marginTop: "50px",
              borderRadius: "138px 0px",
              ":hover": {
                backgroundColor: "#FF5F15",
              },
            }}
          >
            Fale Conosco
          </Button>
        </Box>

        <Box
          sx={{
            paddingTop: "7rem",
            display: "flex",
            flexDirection: "column",
            gap: "3rem",
            width: "65vw",
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
            <Paper
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "280px",
                gap: "5px",
                padding: "1rem",
                background: "#EDEDED",
                borderRadius: "30px",
              }}
            >
              <img
                style={{ width: "70px", height: "70px" }}
                src={taskIcon}
                alt="tarefas"
              />
              <Typography
                sx={{
                  fontFamily: "Solway",
                  fontSize: "20px",
                  lineHeight: "24px",
                  fontWeight: 500,
                }}
              >
                Estratégia Digital
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Solway",
                  fontSize: "15px",
                  lineHeight: "18px",
                  fontWeight: 300,
                }}
              >
                Somos uma fábrica de software com foco na melhor exper
              </Typography>
            </Paper>
            <Paper
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "280px",
                gap: "5px",
                padding: "1rem",
                background: "#EDEDED",
                borderRadius: "30px",
              }}
            >
              <img
                style={{ width: "70px", height: "70px" }}
                src={illustrationIcon}
                alt="pincel"
              />
              <Typography
                sx={{
                  fontFamily: "Solway",
                  fontSize: "20px",
                  lineHeight: "24px",
                  fontWeight: 500,
                }}
              >
                Design UX/UI
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Solway",
                  fontSize: "15px",
                  lineHeight: "18px",
                  fontWeight: 300,
                }}
              >
                Somos uma fábrica de software com foco na melhor exper
              </Typography>
            </Paper>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "row", gap: "2rem" }}>
            <Paper
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "280px",
                gap: "5px",
                padding: "1rem",
                background: "#EDEDED",
                borderRadius: "30px",
              }}
            >
              <img
                style={{ width: "70px", height: "70px" }}
                src={designIcon}
                alt="ui design"
              />
              <Typography
                sx={{
                  fontFamily: "Solway",
                  fontSize: "20px",
                  lineHeight: "24px",
                  fontWeight: 500,
                }}
              >
                Desenvolvimento
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Solway",
                  fontSize: "15px",
                  lineHeight: "18px",
                  fontWeight: 300,
                }}
              >
                Somos uma fábrica de software com foco na melhor exper
              </Typography>
            </Paper>
            <Paper
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "280px",
                gap: "5px",
                padding: "1rem",
                background: "#EDEDED",
                borderRadius: "30px",
              }}
            >
              <img
                style={{ width: "70px", height: "70px" }}
                src={rocketIcon}
                alt="foguete"
              />
              <Typography
                sx={{
                  fontFamily: "Solway",
                  fontSize: "20px",
                  lineHeight: "24px",
                  fontWeight: 500,
                }}
              >
                Agência Digital
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Solway",
                  fontSize: "15px",
                  lineHeight: "18px",
                  fontWeight: 300,
                }}
              >
                Somos uma fábrica de software com foco na melhor exper
              </Typography>
            </Paper>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Products;
