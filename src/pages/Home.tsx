import React, { Component } from 'react'

import Card from '../components/home/Card'
import { connect } from 'react-redux'
import { fetchWeather } from '../app/actions/ajaxActions'

import d_bg1 from '../assets/d_bg1.jpeg'
import d_bg2 from '../assets/d_bg2.jpeg'
import d_bg3 from '../assets/d_bg3.jpeg'
import d_bg4 from '../assets/d_bg4.jpeg'
import p_bg1 from '../assets/p_bg1.jpeg'
import p_bg2 from '../assets/p_bg2.jpeg'
import p_bg3 from '../assets/p_bg3.jpeg'
import p_bg4 from '../assets/p_bg4.jpeg'


interface FormProps {
    fetchWeather: Function;
    weather: Record<string, any>;
}

interface FormState {
    random: number
    imageSource: string
}

class Home extends Component<FormProps, FormState> {
    backgrounds: {[key: string]: any}

    constructor(props: any) {
        super(props);

        this.backgrounds = {
            d_bg1,
            d_bg2,
            d_bg3,
            d_bg4,
            p_bg1,
            p_bg2,
            p_bg3,
            p_bg4,
        }

        const randomInt = (min: number, max: number) =>
            Math.floor(Math.random() * (max - min)) + min;

        this.state = {
            random: randomInt(1, 5),
            imageSource: "",
        }
    }

    setBg = (type: "default" | "click"): void => {
        if (type === "default") {
            let imageKey = `${window.innerWidth < 768 ? "p" : "d"}_bg${this.state.random.toString()}` as string;
            this.setState({
                imageSource: this.backgrounds[imageKey] || 'p_bg2',
            })
        } else if (type === "click") {
            if (this.state.random === 4) {
                return this.setState(
                    {
                        random: 1,
                    },
                    () => this.setBg("default")
                )
            }

            return this.setState(
                {
                    random: this.state.random + 1,
                },
                () => this.setBg("default")
            )
        }
    }

    componentDidMount() {
        this.props.fetchWeather()
        this.setBg("default")
        window.addEventListener("resize", () => this.setBg("default"))
    }

    render() {
        return (
            <div
                className="h-screen w-screen bg-cover bg-center"
                style={{
                    backgroundImage: `url(${this.state.imageSource})`,
                }}
                onClick={() => this.setBg("click")}
            >
                <div
                    className="flex flex-col justify-center items-center w-screen"
                    style={{ height: "95%" }}
                >
                    {Object.keys(this.props.weather).map((e, i) => {
                        return <Card city={e} key={i} weather={this.props.weather[e]} />
                    })}
                </div>
            </div>
        )
    }
}

const mstp = (state: {weatherReducer: { weather: {} } }) => ({
    weather: state.weatherReducer.weather,
})

export default connect(mstp, { fetchWeather }) (Home);