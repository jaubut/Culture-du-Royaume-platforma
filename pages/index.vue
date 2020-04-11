<template>
  <div>
    <div class="bg-cover chantal-cover text-white">
      <menu4></menu4>
      <culture1
        :tagline="index.fields.culture1.fields.tagline"
        :headline="index.fields.culture1.fields.headline"
        :text="index.fields.culture1.fields.text"
        :linkText="index.fields.culture1.fields.link1"
        cta="S’inscrire"
      ></culture1>
    </div>
    <center9
      :logo="index.fields.center9.fields.logo.fields.file.url"
      :header="index.fields.center9.fields.headline"
      :text="index.fields.center9.fields.text1"
    ></center9>
    <right16 id="apropos"
      :image="index.fields.right16.fields.image.fields.file.url"
      :logo="index.fields.right16.fields.logo1.fields.file.url"
      :headline="index.fields.right16.fields.headline"
      :text="index.fields.right16.fields.richText1"
    ></right16>
    <texts2 id="ressource"
      :tagline="index.fields.texte2.fields.tagline"
      :headline="index.fields.texte2.fields.headline"
    ></texts2>
    <grids5></grids5>
    <center1
      tagline="Don"
      headline="Soutenir notre projet"
      link1="https://www.paypal.com/paypalme/rejtherhotmailcom"
      linktitle="Nous soutenir via PayPal"
    ></center1>
    <footers8></footers8>
  </div>
</template>

<script>
import {createClient} from '~/plugins/contentful.js'

const client = createClient()

export default {
  name: 'page index',
  components: {
  },
  async asyncData({ $prismic, error }) {
    try{
      const homepageContent = (await $prismic.api.getSingle('accueil')).data
      return {
        homepageContent
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Page not found' })
    }
  },
  asyncData ({env}) {
    return Promise.all([
      // fetch index page data
      client.getEntries({
        'content_type': env.CTF_INDEX_PAGE_TYPE_ID,
      })
    ]).then(([entries]) => {
      // return data that should be available
      // in the template
      return {
        index: entries.items[0]
      }
    }).catch(console.error)
  },
  data () {
    return {
    }
  }
}
</script>

<style>
.chantal-cover {
  background-image: url(/pictures/rejean-musique.jpg);
  background-color: black;
  background-position: center center;
  background-size: cover;
  min-height: 70vh;
}
</style>
