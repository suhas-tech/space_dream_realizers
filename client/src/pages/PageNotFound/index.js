import loadable from "@loadable/component";

const component = "PageNotFound";
const PageNotFound = loadable(() =>
    import(/* webpackChunkName: "PageNotFound" */ "./PageNotFound")
);

const indexComponent = PageNotFound;
indexComponent.componentName = component;

export default indexComponent;
