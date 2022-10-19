"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[970,691],{9439:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(7294),r=n(1082),o=function(){var e=(0,r.useStaticQuery)("702912328").site.siteMetadata;return a.createElement("header",{className:"terminal-nav"},a.createElement("div",{className:"terminal-logo"},a.createElement("div",{className:"logo terminal-prompt"},a.createElement("a",{className:"no-style",href:e.author.name},"Without followers, evil cannot spread"))),a.createElement("nav",{className:"terminal-menu"},a.createElement("ul",null,a.createElement("li",null,a.createElement("a",{className:"menu-item",href:"#"},"home")),a.createElement("li",null,a.createElement("a",{className:"menu-item",href:"#"},"about")))))},l=n(3494),i=n(8789),c=l.default.h3.withConfig({displayName:"footer__FooterText",componentId:"sc-ora8l1-0"})(["font-size:14px;padding-bottom:10px;"]),m=function(){return a.createElement("footer",null,a.createElement(c,null,"© ",(new Date).getFullYear(),", Built by"," ",a.createElement("a",{href:"http://www.github.com/tandolf"},"toerktumlare")))},s=l.default.div.withConfig({displayName:"layout__Wrapper",componentId:"sc-omnq36-0"})(["margin:0 auto;max-width:70rem;background-color:var(--background-color);color:var(--font-color);"]),u=function(e){var t=e.children;return a.createElement(a.Fragment,null,a.createElement(s,null,a.createElement(i.GlobalStyle,null),a.createElement(o,null),a.createElement("main",null,t),a.createElement(m,null)))}},4001:function(e,t,n){var a=n(7294),r=n(1082),o=function(e){var t,n,o,l=e.description,i=(e.lang,e.title),c=e.children,m=(0,r.useStaticQuery)("984448874").site,s=l||m.siteMetadata.description,u=null===(t=m.siteMetadata)||void 0===t?void 0:t.title;return a.createElement(a.Fragment,null,a.createElement("title",null,u?i+" | "+u:i),a.createElement("meta",{name:"description",content:s}),a.createElement("meta",{property:"og:title",content:i}),a.createElement("meta",{property:"og:description",content:s}),a.createElement("meta",{property:"og:type",content:"website"}),a.createElement("meta",{name:"twitter:card",content:"summary"}),a.createElement("meta",{name:"twitter:creator",content:(null===(n=m.siteMetadata)||void 0===n||null===(o=n.social)||void 0===o?void 0:o.twitter)||""}),a.createElement("meta",{name:"twitter:title",content:i}),a.createElement("meta",{name:"twitter:description",content:s}),c)};o.defaultProps={description:""},t.Z=o},8789:function(e,t,n){n.r(t),n.d(t,{GlobalStyle:function(){return m},Head:function(){return u},default:function(){return s}});var a=n(7294),r=n(1082),o=n(9439),l=n(4001),i=n(3494),c=i.default.h2.withConfig({displayName:"MajorHeading__h2Subtitle",componentId:"sc-111xjm-0"})(["font-size:calc(2rem);color:var(--color-tertiary);margin-top:96px;margin-bottom:32px;"]),m=(0,i.createGlobalStyle)([":root{--global-font-size:15px;--global-line-height:1.4em;--global-space:10px;--font-stack:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,serif;--mono-font-stack:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace,serif;--background-color:#222225;--page-width:60em;--font-color:#e8e9ed;--header-font-color:#7a3496;--color-gray-700:#BFDBF7;--color-tertiary:#ffdf2c;--invert-font-color:#222225;--secondary-color:#1F7A8C;--tertiary-color:#a3abba;--primary-color:#62c4ff;--error-color:#A31621;--progress-bar-background:#3f3f44;--progress-bar-fill:#62c4ff;--code-bg-color:#3f3f44;--input-style:solid;--display-h1-decoration:none;--spacing-4:4rem;--spacing-0:0;--spacing-16:4rem;}body{background-color:var(--background-color);color:var(--font-color);}ol li::before{list-style-type:none;margin:0;padding:0;}.no-line::after{content:none;}code::after,code::before{content:none;}.mermaid{margin-top:4em;margin-bottom:4em;}.bio-avatar{margin-right:var(--spacing-4);margin-bottom:var(--spacing-0);min-width:50px;border-radius:100%;}.bio{display:flex;margin-bottom:var(--spacing-16);}.bio p{margin-top:0.8em;margin-bottom:var(--spacing-0);}"]),s=function(e){var t,n,l=e.data,i=(e.location,null===(t=l.site)||void 0===t||null===(n=t.siteMetadata)||void 0===n||n.title,l.allMarkdownRemark.nodes);return a.createElement(a.Fragment,null,a.createElement(o.Z,null,a.createElement("ul",null,i.map((function(e){var t=e.frontmatter.title||e.fields.slug;return a.createElement("li",{key:e.fields.slug,className:"no-line"},a.createElement("article",{className:"post-list-item",itemScope:!0,itemType:"http://schema.org/Article"},a.createElement(c,null,a.createElement(r.Link,{to:e.fields.slug,itemProp:"url"},a.createElement("span",{itemProp:"headline"},t))),a.createElement("small",null,e.frontmatter.date),a.createElement("section",null,a.createElement("p",{dangerouslySetInnerHTML:{__html:e.frontmatter.description||e.excerpt},itemProp:"description"}))))})))))},u=function(){return a.createElement(l.Z,{title:"All posts"})}},8619:function(e,t,n){n.r(t),n.d(t,{Head:function(){return i}});var a=n(7294),r=n(1082),o=n(9439),l=n(4001),i=function(){return a.createElement(l.Z,{title:"Using TypeScript"})};t.default=function(e){var t=e.data,n=e.path,l=e.location;return a.createElement(o.Z,{location:l},a.createElement("h1",null,"Gatsby supports TypeScript by default!"),a.createElement("p",null,"This means that you can create and write ",a.createElement("em",null,".ts/.tsx")," files for your pages, components etc. Please note that the ",a.createElement("em",null,"gatsby-*.js")," files (like gatsby-node.js) currently don't support TypeScript yet."),a.createElement("p",null,"For type checking you'll want to install ",a.createElement("em",null,"typescript")," via npm and run ",a.createElement("em",null,"tsc --init")," to create a ",a.createElement("em",null,"tsconfig")," file."),a.createElement("p",null,"You're currently on the page \"",n,'" which was built on'," ",t.site.buildTime,"."),a.createElement("p",null,"To learn more, head over to our"," ",a.createElement("a",{href:"https://www.gatsbyjs.com/docs/how-to/custom-configuration/typescript/"},"documentation about TypeScript"),"."),a.createElement(r.Link,{to:"/"},"Go back to the homepage"))}}}]);
//# sourceMappingURL=component---src-pages-using-typescript-tsx-d96efa8faed2ff4ad22b.js.map