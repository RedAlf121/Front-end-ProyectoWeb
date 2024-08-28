<template>
  <transition name="modal">
    <div class="modal-mask" @click.self="closeModal">
      <div class="receipt-container">
        <h2>{{$t('receiptForm.title')}}</h2>
        <p><strong>{{$t('receiptForm.clientLabel')}}</strong> {{$t('receiptData.client')}}</p>
        <p><strong>{{$t('receiptForm.contractLabel')}}</strong> {{$t('receiptData.contract')}}</p>
        <p><strong>{{$t('receiptForm.invoiceMonthLabel')}}</strong> {{$t('receiptData.invoiceMonth')}}</p>
        <p><strong>{{$t('receiptForm.paymentDateLabel')}}</strong> {{ formattedDate }}</p>
        <p><strong>{{$t('receiptForm.amountLabel')}}</strong> {{$t('receiptData.amount')}}</p>
        <button class="accept-button" @click="closeModal">{{$t('receiptForm.acceptButton')}}</button>
      </div>
    </div>
  </transition>
</template>


<script>
export default {
  props: ['receiptData'],
  computed: {
    formattedDate() {
      const date = new Date();
      return `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`;
    }
  },
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

.receipt-container {
  position: relative;
  max-width: 600px;
  margin: 1.75rem auto;
  padding: 1rem;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
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