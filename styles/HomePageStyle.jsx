import React from 'react'
import styled from 'styled-components'

const HomePageStyle = styled.div`
  .wrapper {
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;

    .container {
      position: relative;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 16px;
      justify-items: center;
      align-items: center;
      box-sizing: border-box;
      max-width: 1200px;
      width: 100%;
      margin: 0 auto;
      padding: 50px 25px 0;

      .card {
        display: flex;
        flex-direction: column;
        position: relative;
        max-width: 400px;
        width: 100%;
        height: 100%;
        background: #FFFFFF;
        box-sizing: border-box;
        border-radius: 20px;
        box-shadow: 0 0.46875rem 2.1875rem rgb(90 97 105 / 10%), 0 0.9375rem 1.40625rem rgb(90 97 105 / 10%), 0 0.25rem 0.53125rem rgb(90 97 105 / 12%), 0 0.125rem 0.1875rem rgb(90 97 105 / 10%);


        .card__img {
          box-sizing: border-box;
          border-radius: 5px 5px 0 0;
          max-width: 100%;
          object-fit: contain;
          height: 270px;
        }

        .info {
          box-sizing: border-box;
          padding: 24px;

          .info__date {
            font-family: 'Source Sans Pro', Arial, Helvetica, sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 18px;
            line-height: 24px;
            align-items: center;
            color: #B6BCBF;
            margin: 0 0 12px;
          }

          .info__title {
            font-family: 'Roboto Slab', Arial, Helvetica, sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 26px;
            line-height: 30px;
            color: #1A1B22;
            margin: 0px;
          }

          .info__text {
            font-family: 'Roboto', Arial, Helvetica, sans-serif;
            font-style: normal;
            font-weight: normal;
            font-size: 16px;
            line-height: 22px;
            color: #1A1B22;
            margin: 16px 0 18px;
            display: -webkit-box;
            -webkit-line-clamp: 4;
            -webkit-box-orient: vertical;
            overflow: hidden;
            text-align: justify;
          }
          
          .info__status {
            display: flex;
            align-items: center;
            font-size: 16px;
            line-height: 1;
            
            &-badge {
              display: flex;
              padding: .25em .4em;
              font-size: 75%;
              font-weight: 700;
              line-height: 1;
              text-align: center;
              white-space: nowrap;
              vertical-align: baseline;
              border-radius: .25rem;
              margin-left: 5px;

              &.success {
                color: #fff;
                background-color: #28a745;
              }

              &.danger {
                color: #fff;
                background-color: #dc3545;
              }
            }
          }
        }

        @media screen and (max-width: 1024px) {
          .info {
            
            .info__date {
              margin: 0px 0 12px;
            }

            .info__title {
              font-size: 22px;
              line-height: 24px;
              color: #1A1B22
            }

            .info__text {
              margin: 10px 0 12px;
              max-height: 88px;
            }
          }
        }
        @media screen and (max-width: 640px) {
          .info {
            .info__title {
              font-family: 'Roboto Slab', Arial, Helvetica, sans-serif;
              font-style: normal;
              font-weight: normal;
              font-size: 22px;
              line-height: 26px;
            }

            .info__text {
              font-family: 'Roboto', Arial, Helvetica, sans-serif;
              font-style: normal;
              font-weight: normal;
              font-size: 16px;
              line-height: 22px;
            }
          }
        }
      }
      @media screen and (max-width: 992px) {
          grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
      }

      @media screen and (max-width: 640px) {
          grid-template-columns: repeat(1, 1fr);
      }
    }
  }
`

export default HomePageStyle;