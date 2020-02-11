export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
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
                  buildHookId: '5e42bcce53700c3d12304377',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-sdn81rw9',
                  apiId: 'd6d8293b-3754-4ea2-ab56-e8bd53b984fc'
                },
                {
                  buildHookId: '5e42bccea7bdfda1010d8bd4',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-6pbdvfgg',
                  apiId: 'ffe39acb-754e-48e5-9728-fd27d264cd74'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/dominic-blain/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-6pbdvfgg.netlify.com', category: 'apps'}
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
