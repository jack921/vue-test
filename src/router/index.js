import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Movie'
import Book from '@/components/Book'
import Music from '@/components/Music'
import MovieDetails from '@/components/MovieDetails'
import Top250 from '@/components/Top250'
import Weekly from '@/components/Weekly'
import USMovie from '@/components/USMovie'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/book',
      name: 'Book',
      component: Book,
      children:[
        {
          path: '/top250',
          name: 'Top250',
          component: Top250
        },
        {
          path: '/weekly',
          name: 'Weekly',
          component: Weekly
        },
        {
          path: '/usmovie',
          name: 'USMovie',
          component: USMovie
        }
      ]
    },
    {
      path: '/music',
      name: 'Music',
      component: Music
    },
    {
      path: '/moviedetails',
      name: 'MovieDetails',
      component: MovieDetails
    }
  ]
})
