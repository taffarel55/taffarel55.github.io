---
title: Markdown
description: Esta é uma descrição em português da página markdownx
date: 2021-12-14
time: 10
categories:
  - Markdown
  - Testes
author:
  id: 18634201
  name: Maurício Taffarel
  user: taffarel55
---

<!-- <script>
   import Card from "$lib/components/Card.svelte";
   import Button from "$lib/components/Button.svelte";
</script>

<Card
   card_title="My Card Title"
   card_desc="Lorem ipsum dolor…"
   card_img="https://unsplash.it/300/300"
/>

<Button type="outline">Click me</Button> -->

# Basics of Markdown

Markdown is the most popular markup language that can be used to format documents. It can be used to create _websites_,_ebooks_,_email_,_chats in discussions forums_.

## Topics

1. Paragraphs

   MD expects a full line space to show texts in a different line else it joins text in the same line.

2. Text decorations

   MD can write **bold** texts, ~~italiic~~ _italic_ texts

3. Headings
   No of #'s represent the type of heading. Github will automatically add id's to headings, so the text will be automatically linked.
   ## This is h2
   ### This is h3
4. Links

   [My Github](https://github.com/bhupendra1011 'all repos') account.[Bhupendra][1] github repo.

5. Images
   Images can be used just like links. ![Alt txt](img url)

   ![cat Img](https://placekitten.com/300/200)

   Thumbnails images can also be used which links to larger image
   [<img src="https://placekitten.com/20/20" alt="Thumb">](https://placekitten.com/200/200)

6. Ordered and Unordered Lists

   Coding Best Practices:

   - Keep code DRY
   - Writing Unit Test cases
   - Checking cross-browser support

   Steps to merge branch:

   1. Create a branch from feature
   1. commit your changes
   1. push your changes
   1. raise a pull request

7. Code Blocks

   This is super helpful when posting any code snippet

   ```js
   const fn = () => alert('some fn');
   ```

   ```css
   .hide {
   	display: none;
   }
   ```

   Also can show code difference

   ```diff
   var x = 10;
   - const counter = 0;
   + let counter = 0
   ```

8. Tables

   Tables can be generated with headings and text alignment option

   |  Stocks  | Price | Other |
   | :------: | ----: | :---: |
   |   TCS    |   230 |  20   |
   | YES Bank |   500 |  20   |
   | YES Bank |   500 |  20   |
   | YES Bank |   500 |  20   |

9. Inline code blocks

   `Testando`

10. Comments

   > Testando `testando` asdasd não sei oq
   > Não sei oq mais lá
   >
   > asdasd

Cool Tips

- [Grammarly](https://marketplace.visualstudio.com/items?itemName=znck.grammarly) extension can eliminate typo and grammar mistakes
- [ScreenTOGif](https://www.screentogif.com/) to record videos in GIF format
- Upload GIF's to [giphy](https://giphy.com/) to embed them into blog posts.
- [Stackedit](https://stackedit.io/) for Markdown Editing in Browser.
