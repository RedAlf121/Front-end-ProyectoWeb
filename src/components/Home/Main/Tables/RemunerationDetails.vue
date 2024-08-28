<template>
  <transition name="modal">
    <div class="modal-mask" @click.self="closeModal">
      <div class="details-container">
        <h2>{{$t('remunerationDetails.title')}}</h2>
        <p><strong>{{$t('remunerationDetails.workerLabel')}}</strong> {{ detailsData.trabajador }}</p>
        <p><strong>{{$t('remunerationDetails.deliverableMonthLabel')}}</strong> {{ detailsData.mesEntregable }}</p>
        <p><strong>{{$t('remunerationDetails.deliverableValueLabel')}}</strong> {{ detailsData.valorEntregable }}</p>
        <p><strong>{{$t('remunerationDetails.accountNumberLabel')}}</strong> {{ detailsData.numeroCuenta }}</p>
        <button class="accept-button" @click="closeModal">{{$t('remunerationDetails.acceptButton')}}</button>
      </div>
    </div>
  </transition>
</template>


<script lang="ts">
export default {
  props: ['detailsData'],
  methods: {
    closeModal() {
      this.$emit('close');
    }
  }
};

</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.5);
}

.details-container {
  position: relative;
  max-width: 600px;
  margin: 1.75rem auto;
  padding: 1rem;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0.15);
}

h2 {
  margin-bottom: 0.5rem;
  font-size: 1.5rem;
  color: #333;
}

p {
  margin-bottom: 0.5rem;
  font-weight: bold;
}

strong {
  color: #333;
}

.accept-button {
  display: block;
  width: 100%;
  padding: 0.5rem;
  background-color: #007bff;
  color: white;
  font-weight: bold;
  border-radius: 5px;
  margin-top: 1rem;
  cursor: pointer;
}

.modal-enter-active,.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter,.modal-leave {
  opacity: 0;
}
</style>