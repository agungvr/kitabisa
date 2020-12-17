## Kitabisa Test - [https://kitabisa-test.netlify.app/](https://kitabisa-test.netlify.app/)

### Application Structure

#### • Core Dependencies

- [ReactJS](https://reactjs.org/) ![React](https://img.shields.io/badge/v-%5E17.0.1-blue.svg)
- [Goods](https://github.com/goods-id/goods) ![Goods](https://img.shields.io/badge/v-%5E1.6.5-blue.svg)
- [Immer](https://github.com/immerjs/immer) ![Immer](https://img.shields.io/badge/v-%5E8.0.0-blue.svg)
- [Styled Components](https://styled-components.com/) ![StyledComponents](https://img.shields.io/badge/v-%5E5.2.1-blue.svg)
- [React Fast Compare](https://www.npmjs.com/package/react-fast-compare) ![ReactFastCompare](https://img.shields.io/badge/v-%5E3.2.0-blue.svg)
- [Why Did You Render](https://github.com/welldone-software/why-did-you-render) ![WDYR](https://img.shields.io/badge/v-%5E6.0.3-blue.svg)

#### • Main Directory Structure

      ├── configs/    _________________________ # Webpack config
          ├── addons/   _______________________ # Webpack addons
      ├── dist/   _____________________________ # Build output
      ├── node_modules/
      ├── public/
      ├── src/
          ├── assets/   _______________________ # Assets collection
              ├── images/
              ├── styles/
          ├── context/    _____________________ # Context for state management
          ├── hooks/    _______________________ # Custom hooks
          ├── pages/
              ├── home/   _____________________ # Home page view
                  ├── campaign/   _____________ # Campaign Card Component
        ├── utils/    _________________________ # Utilities

#### Installation

1- Clone the repo `git clone https://github.com/agungvr/kitabisa.git`

2- `cd kitabisa/`

3- `npm install` to install npm packages

4- start dev server using `npm start`.

5- open `https://localhost:2021`
