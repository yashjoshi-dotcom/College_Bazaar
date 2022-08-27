function FooterHeading(props) {
	return <h2 className="text-2xl font-semibold text-textcolor1">{props.heading}</h2>;
}

FooterHeading.defaultProps = {
	heading: "Some Heading",
};

export default FooterHeading;
