export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5eddf3ba22763e8b7ea0360b',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-3sj2xjs1',
                  apiId: '5bb2e697-b00d-4fd7-8413-6f4670671a12'
                },
                {
                  buildHookId: '5eddf3baf7ef3a2130a7df01',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-aqnc1auu',
                  apiId: 'c957d7fe-0e1e-4ecd-bcb5-ea822d9e1449'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/prophen/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-aqnc1auu.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
