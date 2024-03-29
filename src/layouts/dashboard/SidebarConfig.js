// routes
import { PATH_DASHBOARD, PATH_CASHSAFE, PATH_CASHSWAP } from '../../routes/paths';
// components
import SvgIconStyle from '../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name) => (
  <SvgIconStyle src={`/static/icons/navbar/${name}.svg`} sx={{ width: '100%', height: '100%' }} />
);

const ICONS = {
  blog: getIcon('ic_blog'),
  cart: getIcon('ic_cart'),
  chat: getIcon('ic_chat'),
  mail: getIcon('ic_mail'),
  user: getIcon('ic_user'),
  calendar: getIcon('ic_calendar'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
  kanban: getIcon('ic_kanban')
};

const sidebarConfig = [
  {
    subheader: 'Cashsafe',
    items: [
      { title: 'dashboard', path: PATH_CASHSAFE.dashboard, icon: ICONS.dashboard },
      { title: 'launchPad', path: PATH_CASHSAFE.launchpad, icon: ICONS.kanban },
      { title: 'token Locker', path: PATH_CASHSAFE.tokenlocker, icon: ICONS.calendar },
      { title: 'liquidity Locker', path: PATH_CASHSAFE.lplocker, icon: ICONS.calendar }
    ]
  },
  {
    subheader: 'Cashswap',
    items: [
      { title: 'dashboard', path: PATH_CASHSWAP.dashboard, icon: ICONS.dashboard },
      { title: 'swap', path: PATH_CASHSWAP.swap, icon: ICONS.analytics },
      { title: 'liquidity', path: PATH_CASHSWAP.liquidity, icon: ICONS.analytics },
      { title: 'farms', path: PATH_CASHSWAP.farms, icon: ICONS.ecommerce },
      { title: 'pools', path: PATH_CASHSWAP.pools, icon: ICONS.ecommerce }
    ]
  },
  // GENERAL
  // ----------------------------------------------------------------------
  // {
  //   subheader: 'app',
  //   items: [
  //     {
  //       title: 'dashboard',
  //       path: PATH_DASHBOARD.general.app,
  //       icon: ICONS.dashboard
  //     },
  //     { title: 'e-commerce', path: PATH_DASHBOARD.general.ecommerce, icon: ICONS.ecommerce },
  //     { title: 'analytics', path: PATH_DASHBOARD.general.analytics, icon: ICONS.analytics }
  //   ]
  // },

  // // MANAGEMENT
  // // ----------------------------------------------------------------------
  // {
  //   subheader: 'cashsafe',
  //   items: [
  //     // MANAGEMENT : USER
  //     {
  //       title: 'user',
  //       path: PATH_DASHBOARD.user.root,
  //       icon: ICONS.user,
  //       children: [
  //         { title: 'profile', path: PATH_DASHBOARD.user.profile },
  //         { title: 'cards', path: PATH_DASHBOARD.user.cards },
  //         { title: 'list', path: PATH_DASHBOARD.user.list },
  //         { title: 'create', path: PATH_DASHBOARD.user.newUser },
  //         { title: 'edit', path: PATH_DASHBOARD.user.editById },
  //         { title: 'account', path: PATH_DASHBOARD.user.account }
  //       ]
  //     },

  //     // MANAGEMENT : E-COMMERCE
  //     {
  //       title: 'e-commerce',
  //       path: PATH_DASHBOARD.eCommerce.root,
  //       icon: ICONS.cart,
  //       children: [
  //         { title: 'shop', path: PATH_DASHBOARD.eCommerce.shop },
  //         { title: 'product', path: PATH_DASHBOARD.eCommerce.productById },
  //         { title: 'list', path: PATH_DASHBOARD.eCommerce.list },
  //         { title: 'create', path: PATH_DASHBOARD.eCommerce.newProduct },
  //         { title: 'edit', path: PATH_DASHBOARD.eCommerce.editById },
  //         { title: 'checkout', path: PATH_DASHBOARD.eCommerce.checkout },
  //         { title: 'invoice', path: PATH_DASHBOARD.eCommerce.invoice }
  //       ]
  //     },

  //     // MANAGEMENT : BLOG
  //     {
  //       title: 'blog',
  //       path: PATH_DASHBOARD.blog.root,
  //       icon: ICONS.blog,
  //       children: [
  //         { title: 'posts', path: PATH_DASHBOARD.blog.posts },
  //         { title: 'post', path: PATH_DASHBOARD.blog.postById },
  //         { title: 'new post', path: PATH_DASHBOARD.blog.newPost }
  //       ]
  //     }
  //   ]
  // },

  // // APP
  // // ----------------------------------------------------------------------
  // {
  //   subheader: 'app',
  //   items: [
  //     { title: 'mail', path: PATH_DASHBOARD.mail.root, icon: ICONS.mail },
  //     { title: 'chat', path: PATH_DASHBOARD.chat.root, icon: ICONS.chat },
  //     { title: 'calendar', path: PATH_DASHBOARD.calendar, icon: ICONS.calendar },
  //     { title: 'kanban', path: PATH_DASHBOARD.kanban, icon: ICONS.kanban }
  //   ]
  // }
];

export default sidebarConfig;
