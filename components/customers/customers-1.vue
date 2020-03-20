<template>
  <div class="container">
    <div class="py-4">
      <div class="small text-center text-muted mb-lg-3">{{ text1 }}</div>
      <div class="row justify-content-center justify-content-lg-between text-center align-items-center">
        <div class="col mt-3 mb-lg-0"><img :src="logo1" width="99" /></div>
        <div class="col mt-3 mb-lg-0"><img :src="logo2" width="80" /></div>
        <div class="col mt-3 mb-lg-0"><img :src="logo3" width="110" /></div>
        <div class="col mt-3 mb-lg-0"><img :src="logo4" width="95" /></div>
        <div class="col mt-3 mb-lg-0"><img :src="logo5" width="123" /></div>
        <div class="col mt-3 mb-lg-0"><img :src="logo6" width="159" /></div>
      </div>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'customers-1',
  props: ['text1', 'logo1', 'logo2', 'logo3', 'logo4', 'logo5', 'logo6']
}
</script>