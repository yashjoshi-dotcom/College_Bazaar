import { jsxs as _jsxs } from "react/jsx-runtime";
const AvatarGroupCounter = ({ total, href }) => {
    return (_jsxs("a", { className: "relative flex h-10 w-10 items-center justify-center rounded-full bg-gray-700 text-xs font-medium text-white ring-2 ring-gray-300 hover:bg-gray-600  dark:ring-gray-500 ", href: href, children: ["+", total] }));
};
AvatarGroupCounter.displayName = 'Avatar.GroupCounter';
export default AvatarGroupCounter;
