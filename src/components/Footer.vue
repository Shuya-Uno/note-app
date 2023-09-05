<template>
    <footer>
        <div id="footer-icon-container">
          <span id="help-icon" class="footer-icons">
            <img src="../assets/icons/help_FILL0_wght400_GRAD0_opsz24.svg" alt="help-icon" class="icon-bs-size">
          </span>
          <span id="contact-icon" class="footer-icons">
            <img src="../assets/icons/contact_mail_FILL0_wght400_GRAD0_opsz24.svg" alt="contact-icon" class="icon-bs-size">
          </span>
        </div>
        <span>Note App</span>
    </footer>
</template>

<style>
    footer {
        margin-bottom: 0.3rem;
        width: 100%;

        grid-row: 8 / 9;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .footer-icons {
        background-color: var(--color-off-white);
        border-radius: 100%;

        padding: 0.35rem;

        display: inline flex;
        justify-content: center;
        align-items: center;
    }

    .footer-icons > img {
        width: 1.3rem;
    }

    #help-icon {
        margin-right: 0.3rem;
    }

    @media only screen and (min-width: 750px) {
        .icon-bs-size {
            width: var(--icon-size-tablet);
        }
    }
</style>