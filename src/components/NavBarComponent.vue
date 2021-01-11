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
        
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-start">
          <a class="navbar-item">
            Home
          </a>

          <a class="navbar-item">
            Documentation
          </a>

          <div class="navbar-item has-dropdown is-hoverable">
            <a class="navbar-link">
              More
            </a>

            <div class="navbar-dropdown">
              <a class="navbar-item">
                About
              </a>
              <a class="navbar-item">
                Jobs
              </a>
              <a class="navbar-item">
                Contact
              </a>
              <hr class="navbar-divider" />
              <a class="navbar-item">
                Report an issue
              </a>
            </div>
          </div>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light">
                Log in
              </a>
            </div>
          </div>
        </div> 
      </div>
    </nav>
  </div>
</template>


<script>

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
    doLogout() {}
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