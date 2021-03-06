---
title: "Generating color schemes as developer: A simple guide"
seoTitle: "Generating color schemes as developer: A simple guide"
description: "Full-Stack Developers and Software Engineers are struggling with designing interfacing. One of the basic problems is choosing colors. This guide will explain to you how to find colors for the next web application."
openGraphDescription: "Generating a color scheme as a developer is hard, read this guide to learn how to create a perfect color scheme as software engineer."
twitterDescription: "Generating a color scheme as a developer is hard, read this guide to learn how to create a perfect color scheme as software engineer."
cover: "/thumbnails/generating-color-schemes-as-developer.png"
category: "software-engineering"
date: "12/28/2019"
tags:
  - design
  - ui
---

# Generating color schemes as a developer: A simple guide

As a full-stack software engineer or frontend engineer, someone might be exposed to design decisions from time to time. Ranging from small design decisions in early-stage startups to creating own projects, it might be needed at some point to choose colors for different user interface (UI) elements. This guide should help you choose the optimal colors for a project if no colors have been defined or given to you.

First of all, most base colors can be copied from a lot of popular sites or taken from the sites presented in the next chapter. The populated color schemes will work well for most of the web applications you will create and will generate outstanding designs.

## Popular Color Scheme Sites

On the internet, a lot of color scheme sites popped up in recent years. Most of them are curated and can be taken as a good base for your own needs. A bad thing about the sites is that most of them are showcasing just five colors and for most applications, this is not enough. Engineers normally use opacity for different color shades but working with different background colors might result in different results. A yellow with an opacity of `0.8` might look different on a black and white background.

![three colors show on different backgrounds, first rectangle color without background, then with white background where the color appears brighter and on a dark background where the color appears darker](./yellow-on-white-black.png)

You can see in the middle and on the right how the base color differs from the left. The middle one has a white background and the right color has a black background. The colors are just completely different and it shows you should not use this pattern to create color shades. To discover the base color we can use one of the following color scheme sites.

### coolors.co

