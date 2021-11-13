import React, {useState} from 'react';
import {useQuery} from 'react-query';
import Planet from "./Planet";

const fetchPlanets = async (page) => {
    const {queryKey} = page;
    const pageNumber = queryKey[1]
    const response = await fetch(`https://swapi.dev/api/planets/?page=${pageNumber}`);
    return response.json();
}

const Planets = () => {
    const [ page, setPage ] = useState(1);

    const {
        isLoading,
        isError,
        data,
        isSuccess,
    } = useQuery(['planets', page], fetchPlanets, {keepPreviousData: true});

    return (
        <div>
            <h2>Planets</h2>
            {isError && <div>Error Fetching Data</div>}
            {isLoading && <div>Loading...</div>}
            {
                isSuccess &&
                <>
                    <button
                        onClick={() => setPage(old => Math.max(old - 1, 0))}
                        disabled={page === 1}>
                        previous page
                    </button>

                    <span>{page}</span>

                    <button
                        onClick={() => setPage(old => Math.max(old + 1))}
                        disabled={!data.next}>
                        next page
                    </button>

                    {
                        data.results.map(planet => (
                            <Planet key={planet.name} planet={planet} />
                        ))
                    }
                </>
            }
        </div>
    );
}

export default Planets;
