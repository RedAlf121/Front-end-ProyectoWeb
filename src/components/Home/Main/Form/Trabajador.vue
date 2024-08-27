<template>
    <div class="formulario-container">
        <form action="/submit-form" method="post" class="formulario">
            <fieldset>
                <legend>{{$t('workerForm.legend')}}</legend>
                <table>
                    <tr>
                        <td><label for="dni-texto" class="label-margin">{{$t('workerForm.dniLabel')}}</label></td>
                        <td><input type="text" id="dni-texto" name="dni-texto" class="entrada-texto"></td>
                    </tr>
                    <tr>
                        <td><label for="nombre-texto" class="label-margin">{{$t('workerForm.nameLabel')}}</label></td>
                        <td><input type="text" id="nombre-texto" name="nombre-texto" class="entrada-texto"></td>
                    </tr>
                    <tr>
                        <td><label for="direccion" class="label-margin">{{$t('workerForm.addressLabel')}}</label></td>
                        <td><input type="text" id="direccion" name="direccion" class="entrada-texto"></td>
                    </tr>
                    <tr>
                        <td><label for="telefono" class="label-margin">{{$t('workerForm.phoneLabel')}}</label></td>
                        <td><input type="tel" id="telefono" name="telefono" class="entrada-texto"></td>
                    </tr>
                    <tr>
                        <td><label for="email" class="label-margin">{{$t('workerForm.emailLabel')}}</label></td>
                        <td><input type="email" id="email" name="email" class="entrada-texto"></td>
                    </tr>
                    <tr>
                        <td><label for="departamento-select" class="label-margin">{{$t('workerForm.departmentLabel')}}</label></td>
                        <td>
                            <select id="departamento-select" name="departamento-select" class="entrada-texto">
                                <option value="">{{$t('workerForm.selectOption')}}</option>
                                <!-- Aquí van las opciones de departamentos -->
                            </select>
                        </td>
                    </tr>
                    <tr>
                        <td><label for="numero-de-cuenta" class="label-margin">{{$t('workerForm.accountNumberLabel')}}</label></td>
                        <td><input type="text" id="numero-de-cuenta" name="numero-de-cuenta" class="entrada-texto"></td>
                    </tr>
                    <tr>
                        <td><label for="categoria-select" class="label-margin">{{$t('workerForm.categoryLabel')}}</label></td>
                        <td>
                            <select id="categoria-select" name="categoria-select" class="entrada-texto">
                                <option value="">{{$t('workerForm.selectOption')}}</option>
                                <!-- Aquí van las opciones de categorías -->
                            </select>
                        </td>
                    </tr>
                </table>
            </fieldset>

            <div class="acciones">
                <input type="submit" value="{{$t('workerForm.saveButton')}}" class="boton-enviar">
                <input type="reset" value="{{$t('workerForm.cancelButton')}}" class="boton-cancelar">
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
    margin-left: 20%;
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
    width: 100%;
    height: 5%;
}

.entrada-texto,
#departamento-select,
#categoria-select {
    width: 100%;
    /* Ajusta según sea necesario */
}
#departamento-select,
#categoria-select {
   height: 100%;
   font-size: 14px;
  padding: 3%; 
    /* Ajusta según sea necesario */
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
