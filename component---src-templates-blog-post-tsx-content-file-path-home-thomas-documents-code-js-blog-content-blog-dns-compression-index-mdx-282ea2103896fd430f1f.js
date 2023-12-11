"use strict";(self.webpackChunkgatsby_starter_blog=self.webpackChunkgatsby_starter_blog||[]).push([[179],{1046:function(e,t,n){n.d(t,{w_:function(){return c}});var a=n(7294),r={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},l=a.createContext&&a.createContext(r),o=function(){return o=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var r in t=arguments[n])Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r]);return e},o.apply(this,arguments)},i=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};function s(e){return e&&e.map((function(e,t){return a.createElement(e.tag,o({key:t},e.attr),s(e.child))}))}function c(e){return function(t){return a.createElement(u,o({attr:o({},e.attr)},t),s(e.child))}}function u(e){var t=function(t){var n,r=e.attr,l=e.size,s=e.title,c=i(e,["attr","size","title"]),u=l||t.size||"1em";return t.className&&(n=t.className),e.className&&(n=(n?n+" ":"")+e.className),a.createElement("svg",o({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},t.attr,r,c,{className:n,style:o(o({color:e.color||t.color},t.style),e.style),height:u,width:u,xmlns:"http://www.w3.org/2000/svg"}),s&&a.createElement("title",null,s),e.children)};return void 0!==l?a.createElement(l.Consumer,null,(function(e){return t(e)})):t(r)}},8926:function(e,t,n){n.r(t),n.d(t,{Head:function(){return p},default:function(){return b}});n(935);var a=n(6410),r=n(7294),l=n(1862);function o(e){var t=Object.assign({p:"p",a:"a",h2:"h2",code:"code",pre:"pre",ul:"ul",li:"li",div:"div",em:"em",h1:"h1"},(0,a.ah)(),e.components);return r.createElement(r.Fragment,null,r.createElement(t.p,null,"In our ",r.createElement(t.a,{href:"http://blog.toerktumlare.com/anatomy-of-dns/"},"last post")," i went through the anatomy of a DNS request, but one thing i left out is that DNS has some inbuilt compression to try to make messages smaller. I thought we should look at that today and show how i solved it in my DNS client ",r.createElement(t.a,{href:"https://github.com/Tandolf/who"},"“Who are you?”"),". How to solve this can be done in many ways and this is not in any way an efficient solution, i just wanted to explain how compression in DNS messages works and one way of solving it."),"\n",r.createElement(t.p,null,"All the examples here are written in rust, but it’s not that much code so it will be quite easy to understand even if you have never coded in rust before."),"\n",r.createElement(t.h2,null,"So how does it work?"),"\n",r.createElement(t.p,null,"Compression in DNS messages works in the way that we don’t want to repeat strings multiple times in messages if we don’t have to. By using pointers within our message, we can reference other strings, when we need to write out the string several times."),"\n",r.createElement(t.p,null,"So what does that actually look like?"),"\n",r.createElement(t.p,null,"If we make a request using ",r.createElement(t.code,null,"who")," and ask for this site, ",r.createElement(t.code,null,"blog.toerktumlare.com"),", we get the following response."),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-bash"},"$ who blog.toerktumlare.com\n== Who are you? == v1.0.0 == blog.toerktumlare.com ==\n┌Header──────────────────────────────────────────────────────────────────┐\n│OPCODE: Query, STATUS: NoError id: 32419                                │\n│qr, rd, ra,                                                             │\n│QUERY: 1, ANSWERS: 5, AUTHORITY: 0, ADDITIONAL: 0                       │\n└────────────────────────────────────────────────────────────────────────┘\n┌Message─────────────────────────────────────────────────────────────────┐\n│blog.toerktumlare.com             IN       A                            │\n└────────────────────────────────────────────────────────────────────────┘\n┌Records─────────────────────────────────────────────────────────────────┐\n│blog.toerktumlare.com     2792    IN       CNAME   tandolf.github.io    │\n│tandolf.github.io         2792    IN       A       185.199.110.153      │\n│tandolf.github.io         2792    IN       A       185.199.108.153      │\n│tandolf.github.io         2792    IN       A       185.199.111.153      │\n│tandolf.github.io         2792    IN       A       185.199.109.153      │\n└────────────────────────────────────────────────────────────────────────┘\n┌Statistics──────────────────────────────────────────────────────────────┐\n│Query time: 4 msec                                                      │\n│When: 2023-11-15 18:11:43                                               │\n│Msg SENT: 39 bytes                                                      │\n│Msg RCVD: 134 bytes                                                     │\n└────────────────────────────────────────────────────────────────────────┘\n")),"\n",r.createElement("br"),"\n",r.createElement("br"),"\n",r.createElement("br"),"\n",r.createElement(t.p,null,"But if we dump the actual raw bytes sent by using ",r.createElement(t.code,null,"tcpdump")," we get the following."),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-bash"},"➜  ~ sudo tcpdump -i any port 53 -X\ntcpdump: data link type LINUX_SLL2\ntcpdump: verbose output suppressed, use -v[v]... for full protocol decode\nlistening on any, link-type LINUX_SLL2 (Linux cooked v2), snapshot length 262144 bytes\n14:53:18.781438 lo    In  IP localhost.34041 > localhost.domain: 39295+ [1au] A? blog.toerktumlare.com. (62)\n\t0x0000:  4500 005a 4296 0000 4011 39c7 7f00 0001  E..ZB...@.9.....\n\t0x0010:  7f00 0035 84f9 0035 0046 fe8d 997f 0120  ...5...5.F......\n\t0x0020:  0001 0000 0000 0001 0462 6c6f 670c 746f  .........blog.to\n\t0x0030:  6572 6b74 756d 6c61 7265 0363 6f6d 0000  erktumlare.com..\n\t0x0040:  0100 0100 0029 04d0 0000 0000 000c 000a  .....)..........\n\t0x0050:  0008 450e f971 0825 46f3                 ..E..q.%F.\n14:53:18.781770 lo    In  IP localhost.domain > localhost.34041: 39295 5/0/5 CNAME tandolf.github.io., A 185.199.111.153, A 185.199.108.153, A 185.199.109.153, A 185.199.110.153 (257)\n\t0x0000:  4500 011d a258 4000 0111 d841 7f00 0035  E....X@....A...5\n\t0x0010:  7f00 0001 0035 84f9 0109 ff50 997f 8180  .....5.....P....\n\t0x0020:  0001 0005 0000 0005 0462 6c6f 670c 746f  .........blog.to\n\t0x0030:  6572 6b74 756d 6c61 7265 0363 6f6d 0000  erktumlare.com..\n\t0x0040:  0100 01c0 0c00 0500 0100 0002 1200 1307  ................\n\t0x0050:  7461 6e64 6f6c 6606 6769 7468 7562 0269  tandolf.github.i\n\t0x0060:  6f00 c033 0001 0001 0000 0212 0004 b9c7  o..3............\n\t0x0070:  6f99 c033 0001 0001 0000 0212 0004 b9c7  o..3............\n\t0x0080:  6c99 c033 0001 0001 0000 0212 0004 b9c7  l..3............\n\t0x0090:  6d99 c033 0001 0001 0000 0212 0004 b9c7  m..3............\n\t0x00a0:  6e99 c033 001c 0001 0000 0212 0010 2606  n..3..........&.\n\t0x00b0:  50c0 8003 0000 0000 0000 0000 0153 c033  P............S.3\n\t0x00c0:  001c 0001 0000 0212 0010 2606 50c0 8001  ..........&.P...\n\t0x00d0:  0000 0000 0000 0000 0153 c033 001c 0001  .........S.3....\n\t0x00e0:  0000 0212 0010 2606 50c0 8002 0000 0000  ......&.P.......\n\t0x00f0:  0000 0000 0153 c033 001c 0001 0000 0212  .....S.3........\n\t0x0100:  0010 2606 50c0 8000 0000 0000 0000 0000  ..&.P...........\n\t0x0110:  0153 0000 29ff d600 0000 0000 00         .S..)........\n")),"\n",r.createElement("br"),"\n",r.createElement("br"),"\n",r.createElement("br"),"\n",r.createElement(t.p,null,"Thats quite a lot of info, but the top part is the request, and the bottom large part is the response."),"\n",r.createElement(t.p,null,"If we only look at the response, we can see that the name ",r.createElement(t.code,null,"blog.toerktumlare.com")," and the string ",r.createElement(t.code,null,"tandolf.github.io")," are only mentioned once in this entire message."),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-bash"},"\t0x0000:  4500 011d a258 4000 0111 d841 7f00 0035  E....X@....A...5\n\t0x0010:  7f00 0001 0035 84f9 0109 ff50 997f 8180  .....5.....P....\n\t0x0020:  0001 0005 0000 0005 0462 6c6f 670c 746f  .........blog.to\n\t0x0030:  6572 6b74 756d 6c61 7265 0363 6f6d 0000  erktumlare.com..\n\t0x0040:  0100 01c0 0c00 0500 0100 0002 1200 1307  ................\n\t0x0050:  7461 6e64 6f6c 6606 6769 7468 7562 0269  tandolf.github.i\n\t0x0060:  6f00 c033 0001 0001 0000 0212 0004 b9c7  o..3............\n\t0x0070:  6f99 c033 0001 0001 0000 0212 0004 b9c7  o..3............\n\t0x0080:  6c99 c033 0001 0001 0000 0212 0004 b9c7  l..3............\n\t0x0090:  6d99 c033 0001 0001 0000 0212 0004 b9c7  m..3............\n\t0x00a0:  6e99 c033 001c 0001 0000 0212 0010 2606  n..3..........&.\n\t0x00b0:  50c0 8003 0000 0000 0000 0000 0153 c033  P............S.3\n\t0x00c0:  001c 0001 0000 0212 0010 2606 50c0 8001  ..........&.P...\n\t0x00d0:  0000 0000 0000 0000 0153 c033 001c 0001  .........S.3....\n\t0x00e0:  0000 0212 0010 2606 50c0 8002 0000 0000  ......&.P.......\n\t0x00f0:  0000 0000 0153 c033 001c 0001 0000 0212  .....S.3........\n\t0x0100:  0010 2606 50c0 8000 0000 0000 0000 0000  ..&.P...........\n\t0x0110:  0153 0000 29ff d600 0000 0000 00         .S..)........\n")),"\n",r.createElement(t.p,null,"But we could see in our formatted response in the console that the strings were referenced several times and this is because DNS compresses the message to avoid sending the same string multiple times in the message to keep the messages as small as possible. Pointer can usually easy be located by finding the ",r.createElement(t.code,null,"0xc0")," value. If you see this value, its highly likely to be a pointer (you can for instance see a bunch of pointers at 0x0060-0x00a0)."),"\n",r.createElement(l.Z,null,r.createElement(t.p,null,r.createElement(t.code,null,"Oxc0")," pointer value is not always the case, so do not trust this value to always be a pointer. We later are going to find out that a pointer is a 14-bit value, and if the top 6 bits are set to ",r.createElement(t.code,null,"zero"),", the pointer will indeed have the first byte set as ",r.createElement(t.code,null,"0xc0"),". But if the pointers offset value is higher than 255 then the ",r.createElement(t.code,null,"0xc0")," rule potentially doesn’t apply.")),"\n",r.createElement(t.p,null,"So instead of writing strings several times it instead uses a pointer to point to tokens in strings when we need to reference them. And the ",r.createElement(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc1035#section-4.1.4"},"rfc 1035")," shows us what such a pointer looks like."),"\n",r.createElement(t.h2,null,"The pointer type"),"\n",r.createElement(t.p,null,"So a pointer in a DNS message takes the form of 2 octets. Where the 2 first bits, needs to be set for us to know that we are dealing with a pointer. The value after the two set bits is an offset value, that points to a string token."),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-bash"},"    +--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+\n    | 1  1|                OFFSET                   |\n    +--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+--+\n")),"\n",r.createElement(t.p,null,"The above image is taken from the rfc and shows the structure of a pointer-byte."),"\n",r.createElement(t.p,null,"The offset, is a 14-bit number, this offset is counted from the first byte of the message. Pointers are distinguished from character values by the 2 first bits, since a character in a dns message can only take on 63 values (6 bits)."),"\n",r.createElement(t.p,null,"So with this information we can sort of define some rules of how to read DNS data."),"\n",r.createElement(t.h2,null,"The rules, defining our label types!"),"\n",r.createElement(t.p,null,"So lets say we are going to read a token from a string. A token is a part of a URL. In our earlier blogpost we saw that tokens in dns messages are prefixed by its length value and terminated with a null byte. So ",r.createElement(t.code,null,"blog.toerktumlare.com")," is in a dns message written as ",r.createElement(t.code,null,"4blog12toerktumlare3com0"),". So when we are reading tokens we can sort of understand that there are 3 different outcomes of bytes."),"\n",r.createElement(t.ul,null,"\n",r.createElement(t.li,null,"A number (declaring the length of the next token)"),"\n",r.createElement(t.li,null,"A null byte (saying that our string token has ended)"),"\n",r.createElement(t.li,null,"A pointer (telling us that the token we want is at a different location in the raw message)"),"\n"),"\n",r.createElement(t.p,null,"This knowledge can give us a chart of how to read things"),"\n",r.createElement(t.div,{dangerouslySetInnerHTML:{__html:"<div class=\"mermaid\">%%{init: {'theme':'dark'}}%%\nflowchart LR\n    A{take the first byte} --\x3e B{Are the first 2 bits set?} -- Yes --\x3e C{take second byte \\nand parse as a u16}\n    B -- No --\x3e D{Is the entire byte set to zero?} -- Yes --\x3e E{Parse as NullByte} \n    D -- No --\x3e F{Parse as a length token} </div>"}}),"\n",r.createElement(t.p,null,"We can start out by using enums to declare the 3 different label types we are going to end up with."),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-rust"},"pub enum CtrlByte {\n    Length(u8),\n    Ptr(u16),\n    Null,\n}\n")),"\n",r.createElement(t.p,null,"If the byte is a length byte it will contain the length as an u8. If it turns out its a pointer, the enum will contain a u16 with our 14-bit pointer value. And lastly if its a null value, we don’t really need to provide the value, because we know its zero already."),"\n",r.createElement(t.h2,null,"Parsing a length label"),"\n",r.createElement(t.p,null,"Im using nom to parse values and its common in nom to start out out with small parsers and then combine them into bigger parsers. So we will start out easy by using ",r.createElement(t.code,null,"take")," to take 1  byte and we then use ",r.createElement(t.code,null,"map")," to map it into our enum value. The function here returns a result, containing a tuple, that has the rest of the bytes, and our parsed enum."),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-rust"},"fn parse_length_byte(buffer: &[u8]) -> IResult<&[u8], CtrlByte> {\n    map(take(1usize), |value: &[u8]| CtrlByte::Length(value[0]))(buffer)\n}\n")),"\n",r.createElement(t.p,null,"This is a very typical nom pattern, and is a good start. This is our last reort in our flowchart we drew earlier, which means that we dont need any error hendling here because if we have gotten this war, we know that it must be a length number."),"\n",r.createElement(t.h2,null,"Parse a null label"),"\n",r.createElement(t.p,null,"Parsing a null byte is almost as easy. We just need to check that if the next byte is of value ",r.createElement(t.code,null,"0x00")," and if so, we ",r.createElement(t.code,null,"map")," it into our enum. If its not, we will return an error."),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-rust"},"fn parse_nullbyte(buffer: &[u8]) -> IResult<&[u8], CtrlByte> {\n    if buffer[0] == 0x00 {\n        map(take(1usize), |_: &[u8]| CtrlByte::Null)(buffer)\n    } else {\n        Err(make_error!(buffer, ErrorKind::Fail))\n    }\n}\n")),"\n",r.createElement(t.p,null,"Why we are returning an error here, is to signal that this parser failed, and nom will later use that error to understand that it should try a different parser."),"\n",r.createElement(t.h2,null,"Parsing a pointer label"),"\n",r.createElement(t.p,null,"Parsing bits in nom is a little bit tricker than just parsing bytes. You basically write a function that takes in a tuple that contains the bytes wyou want to parse and a ",r.createElement(t.code,null,"usize")," value that points to which bit you are currently parsing. If you want to read more about it ",r.createElement(t.a,{href:"https://blog.adamchalmers.com/nom-bits"},"Adam Chandler")," has a good blog post on how to parse bits using nom."),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-rust"},"type BitInput<'a> = (&'a [u8], usize);\n\n// determine if this is a pointer\nfn is_ptr(input: BitInput) -> IResult<BitInput, bool> {\n    map(take(2usize), |bits: u8| bits == 0b0000_0011)(input)\n}\n\n// if it is a pointer, take the 14 additional bits and map into a u16\npub fn parse_ptr(input: BitInput) -> IResult<BitInput, CtrlByte> {\n    let (output, is_ptr) = is_ptr(input)?;\n    if is_ptr {\n        map(take(14usize), |value: u16| CtrlByte::Ptr(value))(output)\n    } else {\n        Err(make_error!(input, ErrorKind::Fail))\n    }\n}\n")),"\n",r.createElement(t.p,null,"Im doing this in a two step process, first we need to determine if the byte is an actual pointer by checking the first two bits. And if such is the case, we in the second step take the 14 additional bits and prase these into a u16 value that we put in our enum."),"\n",r.createElement(t.p,null,"The type declaration at the top is just done for conveniance to avoid having to write ",r.createElement(t.code,null,"(&'a [u8], usize')")," several times."),"\n",r.createElement(t.p,null,"We return a ",r.createElement(t.code,null,"Err")," here if it isn’t a pointer to trigger nom to try a different parser."),"\n",r.createElement(t.h2,null,"Combining the parsers"),"\n",r.createElement(t.p,null,"Now that we have our three parsers written its time to combine them. Here we can use the nom ",r.createElement(t.code,null,"alt")," combinator to let nom try several parsers in a row, and if one fails it will alternate and try the next one until the first one succeeds."),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-rust"},"fn resolve_next(buffer: &[u8]) -> IResult<&[u8], CtrlByte> {\n    alt((bits(parse_ptr), parse_nullbyte, parse_length_byte))(buffer)\n}\n")),"\n",r.createElement(t.p,null,"In order to convert our bytes into bits, we need to wrap our parser in the ",r.createElement(t.code,null,"bits")," function from nom. This will create a ",r.createElement(t.em,null,"higher order function")," that handles bits instead of bytes."),"\n",r.createElement(t.p,null,"Other than that this is also pretty straight forward. You provide the ",r.createElement(t.code,null,"alt")," function with a ",r.createElement(t.code,null,"tuple")," of functions that will get run until the first one succeeds."),"\n",r.createElement(t.h1,null,"Parsing the actual token based on a length label"),"\n",r.createElement(t.p,null,"We need one more parser until we are done and that is the parser that will actually read the token, based on its length. So when we know the length of the next token, we just grab that amount of bytes and convert them into a ",r.createElement(t.code,null,"str"),". In rust all ",r.createElement(t.code,null,"String")," are utf-8 so we convert the byte into that."),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-rust"},"pub fn take_token(buffer: &[u8], length: usize) -> IResult<&[u8], &str> {\n    map(take(length), |v| str::from_utf8(v).unwrap())(buffer)\n}\n")),"\n",r.createElement(t.h2,null,"Lets recurse, lets recurse, lets recurse…"),"\n",r.createElement(t.p,null,"Now that we have all our parts, we just need to combine it all into the final parser."),"\n",r.createElement(t.pre,null,r.createElement(t.code,{className:"language-rust"},"pub fn parse_names<'a>(\n    buffer: &'a [u8],\n    source: &'a [u8],\n    tokens: &mut Vec<String>,\n) -> IResult<&'a [u8], String> {\n    let mut b = buffer;\n    loop {\n\n        // Check what the next byte is of type\n        if let Ok((buffer, ctrl_byte)) = resolve_next(b) {\n            \n            // Match on the type parsed\n            match ctrl_byte {\n\n                // If length enum, parse the next token using the length value\n                // push the token onto a collection\n                CtrlByte::Length(length) => {\n                    let (buffer, token) = take_token(buffer, length as usize)?;\n                    tokens.push(token.to_owned());\n                    b = buffer;\n                }\n\n                // if ptr enum, slice the original message from the offset\n                // value, and recurse using that buffer\n                CtrlByte::Ptr(index) => {\n                    let (_, _) = parse_names(&source[index as usize..], source, tokens)?;\n                    b = buffer;\n                    break;\n                }\n\n                // if null byte enum, update the buffer, and break the loop\n                CtrlByte::Null => {\n                    b = buffer;\n                    break;\n                }\n            }\n        }\n    }\n    Ok((&b, tokens.join(\".\")))\n}\n")),"\n",r.createElement(t.p,null,"In each iteration of the loop we need to update the buffer reference ",r.createElement(t.code,null,"b")," to ensure that the next iteration always has the latest reference."),"\n",r.createElement(t.p,null,"The specification does not specify if pointers can be nested, but that is the reason to why we recurse if we find a pointer. Because that pointer could in theory point to another pointer and so on."),"\n",r.createElement(t.p,null,"At the end we join up all the tokens using a ",r.createElement(t.code,null,".")," as separator."),"\n",r.createElement(t.h1,null,"Final Thoughts"),"\n",r.createElement(t.p,null,"Compression in DNS messages is not complicated, but it was an interesting problem to solve, especially when using ",r.createElement(t.code,null,"nom")," as the parser. I had no idea that compression existed in DNS until i read about it in the ",r.createElement(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc1035"},"rfc 1035"),"."),"\n",r.createElement(t.p,null,"There are several improvements that could be made, for instance here we are reparsing tokens if we hit a pointer, but if you wanted to make this more efficient one could use a ",r.createElement(t.code,null,"HashMap")," to cache any read token, and just do lookups using the offset as the key value. Another improvement is to use a ",r.createElement(t.code,null,"BufReader")," in rust to make reads a bit more efficient."),"\n",r.createElement(t.p,null,"in ",r.createElement(t.a,{href:"https://datatracker.ietf.org/doc/html/rfc6891"},"rfc 6891")," additional label types (bit value 0 1) was added to extend the dns protocol to be able to contain more flags. By defining the labels as enums, its very easy to just add an additional one by adding a new enum type, and a new parser. Enum types and rusts matching capabilities is very powerful to write typesafe code."))}var i=function(e){void 0===e&&(e={});var t=Object.assign({},(0,a.ah)(),e.components).wrapper;return t?r.createElement(t,e,r.createElement(o,e)):o(e)},s=n(1082),c=n(7464),u=n(7015),d=n(4001),m=n(1250),f=n(6603),h=function(e){var t,n,a,l,o,i,d,h,p=e.data,b=p.previous,g=p.next,w=p.site,y=p.mdx,E=(e.location,e.children),v=(null==w||null===(t=w.siteMetadata)||void 0===t||t.title,null!=y&&null!==(n=y.frontmatter)&&void 0!==n&&n.tags?y.frontmatter.tags.replaceAll(/\s/g,"").split(","):[]);return r.createElement(u.Z,null,r.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},r.createElement("header",{style:{marginBottom:30}},r.createElement("h1",{itemProp:"headline"},null==y||null===(a=y.frontmatter)||void 0===a?void 0:a.title),r.createElement(m.v,null,null==y||null===(l=y.frontmatter)||void 0===l?void 0:l.date),r.createElement(f.Z,{tags:v})),r.createElement("section",{itemProp:"articleBody"},E),r.createElement(f.Z,{tags:v}),r.createElement("hr",null),r.createElement("footer",null,r.createElement(c.Z,null))),r.createElement("nav",{className:"blog-post-nav"},r.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.createElement("li",null,b&&r.createElement(s.Link,{to:(null==b||null===(o=b.fields)||void 0===o?void 0:o.slug)||"",rel:"prev"},r.createElement(m.u,null,"← ",(null==b||null===(i=b.frontmatter)||void 0===i?void 0:i.title)||""))),r.createElement("li",null,g&&r.createElement(s.Link,{to:(null==g||null===(d=g.fields)||void 0===d?void 0:d.slug)||"",rel:"next"},r.createElement(m.u,null,null==g||null===(h=g.frontmatter)||void 0===h?void 0:h.title," →"))))))},p=function(e){var t,n,a=e.data.mdx;return r.createElement(d.Z,{title:null==a||null===(t=a.frontmatter)||void 0===t?void 0:t.title,description:(null==a||null===(n=a.frontmatter)||void 0===n?void 0:n.description)||(null==a?void 0:a.excerpt)})};function b(e){return r.createElement(h,e,r.createElement(i,e))}},7464:function(e,t,n){var a=n(7294),r=n(1082),l=n(3723);t.Z=function(){var e,t,o=(0,r.useStaticQuery)("1085053114"),i=null===(e=o.site.siteMetadata)||void 0===e?void 0:e.author,s=null===(t=o.site.siteMetadata)||void 0===t?void 0:t.social;return a.createElement("div",{className:"bio"},a.createElement(l.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/selfie.jpg",width:50,height:50,quality:95,alt:"Profile picture",__imageData:n(1077)}),(null==i?void 0:i.name)&&a.createElement("p",null,"Written by ",a.createElement("strong",null,i.name)," ","I dont have twitter but i have"," ",a.createElement("a",{href:"https://www.linkedin.com/in/"+((null==s?void 0:s.linkedin)||"")},"linkedin")," ","and im on"," ",a.createElement("a",{href:"https://stackoverflow.com/users/"+((null==s?void 0:s.stack_overflow)||"")},"stack overflow"),"."))}},4278:function(e,t,n){n.d(t,{$_:function(){return i},JO:function(){return c},VY:function(){return s},h4:function(){return o},oo:function(){return u}});var a=n(7294),r=n(3494),l=(0,r.default)("div").withConfig({displayName:"AttentionBox__StyledWrapper",componentId:"sc-y20oae-0"})(["border-left-width:8px;border-left-style:solid;border-left-color:",";border-radius :5px;background-color:",";display:flex;flex-direction:column;padding:16px 16px 0px 16px;margin-bottom:21px;color:",";div{font-size:",";line-height:1.2em;}em{color:",";}a{text-decoration:underline;color:",";}"],(function(e){return e.borderColor||"var(--primary-color)"}),(function(e){return e.backgroundColor||"var(--secondary-color)"}),(function(e){return e.textColor||"var(--font-color)"}),(function(e){return e.fontSize+"px"||0}),(function(e){return e.textColor||"var(--font-color)"}),(function(e){return e.textColor||"var(--font-color)"})),o=r.default.div.withConfig({displayName:"AttentionBox__Header",componentId:"sc-y20oae-1"})(["display:flex;text-transform:uppercase;font-weight:bolder;margin-bottom:5px;align-items:center;"]),i=r.default.div.withConfig({displayName:"AttentionBox__Footer",componentId:"sc-y20oae-2"})(["display:flex;font-style:italic;font-weight:bolder;align-items:center;justify-content:end;font-size:16px;"]),s=r.default.div.withConfig({displayName:"AttentionBox__Content",componentId:"sc-y20oae-3"})(["code{padding-left:5px;padding-right:5px;background-color:green;}"]),c=r.default.div.withConfig({displayName:"AttentionBox__Icon",componentId:"sc-y20oae-4"})(["margin-right:7px;margin-bottom:0px;"]),u=function(e){var t=e.children,n=e.backgroundColor,r=e.borderColor,o=e.fontSize,i=e.textColor;return a.createElement(l,{borderColor:r,backgroundColor:n,textColor:i,fontSize:o},t)}},1862:function(e,t,n){var a=n(7294),r=n(1279),l=n(4278);t.Z=function(e){var t=e.children;return a.createElement(l.oo,{backgroundColor:"var(--warning-color)",borderColor:"var(--dark-warning-color)",textColor:"var(--font-dark-color)"},a.createElement(l.h4,null,a.createElement(l.JO,null,a.createElement(r.SR5,{size:25,style:{verticalAlign:"middle"}})),"warning"),a.createElement(l.VY,null,t))}},1250:function(e,t,n){n.d(t,{u:function(){return r},v:function(){return l}});var a=n(3494),r=a.default.h3.withConfig({displayName:"styles__LinkText",componentId:"sc-ncn1p3-0"})(["font-size:18px;"]),l=a.default.h3.withConfig({displayName:"styles__DateText",componentId:"sc-ncn1p3-1"})(["font-size:18px;color:var(--color-gray-700);"])},1077:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#181818","images":{"fallback":{"src":"/static/688f707e139e1c5b3b1adc848f4464fb/d24ee/selfie.jpg","srcSet":"/static/688f707e139e1c5b3b1adc848f4464fb/d24ee/selfie.jpg 50w,\\n/static/688f707e139e1c5b3b1adc848f4464fb/64618/selfie.jpg 100w","sizes":"50px"},"sources":[{"srcSet":"/static/688f707e139e1c5b3b1adc848f4464fb/d4bf4/selfie.avif 50w,\\n/static/688f707e139e1c5b3b1adc848f4464fb/ee81f/selfie.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/static/688f707e139e1c5b3b1adc848f4464fb/3faea/selfie.webp 50w,\\n/static/688f707e139e1c5b3b1adc848f4464fb/6a679/selfie.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=component---src-templates-blog-post-tsx-content-file-path-home-thomas-documents-code-js-blog-content-blog-dns-compression-index-mdx-282ea2103896fd430f1f.js.map