import loadable from "@loadable/component";

const component = "Home";
const Home = loadable(() => import(/* webpackChunkName: "Home" */ "./Home"));

const indexComponent = Home;
indexComponent.componentName = component;

export default indexComponent;
