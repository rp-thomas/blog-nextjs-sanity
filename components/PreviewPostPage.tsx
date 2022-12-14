import PostPage from 'components/PostPage'
import { usePreview } from 'lib/sanity.preview'
import {
  type Post,
  type Settings,
  postQuery,
  settingsQuery,
} from 'lib/sanity.queries'

export default function PreviewPostPage({
  token,
  slug,
}: {
  token: null | string
  slug: string
}) {
  const data: { post: Post; morePosts: Post[] } = usePreview(token, postQuery, {
    slug,
  })
  const settings: Settings = usePreview(token, settingsQuery) || {}

  return <PostPage preview data={data} settings={settings} />
}
