export default {
    name: 'insights',
    type: 'document',
    title: 'Insights',
    fields: [
        {
            name: 'title',
            type: 'string',
            title: 'Title'
        },
        {
            name: 'shortDescription',
            type: 'string',
            title: 'Short Description'
        },
        {
            name: 'image',
            type: 'image',
            title: 'Image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'body',
            type: 'array',
            title: 'Body',
            of: [
                {
                    type: 'block',
                }
            ]
        }
    ]
}