[coloors.co](https://coolors.co/) is probably the most popular website to find color schemes. It is mostly praised as a generator but what let the site shine is the explorer or browsing menu. The [picks](https://coolors.co/browser/picks/1) and the [best](https://coolors.co/browser/best/1) search filters offer a wide variety of really good color schemes.

### colorsandfonts

[colorsandfonts](https://www.colorsandfonts.com/) is quite a newcomer when it comes to design resources. But it shines with detail in design and nice showcases. The color palettes you will find on the website are quite well-differentiated and look nice. The palettes can be found [here](https://www.colorsandfonts.com/palettes.html).

<ins class="adsbygoogle"
  style="display:block; text-align:center;"
  data-ad-layout="in-article"
  data-ad-format="fluid"
  data-ad-client="ca-pub-6098077505348522"
  data-ad-slot="3270549418">
</ins>

### morecolors

[morecolors](https://morecolors.app/) was actually recommended by one of the [reddit comments on this article](https://www.reddit.com/r/web_design/comments/ehly99/generating_a_color_schema_as_a_developer/fck71jf/). It is a quite nice tool and does a lot of the job described in this article. Even though not so much in detail. Still read on to understand the process on how color palettes are actually generated.

## The problem with the color palettes

Most often the color palettes provide a good base for colors but just five colors might be limited most often for elements. A button border which should have mostly the same color but just a bit different when it is focused. The following picture shows the problem if we would use opacity.

![a button with a border shown on a white and black background, because opacity is reduced the border looks different on both sides](./button-with-opacity.png)

The button works great on a white background but on a dark background, it loses its touch.

Instead, we can generate a new color for the border which would work on a dark and bright background as the following picture suggests.

![a button with a border shown on a white and black background, because opacity is not different the border has the same color](./button-border-static-color.png)

The color of the border of the button is more consistent on the right side of this picture. The color is not transparent at all. To generate colors like this, we need to learn first about HSL values which are explained in the next chapter.

## Use HSL instead of Hex

Web developers are mostly using hex codes for colors. But the hex color codes are bad to design with, unfortunately. Instead, there is the concept of HSL. It stands for:

- **H**ue: Is a degree on a color wheel. It goes from 0 to 360.
- **S**aturation: Goes from 0% to 100%. 0% is the color just grayed out.
- **L**ightness: Goes from 0% to 100%. If you set it to 100% the color will be white. If the value is set to 0% the color will be black.

You can observe the HSL colors quite good in your browser's dev tools. On Mac on Chrome just open the dev tools with CMD+Option+J. Afterward, adding <code class="language-text">color: hsl(0, 100%, 50%);</code> to some element will probably set you up to use the color picker in Chrome or Firefox.

![screenshot of the color picker in the chrome dev tools](./chrome-color-picker.png)

Just enter the `S` (saturation) input box which is set to 100% in the example and play around with your up and down arrow keys. You can see where the circle in the color picker is going. When putting the saturation back to 100% and changing the 50% value with the up and down arrow, someone can feel how lightness is changing the color.

## Generate Shades of Colors

After learning how HSL is working, different color shades can be created. It is quite simple. Starting with a [popular color scheme from coolors.co](https://coolors.co/011627-fdfffc-2ec4b6-e71d36-ff9f1c) we choose our base colors which are:

- hsl(207, 95%, 8%)
- hsl(35, 100%, 55%)

Now, opening another tool called [Color Shade Generator](https://superdevresources.com/tools/color-shades#011628), we can see that different color shades have been generated already. Since the base color which was chosen is so dark already we go with a lot lighter color. I chose the color <code class="language-text">hsl(207, 95%, 45%)</code> now which fits our needs somehow. Now we have two colors, a dark one which is <code class="language-text">hsl(207, 95%, 8%)</code> and a bright one which is <code class="language-text">hsl(207, 95%, 45%)</code>.

![Initial color palette of 5 colors where just the first and last color are filled](./color-scheme-1.png)

We can see that just the last number in the HSL code changed which is the lightness. From now we can either build 5, 7 or 9 colors between those shades to get to different colors which can be used as a base color scheme. In general, it is good to plan with nine colors. In this example, 5 colors will be used though. Starting this is quite easy. Taking the darkest color <code class="language-text">hsl(207, 95%, 8%)</code> and the brightest <code class="language-text">hsl(207, 95%, 45%)</code>, we try to select the middle color for both colors. It is quite easy since the calculation is just `(45% + 8%) / 2` which is `26.5%`. Inserting this now into the HSL we receive the color <code class="language-text">hsl(207, 95%, 26.5%)</code> which is kind of fitting into the color shade for now.

![Color palette where the first, last and middle color are filled, second and fourth are not filled](./color-scheme-2.png)

Now that this works we can follow up with the colors which are missing. The same rule can be applied here as well. The colors are calculated now in the same way. The upper color is calculated by using `(26.5% + 8 %) / 2` which is `17.25%`. And the lower color is calculated by `(26.5% + 45%) / 2` which is `37.75%`. In the end, a color scheme like in the following picture should have been created.

![Full color palette with five colors](./color-scheme-4.png)

Those tones are blue are now the only blue colors the web application ever needs. In theory, these can be saved somewhere in a project as variable already and used throughout the CSS, [SCSS](https://sass-lang.com/documentation/syntax) or JS in CSS styles like [styled-components](https://www.styled-components.com/) or similar.

This procedure can be applied to all colors of the base color scheme now.

## Also design State Colors

An important part of every design is state colors. Green, Yellow and Red are the most common colors to indicate a state in some form. For these colors, a software engineer should also design colors. These colors are included in most of the color palettes already but every color palette needs a lot more shades for making it possible to create designs which are fitting the web application. This means that also for these colors the shades have to be generated as mentioned in the last chapter.

For the [base color scheme](https://coolors.co/011627-fdfffc-2ec4b6-e71d36-ff9f1c) which was used throughout this whole guide, the color palette would look like the following image.

![Complete color palette with state colors included](./color-scheme-5.png)

## First design without Color

An important procedure to follow during designing as a non-designer is to create the mockups first without colors. Designing the wireframe without colors will help to make the general structure of the design working. Colors should be added as a way to focus on certain things and give the users some hint on how to use the designs. But the overall structure of the design should be influenced by the layout and choosing the right components first.

## Resources

- Figma resource: https://www.figma.com/file/Yn0ta0mGXP6MBgrIKMHiev/generating-color-schemes-as-developer-a-simple-guide
- Base color scheme: https://coolors.co/011627-fdfffc-2ec4b6-e71d36-ff9f1c
- All colors as JavaScript Variables: https://gist.github.com/igeligel/fb6d630597b3c900634206035327919c
