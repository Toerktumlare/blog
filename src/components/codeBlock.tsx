import React, { ReactNode } from 'react'
import Highlight, { defaultProps, Prism } from 'prism-react-renderer'
import dracula from 'prism-react-renderer/themes/dracula';

// @ts-ignore
const root = (typeof global !== "undefined" ? global : window).Prism = Prism;
require("prismjs/components/prism-rust");
require("prismjs/components/prism-java");
require("prismjs/components/prism-ruby");

const codeBlock = ({ children }: any) => {
  const className = children.props.className || '';
  const matches = className.match(/language-(?<lang>.*)/);
  const language = matches && matches.groups && matches.groups.lang ? matches.groups.lang : ''
  return (
    <Highlight {...defaultProps} theme={dracula} code={children.props.children} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => {
        tokens.pop();
        return (
          <pre className={className} style={style}>
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </pre>
        )
      }}
    </Highlight>
  )
}

export default codeBlock;