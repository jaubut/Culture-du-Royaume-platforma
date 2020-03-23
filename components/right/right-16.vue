<template>
  <div class="container">
    <div class="row justify-content-between align-items-center py-5">
      <div class="col-12 col-md-6 pl-md-0 mb-4 mb-md-0"><img class="w-100" :src="image" /></div>
      <div class="col-12 col-md-5"><img class="mb-3" :src="logo" width="40" />
        <h3>{{ headline }}</h3>
        <p>{{ text }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'right-16',
  props: ['image', 'logo', 'headline', 'text']
}
</script>
