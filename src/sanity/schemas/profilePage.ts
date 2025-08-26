import { defineType, defineField } from 'sanity'

export default defineType({
    name: 'profilePage',
    title: 'Profil Page',
    type: 'document',
    fields: [
        defineField({
            name: 'heroTitle',
            title: 'Hero Title',
            type: 'string',
            validation: r => r.required(),
        }),
            defineField({
            name: 'heroSubtitle',
            title: 'Hero Subtitle',
            type: 'text',
        }),
        defineField({
            name: 'visi',
            title: 'Visi',
            type: 'array',
            of: [{ type: 'block' }],
            validation: r => r.required(),
        }),
        defineField({
            name: 'misi',
            title: 'Misi',
            type: 'array',
            of: [{ type: 'string' }],
        }),
        defineField({
            name: 'tupoksi',
            title: 'Tugas Pokok & Fungsi',
            type: 'array',
            of: [{ type: 'block' }],
            validation: r => r.required(),
        }),
        defineField({
            name: 'sejarah',
            title: 'Sejarah',
            type: 'array',
            of: [{ type: 'block' }],
        }),
        defineField({
            name: 'strukturOrganisasi',
            title: 'Struktur Organisasi (Gambar)',
            type: 'image',
            options: { hotspot: true },
        }),
        defineField({
            name: 'contactEmergency',
            title: 'Kontak Darurat',
            type: 'object',
            fields: [
                { name: 'phone', title: 'Telepon', type: 'string' },
                { name: 'email', title: 'Email', type: 'string' },
                { name: 'address', title: 'Alamat Kantor', type: 'text' },
            ],
        }),
    ],
    preview: { select: { title: 'heroTitle' } },
})
