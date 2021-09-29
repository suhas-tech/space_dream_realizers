import loadable from "@loadable/component";

const component = "Login";
const Login = loadable(() =>
    import(/* webpackChunkName: "Login" */ "./Login")
);

const indexComponent = Login;
indexComponent.componentName = component;

export default indexComponent;
