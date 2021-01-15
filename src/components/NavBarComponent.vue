<template>
  <div>
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="https://bulma.io">
          <img
            class="navbar__logo"
            src="@/img/chat.jpg"
          />
        </a>

        <a
          @click="toggleNavBar"
          role="button"
          class="navbar-burger"
          aria-label="menu"
          aria-expanded="false"
          data-target="navbar"
          ref="burger"
        
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu" ref="navBar">
        <div class="navbar-start">
          <router-link to="">
            <a class="navbar-item">
              Home
            </a>
          </router-link>
          <router-link to="">
            <a class="navbar-item">
              Crear sala
            </a>
          </router-link>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <template v-if="user">
              <router-link
                class="button is-primary"
                :to="{ name: 'profile' }"
                >
                <strong>Perfil</strong>
              </router-link>
                <a class="button is-light" @click="doLogout">
                  Cerrar Sesion
                </a>
              </template>
            </div>
          </div>
        </div> 
      </div>
    </nav>
  </div>
</template>


<script>
import { mapState } from "vuex";
export default {
  name: "NavBarComponent",
  mounted() {
    this.burger = this.$refs.burger;
    this.navBar = this.$refs.navBar;
  },

  data() {
    return {
      burger: null,
      navBar: null
    };
  },

  methods: {
    toggleNavBar() {
      this.burger.classList.toggle("is-active");
      this.navBar.classList.toggle("is-active");
    },

    async doLogout() {
      try {
        await this.$store.dispatch("user/doLogout");
        this.$router.push({ name: "auth" });
        this.$toast.success("Se ha cerrado sesion");
      } catch (error) {
        console.error(error.message);
      }
    }

  },

  computed: {
    ...mapState("user", ["user"])
  }
};

</script>

<style lang="scss" scoped>
.navbar-item img {
  max-height: none;
}
.navbar__logo {
  width: 200px;
  height: 80px;
}
</style>