import { BLOCKS } from '@contentful/rich-text-types';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

export const richTextReactRendererOptions = {
    renderNode: {
      [BLOCKS.UL_LIST]: (_, children) => {
        return (
          <ul className='list-disc pl-[40px]'>
            { children }
          </ul>
        )
      },
      [BLOCKS.OL_LIST]: (_, children) => {
        return (
          <ol className='list-disc pl-[40px]'>
            { children }
          </ol>
        )
      },
    }
}

export const renderJobDescription = (contentfulDescription) => {
    return documentToReactComponents(contentfulDescription, richTextReactRendererOptions)
}