<script>
import { useQuery, useResult } from "@vue/apollo-composable";
import { watchEffect } from "@vue/runtime-core";
import { GET_CHARACTERS } from "@/graphql/graphql";

export default {
   setup() {
      const { result, loading, error } = useQuery(GET_CHARACTERS);
      const characters = useResult(result, null, (data) => data.characters.results);
      return {
         characters,
         loading,
         error,
      };
   },
   mounted() {
      watchEffect(() => {
         console.log("characters", this.characters);
         console.log("loading", this.loading);
      });
   },
};
</script>

<template>
   <div class="container p-5">
      <div class="row fw-bold fs-2 text-center">
         <div class="col animated bounceInDown">
            <img src="../assets/header.png" alt="header" style="width: 400px" />
         </div>
      </div>

      <!-- Loading -->
      <div
         v-if="loading"
         class="position-absolute top-0 bottom-0 end-0 start-0 d-flex align-items-center justify-content-center"
      >
         <button class=""></button>
      </div>
      <!-- Loading -->

      <!-- Card -->
      <div class="row animated bounceInDown">
         <div v-for="character in characters" :key="character.id" class="col-12 col-md-6 col-lg-4 mt-4">
            <div
               class="border border-3 rounded p-1"
               :class="{
                  'border-danger': character.status === 'Dead',
                  'border-success': character.status === 'Alive',
                  'border-warning': character.status === 'unknown',
               }"
            >
               <div class="card rounded postion-ralative">
                  <span class="status-icon position-absolute end-0 me-2 mt-1 fs-5">
                     <i v-if="character.status === 'Dead'" class="fa-solid fa-skull"></i>
                     <i v-if="character.status === 'Alive'" class="fa-solid fa-face-smile"></i>
                     <i v-if="character.status === 'unknown'" class="fa-solid fa-circle-question"></i>
                  </span>
                  <div class="row">
                     <div class="col-6 overflow-hidden">
                        <img
                           :src="character.image"
                           alt="img"
                           style="width: 150px"
                           class="m-2 border border-dark rounded"
                        />
                     </div>
                     <div class="col-6 d-flex">
                        <div class="col d-flex align-items-center">
                           <label class="fw-bold ms-1 mt-3">{{ character.name }}</label>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <!-- Card -->
   </div>
</template>

<style>
button {
   height: 40px;
   width: 40px;
   background: rgba(0, 0, 0, 0.2);
   border-radius: 50%;
   border: 2px solid rgba(0, 0, 0, 0.4);
   border-top-color: #fff;
   animation: spinner2 600ms linear infinite;
}

@keyframes spinner2 {
   to {
      transform: rotate(360deg);
   }
}

/**/
@-webkit-keyframes bounceInDown {
   from,
   60%,
   75%,
   90%,
   to {
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
   }

   0% {
      opacity: 0;
      -webkit-transform: translate3d(0, -3000px, 0);
      transform: translate3d(0, -3000px, 0);
   }

   60% {
      opacity: 1;
      -webkit-transform: translate3d(0, 25px, 0);
      transform: translate3d(0, 25px, 0);
   }

   75% {
      -webkit-transform: translate3d(0, -10px, 0);
      transform: translate3d(0, -10px, 0);
   }

   90% {
      -webkit-transform: translate3d(0, 5px, 0);
      transform: translate3d(0, 5px, 0);
   }

   to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
   }
}

@keyframes bounceInDown {
   from,
   60%,
   75%,
   90%,
   to {
      -webkit-animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
      animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
   }

   0% {
      opacity: 0;
      -webkit-transform: translate3d(0, -3000px, 0);
      transform: translate3d(0, -3000px, 0);
   }

   60% {
      opacity: 1;
      -webkit-transform: translate3d(0, 25px, 0);
      transform: translate3d(0, 25px, 0);
   }

   75% {
      -webkit-transform: translate3d(0, -10px, 0);
      transform: translate3d(0, -10px, 0);
   }

   90% {
      -webkit-transform: translate3d(0, 5px, 0);
      transform: translate3d(0, 5px, 0);
   }

   to {
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
   }
}

.bounceInDown {
   -webkit-animation-name: bounceInDown;
   animation-name: bounceInDown;
}

.animated {
   -webkit-animation-duration: 1s;
   animation-duration: 1s;
   -webkit-animation-fill-mode: both;
   animation-fill-mode: both;
}
</style>
