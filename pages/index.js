import Head from 'next/head'
import request from '../api'
import {useEffect, useState} from 'react'
import HomePageStyle from '../styles/HomePageStyle';

export default function Home() {
    const [data, setData] = useState([])
    useEffect(() => {
        request()
            .then((res) => setData(res))
            .catch((err) => console.log(err))
    }, [])

    console.log(data)

    const cards = data.map((launch, idx) => {
        const objectDate = new Date(launch.date_utc);
        const date = objectDate.toLocaleDateString('ru-RU', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                hour: 'numeric',
                minute: 'numeric'
            }
        )
        return (
            <div key={idx} className="card">
                <img className="card__img" src={launch.links.patch.small} alt="Изображение карточки"/>
                <div className="info">
                    <p className="info__date">{date}</p>
                    <h2 className="info__title">{launch.name}</h2>
                    <p className='info__status'>Статус: {launch.success ?
                        <span className="info__status-badge success">Успешно</span>
                        :
                        <span className="info__status-badge danger">Неуспешно</span>
                    }</p>
                    <p className="info__text">{launch.details}</p>
                </div>
            </div>
        )
    })
    return (
        <>
            <Head>
                <title>SpaceX app</title>
            </Head>

            <main>
                <HomePageStyle>
                    <div className="wrapper">
                        <div className="container">
                            {cards}
                        </div>
                    </div>
                </HomePageStyle>
            </main>
        </>
    )
}
