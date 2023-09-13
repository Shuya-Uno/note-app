<template>
    <div id="note-area">

      <!-- Rendering each notes with v-for -->
      <template v-for="noteTxt in noteTxts">
        <div class="note-drop-gutter"></div>
        
        <Notes>
          <template v-slot:noteText>
            <span class="note-text"> {{ noteTxt }} </span>
          </template>

          <template v-slot:icons>
            <div class="note-icon-container">
              <img src="../assets/icons/edit_square_FILL0_wght400_GRAD0_opsz24.svg" alt="edit-icon" class="edit-icon" />
              <img src="../assets/icons/delete_FILL0_wght400_GRAD0_opsz24.svg" alt="delete-icon" class="delete-icon icon-bs-size" />
            </div>
          </template>
        </Notes>
      </template>

      <div class="note-drop-gutter"></div>
    </div>
</template>

<script>
  import { inject } from 'vue';
  import Notes from '../components/Notes.vue'
  
  export default {
    components: {
      Notes
    },

    setup(){
      const noteTxts = inject('noteTxts')

      return {
        noteTxts
      }
    }
  }
</script>

<style>
    #note-area {
        grid-column: 2 / 9;

        /* display: grid;
        grid-template-columns: repeat(8, 1fr);
        grid-auto-rows: minmax(min-content, max-content); */
    }

    #note-area > .note-containers:nth-child(2) {
        margin-top: 1rem;
    }

    .note-containers {
        /* grid-column: 2 / 9; */

        display: flex;
        flex-direction: row-reverse;
    }

    .notes {
        background-color: var(--color-off-white);

        width: fit-content;

        min-width: 6.3rem;

        padding: 2rem 1.75rem 1.5rem 1.75rem;

        margin-right: 0.5rem;

        border-radius: 2.5px;

        position: relative;

    }

    .note-icon-container {
        position: absolute;
        top: 0.3rem;
        right: 0.5rem;

        display: grid;
        grid-template-columns: repeat(2, 1fr);
        column-gap: 0.02rem;
    }

    .edit-icon {
        grid-column: 1 / 2;
        width: 1.3rem;
    }

    .delete-icon {
        grid-column: 2 / 3;
    }

    .note-drop-gutter {
        grid-column: 1 / 9;
        height: 0.4rem;
    }

    @media only screen and (min-width: 750px) {
        .icon-bs-size {
            width: var(--icon-size-tablet);
        }
        #note-area {
            grid-column: 4 / 9;
        }

        .note-icon-container {
            column-gap: 0;
        }
    }

    @media only screen and (min-width: 1200px) {
      #note-area {
        grid-column: 6 / 13;
      }

      .notes {
        margin-right: 0.8rem;
      }
    }
</style>