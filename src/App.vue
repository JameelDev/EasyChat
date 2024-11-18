<template>
  <Loader v-if="loading" />

  <div class="container">
    <div class="layout">
      <div class="header">
        <ChatHeader title="EasyChat" />
      </div>

      <div class="body">
        <div v-if="messages.length === 0" class="welcome">
          Welcome to EasyChat
        </div>
        <div v-if="error" class="error">Error: {{ error }}</div>
        <ChatBody v-else :messages="messages" />
      </div>

      <div class="footer">
        <ChatFooter @sendValue="handleValue" />
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "./components/loader.vue";
import ChatHeader from "./components/header.vue";
import ChatBody from "./components/body.vue";
import ChatFooter from "./components/footer.vue";

export default {
  components: {
    Loader,
    ChatHeader,
    ChatBody,
    ChatFooter,
  },

  data() {
    return {
      loading: false,
      messages: [],
      error: null,
    };
  },

  methods: {
    async handleValue(value) {
      this.messages.push({
        role: "user",
        content: value,
      });

      await this.submit(value);
    },

    async submit(query) {      
      const url = "http://localhost:6000";

      const data = {
        query,
        history: this.messages,
      };

      try {
        this.loading = true;
        const response = await fetch(url, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        this.messages.push({
          role: "assistant",
          content: result.response,
        });

      } catch (error) {
        this.error = error.message;
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  height: 100vh;

  .layout {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
  }

  .header {
    position: sticky;
    top: 0;
    width: 100%;
    height: 100px;
    z-index: 1000;
  }

  .body {
    height: 100%;
    width: 100%;
    overflow: hidden;

    .welcome {
      color: rgb(126, 126, 126);
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      height: 100%;
      font-size: 30px;
    }

    .error {
      color: darkred;
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      align-items: center;
      height: 100%;
      font-size: 30px;
    }
  }

  .footer {
    position: sticky;
    bottom: 0;
    width: 100%;
    height: 150px;
  }
}
</style>
