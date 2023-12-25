export default {
    name:'blog',
    type:'document',
    title:'Blog',
    fields:[

        {
            name:'title',
            type:'string',
            title:'Post Title'
        },
        {
            name:'slug',
            type:'slug',
            title:'Slug',
            options:{
                source:'title'
            }
        },
        {
            name:'titleImage',
            type:'image',
            title:'Title Image',
        },

        {
            name:'smallDescription',
            type:'text',
            title:'Small Description'
        },
        {
            name:'content',
            type:'text',
            title:'Content',
            of:[{
                type:'block'
            }]
        },
    ]
}