<template>
  <div class="home">
    <section class='section'>
        <button v-if="!user" @click="doLogin" class="button">
          Login with Google 🚀
        </button>
        <template v-else>
          <h1 class="title has-text-centered">Hola {{ user.displayName }}</h1>
          <button @click="doLogout" class="button">Logout 🙀</button>
        </template>
    </section>
  </div>
</template>

<script>
import { fb ,auth,db } from '../firebase'
export default {
  name: "RoomsView",

  async created() {
    // Set
    const user = { name: "David cardenas", city: "Bucaramanga", country: "Colombia" };
    await db
      .collection("users")
      .doc("persona")
      .set(user, { merge: true });
    // Add
    //await db.collection("users").add(user);
    // Get new ID and then add
    const newDocRef = db.collection("users").doc();
    const newId = newDocRef.id;
    await newDocRef.set({ name: "Guizmo", created: Date.now(), id: newId });

  },

  data() {
    return {
      user: null
    };
  },

  methods: {
    
    async doLogin() {
      try {
        const provider = new fb.auth.GoogleAuthProvider();
        const user = await auth.signInWithPopup(provider);
        this.user = user.user;
        console.log(user);
      } catch (error) {
        console.error(error.message);
      }
    },

    async doLogout() {
      try {
        await auth.signOut();
        this.user = null;
      } catch (error) {
        console.error(error.message);
      }
    },

  },
  
};
</script>
