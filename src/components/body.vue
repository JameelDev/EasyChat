<template>
    <div class="container">
      <div v-for="(message, index) in messages" :key="index" class="message">
        <div class="user" dir="auto" v-if="message.role === 'user'">
          {{ message.content }}
        </div>
        <div class="system" dir="auto" v-else>
          {{ message.content }}
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      messages: { type: Array, required: true },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .container {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
  
    .message {
      display: flex;
      flex-direction: column;
      gap: 10px; // Apply the gap between messages
  
      .user,
      .system {
        flex-grow: 1; // Ensure the element grows to fill available space if necessary
        min-height: 100px; // Minimum height
        padding: 10px;
        box-sizing: border-box; // Ensure padding doesn’t overflow
      }
  
      .user {
        background-color: green;
      }
  
      .system {
        background-color: red;
      }
    }
  }
  </style>
  