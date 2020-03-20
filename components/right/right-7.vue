<template>
  <div class="container">
    <div class="row justify-content-between align-items-center py-5">
      <div class="col-12 col-md-6 pl-md-0 mb-4 mb-md-0">
        <div class="swiper has-outside-pagination">
          <div class="swiper-container" id="slider-right-7">
            <div class="swiper-wrapper">
              <div class="swiper-slide"><img class="w-100" src="@/assets/pictures/image-555x380.png" /></div>
              <div class="swiper-slide"><img class="w-100" src="@/assets/pictures/image-555x380.png" /></div>
              <div class="swiper-slide"><img class="w-100" src="@/assets/pictures/image-555x380.png" /></div>
            </div>
          </div>
          <div class="swiper-pagination swiper-pagination-outside" id="slider-right-7-pagination"></div><a class="carousel-control-prev" id="slider-right-7-prev" href="">
            <div class="carousel-control-prev-icon"></div>
          </a><a class="carousel-control-next" id="slider-right-7-next" href="">
            <div class="carousel-control-next-icon"></div>
          </a>
        </div>
      </div>
      <div class="col-12 col-md-5">
        <h1>{{ headline }}</h1>
        <p class="mb-4">{{ body }}</p>
        <div class="row">
          <div class="col-6">
            <h4>{{ featureOneTitle }}</h4>
            <div class="small">{{ featureOneText }}</div>
          </div>
          <div class="col-6">
            <h4>{{ featureTwoTitle }}</h4>
            <div class="small">{{ featureTwoText }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/*
  var mySwiper = new Swiper('#slider-right-7', {
    speed: 400,
    navigation: {
      nextEl: '#slider-right-7-next',
      prevEl: '#slider-right-7-prev',
    },
    pagination: {
      el: '#slider-right-7-pagination',
      clickable: true
    }
  });
*/  
export default {
  name: 'right-7',
  props: ['body', 'headline', 'featureOneTitle', 'featureOneText', 'featureTwoTitle', 'featureTwoText']
}
</script>