<template>
  <div class="container">
    <div class="row py-4">
      <div class="col-12 col-md-6">
        <div class="gallery-item"><img class="w-100 mb-8" src="@/assets/pictures/image-540x540.png" /></div>
        <div class="gallery-item mb-md-0">
          <div class="images-ratio ratio-4-2" style="background-image: url(@/assets/pictures/image-540x295.png)"></div>
        </div>
      </div>
      <div class="col-12 col-md-6">
        <div class="gallery-item">
          <div class="images-ratio ratio-4-2" style="background-image: url(@/assets/pictures/image-540x295.png)"></div>
        </div>
        <div class="gallery-item mb-0"><img class="w-100" src="@/assets/pictures/image-540x540.png" /></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'gallery-8'
}
</script>