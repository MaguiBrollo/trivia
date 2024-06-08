import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Container } from "@mui/material";
import { MdRestartAlt } from "react-icons/md";

import imgTrivia from "./../assets/trivia.png";

export const Resultado = ({ puntos, setIniciar, total }) => {
	return (
		<Container
			sx={{ margin: "auto", display: "flex", justifyContent: "center" }}
		>
			<Card
				sx={{
					maxWidth: "80%",
					width: "100%",
					height: "100%",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					padding: "20px",
				}}
			>
				<CardActionArea>
					<CardMedia
						component="img"
						width="30%"
						image={imgTrivia}
						alt="Imagen Trivia"
					/>
					<CardContent
						sx={{
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							width: "90%",
							margin: "10px auto",
						}}
					>
						<Typography gutterBottom variant="h4">
							RESULTADO
						</Typography>
						<Typography variant="h5" color="text.secondary">
							PUNTAJE OBTENIDO: {puntos}
						</Typography>
						{puntos > total && (
							<Typography gutterBottom variant="h5" component="div">
								¡¡Felicitaciones excelente puntaje!!
							</Typography>
						)}
					</CardContent>
				</CardActionArea>
				<CardActions>
					<Button
						variant="contained"
						sx={{
							marginTop: "30px",
							bgcolor: "#FFA816",
							height: "50px",
							fontSize: "1.5rem",
							":hover": {
								backgroundColor: "#C19A3F",
							},
						}}
						onClick={() => setIniciar(1)}
						endIcon={<MdRestartAlt />}
					>
						Inicio
					</Button>
				</CardActions>
			</Card>
		</Container>
	);
};
