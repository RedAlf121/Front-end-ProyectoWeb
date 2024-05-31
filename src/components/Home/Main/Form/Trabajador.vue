<template>
    <div class="formulario-container">
        <form action="/submit-form" method="post" class="formulario">
            <fieldset>
                <legend>Trabajador</legend>
                <div class="campo">
                    <label for="dni-texto" class="label-margin">DNI:</label>
                    <input type="text" id="dni-texto" name="dni-texto" class="entrada-texto">
                </div>
                <div class="campo">
                    <label for="nombre-texto" class="label-margin">Nombre:</label>
                    <input type="text" id="nombre-texto" name="nombre-texto" class="entrada-texto">
                </div>
                <div class="campo">
                    <label for="direccion" class="label-margin">Dirección:</label>
                    <input type="text" id="direccion" name="direccion" class="entrada-texto">
                </div>
                <div class="campo">
                    <label for="telefono" class="label-margin">Teléfono:</label>
                    <input type="tel" id="telefono" name="telefono" class="entrada-texto">
                </div>
                <div class="campo">
                    <label for="email" class="label-margin">Email:</label>
                    <input type="email" id="email" name="email" class="entrada-texto">
                </div>
                <div class="campo">
                    <label for="departamento-select" class="label-margin">Departamento:</label>
                    <select id="departamento-select" name="departamento-select" class="entrada-texto">
                        <option value="">Seleccione un departamento</option>
                        <!-- Aquí van las opciones de departamentos -->
                    </select>
                </div>
                <div class="campo">
                    <label for="numero-de-cuenta" class="label-margin">Número de Cuenta:</label>
                    <input type="text" id="numero-de-cuenta" name="numero-de-cuenta" class="entrada-texto">
                </div>
                <div class="campo">
                    <label for="categoria-select" class="label-margin">Categoría:</label>
                    <select id="categoria-select" name="categoria-select" class="entrada-texto">
                        <option value="">Seleccione una categoría</option>
                        <!-- Aquí van las opciones de categorías -->
                    </select>
                </div>
            </fieldset>

            <div class="acciones">
                <input type="submit" value="Guardar" class="boton-enviar">
                <input type="reset" value="Cancelar" class="boton-cancelar">
            </div>
        </form>
    </div>
</template>

<style scoped>
/* Estilo para el contenedor principal */
.formulario-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 200px);
  margin: 5 auto;
}

/* Estilo para el formulario */
.formulario {
  width: 100%;
  max-width: 400px; /* Ancho máximo reducido */
  padding: 10px; /* Padding reducido */
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

/* Margen a la izquierda de las letras */
.label-margin {
  margin-left: 5px; /* Reducido para ahorrar espacio */
}

label{
    width: 150px; /* Ajusta este valor según tus necesidades */
  display: inline-block; /* Necesario para aplicar el ancho */
}


/* Estilos para los campos de entrada */
.campo {
  display: flex;
  align-items: center;
  gap: 5px; /* Espacio reducido */
  width: 100%; 
  height: 5%;
}

.entrada-texto,
#departamento-select,
#categoria-select {
    width: 100%; /* Ajusta según sea necesario */
}

@media (max-width: 600px) {
.campo {
    flex-basis: 100%;
  }
}

/* Estilos para los botones */
.boton-enviar,
.boton-cancelar {
  font-size: 14px; /* Tamaño de fuente menor opcional */
  padding: 8px 16px; /* Espacio interno reducido */
  margin-top: 5%;
  margin-bottom: 5%;
}

/* Hover efecto para los botones */
.boton-enviar:hover,
.boton-cancelar:hover {
  background-color: #0671b8;
}
</style>