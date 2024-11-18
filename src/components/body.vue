<template>
    <div class="chat-body" ref="chatBody">
      <div class="messages-list">
        <div v-for="(message, index) in messages" :key="index" class="message">
          <div class="message-title" :class="message.role">
            {{ message.role === "user" ? "User" : "Assistant" }}
          </div>
          <div
            class="message-content"
            :class="message.role"
            :style="{ textAlign: isArabic(message.content) ? 'right' : 'left' }"
          >
            {{ message.content }}
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      messages: { type: Array, required: true },
    },
    methods: {
      scrollToBottom() {
        this.$nextTick(() => {
          const chatBody = this.$refs.chatBody;
          if (chatBody) {
            chatBody.scrollTo({
              top: chatBody.scrollHeight,
              behavior: "smooth",
            });
          }
        });
      },
      isArabic(text) {
        return /[\u0600-\u06FF]/.test(text);
      },
    },
    watch: {
      messages: {
        handler() {
          this.scrollToBottom();
        },
        deep: true,
      },
    },
    mounted() {
      this.scrollToBottom();
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .chat-body {
    height: 100%;
    overflow-y: auto;
    padding-bottom: 100px;
    box-sizing: border-box;
    scroll-behavior: smooth;
  
    &::-webkit-scrollbar {
      width: 5px;
    }
  
    &::-webkit-scrollbar-track {
      background: #212121;
    }
  
    &::-webkit-scrollbar-thumb {
      background: #838383;
    }
  
    &::-webkit-scrollbar-thumb:hover {
      background: #ffffff;
    }
  
    .messages-list {
      padding: 0 400px;
      display: flex;
      flex-direction: column;
      gap: 20px;
    }
  
    .message {
      display: flex;
      flex-direction: column;
      font-size: 20px;
  
      .message-title {
        font-weight: bold;
        margin-bottom: 4px;
        color: #888;
        text-align: left;
  
        &.user,
        &.assistant {
          color: #ffffff;
        }
      }
  
      .message-content {
        padding: 40px 30px;
        border-radius: 15px;
        line-height: 1.8;
        word-wrap: break-word;
        background-color: #2f2f2f;
  
        &.user,
        &.assistant {
          color: #ffffff;
        }
      }
    }
  }
  </style>
  