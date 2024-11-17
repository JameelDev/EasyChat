<template>
    <div class="layout">
      <input
        v-model="inputValue"
        type="text"
        placeholder="Send any"
      />
      <button @click="sendValue">Send</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        inputValue: "", // Local state for the input field
      };
    },
    methods: {
      sendValue() {
        this.$emit("sendValue", this.inputValue); // Emit the value to the parent
        this.inputValue = ""; // Optional: Clear the input after sending
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .layout {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    gap: 10px; /* Add spacing between input and button */
  
    input {
      font-size: 16px;
      padding: 5px;
    }
  
    button {
      font-size: 16px;
      padding: 5px 10px;
      cursor: pointer;
    }
  }
  </style>
  