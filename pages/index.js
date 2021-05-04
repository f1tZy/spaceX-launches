import Head from 'next/head'
import request from '../api'
import {useEffect, useMemo, useState} from 'react'
import HomePageStyle from '../styles/HomePageStyle';
import Loader from '../components/loader';

export default function Home({initialState, initialTotalLaunches}) {
    const [currentOffset, setCurrentOffset] = useState(6);
    const [fetching, setFetching] = useState(false);
    const [launches, setLaunches] = useState(initialState);
    const [totalLaunches, setTotalLaunches] = useState(initialTotalLaunches);

    useEffect(() => {
        if (fetching) {
            request(currentOffset)
                .then(async (res) => {
                    const data = await res.json()
                    setLaunches([...launches, ...data])
                    setTotalLaunches(res.headers.get('spacex-api-count'))
                    setCurrentOffset(prevState => prevState + 6)
                })
                .catch((err) => console.log(err))
                .finally(() => setFetching(false))
        }
    }, [fetching])

    useEffect(() => {
        document.addEventListener('scroll', scrollHandler);
        return () => document.removeEventListener('scroll', scrollHandler);
    }, [launches]);

    const scrollHandler = (e) => {
        if ((e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 100) &&
            launches.length < totalLaunches) {
            setFetching(true)
        }
    }

    const cards = useMemo(() => {
        return launches.map((launch, idx) => {
            const objectDate = new Date(launch.launch_date_utc);
            const date = objectDate.toLocaleDateString('ru-RU', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric'
                }
            )
            return (
                <div key={launch.flight_number + idx} className="card">
                    <img className="card__img"
                         src={launch.links.mission_patch_small ? launch.links.mission_patch_small : '/img/404.png'}
                         alt="Изображение карточки"/>
                    <div className="info">
                        <p className="info__date">{date}</p>
                        <h2 className="info__title">{launch.rocket.rocket_name}</h2>
                        <p className="info__status">Статус: {launch.launch_success ?
                            <span className="info__status-badge success">Успешно</span>
                            :
                            <span className="info__status-badge danger">Неуспешно</span>
                        }</p>
                        <p className="info__text">{launch.details}</p>
                    </div>
                </div>
            )
        })
    }, [launches])

    return (
        <>
            <Head>
                <title>SpaceX app</title>
            </Head>

            <main>
                <HomePageStyle>
                    <div className="wrapper">
                        <h1 className="title">Список полетов SpaceX</h1>
                        <div className="container">
                            {cards}
                        </div>
                        {fetching && <Loader />}
                        {launches.length === Number(totalLaunches) &&
                        <h3 className="page-end">Данные по запускам SpaceX закончились &#128533;</h3>}
                    </div>
                </HomePageStyle>
            </main>
        </>
    )
}


Home.getInitialProps = async () => {
    return await request(0)
        .then(async (res) => {
            return {
                initialState: await res.json(),
                initialTotalLaunches: res.headers.get('spacex-api-count')
            }
        })
        .catch((err) => {
            console.log(err)
            return {
                initialState: [],
                initialTotalLaunches: null,
            }
        })
}
