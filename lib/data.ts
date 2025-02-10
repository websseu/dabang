import { Data } from './types'

const data: Data = {
  headerMenus: [
    { name: 'news', href: '/news' },
    { name: 'search', href: '/search' },
    { name: 'events', href: '/events' },
    { name: 'story', href: '/story' },
    { name: 'info', href: '/info' },
  ],
  adminMenus: [
    { name: 'overview', href: '/admin/overview' },
    { name: 'posts', href: '/admin/posts' },
    { name: 'users', href: '/admin/users' },
    { name: 'reviews', href: '/admin/reviews' },
    { name: 'settings', href: '/admin/settings' },
  ],
}

export default data
