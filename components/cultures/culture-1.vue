<template>
  <div class="py-4">
    <div class="container">
      <div class="row justify-content-between align-items-center py-5">
        <div class="col-12 col-md-6 pl-md-0 mb-4 mb-md-0"></div>
        <div class="col-12 col-md-5">
          <h4>{{ tagline }}</h4>
          <h1 class="display-4 mb-5">{{ headline }}</h1>
          <form class="input-group mb-2" action="https://cultureduroyaume.us19.list-manage.com/subscribe/post" method="post">
            <input type="hidden" name="u" value="a6ac96b8a5bf95d1d95cd9ec4">
            <input type="hidden" name="id" value="17ecc0138b">
            <input type="email" autocapitalize="off" autocorrect="off" name="MERGE0" id="MERGE0" size="25" value="" class="form-control form-control-lg" placeholder="courriel" required/>
            <div class="input-group-append">
              <input type="submit" class="btn btn-lg btn-primary" name="submit" value="Let's Go">
            </div>
          </form>
          <div class="small">{{ text }}<a class="text-dark weight-500" href=""><span>{{ linkText }}</span></a></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'cover-3',
  props: ['tagline', 'headline', 'text', 'linkText', 'cta']
}
</script>
