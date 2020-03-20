<template>
  <div class="container">
    <div class="py-5">
      <div class="row justify-content-center text-center py-3">
        <div class="col-12 col-md-8">
          <h4 class="text-secondary">{{ tagline }}</h4>
          <h1 class="display-4 text-primary">{{ headline }}</h1><a class="action-link" :href="link1"><span>{{ linktitle }}</span></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'center-1',
  components: {
  },
  props: ['tagline', 'headline', 'link1', 'linktitle']
}
</script>