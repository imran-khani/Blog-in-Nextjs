import { conf } from '@/conf/conf'
import { createClient } from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

const projectId = conf.sanityProjectId
const dataset = conf.sanityDataset
const apiVersion = conf.sanityApiVersion

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: false,
})


const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}