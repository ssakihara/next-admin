export default {
  sidebar: [
    { name: 'Home', children: [{ name: 'Dashboard', to: '/dashboard' }] },
    { name: 'Entity', children: [{ name: 'Example', to: '/entity/example' }] },
    {
      name: 'Entity',
      children: [
        { name: 'Example1', to: '/entity/example/edit/1' },
        { name: 'Example2', to: '/entity/example/edit/2' },
        { name: 'Example3', to: '/entity/example/edit/3' },
      ],
    },
  ],
};
