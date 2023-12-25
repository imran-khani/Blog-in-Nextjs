import { defineCliConfig } from 'sanity/cli'
import { conf } from '../conf/conf'

export default defineCliConfig({
  api: {
    projectId: conf.sanityProjectId,
    dataset: conf.sanityDataset,
  }
})
