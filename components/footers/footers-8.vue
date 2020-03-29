<template>
  <div class="container">
    <div class="row py-4">
      <div class="col-12 col-lg-2 mb-4 mb-lg-0"><img src="@/assets/logos/cr-logo-type.svg" width="62" /></div>
      <div class="col-6 col-lg-2 mb-4 mb-lg-0">
        <a target="_blank" href="https://soundcloud.com/pensee-du-jour">
          <h4 class="text-secondary">Podcasts</h4>
        </a>
        <!--
        <div class="small">
          <div class="mb-1"><a class="text-dark" href=""><span>First page</span></a></div>
          <div class="mb-1"><a class="text-dark" href=""><span>Second page</span></a></div>
          <div class="mb-1"><a class="text-dark" href=""><span>Third</span></a></div>
          <div class="mb-1"><a class="text-dark" href=""><span>Fourth</span></a></div>
        </div>
        -->
      </div>
      <div class="col-6 col-lg-2 mb-4 mb-lg-0">
        <a target="_blank" href="https://www.youtube.com/channel/UCdiJGksQJ7e_cacatlSmGsw">
          <h4 class="text-secondary">Vidéos</h4>
        </a>
        <!--
        <div class="small">
          <div class="mb-1"><a class="text-dark" href=""><span>Fifth page</span></a></div>
          <div class="mb-1"><a class="text-dark" href=""><span>Sixth page</span></a></div>
          <div class="mb-1"><a class="text-dark" href=""><span>Eighth</span></a></div>
        </div>
        -->
      </div>
      <div class="col-6 col-lg-2 mb-4 mb-lg-0">
        <h4 class="text-secondary">Articles</h4>
        <!--
        <div class="small">
          <div class="mb-1"><a class="text-dark" href=""><span>First page</span></a></div>
          <div class="mb-1"><a class="text-dark" href=""><span>Second page</span></a></div>
          <div class="mb-1"><a class="text-dark" href=""><span>Third</span></a></div>
        </div>
        -->
      </div>
      <div class="col-12 col-lg-4">
        <div class="border-top pt-4 d-lg-none"></div>
        <h4 class="text-secondary">Abonne-toi</h4>
        <form class="form-group input-group input-group-lg" action="https://cultureduroyaume.us19.list-manage.com/subscribe/post" method="post">
          <input type="hidden" name="u" value="a6ac96b8a5bf95d1d95cd9ec4">
          <input type="hidden" name="id" value="17ecc0138b">
          <input type="email" autocapitalize="off" autocorrect="off" name="MERGE0" id="MERGE0" size="25" value="" class="form-control form-control-lg" placeholder="Entrez votre courriel" required/>
          <div class="input-group-control"><button type="submit" name="submit" class="button-submit"><img src="@/assets/glyphs/plane.svg" width="24" /></button></div>
        </form>
        <p class="small text-muted mb-0">Inscrivez-vous à notre lettre de nouvelles.</p>
      </div>
    </div>
    <div class="d-lg-flex align-item-ceneter justify-content-between border-top py-3 py-lg-2 mt-lg-5">
      <div class="small mb-2 mb-lg-0"><span class="text-muted">&copy; 2020 Culture du Royaume. Tout droit réservé.</span></div>
      
      <div class="d-none d-lg-block ml-auto">
        <a class="transparent-invert-link" target="_blank" href="https://www.facebook.com/cultureduroyaume"><i class="fab fa-facebook-square"></i></a>
      </div>
      <div class="d-lg-none">
        <a class="transparent-invert-link" target="_blank" href="https://www.facebook.com/cultureduroyaume"><i class="fab fa-facebook-square"></i></a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'footers-8'
}
</script>

<style scoped>
.fab {
  font-size: 24px;
}
.button-submit {
  background: none;
  border: 0;
}
</style>