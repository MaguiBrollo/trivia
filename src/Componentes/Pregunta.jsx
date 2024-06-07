import { useState } from "react";

import {
	Button,
	Card,
	CardContent,
	CardMedia,
	CardActionArea,
	FormControlLabel,
	FormControl,
	FormHelperText,
	FormLabel,
	Radio,
	RadioGroup,
	Stack,
	Typography,
} from "@mui/material";

/* ======================================================== */
export const Pregunta = ({
	preguntasTrivia,
	setIniciar,
	puntos,
	setPuntos,
	indice,
	setIndice,
	total,
}) => {
	const { pregunta, imgURL, opciones, respuestaCorrecta } = preguntasTrivia;

	const [value, setValue] = useState("");
	const [error, setError] = useState();
	const [helperText, setHelperText] = useState("");
	const [desabilitado, setDesabilitado] = useState(true);
	const [fin, setFin] = useState(false);

	const handleRadioChange = (event) => {
		setValue(event.target.value);
		setHelperText(" ");
		setError(false);
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		if (value === "") {
			setHelperText("Seleccione una opción");
			setError(true);
		} else {
			setDesabilitado(false);
			if (value === respuestaCorrecta) {
				setHelperText("¡Correcto!");
				setError(false);
				setPuntos(puntos + 1);
			} else {
				setHelperText("¡Respuesta incorrecta!");
				setError(true);
			}
		}
	};

	const handleClicSigPreg = () => {
		setHelperText(" ");
		setError(false);
		setValue("");

		setDesabilitado(true);
		setIndice(indice + 1);

		if (indice === total - 2) {
			//Pregunta anterior
			setFin(true); //activa boton de fin
		}

		if (indice + 1 === total) {
			setIniciar(false);
		}
	};

	/* ---------------------------------- */
	return (
		<Card
			sx={{
				maxWidth: 400,
				width: "100%",
				margin: "10px",
			}}
		>
			<CardActionArea>
				<Typography gutterBottom variant="h6" component="div" sx={{ marginTop: "5px", color: "#BD8C0F", textAlign: "center" }}>
					Pregunta {indice + 1}/{total}  - Puntos acumulados: {puntos}{" "}
				</Typography>

				<CardMedia component="img" image={imgURL} alt="Imagen ilustrativa" />
				<CardContent>
					<Typography gutterBottom variant="h6" component="div">
						{pregunta}
					</Typography>

					<form onSubmit={handleSubmit}>
						<FormControl sx={{ m: 3 }} error={error} variant="standard">
							<FormLabel id="demo-error-radios">
								Seleccionar una respuesta...
							</FormLabel>
							<RadioGroup
								aria-labelledby="demo-error-radios"
								name="quiz"
								value={value}
								onChange={handleRadioChange}
							>
								<FormControlLabel
									value={opciones[0]}
									control={<Radio />}
									label={opciones[0]}
								/>
								<FormControlLabel
									value={opciones[1]}
									control={<Radio />}
									label={opciones[1]}
								/>
								<FormControlLabel
									value={opciones[2]}
									control={<Radio />}
									label={opciones[2]}
								/>
								<FormControlLabel
									value={opciones[3]}
									control={<Radio />}
									label={opciones[3]}
								/>
							</RadioGroup>
							<FormHelperText>{helperText}</FormHelperText>

							<Stack
								direction="row"
								spacing={2}
								sx={{
									width: "100%",
									alignItems: "center",
									justifyContent: "center",
								}}
							>
								<Button
									sx={{ mt: 1, mr: 1 }}
									type="submit"
									variant="outlined"
									disabled={!desabilitado}
								>
									Enviar Respuesta
								</Button>

								{!fin ? (
									<Button
										sx={{ mt: 1, mr: 1 }}
										type="submit"
										variant="outlined"
										disabled={desabilitado}
										onClick={handleClicSigPreg}
									>
										Siguiente Pregunta
									</Button>
								) : (
									<Button
										sx={{ mt: 1, mr: 1 }}
										type="submit"
										variant="outlined"
										disabled={desabilitado}
										onClick={handleClicSigPreg}
									>
										Fin del Juego
									</Button>
								)}
							</Stack>
						</FormControl>
					</form>
				</CardContent>
			</CardActionArea>
		</Card>
	);
};
