<template>
  <div class="formulario-container">
    <form action="/submit-form" method="post" class="formulario">
      <fieldset>
        <legend>Contrato</legend>
        <table>
          <tr>
            <td><label for="titulo">Título:</label></td>
            <td><input type="text" id="titulo" name="titulo" class="entrada-texto"></td>
          </tr>
          <tr>
            <td><label for="cliente">Cliente:</label></td>
            <td>
              <select id="cliente" name="cliente" class="seleccion-cliente">
                <option value="">Seleccionar</option>
                <!-- Opciones de clientes aquí -->
                <option value="cliente1">Cliente 1</option>
                <option value="cliente2">Cliente 2</option>
                <option value="cliente3">Cliente 3</option>
              </select>
              
          
            </td>
          </tr>
          <tr>
            <td><label for="gestor">Gestor:</label></td>
            <td>
              <select id="gestor" name="gestor" class="seleccion-gestor">
                <option value="">Seleccionar</option>
                <!-- Opciones de clientes aquí -->
                <option value="cliente1">Cliente 1</option>
                <option value="cliente2">Cliente 2</option>
                <option value="cliente3">Cliente 3</option>
              </select>
            </td>
          </tr>
        </table>
      </fieldset>

      <fieldset>
        <legend>Fechas</legend>
        <table>
          <tr>
            <td><label for="fecha-inicio">Fecha de inicio:</label></td>
            <td><input type="date" id="fecha-inicio" name="fecha-inicio" class="entrada-date"></td>
          </tr>
          <tr>
            <td><label for="fecha-fin">Fecha fin:</label></td>
            <td><input type="date" id="fecha-fin" name="fecha-fin" class="entrada-date"></td>
          </tr>
          <tr>
            <td><label for="fecha-conciliacion">Fecha conciliación:</label></td>
            <td><input type="date" id="fecha-conciliacion" name="fecha-conciliacion" class="entrada-date"></td>
          </tr>
        </table>
      </fieldset>

      <div class="secciones-laterales">
        <fieldset>
          <legend>Detalles</legend>
          <table>
            
            <tr>
              <td><label for="area">Área de trabajo:</label></td>
              <td><input type="text" id="area" name="Ärea" class="entrada-texto"></td>
            </tr>
            <tr>
              <td><label for="descripcion">Descripción:</label></td>
              <td><textarea id="descripcion" name="descripcion" class="area-texto"></textarea></td>
            </tr>
          </table>
        </fieldset>

        <fieldset>
          <legend>Configuración</legend>
          <table>
            <tr>
              <td><label>Margen de ganancia (%):</label></td>
              <td><input type="number" id="margen-ganancia" name="margen-ganancia" step="0.01" class="entrada-numero"></td>
            </tr>
            <tr>
              <td><label>Moneda:</label></td>
              <td>
                <input type="checkbox" id="mlc" name="moneda" value="MLC" class="opcion-moneda">
                <label for="mlc">MLC</label>
                <input type="checkbox" id="cup" name="moneda" value="CUP" class="opcion-moneda">
                <label for="cup">CUP</label>
              </td>
            </tr>
          </table>
        </fieldset>
      </div>

      <div class="acciones">
        <button type="button" class="boton-seleccion">Inserta nuevo cliente</button>
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
  margin: 5 auto;
  margin-top: 10%;
  margin-bottom: 10%;
}

/* Estilo para el formulario */
.formulario {
  width: 100%;
  max-width: 600px;
  padding: 20px;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.seleccion-cliente,
.seleccion-gestor {
  font-size: 16px;
  padding: 2%;
  margin-bottom: 10px;
  width: 100%;
}
#titulo{
    margin-bottom: 10px;
}
.seleccion-cliente option,
.seleccion-gestor option {
  padding: 8px 12px;
  font-size: 14px;
}

.fechas-container {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.campo {
  flex: 1;
  margin-right: 10px;
}

@media (max-width: 600px) {
  .campo {
    flex-basis: 100%;
  }
}

.boton-seleccion,
.boton-enviar {
  background-color: #0671b8;
  color: white;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  transition: background-color 0.3s ease;
}

.boton-seleccion:hover,
.boton-enviar:hover {
  background-color: #0671b8;
}

.secciones-laterales {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

.secciones-laterales fieldset {
  flex: 1;
  margin-right: 20px;
}

@media (max-width: 800px) {
  .secciones-laterales {
    flex-direction: column;
  }

  .secciones-laterales fieldset:last-child {
    margin-right: 0;
  }
}

.acciones {
  display: flex;
  justify-content: flex-end;
  gap: 10px;
}

.boton-enviar,
.boton-cancelar {
  background-color: #0671b8;
  color: white;
  border: none;
  cursor: pointer;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  transition: background-color 0.3s ease;
}

.boton-enviar:hover,
.boton-cancelar:hover {
  background-color: #0671b8;
}
.boton-seleccion{
  margin-right: 35%;
}

</style>
