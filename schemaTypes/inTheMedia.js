export default {
    name: 'inMedia',
    type: 'document',
    title: 'In Media',
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
