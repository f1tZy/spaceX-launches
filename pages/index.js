import Head from 'next/head'
import s from '../styles/Home.module.css'
import request from '../api';
import {useEffect, useState} from 'react';
import styled from 'styled-components';

const StylePage = styled.div`
  .wrapper {
    max-width: 1920px;
    width: 100%;
    margin: 0 auto;

    .container {
      position: relative;
      display: flex;
      align-items: center;
      box-sizing: border-box;
      max-width: 1200px;
      width: 100%;
      margin: 0 auto;
      height: 500px;

      .card {
        display: flex;
        flex-direction: column;
        position: relative;
        max-width: 400px;
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
          margin: 24px;

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
          }
        }

        @media screen and (max-width: 1024px) {
          .info {
            margin: 16px;

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
    }
  }
`

export default function Home() {
    const [data, setData] = useState([])
    useEffect(() => {
        request()
            .then((res) => setData(res))
            .catch((err) => console.log(err))
    }, [])

    // const cards = data.map((card) => {
    //
    // })
    return (
        <>
            <Head>
                <title>SpaceX app</title>
            </Head>

            <main>
                <StylePage>
                    <div className="wrapper">
                        <div className="container">
                            <div className="card">
                                <img className="card__img" src="" alt="Изображение карточки"/>
                                <div className="info">
                                    <p className="info__date">dzda</p>
                                    <h2 className="info__title">dsadad</h2>
                                    <p className="info__text">dasdsads</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </StylePage>
            </main>
        </>
    )
}
