<template>
  <div class="bg-light">
    <div class="container">
      <div class="row justify-content-between align-items-center py-5">
        <div class="col-12 col-md-6 pl-md-0 mb-4 mb-md-0"><img class="w-100" :src="image" /></div>
        <div class="col-12 col-md-5">
          <h1 class="display-4">{{ headline }}</h1>
          <p class="large mb-4">{{ text }}</p><a class="action-link text-dark" :href="link1"><span>{{ textlink1 }}</span></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cover-1',
  props: ['headline', 'image', 'text', 'link1', 'textlink1']
}
</script>