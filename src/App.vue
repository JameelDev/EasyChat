<template>
  <div class="container">
    <div class="layout">
      <div class="header">
        <ChatHeader title="EasyChat" />
      </div>

      <div class="body">
        <ChatBody :messages />
      </div>

      <div class="footer">
        <ChatFooter @sendValue="handleValue" />
      </div>
    </div>
  </div>
</template>

<script>
import ChatHeader from "./components/header.vue";
import ChatBody from "./components/body.vue";
import ChatFooter from "./components/footer.vue";
import { getData, postData } from './api';

export default {
  components: {
    ChatHeader,
    ChatBody,
    ChatFooter,
  },

  data() {
    return {
      messages: [
        {
          role: "user",
          content: "Hala walla",
        },
        {
          role: "system",
          content: "How can I help you sir!",
        },
      ],
    };
  },
  methods: {
    handleValue(value) {
      console.log("Received value:", value);

      this.messages.push({
        role: "user",
        content: value,
      });
    },

    async sendMessage() {
        try {
        const response = await getData('/endpoint'); 
        this.data = response;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;

  // background-color: black;

  .layout {
    width: 100%;
    height: 100%;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;

    .header {
      width: 100%;
      height: 50px;
      background-color: saddlebrown;
    }

    .body {
      padding: 50px 0;
      width: 100%;
      flex-grow: 3;
      background-color: yellow;
    }

    .footer {
      width: 100%;
      height: 100px;
      background-color: aqua;
    }
  }
}
</style>
