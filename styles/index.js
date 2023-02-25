import { createGlobalStyle } from "styled-components";

const max = 21;
const spacing = 4;
const createUtilities = (max, spacing) => {
	let myCls = "";
	for (let index = 0; index < max; index++) {
		myCls += `
        @media(min-width: 1366px){
            .m-lg-${index} {
              margin: ${spacing * index}px;
          }
          .ml-lg-${index} {
              margin-left: ${spacing * index}px;
          }
          .mr-lg-${index} {
              margin-right: ${spacing * index}px;
          }
          .mt-lg-${index} {
              margin-top: ${spacing * index}px;
          }
          .mb-lg-${index} {
              margin-bottom: ${spacing * index}px;
          }
          .mx-lg-${index} {
              margin-left: ${spacing * index}px;
              margin-right: ${spacing * index}px;
          }
          .my-lg-${index} {
              margin-top: ${spacing * index}px;
              margin-bottom: ${spacing * index}px;
          }
          .p-lg-${index} {
              padding: ${spacing * index}px;
          }
          .pl-lg-${index} {
              padding-left: ${spacing * index}px;
          }
          .pr-lg-${index} {
              padding-right: ${spacing * index}px;
          }
          .pt-lg-${index} {
              padding-top: ${spacing * index}px;
          }
          .pb-lg-${index} {
              padding-bottom: ${spacing * index}px;
          }
          .px-lg-${index} {
              padding-left: ${spacing * index}px;
              padding-right: ${spacing * index}px;
          }
          .py-lg-${index} {
              padding-top: ${spacing * index}px;
              padding-bottom: ${spacing * index}px;
          }
          .m-lg-${index} {
              margin: ${spacing * index}px;
          }
          .ml-lg-${index} {
              margin-left: ${spacing * index}px;
          }
          .mr-lg-${index} {
              margin-right: ${spacing * index}px;
          }
          .mt-lg-${index} {
              margin-top: ${spacing * index}px;
          }
          .mb-lg-${index} {
              margin-bottom: ${spacing * index}px;
          }
          .mx-lg-${index} {
              margin-left: ${spacing * index}px;
              margin-right: ${spacing * index}px;
          }
          .my-lg-${index} {
              margin-top: ${spacing * index}px;
              margin-bottom: ${spacing * index}px;
          }
          .p-lg-${index} {
              padding: ${spacing * index}px;
          }
          .pl-lg-${index} {
              padding-left: ${spacing * index}px;
          }
          .pr-lg-${index} {
              padding-right: ${spacing * index}px;
          }
          .pt-lg-${index} {
              padding-top: ${spacing * index}px;
          }
          .pb-lg-${index} {
              padding-bottom: ${spacing * index}px;
          }
          .px-lg-${index} {
              padding-left: ${spacing * index}px;
              padding-right: ${spacing * index}px;
          }
          .py-lg-${index} {
              padding-top: ${spacing * index}px;
              padding-bottom: ${spacing * index}px;
          }
          }


          @media(min-width: 1200px){
            .m-md-${index} {
              margin: ${spacing * index}px;
          }
          .ml-md-${index} {
              margin-left: ${spacing * index}px;
          }
          .mr-md-${index} {
              margin-right: ${spacing * index}px;
          }
          .mt-md-${index} {
              margin-top: ${spacing * index}px;
          }
          .mb-md-${index} {
              margin-bottom: ${spacing * index}px;
          }
          .mx-md-${index} {
              margin-left: ${spacing * index}px;
              margin-right: ${spacing * index}px;
          }
          .my-md-${index} {
              margin-top: ${spacing * index}px;
              margin-bottom: ${spacing * index}px;
          }
          .p-md-${index} {
              padding: ${spacing * index}px;
          }
          .pl-md-${index} {
              padding-left: ${spacing * index}px;
          }
          .pr-md-${index} {
              padding-right: ${spacing * index}px;
          }
          .pt-md-${index} {
              padding-top: ${spacing * index}px;
          }
          .pb-md-${index} {
              padding-bottom: ${spacing * index}px;
          }
          .px-md-${index} {
              padding-left: ${spacing * index}px;
              padding-right: ${spacing * index}px;
          }
          .py-md-${index} {
              padding-top: ${spacing * index}px;
              padding-bottom: ${spacing * index}px;
          }
          .m-md-${index} {
              margin: ${spacing * index}px;
          }
          .ml-md-${index} {
              margin-left: ${spacing * index}px;
          }
          .mr-md-${index} {
              margin-right: ${spacing * index}px;
          }
          .mt-md-${index} {
              margin-top: ${spacing * index}px;
          }
          .mb-md-${index} {
              margin-bottom: ${spacing * index}px;
          }
          .mx-md-${index} {
              margin-left: ${spacing * index}px;
              margin-right: ${spacing * index}px;
          }
          .my-md-${index} {
              margin-top: ${spacing * index}px;
              margin-bottom: ${spacing * index}px;
          }
          .p-md-${index} {
              padding: ${spacing * index}px;
          }
          .pl-md-${index} {
              padding-left: ${spacing * index}px;
          }
          .pr-md-${index} {
              padding-right: ${spacing * index}px;
          }
          .pt-md-${index} {
              padding-top: ${spacing * index}px;
          }
          .pb-md-${index} {
              padding-bottom: ${spacing * index}px;
          }
          .px-md-${index} {
              padding-left: ${spacing * index}px;
              padding-right: ${spacing * index}px;
          }
          .py-md-${index} {
              padding-top: ${spacing * index}px;
              padding-bottom: ${spacing * index}px;
          }
          }

          
          @media(min-width: 992px){
            .m-sm-${index} {
              margin: ${spacing * index}px;
          }
          .ml-sm-${index} {
              margin-left: ${spacing * index}px;
          }
          .mr-sm-${index} {
              margin-right: ${spacing * index}px;
          }
          .mt-sm-${index} {
              margin-top: ${spacing * index}px;
          }
          .mb-sm-${index} {
              margin-bottom: ${spacing * index}px;
          }
          .mx-sm-${index} {
              margin-left: ${spacing * index}px;
              margin-right: ${spacing * index}px;
          }
          .my-sm-${index} {
              margin-top: ${spacing * index}px;
              margin-bottom: ${spacing * index}px;
          }
          .p-sm-${index} {
              padding: ${spacing * index}px;
          }
          .pl-sm-${index} {
              padding-left: ${spacing * index}px;
          }
          .pr-sm-${index} {
              padding-right: ${spacing * index}px;
          }
          .pt-sm-${index} {
              padding-top: ${spacing * index}px;
          }
          .pb-sm-${index} {
              padding-bottom: ${spacing * index}px;
          }
          .px-sm-${index} {
              padding-left: ${spacing * index}px;
              padding-right: ${spacing * index}px;
          }
          .py-sm-${index} {
              padding-top: ${spacing * index}px;
              padding-bottom: ${spacing * index}px;
          }
          .m-sm-${index} {
              margin: ${spacing * index}px;
          }
          .ml-sm-${index} {
              margin-left: ${spacing * index}px;
          }
          .mr-sm-${index} {
              margin-right: ${spacing * index}px;
          }
          .mt-sm-${index} {
              margin-top: ${spacing * index}px;
          }
          .mb-sm-${index} {
              margin-bottom: ${spacing * index}px;
          }
          .mx-sm-${index} {
              margin-left: ${spacing * index}px;
              margin-right: ${spacing * index}px;
          }
          .my-sm-${index} {
              margin-top: ${spacing * index}px;
              margin-bottom: ${spacing * index}px;
          }
          .p-sm-${index} {
              padding: ${spacing * index}px;
          }
          .pl-sm-${index} {
              padding-left: ${spacing * index}px;
          }
          .pr-sm-${index} {
              padding-right: ${spacing * index}px;
          }
          .pt-sm-${index} {
              padding-top: ${spacing * index}px;
          }
          .pb-sm-${index} {
              padding-bottom: ${spacing * index}px;
          }
          .px-sm-${index} {
              padding-left: ${spacing * index}px;
              padding-right: ${spacing * index}px;
          }
          .py-sm-${index} {
              padding-top: ${spacing * index}px;
              padding-bottom: ${spacing * index}px;
          }
          }


          @media(min-width: 768px){
            .m-xs-${index} {
              margin: ${spacing * index}px;
          }
          .ml-xs-${index} {
              margin-left: ${spacing * index}px;
          }
          .mr-xs-${index} {
              margin-right: ${spacing * index}px;
          }
          .mt-xs-${index} {
              margin-top: ${spacing * index}px;
          }
          .mb-xs-${index} {
              margin-bottom: ${spacing * index}px;
          }
          .mx-xs-${index} {
              margin-left: ${spacing * index}px;
              margin-right: ${spacing * index}px;
          }
          .my-xs-${index} {
              margin-top: ${spacing * index}px;
              margin-bottom: ${spacing * index}px;
          }
          .p-xs-${index} {
              padding: ${spacing * index}px;
          }
          .pl-xs-${index} {
              padding-left: ${spacing * index}px;
          }
          .pr-xs-${index} {
              padding-right: ${spacing * index}px;
          }
          .pt-xs-${index} {
              padding-top: ${spacing * index}px;
          }
          .pb-xs-${index} {
              padding-bottom: ${spacing * index}px;
          }
          .px-xs-${index} {
              padding-left: ${spacing * index}px;
              padding-right: ${spacing * index}px;
          }
          .py-xs-${index} {
              padding-top: ${spacing * index}px;
              padding-bottom: ${spacing * index}px;
          }
          .m-xs-${index} {
              margin: ${spacing * index}px;
          }
          .ml-xs-${index} {
              margin-left: ${spacing * index}px;
          }
          .mr-xs-${index} {
              margin-right: ${spacing * index}px;
          }
          .mt-xs-${index} {
              margin-top: ${spacing * index}px;
          }
          .mb-xs-${index} {
              margin-bottom: ${spacing * index}px;
          }
          .mx-xs-${index} {
              margin-left: ${spacing * index}px;
              margin-right: ${spacing * index}px;
          }
          .my-xs-${index} {
              margin-top: ${spacing * index}px;
              margin-bottom: ${spacing * index}px;
          }
          .p-xs-${index} {
              padding: ${spacing * index}px;
          }
          .pl-xs-${index} {
              padding-left: ${spacing * index}px;
          }
          .pr-xs-${index} {
              padding-right: ${spacing * index}px;
          }
          .pt-xs-${index} {
              padding-top: ${spacing * index}px;
          }
          .pb-xs-${index} {
              padding-bottom: ${spacing * index}px;
          }
          .px-xs-${index} {
              padding-left: ${spacing * index}px;
              padding-right: ${spacing * index}px;
          }
          .py-xs-${index} {
              padding-top: ${spacing * index}px;
              padding-bottom: ${spacing * index}px;
          }
          }

            .m-${index} {
                margin: ${spacing * index}px;
            }
            .ml-${index} {
                margin-left: ${spacing * index}px;
            }
            .mr-${index} {
                margin-right: ${spacing * index}px;
            }
            .mt-${index} {
                margin-top: ${spacing * index}px;
            }
            .mb-${index} {
                margin-bottom: ${spacing * index}px;
            }
            .mx-${index} {
                margin-left: ${spacing * index}px;
                margin-right: ${spacing * index}px;
            }
            .my-${index} {
                margin-top: ${spacing * index}px;
                margin-bottom: ${spacing * index}px;
            }
            .p-${index} {
                padding: ${spacing * index}px;
            }
            .pl-${index} {
                padding-left: ${spacing * index}px;
            }
            .pr-${index} {
                padding-right: ${spacing * index}px;
            }
            .pt-${index} {
                padding-top: ${spacing * index}px;
            }
            .pb-${index} {
                padding-bottom: ${spacing * index}px;
            }
            .px-${index} {
                padding-left: ${spacing * index}px;
                padding-right: ${spacing * index}px;
            }
            .py-${index} {
                padding-top: ${spacing * index}px;
                padding-bottom: ${spacing * index}px;
            }
            .m-${index} {
                margin: ${spacing * index}px;
            }
            .ml-${index} {
                margin-left: ${spacing * index}px;
            }
            .mr-${index} {
                margin-right: ${spacing * index}px;
            }
            .mt-${index} {
                margin-top: ${spacing * index}px;
            }
            .mb-${index} {
                margin-bottom: ${spacing * index}px;
            }
            .mx-${index} {
                margin-left: ${spacing * index}px;
                margin-right: ${spacing * index}px;
            }
            .my-${index} {
                margin-top: ${spacing * index}px;
                margin-bottom: ${spacing * index}px;
            }
            .p-${index} {
                padding: ${spacing * index}px;
            }
            .pl-${index} {
                padding-left: ${spacing * index}px;
            }
            .pr-${index} {
                padding-right: ${spacing * index}px;
            }
            .pt-${index} {
                padding-top: ${spacing * index}px;
            }
            .pb-${index} {
                padding-bottom: ${spacing * index}px;
            }
            .px-${index} {
                padding-left: ${spacing * index}px;
                padding-right: ${spacing * index}px;
            }
            .py-${index} {
                padding-top: ${spacing * index}px;
                padding-bottom: ${spacing * index}px;
            }   
        `;
	}
	return myCls;
};

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'ProximaRegular';
  src: url('/fonts/ProximaNova/regular.otf') format('opentype');
  font-weight: 400;
  font-style: normal;
}
@font-face {
  font-family: 'ProximaBold';
  src: url('/fonts/ProximaNova/bold.otf') format('opentype');
  font-weight: 700;
  font-style: normal;
}
@font-face {
  font-family: 'ProximaBlack';
  src: url('/fonts/ProximaNova/black.otf') format('opentype');
  font-weight: 900;
  font-style: normal;
}
html, body, h1, h2,h3,h4,h5,h6,p {
  margin: 0;
}
html{
  box-sizing: border-box;
  display:block;
  height: 100%;
  padding: 0;
}

body{
  font-family: 'ProximaRegular', sans-serif;
  font-size: 55px;
  min-height:100vh;
}
svg {
    display: flex;
}
.text-center {
  text-align: center;
}
.text-num {
    font-family: "sans-serif"
}
.mr-auto {
    margin-right: auto;
}
.ml-auto {
    margin-left: auto;
}
.mx-auto {
    margin-left: auto;
    margin-right: auto;
}
.float-r {
    float: right;
}
.float-l {
    float: left;
}
.float-c {
    clear: both;
}
.relative {
    position: relative;
}
.hiddenXs {
    @media(max-width: 768px) {
        display: none !important;
    }
}
.hidden-xs {
    @media(min-width: 768px) {
        display: none !important;
    }
}
${createUtilities(max, spacing)}
.thumb,
.thumb::-webkit-slider-thumb {
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
}

.thumb::-webkit-slider-thumb {
  background-color: #000487;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  height: 24px;
  pointer-events: all;
  position: relative;
}

.thumb::-moz-range-thumb {
  background-color: #000487;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  height: 24px;
  pointer-events: all;
  position: relative;
}
.uppercase {
  text-transform: uppercase;
}

`;
