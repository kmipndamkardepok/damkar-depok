import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'station',
    title: 'Damkar Station',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: r => r.required(),
        }),
        defineField({
            name: 'address',
            title: 'Address',
            type: 'text',
        }),
        defineField({
            name: 'location',
            title: 'Location',
            type: 'geopoint',
            validation: r => r.required(),
        }),
        defineField({
            name: 'phone',
            title: 'Phone',
            type: 'string',
        }),
        defineField({
            name: 'isActive',
            title: 'Active',
            type: 'boolean',
            initialValue: true,
        }),
    ],
    preview: {
        select: { title: 'name', subtitle: 'address' },
    },
})
