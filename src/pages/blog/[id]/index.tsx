import {useRouter} from "next/router";

interface Article {
  articleTitle: string,
  articleShort: string,
  articleContent: string,
  articleAuthor: string,
  articlePicture: JSX.Element,
}

function Article({
				   articleTitle,
				   articleShort,
				   articleContent,
				   articleAuthor,
				   articlePicture
				 }: Article) {
  const router = useRouter();
  const {blogid} = router.query;
  return (
	  <div>
		<h2>{articleTitle}</h2>
		<p>{articleShort}</p>
		<article>{articleContent}</article>
		<footer>{articleAuthor}</footer>
	  </div>
  )
}

export default Article;
