import React, {useEffect, useState} from "react";
import Particles, {initParticlesEngine} from "@tsparticles/react";
import {loadFull} from "tsparticles";
import logo from "./logo.svg";
import "./App.css";
import particlesOptions from "./particles.json";
import "./index.css";

function App() {
    const [init, setInit] = useState(false);

    useEffect(() => {
        if (init) {
            return;
        }

        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    const particleInit = async (engine) => {
        await loadFull(engine);
      };

    const particleConfig = {
        fullScreen: {
          enable: true
        },
        detectRetina: true,
        background: {
          color: "#000"
        },
        fpsLimit: 60,
        emitters: {
          life: {
            count: 0,
            duration: 0.1,
            delay: 0.1
          },
          rate: {
            delay: 0.01,
            quantity: 1
          },
          size: {
            width: 100,
            height: 0
          },
          position: {
            y: 100,
            x: 50
          }
        },
        particles: {
          number: {
            value: 0
          },
          life: {
            count: 1
          },
          shape: {
            type: "line"
          },
          size: {
            value: { min: 1, max: 100 },
            animation: {
              enable: true,
              sync: true,
              speed: 150,
              destroy: "min"
            }
          },
          stroke: {
            color: {
              value: "#303030"
            },
            width: 3
          },
          rotate: {
            path: true
          },
          move: {
            enable: true,
            speed: { min: 10, max: 20 },
            outModes: {
              default: "destroy",
              top: "none"
            },
            trail: {
              fillColor: "#000",
              enable: true,
              length: 10
            }
          },
          destroy: {
            mode: "split",
            split: {
              count: 1,
              factor: { value: 1 / 3 },
              rate: {
                value: 100
              },
              particles: {
                color: {
                  value: ["#FF0000", "#FFD700", "#00FF00", "#00BFFF", "#FF1493"]
                },
                stroke: {
                  width: 0
                },
                number: {
                  value: 0
                },
                collisions: {
                  enable: false
                },
                opacity: {
                  value: 1,
                  animation: {
                    enable: true,
                    speed: 0.6,
                    minimumValue: 0.1,
                    sync: false,
                    startValue: "max",
                    destroy: "min"
                  }
                },
                shape: {
                  type: "circle"
                },
                size: {
                  value: { min: 2, max: 3 },
                  animation: {
                    enable: false
                  }
                },
                life: {
                  count: 1,
                  duration: {
                    value: {
                      min: 1,
                      max: 2
                    }
                  }
                },
                move: {
                  enable: true,
                  gravity: {
                    enable: false
                  },
                  speed: 2,
                  direction: "none",
                  random: true,
                  straight: false,
                  outMode: "destroy"
                }
              }
            }
          }
        }
      };

    return (
        <div className="App">
            {<Particles options={particleConfig} init={particleInit} />}
             {/*<header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <p>
                    Edit <code>src/particles.json</code> to customize Particles, then save
                    to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <a
                    className="App-link"
                    href="https://particles.js.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    See Particles samples
                </a>
            </header>*/}
        </div>
    );
}

export default App;