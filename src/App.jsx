import { useState } from "react";
import { PantallaInicio } from "./Componentes/PantallaInicio";
import { Pregunta } from "./Componentes/Pregunta";

import { Box, Container, Typography } from "@mui/material";

import { preguntasTrivia } from "./preguntas";
//import { v4 as uuidv4 } from "uuid"; //para generar ID random, y que no se repitan

/* ======================================= */
function App() {
	const [iniciar, setIniciar] = useState(false);
	const [puntos, setPuntos] = useState(0);
	const [indice, setIndice] = useState(0);

	/* ----------------- */
	return (
		<Box
			sx={{
				maxWidth: "100%,",
				bgcolor: "#F9E7B9",
				minHeight: "100vh",
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
			}}
		>
			{!iniciar ? (
				<Container
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<PantallaInicio
						setIniciar={setIniciar}
						
						setPuntos={setPuntos}
						setIndice={setIndice}
					/>
				</Container>
			) : (
				<Container
					sx={{
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
					}}
				>
					<Typography
						variant="h4"
						componente="h2"
						m={3}
						sx={{ marginTop: "20px", color: "#BD8C0F", textAlign: "center" }}
					>
						Comenzó el juego... ¡mucha suerte!
					</Typography>

					<Pregunta
						preguntasTrivia={preguntasTrivia[indice]}
						setIniciar={setIniciar}
						puntos={puntos}
						setPuntos={setPuntos}
						indice={indice}
						setIndice={setIndice}
						total={preguntasTrivia.length}
					/>
				
				</Container>
			)}
		</Box>
	);
}

export default App;