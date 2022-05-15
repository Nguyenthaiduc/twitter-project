### Build Twitter 2.0

### Package Support
1. Tailwindcss
2. Heroicons
3. Prettier
4. react-twitter-embed
5. Sanity
6. yarn add next-sanity @portabletext/react @sanity/image-url

### Installation
>sanity start
>yarn start
### Fetch in Sanity
```cs
*[_type == 'tweet']{
  _id,  
  ...
}
```
```cs
*[_type == 'tweet']{
  _id,
  ...
}| order(_createAt desc)
``` 
