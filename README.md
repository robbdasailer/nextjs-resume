This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). It was modified to use MUIv5 with some minimal theming to allow easy customization. It is designed to be an easy-start resume template with all data hosted locally in data.js file under the api directory. This template is also mobile ready so it should still look great when viewed on a phone. The layout is designed to provide a quick overview of your skills and experience in an easy to consume manner.

## Getting Started

Run the following command to install the required components:

```bash
npm install
```

Then run the following command to run in development mode:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Customizations

All css and styling that can be customized is located in the theme.js file under the utils folder. There are variables for both light and dark themes towards the top of the file to allow quick and easy updates to the palette. Check out the following links to see how to modify any specific components. The link for the color palette is also included below.

[MUI Theme](https://mui.com/material-ui/customization/theming/)

[MUI Color Palette](https://mui.com/material-ui/customization/color/)

There are also several different font types that can be selected which are all installed by default:

- Oswald
- Raleway
- Poppins
- Inconsolata
- Inter
- Montserrat
- Roboto Slab
- Work Sans

Simply update the fontFamily variable in the theme.js file to one of the values listed above to update.

> **_NOTE:_** When using the Poppins, Inconsolata, or a custom font not mentioned here, you may need to update the value of workHistoryHeightOffset in the index.js file. This value is used to ensure the work history section height is the same as the height on the left side. The default value accounts for the spacing between the containers on the left side and works well with most other font families.

## Updating the Data

While running in build mode browse to the following URL:

[http://localhost:3000/build](http://localhost:3000/build)

> **_NOTE:_** This path will only show up when running in development mode to allow for updating the data locally.

Delete the data that is there and add your own data as seen fit. All items are sorted in ascending order by their id property with the exception of those mentioned in the note under the 'Running the Application' section. Please note that only basic validation is occurring so please use best judgement when updating the fields. All required values are denoted by an asterisk. Once complete, click the 'Generate Resume Data' which will allow you to copy and paste the contents into the data.js file under the api folder.

## Optimizations

Once the palette and font families have been decided upon, the unused colors in the import section in the theme.js can be removed. The unused font types can also be uninstalled using the following commands (don't uninstall the font in use):

```bash
npm uninstall typeface-oswald
npm uninstall typeface-raleway
npm uninstall typeface-poppins
npm uninstall typeface-inconsolata
npm uninstall typeface-inter
npm uninstall typeface-montserrat
npm uninstall typeface-roboto-slab
npm uninstall typeface-work-sans
```

## Running the Application

This app was designed to be containerized to run as a deployment on a Kubernetes cluster, but should work in any location that can run containerized workloads. There are two environment variables that can be specified to further customize the look and feel of the site:

| Variable Name   | Acceptable Values |
| --------------- | ----------------- |
| DARKMODE_ENABLE | auto, true, false |
| SORT_IS_DESC    | true, false       |

The value of 'auto' for DARKMODE_ENABLE will allow the site to dynamically adjust to the user's brwoser preference and it will default to true if not specified. The SORT_IS_DESC value allows you to control how Education and Certification items are ordered and the default value is false.

> **_NOTE:_** The sort order for work history will always be descending as this site was built with that in mind. All other items are sorted by their id in ascending order.

The dockerfile provided will automatically substitute those variables into the .env.production file.

If the site is not going to be run inside of a container, then the .env.production file will need to be manually modified.
