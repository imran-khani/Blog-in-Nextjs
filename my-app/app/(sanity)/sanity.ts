import { conf } from '@/conf/conf'
import { createClient } from 'next-sanity'
import imgUrlBuilder from '@sanity/image-url'

const projectId = conf.sanityProjectId
const dataset = conf.sanityDataset
const apiVersion = conf.sanityApiVersion

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
})


const builder = imgUrlBuilder(client)

export const urlFor = (source: any) => {
    return builder.image(source)
}