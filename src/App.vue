<template>
  <div class="flex flex-col flex-1 h-screen overflow-y-hidden">
        <Header />
        <div class="flex overflow-y-hidden flex-1">
            <div class="overflow-x-hidden w-2/3">

            </div>
        </div>
    </div>
  
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  setup() {
    
  },
  components: {
    Header
  }
}
</script>
