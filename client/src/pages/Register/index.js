import loadable from "@loadable/component";

const component = "Register";
const Register = loadable(() =>
    import(/* webpackChunkName: "Register" */ "./Register")
);

const indexComponent = Register;
indexComponent.componentName = component;

export default indexComponent;
