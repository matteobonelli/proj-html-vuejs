<template>
    <footer class="d-flex">
        <section>
            <img src="../assets/images/logo.png" alt="logo" class="mb-4">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia facilis, natus modi minima, ipsa voluptate
                illo possimus id excepturi quas alias inventore mollitia aliquid rerum aut, veritatis iste! Quos alias aut
                voluptatibus architecto accusantium facilis placeat est neque ab, obcaecati eius itaque natus recusandae,
                quia reprehenderit ad reiciendis provident et?</p>
        </section>
        <section>
            <h5 class="text-uppercase">Quick Links</h5>
            <SeparatorComponent />
            <ul>
                <li v-for="link in store.quickLinks">
                    <a :href="link.url">{{ link.name }}</a>
                </li>
            </ul>
        </section>
        <section>
            <h5 class="text-uppercase">Contact</h5>
            <SeparatorComponent />
            <p>{{ store.contacts.name }}</p>
            <p>{{ store.contacts.email }}</p>
            <p>{{ store.contacts.telNumber }}</p>
        </section>
        <section>
            <h5 class="text-uppercase">Location on Map</h5>
            <SeparatorComponent />
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4427.790645284148!2d-73.9808564391938!3d40.754752520654506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259aadf001c29%3A0x76edfca22a4aa44c!2sLUMA%20Hotel%20Times%20Square!5e0!3m2!1sit!2sit!4v1700580356556!5m2!1sit!2sit"
                width="400" height="250" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
    </footer>
    <div class="d-flex justify-content-between align-items-center infos-bg">
        <div class="text-light text-uppercase">{{ store.contacts.copyright }}</div>
        <SocialComponent />
    </div>
</template>

<script>
import SocialComponent from './social/SocialComponent.vue'
import SeparatorComponent from './separator/SeparatorComponent.vue'
import { store } from '../assets/data/store'
export default {
    name: 'FooterComponent',
    components: {
        SeparatorComponent,
        SocialComponent
    },
    data() {
        return {
            store
        }
    }

}
</script>

<style lang="scss" scoped>
@use '../assets/styles/partials/variables' as *;

a {
    color: black;
}

section {
    width: 25%;
    margin: 0 50px;
}

.infos-bg {
    background-color: $brand_infos;
    padding: 40px;
}
</style>