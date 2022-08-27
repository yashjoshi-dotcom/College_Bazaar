import { Link } from "react-router-dom";

function FooterItem(props) {
  return (
    <li>
      <Link
        className="text-textcolor1 hover:text-highlight text-gray-400 hover:text-white"
        to={props.link}
      >
        {props.name}
      </Link>
    </li>
  );
}

FooterItem.defaultProps = {
  name: "Something",
  link: "/Home",
};

export default FooterItem;
