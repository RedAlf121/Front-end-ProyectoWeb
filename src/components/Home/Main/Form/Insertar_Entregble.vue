<template>
    <div class="formulario-container">
        <form action="/submit-form" method="post" class="formulario">
            <fieldset>
                <legend>{{$t('deliverableForm.legend')}}</legend>
                <div class="campo">
                    <label for="fecha-fin" class="label-margin">{{$t('deliverableForm.workerLabel')}}</label>
                    <select id="cliente" name="cliente" class="entrada-texto">
                        <option value="">{{$t('deliverableForm.selectOption')}}</option>
                        <!-- Opciones de clientes aquí -->
                        <option value="cliente1">Cliente 1</option>
                        <option value="cliente2">Cliente 2</option>
                        <option value="cliente3">Cliente 3</option>
                    </select>
                </div>
                <div class="campo">
                    <label for="fecha-inicio" class="label-margin">{{$t('deliverableForm.hoursLabel')}}</label>
                    <input type="number" id="margen-ganancia" name="margen-ganancia" class="entrada-texto">
                </div>
            </fieldset>

            <fieldset>
                <div class="campo">
                    <label for="descripcion">{{$t('deliverableForm.taskLabel')}}</label>
                    <textarea id="descripcion" name="descripcion" class="entrada-texto"></textarea>
                </div>
            </fieldset>

            <div class="acciones">
                <input type="submit" value="{{$t('deliverableForm.saveButton')}}" class="boton-enviar">
                <input type="reset" value="{{$t('deliverableForm.cancelButton')}}" class="boton-cancelar">
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
    max-width: 400px;
    /* Ancho máximo reducido */
    padding: 10px;
    /* Padding reducido */
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
}

/* Margen a la izquierda de las letras */
.label-margin {
    margin-left: 5px;
    /* Reducido para ahorrar espacio */
}

label {
    width: 150px;
    /* Ajusta este valor según tus necesidades */
    display: inline-block;
    /* Necesario para aplicar el ancho */
}


/* Estilos para los campos de entrada */
.campo {
    display: flex;
    align-items: center;
    gap: 5px;
    /* Espacio reducido */
}

.entrada-texto {
    padding: 10px;
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
    font-size: 14px;
    /* Tamaño de fuente menor opcional */
    padding: 8px 16px;
    /* Espacio interno reducido */
    margin-top: 5%;
    margin-bottom: 5%;
}

/* Hover efecto para los botones */
.boton-enviar:hover,
.boton-cancelar:hover {
    background-color: #0671b8;
}
</style>