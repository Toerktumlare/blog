"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[889],{1046:function(e,t,n){n.d(t,{w_:function(){return c}});var a=n(7294),l={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},r=a.createContext&&a.createContext(l),o=function(){return o=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var l in t=arguments[n])Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l]);return e},o.apply(this,arguments)},i=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(a=Object.getOwnPropertySymbols(e);l<a.length;l++)t.indexOf(a[l])<0&&Object.prototype.propertyIsEnumerable.call(e,a[l])&&(n[a[l]]=e[a[l]])}return n};function s(e){return e&&e.map((function(e,t){return a.createElement(e.tag,o({key:t},e.attr),s(e.child))}))}function c(e){return function(t){return a.createElement(d,o({attr:o({},e.attr)},t),s(e.child))}}function d(e){var t=function(t){var n,l=e.attr,r=e.size,s=e.title,c=i(e,["attr","size","title"]),d=r||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),a.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,l,c,{className:n,style:o(o({color:e.color||t.color},t.style),e.style),height:d,width:d,xmlns:"http://www.w3.org/2000/svg"}),s&&a.createElement("title",null,s),e.children)};return void 0!==r?a.createElement(r.Consumer,null,(function(e){return t(e)})):t(l)}},6274:function(e,t,n){n.r(t),n.d(t,{Head:function(){return b},default:function(){return g}});n(935);var a=n(6410),l=n(7294),r=n(2477),o=(n(1862),n(9263));function i(e){var t=Object.assign({p:"p",em:"em",strong:"strong",a:"a",h2:"h2",div:"div",ul:"ul",li:"li",pre:"pre",code:"code"},(0,a.ah)(),e.components);return l.createElement(l.Fragment,null,l.createElement(t.p,null,"I have a confession to make. Please don’t think any less of me, but i have never really understood how Base64 ",l.createElement(t.em,null,"actually")," works. I know what it is used for. I know when to use it and I have a vague understanding of how it is implemented, but i have never ",l.createElement(t.strong,null,"fully")," understood it. Until now."),"\n",l.createElement(t.p,null,"I was looking at new things to implement and i stumbled across the ",l.createElement(t.a,{href:"https://www.rfc-editor.org/rfc/rfc4648"},"rfc for Base64")," and thought to myself. ",l.createElement(t.em,null,"Maybe I can implement this, in rust"),". So i sat down and read ",l.createElement(t.a,{href:"https://www.rfc-editor.org/rfc/rfc4648"},"rfc 4648")," and started to understand how it actually works. I then googled a bit and looked at other implementations."),"\n",l.createElement(t.p,null,"So in this post im going to try to explain what base64 is, a bit of how it works, and then we are going to implement a simple encoder and decoder."),"\n",l.createElement(t.h2,null,"What is it used for?"),"\n",l.createElement(t.p,null,"Lets look at how ",l.createElement(t.a,{href:"https://en.wikipedia.org/wiki/Base64"},"wikipedia")," describes base64."),"\n",l.createElement(r.Z,null,l.createElement(t.p,null,"Base64 is designed to carry data stored in binary formats across channels that only reliably support text content.")),"\n",l.createElement(t.p,null,"When we send information on the internet all servers can’t accept all formats of data. But one thing in common is that most servers can accept data in the form of text. This is where base64 comes into play. If a server can’t accept a certain format, we can always send the data as a textual representation of the data, then the server can accept the text and convert it into whatever format it needs to be on its and."),"\n",l.createElement(o.Z,null,l.createElement(t.p,null,"Important, Base64 is NOT encryption, its an encoding schema. We encode it and anyone has the ability to decode\nit back. Don’t ever use Base64 on passwords or any other type of secret and think it will protect you. Anyone can decode Base64.")),"\n",l.createElement(t.p,null,"On the world wide web, base64 is very common to use when wanting to send send files like images and and css files using base64 as a textual representation of the data instead of sending the data itself. For instance you commonly use it when you want send email attachments and this is because the original SMTP protocol only supported ",l.createElement(t.a,{href:"https://en.wikipedia.org/wiki/ASCII"},"7-bit ascii")," so there was a need to be able to represent data as text when sending emails."),"\n",l.createElement(t.p,null,"Image below shows how base64 could be used when sending an image from one server to another server."),"\n",l.createElement(t.div,{dangerouslySetInnerHTML:{__html:'<div class="mermaid">graph LR\n    A("image -> base64(image)")-- encoded-data --\x3eB("base64(image) -> image")</div>'}}),"\n",l.createElement(t.ul,null,"\n",l.createElement(t.li,null,"We encode our data into base64, a textual representation of the data."),"\n",l.createElement(t.li,null,"We send that data to a receiving server or client"),"\n",l.createElement(t.li,null,"The server/client decodes the base64 encoded data and recreates the original data on the other side."),"\n"),"\n",l.createElement(t.h2,null,"So what is base64 actually?"),"\n",l.createElement(t.p,null,"On the internet there is a saying which goes as follows, ",l.createElement(t.em,null,"“there is no such thing as plain text”"),". which is completely true. In the computer world all text is represented by 0 and 1’s. But if we have a series of bits then what text it represents depends on how we look at the bits. 3 bytes, represent 24 bits, (1 byte = 8 bits). But we can also think of 24 bits as 4 groups of 6 bits."),"\n",l.createElement(t.p,null,"Here i’ll show you a visual representation taken straight out of the rfc which shows what im talking about."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"+--first octet--+-second octet--+--third octet--+\n|7 6 5 4 3 2 1 0|7 6 5 4 3 2 1 0|7 6 5 4 3 2 1 0|\n+-----------+---+-------+-------+---+-----------+\n|5 4 3 2 1 0|5 4 3 2 1 0|5 4 3 2 1 0|5 4 3 2 1 0|\n+--1.index--+--2.index--+--3.index--+--4.index--+\n")),"\n",l.createElement(t.p,null,"As you can see here is that depending on how you decide to create your groups you can represent 24 bits as either 3 groups of 8 bits, or 4 groups of 6 bits. And this is the entire basics of the encoding and decoding using the base64 system."),"\n",l.createElement(t.p,null,"You see 8 bits can represent 256 different numbers. While 6 bits can only represent 64. This means that if we take any binary representation of text and instead look at it as in groups of 6 bits. And then map these 64 numbers to a given set of letters. We suddenly have a way of encoding any data into a limited textual representation. This can then be sent to someone that maybe only can receive limited character set, to later be converted back into something more elaborate like for instance the russian or chinese alphabet."),"\n",l.createElement(t.p,null,"So what letters are we representing with our limited set of 64 numbers?"),"\n",l.createElement(t.p,null,"The rfc show us just that."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"                    The Base 64 Alphabet\n\n Value Encoding  Value Encoding  Value Encoding  Value Encoding\n         0 A            17 R            34 i            51 z\n         1 B            18 S            35 j            52 0\n         2 C            19 T            36 k            53 1\n         3 D            20 U            37 l            54 2\n         4 E            21 V            38 m            55 3\n         5 F            22 W            39 n            56 4\n         6 G            23 X            40 o            57 5\n         7 H            24 Y            41 p            58 6\n         8 I            25 Z            42 q            59 7\n         9 J            26 a            43 r            60 8\n        10 K            27 b            44 s            61 9\n        11 L            28 c            45 t            62 +\n        12 M            29 d            46 u            63 /\n        13 N            30 e            47 v\n        14 O            31 f            48 w         (pad) =\n        15 P            32 g            49 x\n        16 Q            33 h            50 y\n\n")),"\n",l.createElement(t.p,null,"Here we can see the defined base64 alphabet. So by mapping each group of 6 bits to a number between 0-64 (using binary to real number conversion) we can then select the correct letter and in the end encode our data with a limited text range."),"\n",l.createElement(t.h2,null,"Padding"),"\n",l.createElement(t.p,null,"You can often spot a base64 string because its very common that the a base64 text representation ends with one or two equal signs (=). You see that in order for us to convert something we need to bits to line up."),"\n",l.createElement(t.p,null,"Data that isn’t suitable for conversion."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"+--first octet--+-second octet--+\n|7 6 5 4 3 2 1 0|7 6 5 4 3 2 1 0|\n+-----------+---+-------+-------+---+\n|5 4 3 2 1 0|5 4 3 2 1 0|5 4 3 2 1 0|\n+--1.index--+--2.index--+--3.index--+\n")),"\n",l.createElement(t.p,null,"Here you can see that the data provided can’t really be converted since it it doesn’t evenly add up, so in these cases we often need to pad out the data by adding padding data. We usually add one or many ",l.createElement(t.code,null,"null")," values to pad out. This padding will in the textual representation be shown as a ",l.createElement(t.code,null,"=")," character."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"+--first octet--+-second octet--+--third octet--+\n|7 6 5 4 3 2 1 0|7 6 5 4 3 2 1 0| P A D D I N G |\n+-----------+---+-------+-------+---+-----------+\n|5 4 3 2 1 0|5 4 3 2 1 0|5 4 3 2 1 0|5 4 3 2 1 0|\n+--1.index--+--2.index--+--3.index--+--4.index--+\n")),"\n",l.createElement(t.p,null,"So in the above example we added a single padding character to the end of the data so that the conversion in the end adds up evenly. The padding character in the base64 alphabet is represented by an ",l.createElement(t.em,null,"equal sign")," and at most you need 2 equal signs in the and, which gives a base64 encoded string its classic look of a text string ending with up to 2 equal signs."),"\n",l.createElement(t.p,null,"Some examples of strings that needed to be padded to be fit for encoding, notice the different amount of equal signs at the end."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},'BASE64("foob") = "Zm9vYg=="\n\nBASE64("fooba") = "Zm9vYmE="\n\nBASE64("foobar") = "Zm9vYmFy"\n')),"\n",l.createElement(t.p,null,"Here is an example of how we solve this problem in code."),"\n",l.createElement(t.p,null,"Below We check that the supplied data bytes are devisable by 3, if not we add the corresponding padding (1 or 2) ",l.createElement(t.code,null,"null")," characters to the end of the supplied data, so that we can encode the data properly. Then at the end, of this code snippet, we remove the added padding and replace it with proper equal signs to show that we have padded our data."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-rust"},"// check if we need to add padding or not\nlet input_length = input.chars().count() % 3;\nlet mut padding: String = String::new();\nif input_length > 0 {\n    for _ in input_length..3 {\n        padding.push('=');\n\n        // add null values to pad out the data\n        input.push('\\0');\n    }\n}\n\n// Code for encoding the data, omitted for abbr.\n\n// strip the null values after encoding\nlet mut result: String = result.chars().take(result_length).collect();\n\n// add on the correct number of equal signs to the and of the encoded string\nresult.push_str(&padding);\n")),"\n",l.createElement(t.h2,null,"Lets write an encoder"),"\n",l.createElement(t.p,null,"To encode some data into base 64, we are going to split this up into 4 different steps. I will explain the steps as we go, but we will start out by creating a loop that will extract out 3 bytes at a time in a loop. Because as we explained earlier, we want to convert 3 groups of 8 bits, into 4 groups of 6 bytes."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-rust"},"let value_bytes = input.as_bytes();\nlet value_iter = input.chars().enumerate().step_by(3);\n\nfor (i, _) in value_iter {\n\n    let char_number = value_bytes[i];\n    let char_number1 = value_bytes[i + 1];\n    let char_number2 = value_bytes[i + 2];\n    let n: u32 = ((char_number as u32) << 16) + ((char_number1 as u32) << 8) + (char_number2 as u32);\n}\n")),"\n",l.createElement(t.p,null,"Most of the code above is easy to understand except for maybe the last line. What we do in that last line is that we get the first 3 bytes, we then cast and bit shift each byte into its own “space” in a u32 representation."),"\n",l.createElement(t.p,null,"Lastly we add them all together, so they all fit together nicely in their own space. The below representation shows how it works visually."),"\n",l.createElement(t.pre,null,l.createElement(t.code,null,"// We extract a byte (for example FF which is hex value of the numeric value 255)\n1111 1111\n\n// we then cast the value to a u32 (32bits) so we get some free space\n0000 0000 0000 0000 0000 0000 1111 1111\n\n// then we shift the value 16 steps to the left\n0000 0000 1111 1111 0000 0000 0000 0000\n\n// We do the same with the second value but only shift it 8 bits\n0000 0000 0000 0000 1111 1111 0000 0000\n\n// the last value we only cast to a u32 (32 bits)\n0000 0000 0000 0000 0000 0000 1111 1111\n\n// we then add them all together and each byte gets their own space\n0000 0000 1111 1111 1111 1111 1111 1111\n")),"\n",l.createElement(t.p,null,"So now we have a 32 bit representation of our 3 first bytes. Time to do the conversion, and we do it by doing some more bit shifting."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-rust"},"let n: u32 = ((char_number as u32) << 16) + ((char_number1 as u32) << 8) + (char_number2 as u32);\n\nlet n1 = (n >> 18) & 0x3F;\nlet n2 = (n >> 12) & 0x3F;\nlet n3 = (n >> 6) & 0x3F;\nlet n4 = n & 0x3F;\n")),"\n",l.createElement(t.p,null,"To extract our 4, 6-bit numbers from our 32-bit number we need to do some more bit shifting. The above code does this, but if you read below the steps are explained but using the bit representations to show it more graphically."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"// We start out with our newly created 32 bit number\n0000 0000 1111 1111 1111 1111 1111 1111\n\n   // We then bit shift it down 18 steps and mask off everything above the 6th bit\n   0000 0000 0000 0000 0000 0000 0011 1111\n&  0000 0000 0000 0000 0000 0000 0011 1111\n------------------------------------------\n   0000 0000 0000 0000 0000 0000 0011 1111\n\n   // second value is created by a shift by 12 steps down and masked the same way\n   0000 0000 0000 0000 0000 1111 1111 1111\n&  0000 0000 0000 0000 0000 0000 0011 1111\n------------------------------------------\n   0000 0000 0000 0000 0000 0000 0011 1111\n\n   // third we instead bit shift by 6 and mask off\n   0000 0000 0000 0011 1111 1111 1111 1111\n&  0000 0000 0000 0000 0000 0000 0011 1111\n------------------------------------------\n   0000 0000 0000 0000 0000 0000 0011 1111\n\n   // And finally we don't touch the original value but mask it to get the last value\n   0000 0000 1111 1111 1111 1111 1111 1111\n&  0000 0000 0000 0000 0000 0000 0011 1111\n------------------------------------------\n   0000 0000 0000 0000 0000 0000 0011 1111\n")),"\n",l.createElement(t.p,null,"Now that we have our 4 new values, we can do a simple lookup table check to see what letter our new values represents and create as new string from it."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-rust"},"const BASE64_CHARS: &[char] = &[\n    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',\n    'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l',\n    'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3', '4',\n    '5', '6', '7', '8', '9', '+', '/',\n];\n\nlet c1 = BASE64_CHARS[n1 as usize];\nlet c2 = BASE64_CHARS[n2 as usize];\nlet c3 = BASE64_CHARS[n3 as usize];\nlet c4 = BASE64_CHARS[n4 as usize];\nresult.push(c1);\nresult.push(c2);\nresult.push(c3);\nresult.push(c4);\n")),"\n",l.createElement(t.h2,null,"And then a Decoder"),"\n",l.createElement(t.p,null,"To decode, we basically just need to remove the padding, and then do the entire process but in reverse. One thing to remember is that before the decoder process can be run you will probably want to do some validation to make sure that what you are about to decode is a proper base64 string. I wont show that code here, but doing a regexp check that it includes only the allowed characters from the base64 alphabet will usually suffice."),"\n",l.createElement(t.p,null,"So we start out by stripping off the padding, and replacing the equal signs with something else. Anything will work."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-rust"},'let suffix = if input.ends_with("==") {\n    "AA"\n} else if input.ends_with(\'=\') {\n    "A"\n} else {\n    ""\n};\n\n// remove the equal signs\nlet mut input = input[..input.len() - suffix.len()].to_string();\n\n// push new characters on the end if needed\ninput.push_str(suffix);\n')),"\n",l.createElement(t.p,null,"After the padding has been replaced, we enumerate, but this time 4 bytes at a time (instead of 3 like we did during the encoding process). We then get the value of each of the bytes and check their indexes in our array of Base64 characters that we used earlier."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-rust"},"let value_bytes = input.as_bytes();\nlet mut bytes = Vec::new();\n\nlet input_iter = input.chars().enumerate().step_by(4);\n\nfor (i, _) in input_iter {\n    let v = Decoder::index_of(value_bytes[i]);\n    let v1 = Decoder::index_of(value_bytes[i + 1]);\n    let v2 = Decoder::index_of(value_bytes[i + 2]);\n    let v3 = Decoder::index_of(value_bytes[i + 3]);\n}\n\nfn index_of(input: u8) -> usize {\n    BASE64_CHARS\n        .iter()\n        .position(|c| c == &(input as char))\n        .unwrap()\n}\n")),"\n",l.createElement(t.p,null,"Like before, we bit shift and mask, but this time we do it a little bit different because we want to go from 4 bytes, to 3 bytes per group."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-rust"},"let n: u32 = ((v as u32) << 18) + ((v1 as u32) << 12) + ((v2 as u32) << 6) + (v3 as u32);\n")),"\n",l.createElement(t.p,null,"This time though, we need to shift things a little bit differently."),"\n",l.createElement(t.pre,null,l.createElement(t.code,null,"// We extract a byte but this has only 6 bits in a 8 bit space\n0011 1111\n\n// we then cast the alphabetic value to a u32 (32bits)\n0000 0000 0000 0000 0000 0000 0011 1111\n\n// then we shift the value 18 steps to the left\n0000 0000 1111 1100 0000 0000 0000 0000\n\n// We do the same with the second value but only shift it 12 bits\n0000 0000 0000 0011 1111 1100 0000 0000\n\n// the 3rd is shifted 6 bits\n0000 0000 0000 0000 0000 1111 1100 0000\n\n// And the 4th is not shifted at all\n0000 0000 0000 0000 0000 0000 0011 1111\n\n// we then add them all together and each byte gets their own space\n0000 0000 1111 1111 1111 1111 1111 1111\n")),"\n",l.createElement(t.p,null,"After the extraction of the data, we need to shift the bits a little bit more to create our 3 groups of 8 bits that we can store in a proper byte array. That is done in the following way."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-bash"},"// We start out with our newly created 32 bit number\n0000 0000 1111 1111 1111 1111 1111 1111\n\n   // We then bit shift it down 16 steps and mask off everything above the 8th bit\n   0000 0000 0000 0000 0000 0000 1111 1111\n&  0000 0000 0000 0000 0000 0000 1111 1111\n------------------------------------------\n   0000 0000 0000 0000 0000 0000 1111 1111\n\n   // second value is created by a shift by 8 steps down and masked the same way\n   0000 0000 0000 0000 1111 1111 1111 1111\n&  0000 0000 0000 0000 0000 0000 1111 1111\n------------------------------------------\n   0000 0000 0000 0000 0000 0000 1111 1111\n\n   // third we dont shift, we just mask off\n   0000 0000 1111 1111 1111 1111 1111 1111\n&  0000 0000 0000 0000 0000 0000 1111 1111\n------------------------------------------\n   0000 0000 0000 0000 0000 0000 1111 1111\n")),"\n",l.createElement(t.p,null,"All of the operations above are done with the following code. And then we just push the decoded bytes onto a new list of ",l.createElement(t.code,null,"bytes"),"."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-rust"},"let c = n >> 16 & 0xFF;\nlet c1 = n >> 8 & 0xFF;\nlet c2 = n & 0xFF;\n\nbytes.push(c as u8);\nbytes.push(c1 as u8);\nbytes.push(c2 as u8);\n")),"\n",l.createElement(t.p,null,"Before we can convert this to a proper string we lastly need to remove the characters we used for padding, and then we convert the entire string to a utf-8 string that we can return."),"\n",l.createElement(t.pre,null,l.createElement(t.code,{className:"language-rust"},"// remove padding characters\nfor _ in 0..suffix.len() {\n    bytes.pop();\n}\n\n// create a utf-8 string from the provided data\nlet output = String::from_utf8(bytes).unwrap();\n")),"\n",l.createElement(t.p,null,"And thats it!"),"\n",l.createElement(t.h2,null,"Summary"),"\n",l.createElement(t.p,null,"So in this post we have looked closer at what base64 is and what it is used for. We also looked at how to implement our own version of a base64 encoder and decoder. There are probably many more different ways and more efficient ways you can implement this to be more effective, but i found this to be fun and a learning experience. The entire code with a working example can be found on my ",l.createElement(t.a,{href:"https://github.com/Tandolf/base64"},"github"),"."),"\n",l.createElement(t.p,null,"Until next time, have a nice one."))}var s=function(e){void 0===e&&(e={});var t=Object.assign({},(0,a.ah)(),e.components).wrapper;return t?l.createElement(t,e,l.createElement(i,e)):i(e)},c=n(1082),d=n(7464),u=n(7015),h=n(4001),m=n(1250),p=n(6603),f=function(e){var t,n,a,r,o,i,s,h,f=e.data,b=f.previous,g=f.next,w=f.site,v=f.mdx,y=(e.location,e.children),E=(null==w||null===(t=w.siteMetadata)||void 0===t||t.title,null!=v&&null!==(n=v.frontmatter)&&void 0!==n&&n.tags?v.frontmatter.tags.replaceAll(/\s/g,"").split(","):[]);return l.createElement(u.Z,null,l.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},l.createElement("header",{style:{marginBottom:30}},l.createElement("h1",{itemProp:"headline"},null==v||null===(a=v.frontmatter)||void 0===a?void 0:a.title),l.createElement(m.v,null,null==v||null===(r=v.frontmatter)||void 0===r?void 0:r.date),l.createElement(p.Z,{tags:E})),l.createElement("section",{itemProp:"articleBody"},y),l.createElement(p.Z,{tags:E}),l.createElement("hr",null),l.createElement("footer",null,l.createElement(d.Z,null))),l.createElement("nav",{className:"blog-post-nav"},l.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},l.createElement("li",null,b&&l.createElement(c.Link,{to:(null==b||null===(o=b.fields)||void 0===o?void 0:o.slug)||"",rel:"prev"},l.createElement(m.u,null,"← ",(null==b||null===(i=b.frontmatter)||void 0===i?void 0:i.title)||""))),l.createElement("li",null,g&&l.createElement(c.Link,{to:(null==g||null===(s=g.fields)||void 0===s?void 0:s.slug)||"",rel:"next"},l.createElement(m.u,null,null==g||null===(h=g.frontmatter)||void 0===h?void 0:h.title," →"))))))},b=function(e){var t,n,a=e.data.mdx;return l.createElement(h.Z,{title:null==a||null===(t=a.frontmatter)||void 0===t?void 0:t.title,description:(null==a||null===(n=a.frontmatter)||void 0===n?void 0:n.description)||(null==a?void 0:a.excerpt)})};function g(e){return l.createElement(f,e,l.createElement(s,e))}},7464:function(e,t,n){var a=n(7294),l=n(1082),r=n(3723);t.Z=function(){var e,t,o=(0,l.useStaticQuery)("1085053114"),i=null===(e=o.site.siteMetadata)||void 0===e?void 0:e.author,s=null===(t=o.site.siteMetadata)||void 0===t?void 0:t.social;return a.createElement("div",{className:"bio"},a.createElement(r.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/selfie.jpg",width:50,height:50,quality:95,alt:"Profile picture",__imageData:n(1077)}),(null==i?void 0:i.name)&&a.createElement("p",null,"Written by ",a.createElement("strong",null,i.name)," ","I dont have twitter but i have"," ",a.createElement("a",{href:"https://www.linkedin.com/in/"+((null==s?void 0:s.linkedin)||"")},"linkedin")," ","and im on"," ",a.createElement("a",{href:"https://stackoverflow.com/users/"+((null==s?void 0:s.stack_overflow)||"")},"stack overflow"),"."))}},4278:function(e,t,n){n.d(t,{o:function(){return u}});var a=n(7294),l=n(3494),r=n(1279),o=n(7244),i=(0,l.default)("div").withConfig({displayName:"AttentionBox__StyledWrapper",componentId:"sc-y20oae-0"})(["border-left-width:8px;border-left-style:solid;border-left-color:",";border-radius :5px;background-color:",";display:flex;flex-direction:column;padding:16px;margin-bottom:21px;color:",";"],(function(e){return e.borderColor||"var(--primary-color)"}),(function(e){return e.backgroundColor||"var(--secondary-color)"}),(function(e){return e.textColor||"var(--font-color)"})),s=l.default.div.withConfig({displayName:"AttentionBox__Header",componentId:"sc-y20oae-1"})(["display:flex;text-transform:uppercase;font-weight:bolder;margin-bottom:5px;align-items:center;"]),c=l.default.div.withConfig({displayName:"AttentionBox__Content",componentId:"sc-y20oae-2"})(["font-size:15px;p{margin-bottom:0px;}code{padding-left:5px;padding-right:5px;background-color:green;}"]),d=l.default.div.withConfig({displayName:"AttentionBox__Icon",componentId:"sc-y20oae-3"})(["margin-right:7px;margin-bottom:0px;"]),u=function(e){var t=e.children,n=e.type,l=null,u=null,h=null,m=null;return"info"==n?(u="var(--info-color)",h="var(--dark-info-color)",m="var(--font-dark-color)",l=a.createElement(a.Fragment,null,a.createElement(d,null,a.createElement(r.ocf,{size:25,style:{verticalAlign:"middle"}})),"info")):"warning"==n?(u="var(--warning-color)",h="var(--dark-warning-color)",l=a.createElement(a.Fragment,null,a.createElement(d,null,a.createElement(r.SR5,{size:25,style:{verticalAlign:"middle"}})),"warning")):"danger"==n&&(u="var(--danger-color)",h="var(--dark-danger-color)",m="var(--font-color)",l=a.createElement(a.Fragment,null,a.createElement(d,null,a.createElement(o.tJu,{size:25,style:{verticalAlign:"middle"}})),"danger")),a.createElement(i,{borderColor:h,backgroundColor:u,textColor:m},a.createElement(s,null,l),a.createElement(c,null,t))}},9263:function(e,t,n){var a=n(7294),l=n(4278);t.Z=function(e){var t=e.children;return a.createElement(l.o,{type:"danger"},t)}},2477:function(e,t,n){var a=n(7294),l=n(4278);t.Z=function(e){var t=e.children;return a.createElement(l.o,{type:"info"},t)}},1862:function(e,t,n){var a=n(7294),l=n(4278);t.Z=function(e){var t=e.children;return a.createElement(l.o,{type:"warning"},t)}},1250:function(e,t,n){n.d(t,{u:function(){return l},v:function(){return r}});var a=n(3494),l=a.default.h3.withConfig({displayName:"styles__LinkText",componentId:"sc-ncn1p3-0"})(["font-size:18px;"]),r=a.default.h3.withConfig({displayName:"styles__DateText",componentId:"sc-ncn1p3-1"})(["font-size:18px;color:var(--color-gray-700);"])},1077:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#181818","images":{"fallback":{"src":"/static/688f707e139e1c5b3b1adc848f4464fb/d24ee/selfie.jpg","srcSet":"/static/688f707e139e1c5b3b1adc848f4464fb/d24ee/selfie.jpg 50w,\\n/static/688f707e139e1c5b3b1adc848f4464fb/64618/selfie.jpg 100w","sizes":"50px"},"sources":[{"srcSet":"/static/688f707e139e1c5b3b1adc848f4464fb/d4bf4/selfie.avif 50w,\\n/static/688f707e139e1c5b3b1adc848f4464fb/ee81f/selfie.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/static/688f707e139e1c5b3b1adc848f4464fb/3faea/selfie.webp 50w,\\n/static/688f707e139e1c5b3b1adc848f4464fb/6a679/selfie.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-content-file-path-home-thomas-documents-code-js-blog-content-blog-base-64-in-rust-index-mdx-475711189e05fdc18892.js.map