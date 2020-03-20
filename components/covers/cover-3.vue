<template>
  <div class="bg-light py-4">
    <div class="container">
      <div class="row justify-content-between align-items-center py-5">
        <div class="col-12 col-md-6 pl-md-0 mb-4 mb-md-0"><img class="w-100" src="@/assets/pictures/cover-3.png" /></div>
        <div class="col-12 col-md-5">
          <h4>{{ tagline }}</h4>
          <h1 class="display-4 mb-5">{{ headline }}</h1>
          <div class="input-group mb-2"><input class="form-control form-control-lg" placeholder="jesus@me.com" />
            <div class="input-group-append"><button class="btn btn-lg btn-primary">Suivre</button></div>
          </div>
          <div class="small">{{ text }}<a class="text-dark weight-500" href=""><span>{{ linkText }}</span></a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cover-3',
  props: ['tagline', 'headline', 'text', 'linkText']
}
</script>
