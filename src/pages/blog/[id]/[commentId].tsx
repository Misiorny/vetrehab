import {useRouter} from "next/router";

interface Article {
  articleTitle: string,
  articleShort: string,
  articleContent: string,
  articleAuthor: string,
  articlePicture: JSX.Element,
}

function ArticleComments({
				   articleTitle,
				   articleShort,
				   articleContent,
				   articleAuthor,
				   articlePicture
				 }: Article) {
  const router = useRouter();
  const {blogid, commentId} = router.query;
  return (
	  <div>
		<h2>{articleTitle}</h2>
		<p>{articleShort}</p>
		<p>Article id: {blogid}, Article Comments: {commentId}</p>
		<article>{articleContent}</article>
		<footer>{articleAuthor}</footer>
	  </div>
  )
}
ArticleComments.defaultProps ={
  articleTitle:'Pierwszy Artykuł',
  articleShort:'Skrót artykułu',
  articleContent:'Jakiś długi teks',
  articleAuthor:'mgr. inż. Adam Wróbel',
  articlePicture:'',
}
export default Article;
