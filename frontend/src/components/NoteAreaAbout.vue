<template>
    <div id="note-area">
      <Notes>
        <template v-slot:noteText>
          <span class="note-text">
            <h1 class="note-txt-large note-txt-bold">このアプリについて</h1>
            <ul>
                <li>Todo型メモ帳アプリです。</li>
                <li>無料でお使いいただけます。</li>
                <li>使い方のヘルプは<a href="#">こちら</a> (～でも御覧いただけます)</li>
            </ul>
          </span>
        </template>
      </Notes>

      <div class="note-drop-gutter"></div>

      <Notes>
        <template v-slot:noteText>
            <span class="note-text">
                <h1 class="note-txt-large note-txt-bold">作者について</h1>
                <ul>
                    <li>都内で働くJavaScriptエンジニアです。</li>
                    <li>お仕事の相談をお受けしています。(会社を通してお話させていただきます。<a href="#">こちらのフォーム</a>からお願いします)</li>
                    <li>作者のポートフォリオは<a href="#">こちら</a></li>
                </ul>
          </span>
        </template>
      </Notes>
    </div>
</template>

<script>
  import Notes from '../components/Notes.vue'
  export default {
    components: {
      Notes
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

    #note-area > .note-containers:first-child {
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

        padding: 1.5rem 1.75rem 1.5rem 1.75rem;

        margin-right: 0.5rem;

        border-radius: 2.5px;

        position: relative;
    }

    .note-text li {
      list-style-position: inside;
      line-height: 1.5;
    }

    .note-text > h1 {
      margin-bottom: 1rem;
    }

    .note-txt-large {
      font-size: 1.25rem;
    }

    .note-txt-bold {
      font-weight: bold;
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