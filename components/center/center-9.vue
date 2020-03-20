<template>
  <div class="container">
    <div class="row justify-content-center text-center py-5">
      <div class="col-12 col-md-8 col-lg-6"><img class="mb-3" :src="logo" width="52" />
        <h1 class="text-primary">{{ header }}</h1>
        <p class="mb-0">{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'center-9',
  props: ['logo', 'header', 'text']
}
</script>
