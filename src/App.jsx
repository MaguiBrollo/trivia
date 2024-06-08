import { useState } from "react";
import { PantallaInicio } from "./Componentes/PantallaInicio";
import { Pregunta } from "./Componentes/Pregunta";
import { Resultado } from "./Componentes/Resultado";

import {
	Box,
	CircularProgress,
	Container,
	GlobalStyles,
	Typography,
} from "@mui/material";

import { preguntasTrivia } from "./preguntas";

//import { v4 as uuidv4 } from "uuid"; //para generar ID random, y que no se repita

/* ======================================= */
function App() {
	const [iniciar, setIniciar] = useState(1);
	const [puntos, setPuntos] = useState(0);
	const [indice, setIndice] = useState(0);
	const [spinner, setSpinner] = useState(true);

	/* ----------------- */
	return (
		<>
			<GlobalStyles
				styles={{
					"#root": {
						width: "100%",
						minHeight: "100vh",
					},
				}}
			/>

			<Box
				sx={{
					maxWidth: "100%,",
					minHeight: "100vh",
					bgcolor: "#F9E7B9",

					display: "flex",
					justifyContent: "center",
					flexDirection: "column",
				}}
			>
				{iniciar === 1 && (
					<Container>
						<PantallaInicio
							setIniciar={setIniciar}
							setPuntos={setPuntos}
							setIndice={setIndice}
						/>
					</Container>
				)}
				{iniciar === 2 && (
					<Container
						sx={{
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
						}}
					>
						{spinner && (
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
									sx={{
										color: "#BD8C0F",
										textAlign: "center",
										margin: "20px auto",
									}}
								>
									Comenzó el juego... ¡mucha suerte!
								</Typography>

								<CircularProgress sx={{ color: "#BD8C0F" }} />
								{setTimeout(() => {
									setSpinner(false);
								}, 3000)}
							</Container>
						)}

						{!spinner && (
							<Pregunta
								preguntasTrivia={preguntasTrivia[indice]}
								setIniciar={setIniciar}
								puntos={puntos}
								setPuntos={setPuntos}
								indice={indice}
								setIndice={setIndice}
								total={preguntasTrivia.length}
							/>
						)}
					</Container>
				)}
				{iniciar === 3 && (
					<Resultado
						puntos={puntos}
						setIniciar={setIniciar}
						total={preguntasTrivia.length / 2}
					/>
				)}
			</Box>
		</>
	);
}

export default App;
