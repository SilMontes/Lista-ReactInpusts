import React, { useState } from "react";

//create your first component
export function Home() {
	const [lista, setLista] = useState([]);
	const [contenido, setContenido] = useState();
	return (
		<div className="text-center mt-3">
			<h1>todos</h1>
			<div className="pendientes">
				<input
					key={"i"}
					value={contenido}
					onChange={e => {
						setContenido(e.target.value);
					}}
					onKeyPress={event => {
						if (event.key === "Enter") {
							if (contenido !== "") {
								setLista(lista.concat(contenido));
								setContenido("");
							} else {
								alert("Add a task");
							}
						}
					}}
				/>
				{/* <button onClick={()=>{
                if(contenido != ""){
                    setLista(lista.concat(contenido));
                    setContenido("");
                }else
            }}></button> */}
				{lista.map((item, index) => {
					return (
						<div
							key={index}
							onClick={() => {
								setLista(
									lista.filter(
										(item1, index1) => index1 != index
									)
								);
							}}>
							{item}
						</div>
					);
				})}
				<br />
			</div>
			<div className="countingtasks">
				<p>{"Total: " + lista.length}</p>
			</div>
		</div>
	);
}
