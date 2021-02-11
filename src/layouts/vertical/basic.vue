<template>
   <div class="leading-normal tracking-normal" id="main-body">
      <div class="flex flex-wrap">
         <Sidebar />
         <div class="w-full bg-gray-100 pl-0 min-h-screen transform transition duration-1000 ease-in-out" :class="store.state.sideBarOpen ? 'overlay lg:pl-64 ' : ''" id="main-content">
            <Navbar />
            <div class="p-6 bg-gray-100 mb-20">
               <router-view />
            </div>
            <Footer />
         </div>
      </div>
   </div>
</template>

<script setup lang="ts">
import Sidebar from "@layouts/components/sidebar.vue";
import Navbar from "@layouts/components/navbar.vue";
import Footer from "@layouts/components/footer.vue";

import { useStore } from "vuex";
import { key } from "../../store";
import { ref } from "vue";
const store = useStore(key);
</script>