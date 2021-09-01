import { FETCH_WEATHER } from "./types";

export const fetchWeather = () => async (dispatch) => {
    const ids = {
        Houston: 4699066,
        NewYork: 5128581,
        BuenosAires: 3433955
    }

    const fetches = await Promise.all(
        Object.values(ids).map((e) =>
        fetch(
            ``
        ).then((e) => e.json())
        )
    )

    dispatch({
        type: FETCH_WEATHER,
        payload: {
            Houston: fetches[0],
            NewYork: fetches[1],
            BuenosAires: fetches[2],
        }
    })
}