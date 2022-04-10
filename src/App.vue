<template>
   <div class="bg">
      <router-view />
   </div>
</template>

<style>
.bg {
   background-image: url("./assets/bg-rick-and-morty.jpg");
   background-position: center;
   background-repeat: no-repeat;
   background-size: cover;
   display: flex;
   min-height: 1720px;
   padding: 0;
}
</style>
