import { useStaticQuery, graphql } from "gatsby";

export interface SiteMetadata {
    title: string,
    description: string,
    siteUrl: string,
    author: { name: string, summary: string },
    social: { twitter: string, linkedin: string, stack_overflow: string }
}

export const useSiteMetadata = () => {
    const { site } = useStaticQuery(
        graphql`
            query SiteMetaData {
                site {
                    siteMetadata {
                        title,
                        description
                        siteUrl,
                        author {
                            name 
                            summary
                        }
                        social {
                            twitter
                            linkedin
                            stack_overflow
                        }
                    }
                }
            }
        `
    )
    return site.siteMetadata
}