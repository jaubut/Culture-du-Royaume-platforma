<template>
  <div class="container">
    <div class="row py-5">
      <div class="col-12 col-md-4 mb-4 mb-md-0"><img class="w-100 mb-3" src="@/assets/pictures/image-410x250.png" />
        <h3>{{ headlineOne }}</h3>
        <p>{{ bodyOne }}</p><a class="weight-500 action-link" href=""><span>Read more</span></a>
      </div>
      <div class="col-12 col-md-4 mb-4 mb-md-0"><img class="w-100 mb-3" src="@/assets/pictures/image-410x250.png" />
        <h3>{{ headlineTwo }}</h3>
        <p>{{ bodyTwo }}</p><a class="weight-500 action-link" href=""><span>Read more</span></a>
      </div>
      <div class="col-12 col-md-4 mb-4 mb-md-0"><img class="w-100 mb-3" src="@/assets/pictures/image-410x250.png" />
        <h3>{{ headlineThree }}</h3>
        <p>{{ bodyThree }}</p><a class="weight-500 action-link" href=""><span>Read more</span></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'grids-8',
  props: ['headlineOne', 'bodyOne', 'headlineTwo', 'bodyTwo', 'headlineThree', 'bodyThree']
}
</script>