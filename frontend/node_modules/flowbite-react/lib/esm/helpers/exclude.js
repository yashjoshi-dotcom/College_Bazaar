export const excludeClassName = (props) => {
    return exclude({
        key: 'className',
        source: props,
    });
};
const exclude = ({ key, source }) => {
    delete source[key];
    return source;
};
export default exclude;
