<template>

            
  <div id="quizstartmodal" class="modal" tabindex="-1">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Modal title</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="close"
          ></button>
        </div>
        <div class="modal-body" id="modal-body-confirm">
          <p>Modal body text goes here.</p>
        </div>
        <div class="modal-footer" id="modal-footer-confirm"></div>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'QuizModal',
  methods: {
  },

}
</script>

<style scoped>
.modal {

    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }


  .modal-header {
    position: relative;
    border-bottom: 1px solid #eeeeee;
    color: #4AAE9B;
    justify-content: space-between;
  }
    .modal-footer {
        margin: auto;
    }

    #start-li {
        list-style-type: none;
    }



</style>
