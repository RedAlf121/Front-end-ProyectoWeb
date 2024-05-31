<template>
  <div class="formulario-container">
    <form action="/submit-form" method="post" class="formulario">
      <fieldset>
        <legend>Contrato</legend>
        <div class="campo">
          <label for="titulo">Título:</label>
          <input type="text" id="titulo" name="titulo" class="entrada-texto">
        </div>
        <div class="campo">
          <label for="cliente">Cliente:</label>
          <select id="cliente" name="cliente" class="seleccion-cliente">
            <option value="">Seleccionar</option>
            <!-- Opciones de clientes aquí -->
            <option value="cliente1">Cliente 1</option>
            <option value="cliente2">Cliente 2</option>
            <option value="cliente3">Cliente 3</option>
          </select>
          <button type="button" class="boton-seleccion">Inserta nuevo cliente</button>
        </div>
        <div class="campo">
          <label for="gestor">Gestor:</label>
          <select id="gestor" name="gestor" class="seleccion-gestor">
            <option value="">Seleccionar</option>
            <!-- Opciones de clientes aquí -->
            <option value="cliente1">Cliente 1</option>
            <option value="cliente2">Cliente 2</option>
            <option value="cliente3">Cliente 3</option>
          </select>
        </div>
      </fieldset>

      <fieldset>
        <legend>Fechas</legend>
        <div class="fechas-container">
          <div class="campo">
            <label for="fecha-inicio">Fecha de inicio:</label>
            <input type="date" id="fecha-inicio" name="fecha-inicio" class="entrada-date">
          </div>
          <div class="campo">
            <label for="fecha-fin">Fecha fin:</label>
            <input type="date" id="fecha-fin" name="fecha-fin" class="entrada-date">
          </div>
          <div class="campo">
            <label for="fecha-conciliacion">Fecha conciliación:</label>
            <input type="date" id="fecha-conciliacion" name="fecha-conciliacion" class="entrada-date">
          </div>
        </div>
      </fieldset>
      <div class="secciones-laterales">
        <fieldset>
          <legend>Detalles</legend>
          <div class="campo">
            <label for="descripcion">Descripción:</label>
            <textarea id="descripcion" name="descripcion" class="area-texto"></textarea>
          </div>
          <div class="campo">
            <label for="area">Área de trabajo:</label>
            <input type="text" id="area" name="Ärea" class="entrada-texto">
          </div>
        </fieldset>

        <fieldset>
          <legend>Configuración</legend>
          <div class="campo">
            <label>Margen de ganancia (%):</label>
            <input type="number" id="margen-ganancia" name="margen-ganancia" step="0.01" class="entrada-numero">
          </div>
          <div class="configuracion-moneda">
            <label>Moneda:</label>
            <input type="checkbox" id="mlc" name="moneda" value="MLC" class="opcion-moneda">
            <label for="mlc">MLC</label>
            <input type="checkbox" id="cup" name="moneda" value="CUP" class="opcion-moneda">
            <label for="cup">CUP</label>
          </div>
        </fieldset>
      </div>
      <div class="acciones">
  <input type="submit" value="Enviar" class="boton-enviar">
  <input type="reset" value="Cancelar" class="boton-cancelar">
</div>
    </form>
  </div>
</template>

<style>
/* Estilo para el contenedor principal */
.formulario-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 200px);
  /* Restamos 200px para dejar espacio arriba y abajo */
  margin: 5 auto;
  /* Centra horizontalmente */
  margin-top: 10%; /* Margen superior del 10% */
  margin-bottom: 10%; 
}

/* Estilo para el formulario */
.formulario {
  width: 100%;
  /* Ajusta el ancho según sea necesario */
  max-width: 600px;
  /* Limita el ancho máximo del formulario */
  padding: 20px;
  /* Agrega algo de padding alrededor del formulario */
  background-color: #fff;
  /* Color de fondo del formulario */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* Sombra para darle profundidad */
  border-radius: 8px;
  /* Redondea las esquinas */
}


.seleccion-cliente,
.seleccion-gestor {
  font-size: 16px;
  /* Aumenta el tamaño de fuente */
  padding: 10px;
  /* Añade padding para dar más espacio interior */
  margin-bottom: 10px;
  /* Añade margen inferior para separarlos */
  width: 100%;
  /* Asegura que ocupen todo el ancho disponible */
}

.seleccion-cliente option,
.seleccion-gestor option {
  padding: 8px 12px;
  /* Aumenta el padding de las opciones internas */
  font-size: 14px;
  /* Reduce el tamaño de fuente de las opciones para no sobrepasar el tamaño del select */
}

.fechas-container {
  display: flex;
  justify-content: space-between;
  /* Ajusta el espacio entre los campos */
  flex-wrap: wrap;
  /* Permite que los elementos se ajusten a la siguiente línea si es necesario */
}

.campo {
  flex: 1;
  /* Hace que cada campo ocupe igual espacio disponible */
  margin-right: 10px;
  /* Añade un poco de margen a la derecha de cada campo */
}

@media (max-width: 600px) {
  .campo {
    flex-basis: 100%;
    /* En pantallas pequeñas, cada campo ocupa todo el ancho disponible */
  }
}


.boton-seleccion,
.boton-enviar {
  background-color: #0671b8;
  /* Azul claro */
  color: white;
  /* Texto blanco */
  border: none;
  /* Quita el borde predeterminado */
  cursor: pointer;
  /* Cambia el cursor al pasar el mouse */
  padding: 10px 20px;
  /* Espacio alrededor del texto */
  text-align: center;
  /* Centra el texto */
  text-decoration: none;
  /* Quita subrayado */
  display: inline-block;
  /* Permite el uso de propiedades de bloque */
  transition: background-color 0.3s ease;
  /* Suaviza el cambio de color de fondo */
}

.boton-seleccion:hover,
.boton-enviar:hover {
  background-color: #0671b8;

}



.secciones-laterales {
  display: flex;
  justify-content: space-between; /* Ajusta el espacio entre las secciones */
  flex-wrap: wrap; /* Permite que las secciones se ajusten a la siguiente línea si es necesario */
}

.secciones-laterales fieldset {
  flex: 1; /* Hace que cada sección ocupe igual espacio disponible */
  margin-right: 20px; /* Añade un margen a la derecha de la sección de detalles para separarla de la de configuración */
}

@media (max-width: 800px) {
 .secciones-laterales {
    flex-direction: column; /* Cambia a disposición en columna en pantallas pequeñas */
  }

 .secciones-laterales fieldset:last-child {
    margin-right: 0; /* Elimina el margen derecho en pantallas pequeñas */
  }
}

.acciones{
  display: flex;
  justify-content: flex-end; /* Alinea los botones a la derecha */
  gap: 10px; /* Espacio entre los botones */
}
.boton-enviar,
.boton-cancelar {
  background-color:#0671b8;
  color: white; /* Texto blanco */
  border: none; /* Quita el borde predeterminado */
  cursor: pointer; /* Cambia el cursor al pasar el mouse */
  padding: 10px 20px; /* Espacio alrededor del texto */
  text-align: center; /* Centra el texto */
  text-decoration: none; /* Quita subrayado */
  display: inline-block; /* Permite el uso de propiedades de bloque */
  transition: background-color 0.3s ease; /* Suaviza el cambio de color de fondo */
}

.boton-enviar:hover,
.boton-cancelar:hover {
  background-color: #0671b8;
}


</style>