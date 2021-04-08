module.exports = {
  title: 'OGUI',

  description: '组件库',
  themeConfig: {
    nav: [
      { text: '指南', link: '/introduce/' },
      { text: '组件', link: '/components/' },
      { text: '表单设计器', link: 'https://google.com' },
      {
        text: 'Languages',
        items: [
          { text: 'Chinese', link: '/language/chinese' },
          { text: 'Japanese', link: '/language/japanese' }
        ]
      }
    ],
    sidebar: {
      '/introduce/': [
        {
          title: "指南",
          collapsable: false,
          children: [
            {
              title: "介绍",
              collapsable: false,
              path: '/introduce/'
            },
            {
              title: "快速上手",
              collapsable: false,
              path: '/introduce/one'
            }
          ]
        }
      ],
      '/components/': [
        {
          title: "基础组件",
          collapsable: false,
          children: [
            {
              title: "按钮",
              collapsable: false,
              path: '/components/'
            }, {
              title: "输入框",
              collapsable: false,
              path: '/components/input'
            }

          ]
        },
        {
          title: "业务组件",
          collapsable: false,
        }
      ]
    }
  },



}