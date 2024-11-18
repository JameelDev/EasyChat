<template>
    <div class="footer-layout">
      <div class="input-container">
        <input
          v-model="inputValue"
          type="text"
          placeholder="Type your message..."
          @keyup.enter="sendValue"
          :style="{ textAlign: isArabic(inputValue) ? 'right' : 'left' }"
        />
        <button @click="sendValue" :disabled="!inputValue.trim()">Send</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        inputValue: "",
      };
    },
    methods: {
      sendValue() {
        if (this.inputValue.trim()) {
          this.$emit("sendValue", this.inputValue);
          this.inputValue = "";
        }
      },
      isArabic(text) {
        return /[\u0600-\u06FF]/.test(text);
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  .footer-layout {
    display: flex;
    align-items: center;
    padding: 12px 300px;
    box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  }
  
  .input-container {
    flex-grow: 1;
    position: relative; 
  }
  
  input {
    width: 100%;
    padding: 15px 100px 15px 20px;
    font-size: 18px;
    border-radius: 25px;
    box-sizing: border-box;
    outline: none;
    border: 0;
    background-color: #2f2f2f;
    color: #ffffff;
    transition: border-color 0.3s ease, box-shadow 0.3s ease;
  
    &::placeholder {
      color: #aaa;
    }
  }
  
  button {
    position: absolute;
    right: 10px; 
    top: 50%;
    transform: translateY(-50%);
    padding: 12px 16px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    background-color: #FFFFFF;
    color: black;
    border: none;
    border-radius: 20px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
    transition: background-color 0.3s ease, transform 0.2s ease;
  
    &:hover {
      background-color: #FFFFFF;
      transform: translateY(-2px);
    }
  
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
  </style>
  