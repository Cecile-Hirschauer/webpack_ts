import "./styles.scss";
import IMAGE from "./images/ampoule.png";
import LOGO from './images/Waveski.svg';
import { ClickCounter } from "./ClickCounter";

export const App = () => {
  return (
    <>
      <h1>React TypeScript Webpack Starter Template</h1>
      <h2>{ process.env.NODE_ENV } {process.env.name }</h2>
        <img src={IMAGE} alt=" image png ampoule" />
        <img src={LOGO} alt=" logo svg waveski" />
        <ClickCounter />
    </>
  );
};
