<template>
  <div class="loader-container">
    <div class="loader"></div>
  </div>
</template>

<script>
export default {
  name: "CLoader",
};
</script>

<style lang="scss" scoped>
.loader-container {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.2);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1000;
}

.loader {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 4px solid transparent;
  border-top-color: #FFFFFF;
  animation: spin 1.5s linear infinite;
  position: relative;
}

.loader:before {
  content: "";
  position: absolute;
  top: 10px;
  left: 10px;
  right: 10px;
  bottom: 10px;
  border-radius: 50%;
  border: 4px solid transparent;
  border-top-color: #FFFFFF;
  animation: spin 2.5s linear infinite;
} 

.loader:after {
  content: "";
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  border-radius: 50%;
  border: 4px solid transparent;
  border-top-color: #FFFFFF;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
