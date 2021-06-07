export default {
  sidebar: [
    { name: 'Home', children: [{ name: 'Dashboard', to: '/dashboard' }] },
    {
      name: 'Entity',
      children: [
        { name: 'Example', to: '/entity/example' },
        { name: 'News', to: '/entity/news' },
      ],
    },
  ],
};
