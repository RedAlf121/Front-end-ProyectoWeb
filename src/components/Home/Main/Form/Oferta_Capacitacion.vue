<template>
  <div class="formulario-container">
      <form action="/submit-form" method="post" class="formulario">
          <fieldset>
              <legend>{{$t('trainingOfferForm.legend')}}</legend>
              <div class="campo">
                  <label for="nombre" class="label-margin">{{$t('trainingOfferForm.nameLabel')}}</label>
                  <input type="text" id="nombre" name="nombre" class="entrada-texto">
              </div>
              <div class="campo">
                  <label for="fecha-inicio" class="label-margin">{{$t('trainingOfferForm.startDateLabel')}}</label>
                 <input type="date" id="fecha-inicio" name="fecha-inicio" class="entrada-texto">
              </div>
              <div class="campo">
                  <label for="fecha-fin" class="label-margin">{{$t('trainingOfferForm.endDateLabel')}}</label>
                 <input type="date" id="fecha-fin" name="fecha-fin" class="entrada-texto">
              </div>
          </fieldset>

          <fieldset>
              <legend>{{$t('trainingOfferForm.detailsLegend')}}</legend>
              <div class="campo">
                  <label for="descripcion">{{$t('trainingOfferForm.descriptionLabel')}}</label>
                  <textarea id="descripcion" name="descripcion" class="entrada-texto"></textarea>
              </div>
          </fieldset>

          <div class="acciones">
              <input type="submit" :value="$t('trainingOfferForm.saveButton')" class="boton-enviar">
              <input type="reset" :value="$t('trainingOfferForm.cancelButton')" class="boton-cancelar">
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
}

.entrada-texto {
 
  width: 100%;
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