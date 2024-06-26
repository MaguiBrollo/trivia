//import React from 'react'
import { Button, Box, CardMedia, Container, Typography } from "@mui/material";
import { IoPlayForward } from "react-icons/io5";
import imgTrivia from "./../assets/trivia.png";

export const PantallaInicio = ({
	setIniciar,
	setPuntos,
	setIndice,
}) => {
	const iniciarJuego = () => {
		setIndice(0);
		setPuntos(0);
		setIniciar(2);
	};
	return (
		<Container sx={{ padding: "20px" }}>
			<Typography
				variant="h3"
				componente="p"
				sx={{ marginTop: "30px", color: "#BD8C0F", textAlign: "center" }}
			>
				TRIVIA
			</Typography>
			<Typography
				variant="h4"
				componente="p"
				sx={{ marginTop: "30px", color: "#BD8C0F", textAlign: "center" }}
			>
				UN JUEGO DE PREGUNTAS Y RESPUESTAS
			</Typography>
			<CardMedia
				component="img"
				height="50%"
				image={imgTrivia}
				alt="green iguana"
			/>

			<Typography
				variant="h5"
				componente="h2"
				sx={{
					marginTop: "60px",
					color: "#BD8C0F",
					textAlign: "center",
				}}
			>
				Una selección de preguntas sobre ciencia, arte, historia, geografía,
				entretenimiento y deporte.
			</Typography>

			<Box
				sx={{
					display: "flex",
					justifyContent: "flex-end",
				}}
			>
				<Button
					variant="contained"
					sx={{
						marginTop: "30px",
						bgcolor: "#FFA816",
						height: "70px",
						fontSize: "1.3rem",
						":hover": {
							backgroundColor: "#C19A3F",
						},
					}}
					onClick={iniciarJuego}
					endIcon={<IoPlayForward />}
				>
					Iniciar Juego
				</Button>
			</Box>
		</Container>
	);
};
