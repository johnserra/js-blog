import { graphql } from 'gatsby'
import React from 'react'
import Seo from '../components/Seo'
import Headline from '../components/Headline'
import BlogInfo from '../components/BlogInfo'
import PostListLayout from '../components/PostListLayout'
import SocialMedia from '../components/SocialMedia'
import { SITE_CONFIG } from '../config/constants'

const IndexPage = ({ data, location }) => {
	const { nodes } = data.allMdx
	const siteTitle = SITE_CONFIG['siteTitle']

	return (
		<>
			<Seo title={siteTitle} />
			<Headline
				text={{
					line1: "Hi, I'm John",
					line2: 'In Pursuit of Growth',
				}}
			/>
			<BlogInfo
				header="Welcome to my brutta copia."
				description="A Data Wrangling, Web Developing, Tinkerer. I have been playing with data since the late nineties, mostly in business environments. Whether it is streamlining production processes while taking into account the relative constraints or increasing the performances of ESL teachers and students, I use data. Do you need to use your data to improve? How about a web presence to let people know you exist? 🙂"
			/>
			<SocialMedia />
			<PostListLayout data={nodes} />
		</>
	)
}

export default IndexPage

export const query = graphql`
	query SITE_INDEX_QUERY {
		allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
			nodes {
				id
				slug
				frontmatter {
					title
					datetime: date
					date(formatString: "DD MMMM YYYY")
					featuredImage {
						childImageSharp {
							gatsbyImageData(
								width: 480
								transformOptions: { cropFocus: CENTER }
								blurredOptions: { width: 100 }
								placeholder: BLURRED
							)
						}
					}
				}
			}
		}
	}
`
